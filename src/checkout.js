import {findProduct} from './products.js';
import {cartTotals} from './domain.js';

export const checkoutKeys = {
  cart: 'campuscart.clothing.cart.v1',
  accounts: 'campuscart.accounts.v1',
  session: 'wearlane.session.v2',
  orders: 'wearlane.orders.v1',
  intent: 'wearlane.checkout.intent.v1',
};
export const countries = ['Germany', 'France', 'Netherlands', 'Spain', 'United Kingdom', 'Other'];

export class CheckoutError extends Error {
  constructor(message, code = 'CHECKOUT') { super(message); this.code = code; }
}

function read(storage, key, fallback) {
  try {
    const value = storage.getItem(key);
    return value === null ? fallback : JSON.parse(value);
  } catch {
    throw new CheckoutError('Browser data cannot be read. Please check storage access and try again.', 'STORAGE');
  }
}

export function currentCustomer(storage) {
  const id = read(storage, checkoutKeys.session, null);
  const list = read(storage, checkoutKeys.accounts, []);
  const account = Array.isArray(list) && list.find(a => a && a.id === id &&
    typeof a.name === 'string' && typeof a.email === 'string' &&
    typeof a.hash === 'string' && typeof a.salt === 'string');
  return account ? {id: account.id, name: account.name, email: account.email} : null;
}

export function safeReturnTo(value) {
  if (['/checkout', '/cart', '/products', '/'].includes(value)) return value;
  if (typeof value === 'string' && /^\/confirmation\/WL-[A-F0-9-]{36}$/.test(value)) return value;
  return '/products';
}

export function validateDelivery(data = {}) {
  const errors = {};
  const checks = {name: [2, 60, 'Enter a name between 2 and 60 characters.'],
    address: [5, 150, 'Enter a street address between 5 and 150 characters.'],
    city: [2, 60, 'Enter a city between 2 and 60 characters.']};
  for (const [key, [min, max, message]] of Object.entries(checks)) {
    const value = typeof data[key] === 'string' ? data[key].trim() : '';
    if (value.length < min || value.length > max || /[\x00-\x1f<>]/.test(value)) errors[key] = message;
  }
  if (!countries.includes(data.country)) errors.country = 'Choose a delivery country.';
  const postal = typeof data.postalCode === 'string' ? data.postalCode.trim() : '';
  if (data.country === 'Germany' ? !/^\d{5}$/.test(postal) : !/^[A-Za-z0-9][A-Za-z0-9 -]{1,10}[A-Za-z0-9]$/.test(postal)) {
    errors.postalCode = data.country === 'Germany' ? 'Use a five-digit German postal code.' : 'Use a postal code of 3–12 letters, numbers, spaces or hyphens.';
  }
  if (data.consent !== true) errors.consent = 'Confirm that you are using fictional details for this demo.';
  return errors;
}

// Strict checkout validation: never silently drop, clamp or reprice a reviewed order.
export function checkoutSnapshot(cart) {
  if (!Array.isArray(cart) || cart.length === 0) throw new CheckoutError('Your cart is empty. Add clothing before checkout.', 'CART');
  const seen = new Set();
  const items = cart.map(line => {
    const p = findProduct(line?.id);
    const key = `${line?.id}:${line?.size}`;
    if (!p || !p.stock || !p.sizes.includes(line.size) || !Number.isInteger(line.quantity) ||
      line.quantity < 1 || line.quantity > p.stock || seen.has(key)) {
      throw new CheckoutError('Your cart contains an unavailable item, invalid size or quantity. Return to the cart and review it.', 'CART');
    }
    seen.add(key);
    return {id: p.id, name: p.name, size: line.size, quantity: line.quantity, unitPrice: p.price, lineTotal: p.price * line.quantity};
  });
  return {items, ...cartTotals(cart)};
}

export function cartFingerprint(cart) {
  return JSON.stringify(checkoutSnapshot(cart).items.map(({id,size,quantity,unitPrice}) => ({id,size,quantity,unitPrice})).sort((a,b) => `${a.id}:${a.size}`.localeCompare(`${b.id}:${b.size}`)));
}

function validOrder(order) {
  return order && typeof order.reference === 'string' && /^WL-[A-F0-9-]{36}$/.test(order.reference) &&
    typeof order.intentId === 'string' && typeof order.userId === 'string' && typeof order.createdAt === 'string' &&
    Number.isFinite(Date.parse(order.createdAt)) && typeof order.fingerprint === 'string' &&
    order.paymentStatus === 'simulated-paid' && Array.isArray(order.items) && order.items.length > 0 &&
    order.items.every(i => i && typeof i.name === 'string' && typeof i.id === 'string' && typeof i.size === 'string' &&
      Number.isInteger(i.quantity) && i.quantity > 0 && Number.isInteger(i.unitPrice) && i.unitPrice >= 0 && i.lineTotal === i.unitPrice * i.quantity) &&
    order.subtotal === order.items.reduce((sum, i) => sum + i.lineTotal, 0) &&
    Number.isInteger(order.shipping) && order.shipping >= 0 && order.total === order.subtotal + order.shipping &&
    order.delivery && ['name','address','city','postalCode','country'].every(k => typeof order.delivery[k] === 'string');
}

