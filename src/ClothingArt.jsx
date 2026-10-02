import React from 'react';

// Photo-style assets are generated for this fictional catalogue, not real stock.
export default function ClothingArt({product}) {
  return <div className="art product-photo"><img
    src={`${import.meta.env.BASE_URL}images/${product.id}.webp`}
    alt={`${product.name} — AI-generated studio product image`}
    width="1254" height="1254" loading="lazy" decoding="async"
  /></div>;
}
