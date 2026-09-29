'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { apiRequest, getSession, setSession } from './client-utils';

export default function AuthClient() {
  const [mode, setMode] = useState('login');
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => setUser(getSession()), []);

  const submit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    try {
      const result = await apiRequest(`/api/auth/${mode === 'register' ? 'register' : 'login'}`, { method: 'POST', body: JSON.stringify(payload) });
      setSession(result.user, result.token);
      setUser(result.user);
      setMessage(mode === 'register' ? 'Cuenta creada correctamente.' : 'Sesion iniciada.');
    } catch (error) {
      setMessage(error.message);
    }
  };

  if (user) {
    return (
      <div className="site-shell detail-shell auth-shell">
        <main className="auth-main"><section className="auth-panel">
          <header className="auth-minimal-header"><Link className="brand" href="/"><span className="brand-mark has-logo"><img className="brand-logo" src="/assets/logo.png" alt="Top Pro logo" /></span><span className="brand-copy"><strong>Top Pro</strong><small>Cuenta</small></span></Link></header>
          <div className="auth-copy"><p className="eyebrow">Cuenta</p><h1>Hola, {user.name}</h1><p className="lede">Sesion iniciada como {user.role === 'admin' ? 'admin' : 'cliente'}.</p></div>
          <div className="auth-actions-row">{user.role === 'admin' ? <Link className="button button-primary" href="/admin">Abrir admin</Link> : <Link className="button button-primary" href="/productos">Ver productos</Link>}<button className="button button-secondary" type="button" onClick={() => { setSession(null); setUser(null); }}>Cerrar sesion</button></div>
        </section></main>
      </div>
    );
  }

  return (
    <div className="site-shell detail-shell auth-shell">
      <main className="auth-main">
        <section className="auth-panel">
          <header className="auth-minimal-header"><Link className="brand" href="/"><span className="brand-mark has-logo"><img className="brand-logo" src="/assets/logo.png" alt="Top Pro logo" /></span><span className="brand-copy"><strong>Top Pro</strong><small>Cuenta</small></span></Link></header>
          <div className="auth-copy"><p className="eyebrow">Cuenta</p><h1>{mode === 'register' ? 'Crear cuenta' : 'Iniciar sesion'}</h1><p className="lede">Entra para gestionar tu cuenta o acceder al panel admin.</p></div>
          <div className="auth-card">
            <div className="auth-tabs"><button className={mode === 'login' ? 'is-active' : ''} onClick={() => setMode('login')}>Iniciar sesion</button><button className={mode === 'register' ? 'is-active' : ''} onClick={() => setMode('register')}>Crear cuenta</button></div>
            <form className="auth-form" onSubmit={submit}>
              {mode === 'register' ? <label><span>Nombre</span><input name="name" required /></label> : null}
              <label><span>Email</span><input name="email" type="email" required /></label>
              <label><span>Contraseña</span><input name="password" type="password" required minLength={6} /></label>
              {message ? <p className="auth-message">{message}</p> : null}
              <button className="button button-primary" type="submit">{mode === 'register' ? 'Crear cuenta' : 'Iniciar sesion'}</button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
