import React, {useEffect, useRef, useState} from 'react';
import {money} from './domain.js';
import Art from './ClothingArt.jsx';
import {findProduct} from './products.js';
import {checkoutSnapshot, countries, validateDelivery} from './checkout.js';
import './checkout.css';

export function SignInGate({next = '/checkout'}) {
  return <section className="empty"><span className="eyebrow">YOUR NEXT STEP</span><h1>Sign in to continue</h1>
    <p>Your cart is saved. Sign in or create a fictional demo account before placing an order.</p>
    <a className="btn" href={`#/login?next=${encodeURIComponent(next)}`}>Sign in for checkout</a>
    <a className="text-link" href="#/cart">Back to your cart</a></section>;
}

function OrderSummary({snapshot}) {
  return <aside className="summary order-summary"><h2>Your order</h2>
    <ul className="checkout-items">{snapshot.items.map(item => <li key={`${item.id}:${item.size}`}>
      <Art product={findProduct(item.id)}/><div><strong>{item.name}</strong><span>Size {item.size} · Qty {item.quantity}</span></div><b>{money(item.lineTotal)}</b>
    </li>)}</ul>
    <dl><div><dt>Subtotal ({snapshot.count} items)</dt><dd>{money(snapshot.subtotal)}</dd></div>
      <div><dt>Demo delivery</dt><dd>{snapshot.shipping ? money(snapshot.shipping) : 'Free'}</dd></div>
      <div className="total"><dt>Total</dt><dd>{money(snapshot.total)}</dd></div></dl>
    <p className="muted">Delivery is €2.90, free from €35. Demo prices only. No real charge.</p>
    <a className="text-link" href="#/cart">Edit your cart</a>
  </aside>;
}

