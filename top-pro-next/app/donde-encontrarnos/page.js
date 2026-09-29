import Header from '@/components/Header';
import { stores } from '@/lib/catalog';
import Link from 'next/link';

export default function StoresPage() {
  return (
    <div className="site-shell detail-shell">
      <Header detail />
      <main className="stores-main">
        <section className="stores-hero-panel">
          <div><p className="eyebrow">Donde encontrarnos</p><h1>Puntos de venta</h1><p className="lede">Encontranos en nuestros puntos aliados o consultanos por WhatsApp.</p></div>
          <div className="store-actions"><Link className="button button-primary" href="/productos">Ver productos</Link><a className="button button-secondary" href="https://wa.me/595986732551">Consultar por WhatsApp</a></div>
        </section>
        <section className="store-list">
          {stores.map((store, index) => (
            <a className="store-card" key={`${store.name}-${store.detail}-${index}`} href={store.url || '#'} target={store.url ? '_blank' : undefined}>
              <h2>{store.name}</h2><p>{store.detail}</p>
            </a>
          ))}
        </section>
      </main>
    </div>
  );
}
