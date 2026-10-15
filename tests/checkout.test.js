import test from 'node:test';
import assert from 'node:assert/strict';
import {cartTotals} from '../src/domain.js';
import {checkoutKeys as k, currentCustomer, safeReturnTo, validateDelivery, checkoutSnapshot, cartFingerprint, beginCheckout, placeDemoOrder, getCustomerOrder} from '../src/checkout.js';

const delivery = {name:'Demo Student',address:'Example Street 12',city:'Berlin',postalCode:'10115',country:'Germany',consent:true};
const line = (quantity=1,size='M',id='everyday-tee') => ({id,size,quantity});
const referenceId = '12345678-1234-1234-1234-123456789abc';
const account = {id:'customer-a',name:'Demo Student',email:'demo@example.test',hash:'demo-hash',salt:'demo-salt'};
class MemoryStorage {
  values = new Map(); failKey = null;
  getItem(key){return this.values.get(key) ?? null;}
  setItem(key,value){if(this.failKey===key)throw Error('Quota exceeded');this.values.set(key,String(value));}
  removeItem(key){this.values.delete(key);}
}
function setup(cart=[line()]) {
  const storage = new MemoryStorage();
  storage.setItem(k.accounts,JSON.stringify([account])); storage.setItem(k.session,JSON.stringify(account.id)); storage.setItem(k.cart,JSON.stringify(cart));
  const intent=beginCheckout(storage,account.id,cart,()=>referenceId);
  const args={storage,userId:account.id,cart,delivery,payment:'success',intent,uuid:()=>referenceId,now:()=>new Date('2026-10-15T12:00:00Z')};
  return {storage,intent,args};
}

