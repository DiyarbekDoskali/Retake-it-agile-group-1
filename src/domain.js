import { products, findProduct } from './products.js';
export const money = cents => new Intl.NumberFormat('en-IE',{style:'currency',currency:'EUR'}).format(cents/100);
export const normalEmail = email => String(email||'').trim().toLowerCase();
const emailOK = value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
export function filterProducts(query='',category='All',sort='featured') {
  const q=query.trim().toLowerCase();
  const result=products.filter(p=>(category==='All'||p.category===category)&&`${p.name} ${p.description} ${p.category}`.toLowerCase().includes(q));
  return result.sort(sort==='price-low'?(a,b)=>a.price-b.price:sort==='price-high'?(a,b)=>b.price-a.price:sort==='name'?(a,b)=>a.name.localeCompare(b.name):(a,b)=>Number(b.featured)-Number(a.featured));
}
export function cleanCart(raw) {
  if(!Array.isArray(raw)) return [];
  const out=new Map();
  for(const line of raw) {
    const p=findProduct(line?.id),key=`${line?.id}:${line?.size}`;
    if(p?.stock&&p.sizes.includes(line.size)&&Number.isInteger(line.quantity)&&line.quantity>0)
      out.set(key,{id:p.id,size:line.size,quantity:Math.min(p.stock,(out.get(key)?.quantity||0)+line.quantity)});
  }
  return [...out.values()];
}
export function changeQuantity(cart,id,quantity,size) {
  const p=findProduct(id);
  if(!p?.sizes.includes(size)) throw new Error('Choose a valid size first.');
  if(!p||!Number.isInteger(quantity)||quantity<0||quantity>p.stock) throw new Error(`Choose a quantity between 0 and ${p?.stock??0}.`);
  const next=cleanCart(cart),index=next.findIndex(l=>l.id===id&&l.size===size);
  if(quantity===0)return next.filter(l=>l.id!==id||l.size!==size);
  if(index>=0)next[index]={id,size,quantity};else next.push({id,size,quantity});
  return next;
}
export function cartTotals(cart) {
  const lines=cleanCart(cart),subtotal=lines.reduce((n,l)=>n+findProduct(l.id).price*l.quantity,0),shipping=subtotal===0||subtotal>=3500?0:290;
  return {subtotal,shipping,total:subtotal+shipping,count:lines.reduce((n,l)=>n+l.quantity,0)};
}
export function validateRegistration(data,accounts=[]) {
  const errors={}; const name=String(data.name||'').trim();
  if(name.length<2||name.length>60) errors.name='Use a name between 2 and 60 characters.';
  if(!emailOK(normalEmail(data.email))) errors.email='Enter a valid demo email address.';
  else if(accounts.some(a=>normalEmail(a.email)===normalEmail(data.email))) errors.email='This email is already registered. Please sign in.';
  if(typeof data.password!=='string'||data.password.length<8||data.password.length>128) errors.password='Use 8 to 128 characters. Do not reuse a real password.';
  if(data.confirm!==data.password) errors.confirm='Passwords do not match.';
  return errors;
}
export function readJSON(storage,key,fallback) {try{const value=storage.getItem(key);return value?JSON.parse(value):fallback;}catch{return fallback;}}
export async function passwordHash(password,salt) {
  const key=await crypto.subtle.importKey('raw',new TextEncoder().encode(password),'PBKDF2',false,['deriveBits']);
  const hash=await crypto.subtle.deriveBits({name:'PBKDF2',salt:new TextEncoder().encode(salt),iterations:100000,hash:'SHA-256'},key,256);
  return Array.from(new Uint8Array(hash),b=>b.toString(16).padStart(2,'0')).join('');
}