function readOrders(storage) {
  const orders = read(storage, checkoutKeys.orders, []);
  if (!Array.isArray(orders) || !orders.every(validOrder)) {
    throw new CheckoutError('Saved order data is invalid. No new order was saved and your cart is unchanged.', 'STORAGE');
  }
  return orders;
}

export function getCustomerOrder(storage, reference) {
  const customer = currentCustomer(storage);
  if (!customer) return null;
  return readOrders(storage).find(o => o.reference === reference && o.userId === customer.id) || null;
}

export function beginCheckout(storage, userId, cart, uuid = () => crypto.randomUUID()) {
  const customer = currentCustomer(storage);
  if (!customer || customer.id !== userId) throw new CheckoutError('Please sign in again before checkout.', 'AUTH');
  const fingerprint = cartFingerprint(cart);
  if (fingerprint !== cartFingerprint(read(storage, checkoutKeys.cart, []))) {
    throw new CheckoutError('Your cart changed in another tab. Return to the cart and review the latest items.', 'CART_CHANGED');
  }
  const existing = read(storage, checkoutKeys.intent, null);
  if (existing && existing.userId === userId && existing.fingerprint === fingerprint && typeof existing.id === 'string') return existing;
  const intent = {id: uuid(), userId, fingerprint};
  try { storage.setItem(checkoutKeys.intent, JSON.stringify(intent)); }
  catch { throw new CheckoutError('Browser storage is unavailable or full. Your cart has not been changed.', 'STORAGE'); }
  return intent;
}

function clearPurchasedCart(storage, order) {
  try {
    const current = read(storage, checkoutKeys.cart, []);
    if (Array.isArray(current) && !current.length) return '';
    // A retry must never erase items added after the saved purchase.
    if (cartFingerprint(current) !== order.fingerprint) return 'The order is saved. Your newer cart items have been kept.';
    storage.setItem(checkoutKeys.cart, '[]');
    const intent = read(storage, checkoutKeys.intent, null);
    if (intent?.id === order.intentId) storage.removeItem(checkoutKeys.intent);
    return '';
  } catch { return 'Your order is saved, but the cart could not be cleared. Do not place it again; use this order reference.'; }
}

// Called inside the app's cross-tab Web Lock where supported. All storage writes are synchronous.
export function placeDemoOrder({storage, userId, cart, delivery, payment, intent, uuid = () => crypto.randomUUID(), now = () => new Date()}) {
  const customer = currentCustomer(storage);
  if (!customer || customer.id !== userId) throw new CheckoutError('Your session ended. Sign in again to continue.', 'AUTH');
  if (!intent || intent.userId !== customer.id || typeof intent.id !== 'string') throw new CheckoutError('Please review the order again.', 'INTENT');
  const orders = readOrders(storage);
  const existing = orders.find(o => o.intentId === intent.id && o.userId === customer.id);
  if (existing) return {order: existing, warning: clearPurchasedCart(storage, existing), repeated: true};
  if (Object.keys(validateDelivery(delivery)).length) throw new CheckoutError('Check the delivery details before placing the order.', 'DELIVERY');
  const snapshot = checkoutSnapshot(cart);
  const fingerprint = cartFingerprint(cart);
  if (fingerprint !== intent.fingerprint || fingerprint !== cartFingerprint(read(storage, checkoutKeys.cart, []))) {
    throw new CheckoutError('Your cart changed. Return to the cart and review the latest items before ordering.', 'CART_CHANGED');
  }
  if (payment === 'decline') throw new CheckoutError('Demo payment declined. No payment was taken. Your cart is saved; choose the success option to retry.', 'PAYMENT');
  if (payment !== 'success') throw new CheckoutError('Choose a demo payment result.', 'PAYMENT');
  const reference = `WL-${uuid().toUpperCase()}`;
  if (orders.some(o => o.reference === reference)) throw new CheckoutError('Please retry to create a new order reference.', 'REFERENCE');
  const order = {reference, intentId: intent.id, userId: customer.id, createdAt: now().toISOString(),
    fingerprint, ...snapshot, delivery: Object.fromEntries(['name','address','city','postalCode','country'].map(k => [k, delivery[k].trim()])),
    paymentStatus: 'simulated-paid'};
  if (!validOrder(order)) throw new CheckoutError('The order could not be prepared. Your cart is unchanged.', 'ORDER');
  try { storage.setItem(checkoutKeys.orders, JSON.stringify([...orders, order])); }
  catch { throw new CheckoutError('The order could not be saved because browser storage is unavailable or full. Your cart is unchanged; no payment was taken.', 'STORAGE'); }
  return {order, warning: clearPurchasedCart(storage, order), repeated: false};
}
