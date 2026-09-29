'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Header from './Header';
import { cartTotal, clearCart, formatUsdTotal, getCart, reconcileCart, removeCartItem, updateCartQuantity, whatsappHref } from './client-utils';

export default function CartClient() {
  const [items, setItems] = useState([]);

  const sync = async () => {
    setItems(await reconcileCart(null, false));
  };

  useEffect(() => {
    sync();
    window.addEventListener('toppro-cart-change', sync);
    return () => window.removeEventListener('toppro-cart-change', sync);
  }, []);

  const total = cartTotal(items);

  return (
    <div className="site-shell detail-shell">
      <Header detail />
      <main className="cart-main">
        <section className="cart-panel">
          <div className="cart-heading"><p className="eyebrow">Pedido</p><h1>Carrito</h1><p className="lede">Revisa tus productos y cuando este todo listo, envia el pedido completo por WhatsApp o continua al checkout.</p></div>
          <div className="cart-items">
            {items.length ? items.map((item) => (
              <article className="cart-item" key={item.key}>
                <Link className="cart-item-image" href={item.page || '/productos'}><img src={item.src} alt={item.alt || item.name} /></Link>
                <div className="cart-item-copy"><span>{item.variantLabel || item.baseName || 'Producto Top Pro'}</span><h2>{item.name}</h2><strong>{item.price || 'Precio a confirmar'}</strong></div>
                <label className="cart-quantity-field"><span>Cantidad</span><input type="number" min="1" value={item.quantity} onChange={(e) => { updateCartQuantity(item.key, e.target.value); setItems(getCart()); }} /></label>
                <button className="button button-secondary cart-remove-button" onClick={() => { removeCartItem(item.key); setItems(getCart()); }}>Quitar</button>
              </article>
            )) : (
              <article className="not-found-panel cart-empty-panel"><p className="eyebrow">Carrito</p><h1>Tu carrito esta vacio</h1><p>Agrega productos desde el catalogo y despues podes pedir todo junto por WhatsApp o avanzar al checkout.</p><Link className="button button-primary" href="/productos">Ver productos</Link></article>
            )}
          </div>
          {items.length ? (
            <aside className="cart-summary">
              {total > 0 ? <div><span>Total</span><strong>{formatUsdTotal(total)}</strong></div> : null}
              <div className="cart-summary-actions">
                <a className="button button-primary" href={whatsappHref(items)} target="_blank" rel="noreferrer">Pedir por WhatsApp</a>
                <Link className="button button-secondary" href="/checkout">Proceder a checkout</Link>
                <button className="button button-secondary" onClick={() => { clearCart(); setItems([]); }}>Vaciar carrito</button>
              </div>
            </aside>
          ) : null}
        </section>
      </main>
    </div>
  );
}
