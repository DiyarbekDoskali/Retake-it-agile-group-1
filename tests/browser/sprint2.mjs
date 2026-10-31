import {createRequire} from 'node:module';
import {mkdir, readFile, writeFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {fileURLToPath} from 'node:url';
import assert from 'node:assert/strict';
const require=createRequire(import.meta.url);
const {chromium}=require('playwright');
const base=process.env.PREVIEW_URL || 'http://127.0.0.1:5175';
const out=new URL('../../docs/sprint-2-evidence/',import.meta.url);
await mkdir(out,{recursive:true});
const browser=await chromium.launch({channel:process.env.BROWSER_CHANNEL || undefined,headless:true});
const context=await browser.newContext({viewport:{width:1440,height:1000}});
const page=await context.newPage();
const results=[],errors=[];
page.on('pageerror',e=>errors.push(e.message));
const cartKey='campuscart.clothing.cart.v1',ordersKey='wearlane.orders.v1';
const password='Wearlane-test-only-2026!';
const email=`sprint2-${Date.now()}@example.test`;
async function check(id,name,fn){try{await fn();results.push({id,name,result:'Pass'});console.log('PASS',id,name);}catch(e){results.push({id,name,result:'Fail',actual:e.message});console.error('FAIL',id,e.message);throw e;}}
async function visible(locator){await locator.waitFor({state:'visible',timeout:10000});}
async function screenshot(name){await page.locator('.toast.visible').waitFor({state:'hidden'});await page.screenshot({path:fileURLToPath(new URL(name,out)),fullPage:true});}
async function addItem(){
  await page.goto(base+'/#/products/everyday-tee');
  await page.getByRole('radio',{name:'M',exact:true}).check();
  await page.getByRole('button',{name:'Add to cart'}).click();
  await page.getByRole('link',{name:/^Cart, \d+ items?$/}).click();
}
async function delivery(){await page.getByLabel('Recipient name').fill('Demo Student');await page.getByLabel('Street address').fill('Example Street 12');await page.getByLabel('City',{exact:true}).fill('Berlin');await page.getByLabel('Postal code').fill('10115');await page.getByRole('checkbox',{name:/fictional details/}).check();await page.getByRole('button',{name:'Review demo order'}).click();await visible(page.getByRole('heading',{name:'Review your demo order'}));}
let confirmation;
try {
 await check('B01','Guest checkout requires sign-in',async()=>{await page.goto(base+'/#/checkout');await visible(page.getByRole('heading',{name:'Sign in to continue'}));assert.equal(await page.locator('button').filter({hasText:'Place demo order'}).count(),0);});
 await check('B02','Cart, registration and return to checkout preserve selected size',async()=>{
  await addItem();await page.getByRole('link',{name:'Continue to checkout'}).click();await page.getByRole('link',{name:'Sign in for checkout'}).click();await page.getByRole('link',{name:'Create an account'}).click();
  await page.getByLabel('Display name').fill('Demo Student');await page.getByLabel('Demo email').fill(email);await page.getByLabel('Test password',{exact:true}).fill(password);await page.getByLabel('Confirm test password').fill(password);await page.getByRole('button',{name:'Create demo account'}).click();
  await visible(page.getByRole('heading',{name:'Checkout',exact:true}));assert.match(page.url(),/#\/checkout$/);await visible(page.getByText('Size M · Qty 1'));await screenshot('desktop-delivery.png');
 });
 await check('B03','Blank delivery validation and accessible error focus',async()=>{await page.getByRole('button',{name:'Review demo order'}).click();await visible(page.getByText('Please correct the highlighted delivery fields.'));assert.equal(await page.locator('[aria-invalid=true]').count()>=4,true);assert.equal(await page.locator('[role=alert]').evaluate(el=>el===document.activeElement),true);await screenshot('delivery-errors.png');});
 await check('B04','Review shows correct details and integer-cent totals',async()=>{await delivery();await visible(page.getByText('Example Street 12',{exact:false}));await visible(page.getByRole('button',{name:'Place demo order · €20.90'}));await screenshot('desktop-review.png');});
 await check('B05','Simulated decline preserves cart and creates no order',async()=>{await page.getByRole('radio',{name:'Demo payment is declined'}).check();await page.getByRole('button',{name:/Place demo order/}).click();await visible(page.getByText(/Demo payment declined/));assert.equal(await page.evaluate(k=>JSON.parse(localStorage.getItem(k)).length,cartKey),1);assert.equal(await page.evaluate(k=>localStorage.getItem(k),ordersKey),null);await screenshot('payment-declined.png');});
 await check('B06','Success and repeat click save one order and clear cart',async()=>{await page.getByRole('radio',{name:'Demo payment succeeds'}).check();await page.getByRole('button',{name:/Place demo order/}).evaluate(el=>{el.click();el.click();});await visible(page.getByRole('heading',{name:'Your next fit is on the list.'}));confirmation=page.url();assert.equal(await page.evaluate(k=>JSON.parse(localStorage.getItem(k)).length,ordersKey),1);assert.deepEqual(await page.evaluate(k=>JSON.parse(localStorage.getItem(k)),cartKey),[]);await screenshot('confirmation.png');});
 await check('B07','Confirmation survives refresh without another order',async()=>{await page.reload();await visible(page.getByRole('heading',{name:'Your next fit is on the list.'}));assert.equal(await page.evaluate(k=>JSON.parse(localStorage.getItem(k)).length,ordersKey),1);});
 await check('B08','Empty cart cannot be ordered',async()=>{await page.goto(base+'/#/checkout');await visible(page.getByRole('heading',{name:'Your cart is empty'}));});
 await check('B09','Signed-out confirmation is blocked and login returns to it',async()=>{
  await page.getByRole('button',{name:'Sign out',exact:true}).click();await page.goto(confirmation);await visible(page.getByRole('heading',{name:'Sign in to continue'}));await page.getByRole('link',{name:'Sign in for checkout'}).click();await page.getByLabel('Demo email').fill(email);await page.getByLabel('Test password',{exact:true}).fill(password);await page.getByRole('button',{name:/Sign in$/}).click();await visible(page.getByRole('heading',{name:'Your next fit is on the list.'}));
 });
 await check('B10','Mobile menu Escape closes and returns focus',async()=>{
  await page.setViewportSize({width:360,height:800});await page.goto(base+'/#/');const toggle=page.getByRole('button',{name:'Toggle navigation'});await toggle.click();assert.equal(await toggle.getAttribute('aria-expanded'),'true');await page.keyboard.press('Escape');assert.equal(await toggle.getAttribute('aria-expanded'),'false');assert.equal(await toggle.evaluate(el=>el===document.activeElement),true);await screenshot('mobile-home-menu-retest.png');
 });
 await check('B11','Mobile checkout and review fit without horizontal overflow',async()=>{await addItem();await page.getByRole('link',{name:'Continue to checkout'}).click();await delivery();assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);await screenshot('mobile-checkout.png');});
 await check('B12','Cross-tab cart changes block stale review',async()=>{
  const other=await context.newPage();await other.goto(base+'/#/cart');await other.getByRole('button',{name:'Increase Everyday heavyweight tee M quantity'}).click();await visible(page.getByText(/Your cart changed. Go back/));assert.equal(await page.getByRole('button',{name:/Place demo order/}).isDisabled(),true);await other.close();
 });
 await check('B13','Cross-tab sign-out blocks checkout',async()=>{const other=await context.newPage();await other.goto(base+'/#/');await other.getByRole('button',{name:'Sign out',exact:true}).click();await visible(page.getByRole('heading',{name:'Sign in to continue'}));await other.close();});
 await check('B14','Different customer cannot view an earlier confirmation',async()=>{
  await page.goto(base+'/#/register');await page.getByLabel('Display name').fill('Other Demo');await page.getByLabel('Demo email').fill('other-'+email);await page.getByLabel('Test password',{exact:true}).fill(password);await page.getByLabel('Confirm test password').fill(password);await page.getByRole('button',{name:'Create demo account'}).click();await visible(page.getByRole('heading',{name:'Your everyday rotation.'}));await page.goto(confirmation);await visible(page.getByRole('heading',{name:'Order not available'}));
 });
 await check('B15','Catalogue filtering and sold-out product remain correct',async()=>{await page.goto(base+'/#/products?category=Hoodies');await visible(page.getByText('6 styles',{exact:true}));await page.getByRole('link',{name:'Studio cropped hoodie',exact:true}).click();assert.equal(await page.getByRole('button',{name:/^Sold out/}).isDisabled(),true);});
 await check('B17','Browser order-save failure preserves the cart and supports retry',async()=>{
  await page.goto(base+'/#/checkout');await delivery();
  await page.evaluate(key=>{window.originalStorageSet=Storage.prototype.setItem;Storage.prototype.setItem=function(k,v){if(k===key)throw new DOMException('Test quota failure','QuotaExceededError');return window.originalStorageSet.call(this,k,v);};},ordersKey);
  await page.getByRole('button',{name:/Place demo order/}).click();await visible(page.getByText(/The order could not be saved/));assert.equal(await page.evaluate(k=>JSON.parse(localStorage.getItem(k))[0].quantity,cartKey),2);await screenshot('storage-failure.png');
  await page.evaluate(()=>{Storage.prototype.setItem=window.originalStorageSet;delete window.originalStorageSet;});await page.getByRole('button',{name:/Place demo order/}).click();await visible(page.getByRole('heading',{name:'Your next fit is on the list.'}));assert.equal(await page.evaluate(k=>JSON.parse(localStorage.getItem(k)).length,ordersKey),2);await screenshot('mobile-confirmation.png');
 });
 await check('B18','Clearing browser data in another tab clears the visible cart and session',async()=>{
  await addItem();const other=await context.newPage();await other.goto(base+'/#/');await other.evaluate(()=>localStorage.clear());await visible(page.getByRole('heading',{name:'A little room for essentials'}));await visible(page.getByRole('link',{name:'Cart, 0 items'}));await page.goto(base+'/#/checkout');await visible(page.getByRole('heading',{name:'Sign in to continue'}));await other.close();
 });
 await check('B16','No uncaught browser application errors',async()=>assert.deepEqual(errors,[]));
} catch(e) {await screenshot('failure.png').catch(()=>{});process.exitCode=1;}
finally {
 const files=['src/main.jsx','src/Checkout.jsx','src/checkout.js','src/checkout.css','src/domain.js','src/products.js','src/style.css','src/navigation.js','src/ClothingArt.jsx','src/ProductDetail.jsx','package.json','pnpm-lock.yaml','tests/browser/sprint2.mjs','tests/checkout.test.js'];
 const sourceHashes=Object.fromEntries(await Promise.all(files.map(async file=>[file,createHash('sha256').update(await readFile(new URL('../../'+file,import.meta.url))).digest('hex')])));
 await writeFile(new URL('browser-results.json',out),JSON.stringify({runAt:new Date().toISOString(),executor:'Codex automated browser checks',browser:await browser.version(),base,viewports:['1440x1000','360x800'],sourceHashes,results,errors},null,2));
 await browser.close();
}
