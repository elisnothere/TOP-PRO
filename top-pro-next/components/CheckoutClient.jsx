'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Header from './Header';
import { reconcileCart, whatsappHref } from './client-utils';

export default function CheckoutClient() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    reconcileCart(null, false).then(setItems);
  }, []);

  const submit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const extra = [
      `Nombre: ${formData.get('name') || ''}`,
      `Telefono: ${formData.get('phone') || ''}`,
      `Email: ${formData.get('email') || ''}`,
      `Entrega: ${formData.get('delivery') || ''}`,
      `Notas: ${formData.get('notes') || ''}`
    ].join('\n');
    window.open(whatsappHref(items, extra), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="site-shell detail-shell">
      <Header detail />
      <main className="cart-main">
        <section className="cart-panel checkout-panel">
          <div className="cart-heading"><p className="eyebrow">Checkout</p><h1>Finalizar pedido</h1><p className="lede">Dejanos tus datos para preparar el pedido. Por ahora la confirmacion final se envia por WhatsApp.</p></div>
          {items.length ? (
            <>
              <form className="checkout-form" onSubmit={submit}>
                <label><span>Nombre</span><input name="name" required autoComplete="name" /></label>
                <label><span>Telefono</span><input name="phone" required autoComplete="tel" /></label>
                <label><span>Email</span><input name="email" type="email" autoComplete="email" /></label>
                <label><span>Entrega</span><select name="delivery"><option>Retiro en punto de venta</option><option>Coordinar envio</option></select></label>
                <label className="checkout-form-wide"><span>Notas</span><textarea name="notes" rows="4" placeholder="Talles, horarios, direccion o aclaraciones."></textarea></label>
                <button className="button button-primary checkout-form-wide" type="submit">Confirmar por WhatsApp</button>
              </form>
              <aside className="cart-summary checkout-summary">
                <h2>Resumen</h2>
                {items.map((item) => <div className="checkout-summary-item" key={item.key}><img src={item.src} alt={item.alt || item.name} /><p>{item.quantity} x {item.name}</p><strong>{item.price || 'A confirmar'}</strong></div>)}
                <Link className="button button-secondary" href="/carrito">Editar carrito</Link>
              </aside>
            </>
          ) : (
            <article className="not-found-panel cart-empty-panel"><p className="eyebrow">Checkout</p><h1>No hay productos</h1><p>Primero agrega productos al carrito y despues podes completar tus datos.</p><Link className="button button-primary" href="/productos">Ver productos</Link></article>
          )}
        </section>
      </main>
    </div>
  );
}
