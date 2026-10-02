import React,{useState} from 'react';
import ClothingArt from './ClothingArt.jsx';
import {money} from './domain.js';
export default function ProductDetail({product:p,add}) {
  const [size,setSize]=useState(''),[error,setError]=useState('');
  return <section className="section"><a className="text-link" href="#/products">← Back to the collection</a>
    <div className="detail-grid"><ClothingArt product={p}/><div className="detail-copy">
      <span className="eyebrow">{p.category} / THE CAMPUS COLLECTION</span><h1>{p.name}</h1>
      <p className="detail-price">{money(p.price)}</p><p>{p.description}</p>
      <div className="specs">{p.specs.split(' · ').map(s=><p key={s}>✓ {s}</p>)}</div>
      <fieldset className="size-selector"><legend>Select your size</legend><div className="sizes">
        {p.sizes.map(s=><label className={s===size?'selected':''} key={s}><input type="radio" name="size" value={s} checked={size===s} onChange={()=>{setSize(s);setError('');}}/>{s}</label>)}
      </div><p className="muted">Unisex sizing · XS / S / M / L / XL. Check the fit description above.</p></fieldset>
      {error&&<p role="alert" className="field-error">{error}</p>}
      <p className="stock">{p.stock?`Demo stock: up to ${p.stock} per size`:'Currently out of stock'}</p>
      <button className="btn" disabled={!p.stock} onClick={()=>{if(!size){setError('Please select a size before adding to your cart.');return;}add(p.id,size);}}>{p.stock?'Add to cart':'Sold out'} →</button>
      <p className="muted">AI-generated product image; fictional clothing and specifications. No real purchases are available.</p>
    </div></div>
  </section>;
}
