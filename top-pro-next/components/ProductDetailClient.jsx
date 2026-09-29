'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import Header from './Header';
import { addToCart, apiRequest, availabilityLabel, canAddProduct } from './client-utils';

export default function ProductDetailClient({ initialProduct, slug }) {
  const [product, setProduct] = useState(initialProduct);
  const [quantity, setQuantity] = useState(1);
  const [variantId, setVariantId] = useState(initialProduct?.variants?.[0]?.id || '');
  const [buttonText, setButtonText] = useState('Agregar a carrito');

  useEffect(() => {
    apiRequest(`/api/products/${encodeURIComponent(slug)}`).then((payload) => {
      setProduct(payload.product);
      setVariantId(payload.product?.variants?.[0]?.id || '');
    }).catch(() => {});
  }, [slug]);

  const variant = useMemo(() => (product?.variants || []).find((item) => item.id === variantId) || null, [product, variantId]);
  const views = variant?.views || product?.views || [];
  const front = views.find((view) => view.id === 'front') || views[0] || { src: product?.src, alt: product?.alt };
  const back = views.find((view) => view.id === 'back') || views[1] || null;
  const title = variant ? variant.label : product?.name;
  const price = variant?.price || product?.price;
  const available = canAddProduct(product);

  if (!product) {
    return <div className="site-shell detail-shell"><main className="detail-main"><section className="not-found-panel"><p className="eyebrow">Top Pro</p><h1>Producto no encontrado</h1><Link className="button button-primary" href="/productos">Volver al catalogo</Link></section></main></div>;
  }

  const add = async () => {
    const result = await addToCart(product, {
      quantity,
      variant,
      variantId: variant?.id || '',
      variantLabel: variant?.label || '',
      price,
      image: { src: front?.src || product.src, alt: front?.alt || product.alt }
    });
    setButtonText(result.ok ? 'Agregado' : 'Sin stock');
    if (result.ok) setTimeout(() => setButtonText('Agregar a carrito'), 1200);
  };

  return (
    <div className="site-shell detail-shell">
      <Header detail />
      <main className="detail-main">
        <section className="detail-panel">
          <div className="detail-copy">
            <p className="eyebrow">{product.label}</p>
            <h1>{title}</h1>
            <p className="lede">{product.description}</p>
            <div className="detail-description">{(product.detailDescription || []).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
            <div className="detail-price-card"><span>Precio</span><strong>{price}</strong><small className="product-availability">{availabilityLabel(product)}</small></div>
          </div>
          <aside className="detail-aside">
            <div className={`detail-image-card detail-image-toggle ${back ? 'has-rotation' : ''}`}>
              <img className="detail-product-image detail-product-image-front" src={front?.src || product.src} alt={front?.alt || product.alt} data-view-id="front" />
              {back ? <img className="detail-product-image detail-product-image-back" src={back.src} alt="" aria-hidden="true" data-view-id="back" /> : null}
            </div>
            {product.variants?.length ? <div className="detail-variant-panel"><div className="detail-option-group"><span className="field-label">Elegir bolso</span><select className="detail-variant-select" value={variantId} onChange={(event) => setVariantId(event.target.value)}>{product.variants.map((entry) => <option key={entry.id} value={entry.id}>{entry.label}</option>)}</select></div></div> : null}
            <div className="request-card">
              <p className="request-note">Elegi la cantidad y guardamos el producto en tu carrito.</p>
              <label className="field-label" htmlFor="product-quantity">Cantidad deseada</label>
              <input className="quantity-input" id="product-quantity" type="number" min="1" step="1" value={quantity} onChange={(event) => setQuantity(Math.max(1, Number.parseInt(event.target.value, 10) || 1))} />
              <button className={`button ${available ? 'button-primary' : 'button-secondary'} detail-cart-button`} disabled={!available} type="button" onClick={add}>{available ? buttonText : 'Sin stock'}</button>
              <Link className="button button-secondary" href="/carrito">Ver carrito</Link>
              <Link className="button button-secondary" href="/productos">Volver a productos</Link>
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
}
