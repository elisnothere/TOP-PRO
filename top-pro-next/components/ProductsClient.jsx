'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Header from './Header';
import { ProductMedia } from './ProductMedia';
import { addToCart, apiRequest, availabilityLabel, canAddProduct } from './client-utils';

export default function ProductsClient({ initialProducts }) {
  const [products, setProducts] = useState(initialProducts);

  useEffect(() => {
    apiRequest('/api/products').then((payload) => setProducts(payload.products || initialProducts)).catch(() => {});
  }, [initialProducts]);

  const add = async (product, button) => {
    const result = await addToCart(product, { quantity: 1 });
    button.textContent = result.ok ? 'Agregado' : 'Sin stock';
    button.disabled = !result.ok;
    if (result.ok) setTimeout(() => { button.textContent = 'Agregar a carrito'; }, 1200);
  };

  return (
    <div className="site-shell detail-shell">
      <Header detail />
      <main className="catalog-main">
        <section className="catalog-hero-panel">
          <div><p className="eyebrow"></p><h1>Productos disponibles:</h1><br /><p className="lede">Revisa precios, agrega productos al carrito y despues envia el pedido completo por WhatsApp o continua al checkout.</p></div>
          <div className="store-actions"><Link className="button button-primary" href="/donde-encontrarnos">Donde encontrarnos</Link><Link className="button button-secondary" href="/">Volver al inicio</Link></div>
        </section>
        <section className="catalog-grid">
          {products.map((product) => {
            const available = canAddProduct(product);
            return (
              <article className="catalog-product-card" key={product.slug}>
                <Link className="catalog-product-link" href={product.page || `/producto/${product.slug}`}>
                  <ProductMedia product={product} />
                  <div className="catalog-product-copy"><span>{product.label}</span><h2>{product.name}</h2><p>{product.description}</p><small className="product-availability">{availabilityLabel(product)}</small></div>
                  <div className="catalog-product-footer"><strong className="catalog-product-price">{product.price}</strong><span className="catalog-product-cta">Ver producto</span></div>
                </Link>
                <button className={`button ${available ? 'button-primary' : 'button-secondary'} catalog-cart-button`} disabled={!available} type="button" onClick={(event) => add(product, event.currentTarget)}>{available ? 'Agregar a carrito' : 'Sin stock'}</button>
              </article>
            );
          })}
        </section>
      </main>
    </div>
  );
}
