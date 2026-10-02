import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {products} from '../src/products.js';

test('all 18 products have local photo assets',()=>{
  for(const p of products) assert.ok(existsSync(new URL(`../public/images/${p.id}.webp`,import.meta.url)),p.id);
});
test('homepage model asset exists',()=>{
  assert.ok(existsSync(new URL('../public/images/wearlane-models.webp',import.meta.url)));
});
test('Wearlane branding is consistent while preserving legacy stored demo data',()=>{
  const source=readFileSync(new URL('../src/main.jsx',import.meta.url),'utf8');
  const html=readFileSync(new URL('../index.html',import.meta.url),'utf8');
  const pkg=JSON.parse(readFileSync(new URL('../package.json',import.meta.url),'utf8'));
  assert.equal(pkg.name,'wearlane');
  assert.ok(html.includes('Wearlane'));
  assert.ok(source.includes('aria-label="Wearlane home"'));
  assert.ok(source.includes('Sign in to Wearlane'));
  assert.ok(!source.replace(/^const keys=.*$/m,'').toLowerCase().includes('campuscart'));
});
