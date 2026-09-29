'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { catalogProducts } from '../lib/catalog';
import { getCart, getSession, setSession } from './client-utils';

export default function Header({ detail = false }) {
  const router = useRouter();
  const searchRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [user, setUser] = useState(null);
  const [count, setCount] = useState(0);

  const normalizedQuery = query.trim().toLowerCase();
  const searchResults = normalizedQuery
    ? catalogProducts.filter((product) => {
        const haystack = [product.name, product.label, product.description, product.price, product.slug].join(' ').toLowerCase();
        return haystack.includes(normalizedQuery);
      })
    : catalogProducts;

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

  useEffect(() => {
    if (!searchOpen) {
      return undefined;
    }

    const closeSearchOutside = (event) => {
      if (!searchRef.current?.contains(event.target)) {
        setSearchOpen(false);
      }
    };

    const closeSearchOnEscape = (event) => {
      if (event.key === 'Escape') {
        setSearchOpen(false);
      }
    };

    document.addEventListener('pointerdown', closeSearchOutside);
    document.addEventListener('keydown', closeSearchOnEscape);

    return () => {
      document.removeEventListener('pointerdown', closeSearchOutside);
      document.removeEventListener('keydown', closeSearchOnEscape);
    };
  }, [searchOpen]);

  const closeMenus = () => {
    setOpen(false);
    setSearchOpen(false);
  };

  const logout = () => {
    setSession(null);
    window.location.href = '/';
  };

  const submitSearch = (event) => {
    event.preventDefault();
    if (searchResults.length > 0) {
      router.push(searchResults[0].page || `/producto/${searchResults[0].slug}`);
      closeMenus();
    }
  };

  return (
    <>
      <header className={`topbar ${detail ? 'detail-topbar' : ''} ${open ? 'is-open' : ''}`}>
        <Link className="brand" href="/" aria-label="Top Pro home" onClick={closeMenus}>
          <span className="brand-mark has-logo"><img className="brand-logo" src="/assets/logo.png" alt="Top Pro logo" /></span>
          <span className="brand-copy"><strong>Top Pro</strong><small>Rally-ready goods</small></span>
        </Link>
        <nav className={`nav ${detail ? 'detail-nav' : ''} ${open ? 'is-open' : ''}`}>
          <Link className="nav-primary-link" href="/productos" onClick={closeMenus}>Productos</Link>
          <Link className="nav-primary-link" href="/donde-encontrarnos" onClick={closeMenus}>Contactanos</Link>
        </nav>
        <div className="header-actions">
          <div ref={searchRef} className={`nav-search ${searchOpen ? 'is-open' : ''}`}>
            <button className="nav-icon-button" type="button" aria-label="Buscar productos" aria-expanded={searchOpen} onClick={() => { setOpen(false); setSearchOpen((current) => !current); }}>
              <img className="nav-icon" src="/assets/search.png" alt="" />
            </button>
            <form className="nav-search-panel" hidden={!searchOpen} onSubmit={submitSearch}>
              <label className="sr-only" htmlFor="site-search">Buscar productos</label>
              <input id="site-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar productos" autoComplete="off" />
              <div className="nav-search-results">
                {searchResults.length > 0 ? searchResults.map((product) => (
                  <Link key={product.slug} href={product.page || `/producto/${product.slug}`} onClick={closeMenus}>
                    <span>{product.name}</span>
                    <small>{product.price}</small>
                  </Link>
                )) : <p>No encontramos productos.</p>}
              </div>
            </form>
          </div>
          <Link className="nav-icon-button nav-cart-link" href="/carrito" aria-label={`Carrito${count > 0 ? `, ${count} productos` : ''}`} onClick={closeMenus}>
            <img className="nav-icon" src="/assets/cart.png" alt="" />
            {count > 0 ? <span className="nav-cart-count">{count}</span> : null}
          </Link>
          <Link className="nav-icon-button" href="/auth" aria-label={user ? (user.name || 'Mi cuenta') : 'Ingresar'} onClick={closeMenus}>
            <img className="nav-icon nav-login-icon" src="/assets/login-cropped.png" alt="" />
          </Link>
          {user?.role === 'admin' ? <Link href="/admin">Admin</Link> : null}
          {user ? <button className="nav-logout-button" type="button" onClick={logout}>Salir</button> : null}
        </div>
        <button className="nav-toggle" type="button" aria-expanded={open} onClick={() => { setSearchOpen(false); setOpen(!open); }}>
          <span></span><span></span><span></span><span className="sr-only">Abrir navegacion</span>
        </button>
      </header>
      <button className={`mobile-menu-backdrop ${open ? 'is-visible' : ''}`} type="button" aria-label="Cerrar navegacion" onClick={closeMenus}></button>
    </>
  );
}