export default function Checkout({cart, user, onPlaceOrder}) {
  const [delivery, setDelivery] = useState({name: user?.name || '', address: '', city: '', postalCode: '', country: 'Germany', consent: false});
  const [errors, setErrors] = useState({});
  const [step, setStep] = useState('delivery');
  const [payment, setPayment] = useState('success');
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState('');
  const [reviewedCart, setReviewedCart] = useState(null);
  const lock = useRef(false), errorRef = useRef(null), reviewRef = useRef(null);
  useEffect(() => { if (message || Object.keys(errors).length) errorRef.current?.focus(); }, [message, errors]);
  useEffect(() => { if (step === 'review') reviewRef.current?.focus(); }, [step]);
  if (!user) return <SignInGate/>;
  if (!cart.length) return <section className="empty"><h1>Your cart is empty</h1><p>Add a style and choose a size before checkout.</p><a className="btn" href="#/products">Explore clothing</a></section>;
  let snapshot;
  try { snapshot = checkoutSnapshot(cart); }
  catch (error) { return <section className="empty"><h1>Check your cart</h1><p role="alert">{error.message}</p><a className="btn" href="#/cart">Return to cart</a></section>; }
  const changed = step === 'review' && JSON.stringify(cart) !== JSON.stringify(reviewedCart);
  function update(e) { const {name, value, checked, type} = e.target; setDelivery(d => ({...d, [name]: type === 'checkbox' ? checked : value})); }
  function review(e) {
    e.preventDefault(); const next = validateDelivery(delivery); setErrors(next); setMessage('');
    if (Object.keys(next).length) return;
    setReviewedCart(cart.map(line => ({...line}))); setStep('review');
  }
  async function submit() {
    if (lock.current || changed) return;
    lock.current = true; setBusy(true); setMessage('');
    try { await onPlaceOrder({cart: reviewedCart, delivery, payment}); }
    catch (error) { setMessage(error.message || 'Unable to complete the demo order. Please try again.'); }
    finally { lock.current = false; setBusy(false); }
  }
  function field(name, label, maxLength, placeholder) {
    return <label className="field" htmlFor={`delivery-${name}`}><span id={`delivery-${name}-label`}>{label}</span>
      <input id={`delivery-${name}`} name={name} value={delivery[name]} onChange={update} maxLength={maxLength}
        placeholder={placeholder} autoComplete="off" required aria-labelledby={`delivery-${name}-label`} aria-invalid={!!errors[name]} aria-describedby={errors[name] ? `${name}-error` : undefined}/>
      {errors[name] && <span className="field-error" id={`${name}-error`}>{errors[name]}</span>}</label>;
  }
  return <section className="section checkout-page"><a className="text-link" href="#/cart">← Back to your cart</a>
    <span className="eyebrow checkout-kicker">ONE LAST STEP TO YOUR NEXT FIT</span><h1>Checkout</h1>
    <p className="intro">Signed in as {user.name}. A practice order, with no real payment.</p>
    <ol className="checkout-steps" aria-label="Checkout steps"><li aria-current={step === 'delivery' ? 'step' : undefined}>1. Delivery details</li><li aria-current={step === 'review' ? 'step' : undefined}>2. Review & demo payment</li></ol>
    <div className="checkout-grid"><div className="checkout-panel">
      {(message || Object.keys(errors).length > 0) && <div className="form-error" role="alert" ref={errorRef} tabIndex="-1">{message || 'Please correct the highlighted delivery fields.'}</div>}
      {step === 'delivery' ? <form onSubmit={review} noValidate><h2>Where would it go?</h2>
        <p className="demo-note">Use fictional details only. Delivery information stays in this browser with your demo order. Nothing will be shipped.</p>
        {field('name', 'Recipient name', 60, 'Demo Student')}{field('address', 'Street address', 150, 'Example Street 12')}
        <div className="form-grid">{field('city', 'City', 60, 'Berlin')}{field('postalCode', 'Postal code', 12, '10115')}</div>
        <label className="field" htmlFor="delivery-country"><span id="delivery-country-label">Country</span><select id="delivery-country" name="country" value={delivery.country} onChange={update} aria-labelledby="delivery-country-label" aria-invalid={!!errors.country} aria-describedby={errors.country ? 'country-error' : undefined}>{countries.map(c => <option key={c}>{c}</option>)}</select>{errors.country && <span className="field-error" id="country-error">{errors.country}</span>}</label>
        <label className="consent"><input type="checkbox" name="consent" checked={delivery.consent} onChange={update} aria-invalid={!!errors.consent} aria-describedby={errors.consent ? 'consent-error' : undefined}/>I am using fictional details and understand this is a demo.</label>
        {errors.consent && <p className="field-error" id="consent-error">{errors.consent}</p>}
        <button className="btn full checkout-submit" type="submit">Review demo order →</button>
      </form> : <div><h2 ref={reviewRef} tabIndex="-1">Review your demo order</h2>
        <div className="delivery-review"><h3>Delivery details</h3><p>{delivery.name}<br/>{delivery.address}<br/>{delivery.postalCode} {delivery.city}<br/>{delivery.country}</p><button className="text-button" onClick={() => {setStep('delivery');setMessage('');}} disabled={busy}>Edit delivery details</button></div>
        {changed && <p className="form-error" role="alert">Your cart changed. Go back to delivery details, then review the latest order again.</p>}
        <fieldset disabled={busy}><legend>Simulated payment</legend><p className="muted">Choose a test outcome. We never request a card number or contact a payment service.</p>
          <label className="radio-card"><input type="radio" name="payment" value="success" checked={payment === 'success'} onChange={() => setPayment('success')}/>Demo payment succeeds</label>
          <label className="radio-card"><input type="radio" name="payment" value="decline" checked={payment === 'decline'} onChange={() => setPayment('decline')}/>Demo payment is declined</label>
        </fieldset>
        <button className="btn full" onClick={submit} disabled={busy || changed}>{busy ? 'Saving demo order…' : `Place demo order · ${money(snapshot.total)}`}</button>
        <p className="muted">No real charge. The cart clears only after the order is saved successfully.</p>
      </div>}
    </div><OrderSummary snapshot={snapshot}/></div>
  </section>;
}

export function Confirmation({order, warning = ''}) {
  return <section className="confirmation"><span className="success-mark" aria-hidden="true">✓</span><span className="eyebrow">DEMO ORDER COMPLETE</span><h1>Your next fit is on the list.</h1>
    <p>Your practice order is saved in this browser. No money was taken and nothing will be shipped.</p>
    {warning && <p className="form-error" role="alert">{warning}</p>}
    <div className="order-box"><span className="status-pill">Simulated payment successful</span><h2>Order reference</h2><p className="order-reference">{order.reference}</p>
      <p>Created: {new Date(order.createdAt).toLocaleString()}</p>
      <h2>Order summary</h2>{order.items.map(item => <div className="order-line" key={`${item.id}:${item.size}`}><span>{item.name}<br/><small>Size {item.size} · Qty {item.quantity} · {money(item.unitPrice)} each</small></span><strong>{money(item.lineTotal)}</strong></div>)}
      <div className="order-line"><span>Demo delivery</span><span>{order.shipping ? money(order.shipping) : 'Free'}</span></div><div className="order-line total"><span>Total</span><strong>{money(order.total)}</strong></div>
      <h2>Demo delivery address</h2><p>{order.delivery.name}<br/>{order.delivery.address}<br/>{order.delivery.postalCode} {order.delivery.city}<br/>{order.delivery.country}</p>
    </div><a className="btn" href="#/products">Continue browsing →</a><p className="muted">Keep the reference and this browser's data to revisit the confirmation. Browser-local demo accounts are not production security.</p>
  </section>;
}
