'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getCart, getSession, setSession } from './client-utils';

export default function Header({ detail = false }) {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const sync = () => {
      setUser(getSession());
      setCount(getCart().reduce((total, item) => total + (Number.parseInt(item.quantity, 10) || 1), 0));
    };
    sync();
    window.addEventListener('toppro-auth-change', sync);
    window.addEventListener('toppro-cart-change', sync);
    return () => {
      window.removeEventListener('toppro-auth-change', sync);
      window.removeEventListener('toppro-cart-change', sync);
    };
  }, []);

  const logout = () => {
    setSession(null);
    window.location.href = '/';
  };

  return (
    <>
      <header className={`topbar ${detail ? 'detail-topbar' : ''} ${open ? 'is-open' : ''}`}>
        <Link className="brand" href="/" aria-label="Top Pro home">
          <span className="brand-mark has-logo"><img className="brand-logo" src="/assets/logo.png" alt="Top Pro logo" /></span>
          <span className="brand-copy"><strong>Top Pro</strong><small>Rally-ready goods</small></span>
        </Link>
        <button className="nav-toggle" type="button" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span></span><span></span><span></span><span className="sr-only">Abrir navegacion</span>
        </button>
        <nav className={`nav ${detail ? 'detail-nav' : ''} ${open ? 'is-open' : ''}`}>
          <Link href="/productos">Productos</Link>
          <Link href="/donde-encontrarnos">Contacto</Link>
          <Link href="/carrito">Carrito{count > 0 ? ` (${count})` : ''}</Link>
          {user?.role === 'admin' ? <Link href="/admin">Admin</Link> : null}
          {user ? (
            <>
              <Link href="/auth">{user.name || 'Mi cuenta'}</Link>
              <button className="nav-logout-button" type="button" onClick={logout}>Salir</button>
            </>
          ) : <Link href="/auth">Ingresar</Link>}
        </nav>
      </header>
      <button className={`mobile-menu-backdrop ${open ? 'is-visible' : ''}`} type="button" aria-label="Cerrar navegacion" onClick={() => setOpen(false)}></button>
    </>
  );
}