test('safe routes retain checkout and confirmation',()=>{
  for(const route of ['/','/cart','/products','/checkout',`/confirmation/WL-${referenceId.toUpperCase()}`])assert.equal(safeReturnTo(route),route);
});
test('external and malformed return destinations are rejected',()=>{
  for(const route of ['https://example.com','//example.com','javascript:alert(1)','/checkout/../evil',null,'/confirmation/x'])assert.equal(safeReturnTo(route),'/products');
});
test('valid delivery details pass',()=>assert.deepEqual(validateDelivery(delivery),{}));
test('blank delivery fields have clear errors',()=>assert.deepEqual(Object.keys(validateDelivery({})).sort(),['address','city','consent','country','name','postalCode']));
test('German postal codes require exactly five digits',()=>{for(const postalCode of ['1234','123456','ABCDE'])assert.ok(validateDelivery({...delivery,postalCode}).postalCode);});
test('international postal code and supported country pass',()=>assert.deepEqual(validateDelivery({...delivery,country:'United Kingdom',postalCode:'SW1A 1AA'}),{}));
test('unknown countries and overly long delivery fields fail',()=>{
  const errors=validateDelivery({...delivery,country:'Unknown',name:'x'.repeat(61),address:'x'.repeat(151),city:'x'.repeat(61)});
  for(const name of ['country','name','address','city'])assert.ok(errors[name]);
});
test('consent must be explicitly true',()=>{for(const consent of [false,'true',1,undefined])assert.ok(validateDelivery({...delivery,consent}).consent);});
test('checkout reads trusted product prices, not stored price fields',()=>{const snapshot=checkoutSnapshot([{...line(),price:1,unitPrice:1}]);assert.equal(snapshot.total,2090);assert.equal(snapshot.items[0].unitPrice,1800);});
test('delivery is free at exactly 35 euros',()=>{const snapshot=checkoutSnapshot([line(1,'M','classic-tee'),line(1,'L','pocket-tee')]);assert.equal(snapshot.subtotal,3500);assert.equal(snapshot.shipping,0);});
test('delivery is free above the threshold',()=>assert.equal(checkoutSnapshot([line(2)]).shipping,0));
test('checkout and cart use the same shared totals for every tested quantity',()=>{
  for(let quantity=1;quantity<=10;quantity++) {
    const cart=[line(quantity)];const {items,...totals}=checkoutSnapshot(cart);
    assert.deepEqual(totals,cartTotals(cart));assert.equal(items[0].lineTotal,1800*quantity);
  }
});
test('different clothing sizes remain distinct in the order',()=>{const snapshot=checkoutSnapshot([line(1,'M'),line(2,'L')]);assert.equal(snapshot.items.length,2);assert.equal(snapshot.total,5400);});
for (const [name,cart] of Object.entries({empty:[],malformed:null,missing:[{}],unknown:[line(1,'M','unknown')],soldout:[line(1,'M','studio-hoodie')],size:[line(1,'XXL')],fraction:[line(1.5)],negative:[line(-1)],excess:[line(11)],duplicate:[line(),line()]})) {
  test(`strict checkout rejects ${name} cart`,()=>assert.throws(()=>checkoutSnapshot(cart)));
}
test('fingerprints ignore order of lines but detect quantity changes',()=>{
  assert.equal(cartFingerprint([line(1,'M'),line(1,'L')]),cartFingerprint([line(1,'L'),line(1,'M')]));
  assert.notEqual(cartFingerprint([line()]),cartFingerprint([line(2)]));
});
test('signed-out checkout is blocked',()=>{const {storage,args}=setup();storage.setItem(k.session,'null');assert.throws(()=>placeDemoOrder(args),{code:'AUTH'});assert.equal(storage.getItem(k.orders),null);});
test('unknown account sessions are rejected',()=>{const {storage,args}=setup();storage.setItem(k.session,'"missing"');assert.equal(currentCustomer(storage),null);assert.throws(()=>placeDemoOrder(args),{code:'AUTH'});});
test('switching accounts during checkout is blocked',()=>{const {storage,args}=setup();storage.setItem(k.accounts,JSON.stringify([account,{...account,id:'b'}]));storage.setItem(k.session,'"b"');assert.throws(()=>placeDemoOrder(args),{code:'AUTH'});});
test('successful order snapshots data, saves reference and clears cart',()=>{
  const {storage,args}=setup();const {order,warning}=placeDemoOrder(args);
  assert.equal(order.reference,`WL-${referenceId.toUpperCase()}`);assert.equal(order.total,2090);assert.equal(order.createdAt,'2026-10-15T12:00:00.000Z');
  assert.deepEqual(JSON.parse(storage.getItem(k.cart)),[]);assert.equal(warning,'');assert.equal(JSON.parse(storage.getItem(k.orders)).length,1);
  assert.equal(order.paymentStatus,'simulated-paid');assert.equal(order.delivery.city,'Berlin');assert.equal('hash' in order,false);
});
test('declined demo payment preserves cart and creates no order',()=>{
  const {storage,args}=setup();assert.throws(()=>placeDemoOrder({...args,payment:'decline'}),{code:'PAYMENT'});assert.equal(storage.getItem(k.orders),null);assert.deepEqual(JSON.parse(storage.getItem(k.cart)),[line()]);
});
test('unsupported payment method is rejected',()=>{const {args}=setup();assert.throws(()=>placeDemoOrder({...args,payment:'real-card'}),{code:'PAYMENT'});});
test('invalid delivery never writes an order',()=>{const {storage,args}=setup();assert.throws(()=>placeDemoOrder({...args,delivery:{}}),{code:'DELIVERY'});assert.equal(storage.getItem(k.orders),null);});
test('repeat submission with the same intent returns the existing order',()=>{
  const {storage,args}=setup();const a=placeDemoOrder(args);const b=placeDemoOrder(args);assert.equal(b.repeated,true);assert.equal(a.order.reference,b.order.reference);assert.equal(JSON.parse(storage.getItem(k.orders)).length,1);
});
test('confirmation reload reads the saved order without reordering',()=>{const {storage,args}=setup();const result=placeDemoOrder(args);assert.equal(getCustomerOrder(storage,result.order.reference).total,2090);assert.equal(JSON.parse(storage.getItem(k.orders)).length,1);});
test('another customer cannot read a saved order through the application',()=>{
  const {storage,args}=setup();const {order}=placeDemoOrder(args);storage.setItem(k.accounts,JSON.stringify([account,{...account,id:'b'}]));storage.setItem(k.session,'"b"');assert.equal(getCustomerOrder(storage,order.reference),null);
});
test('signed-out customer cannot read a confirmation',()=>{const {storage,args}=setup();const {order}=placeDemoOrder(args);storage.setItem(k.session,'null');assert.equal(getCustomerOrder(storage,order.reference),null);});
test('cart changes after review block ordering',()=>{const {storage,args}=setup();storage.setItem(k.cart,JSON.stringify([line(2)]));assert.throws(()=>placeDemoOrder(args),{code:'CART_CHANGED'});assert.equal(storage.getItem(k.orders),null);});
test('corrupt saved cart blocks ordering',()=>{const {storage,args}=setup();storage.setItem(k.cart,'broken');assert.throws(()=>placeDemoOrder(args),{code:'STORAGE'});});
test('corrupt order history is preserved rather than overwritten',()=>{const {storage,args}=setup();storage.setItem(k.orders,'{}');assert.throws(()=>placeDemoOrder(args),{code:'STORAGE'});assert.equal(storage.getItem(k.orders),'{}');});
test('failure to save order never clears the cart',()=>{const {storage,args}=setup();storage.failKey=k.orders;assert.throws(()=>placeDemoOrder(args),{code:'STORAGE'});assert.deepEqual(JSON.parse(storage.getItem(k.cart)),[line()]);});
test('intent storage failure leaves cart and order history unchanged',()=>{
  const {storage}=setup();storage.removeItem(k.intent);storage.failKey=k.intent;assert.throws(()=>beginCheckout(storage,account.id,[line()]),{code:'STORAGE'});assert.equal(storage.getItem(k.orders),null);
});
test('cart-clear failure returns confirmation and safe retry without duplicate',()=>{
  const {storage,args}=setup();storage.failKey=k.cart;const first=placeDemoOrder(args);assert.match(first.warning,/could not be cleared/);
  storage.failKey=null;const retried=placeDemoOrder(args);assert.equal(retried.repeated,true);assert.deepEqual(JSON.parse(storage.getItem(k.cart)),[]);assert.equal(JSON.parse(storage.getItem(k.orders)).length,1);
});
test('retry of an old order preserves newly added cart items',()=>{
  const {storage,args}=setup();placeDemoOrder(args);storage.setItem(k.cart,JSON.stringify([line(2)]));const result=placeDemoOrder(args);assert.match(result.warning,/newer cart/);assert.deepEqual(JSON.parse(storage.getItem(k.cart)),[line(2)]);
});
test('a new purchase of the same items receives a new intent',()=>{
  const {storage,args}=setup();placeDemoOrder(args);storage.setItem(k.cart,JSON.stringify([line()]));const next=beginCheckout(storage,account.id,[line()],()=> 'a-new-intent');assert.notEqual(next.id,args.intent.id);
});
test('reference collisions do not overwrite an existing order',()=>{
  const {storage,args}=setup();placeDemoOrder(args);storage.setItem(k.cart,JSON.stringify([line()]));const intent=beginCheckout(storage,account.id,[line()],()=> 'new-intent');assert.throws(()=>placeDemoOrder({...args,intent}),{code:'REFERENCE'});assert.equal(JSON.parse(storage.getItem(k.orders)).length,1);
});
