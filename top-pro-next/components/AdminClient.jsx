'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Header from './Header';
import { apiRequest, getSession, setSession } from './client-utils';

const emptyForm = { name: '', label: '', price: '', alt: '', description: '', detailDescription: '', src: '', stock: 0, allowPreorder: false, showInCarousel: true };

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    if (!file) return resolve('');
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error('No se pudo leer la imagen.'));
    reader.readAsDataURL(file);
  });
}

export default function AdminClient() {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [editingSlug, setEditingSlug] = useState('');
  const [form, setForm] = useState(emptyForm);
  const [message, setMessage] = useState('');

  const load = async () => {
    const current = getSession();
    setUser(current);
    if (current?.role === 'admin') {
      const [productsPayload, usersPayload] = await Promise.all([apiRequest('/api/products'), apiRequest('/api/users')]);
      setProducts(productsPayload.products || []);
      setUsers(usersPayload.users || []);
    }
  };

  useEffect(() => { load().catch(() => {}); }, []);

  if (!user) {
    return <div className="site-shell detail-shell auth-shell"><main className="auth-main"><section className="auth-panel"><div className="auth-copy"><p className="eyebrow">Admin</p><h1>Inicia sesion</h1><p className="lede">Necesitas entrar con la cuenta admin para ver este panel.</p></div><Link className="button button-primary" href="/auth">Iniciar sesion</Link></section></main></div>;
  }

  if (user.role !== 'admin') {
    return <div className="site-shell detail-shell auth-shell"><main className="auth-main"><section className="auth-panel"><div className="auth-copy"><p className="eyebrow">Admin</p><h1>Sin acceso</h1><p className="lede">Esta cuenta no tiene permisos de administrador.</p></div><Link className="button button-primary" href="/productos">Ver productos</Link></section></main></div>;
  }

  const edit = (product) => {
    setEditingSlug(product.slug);
    setForm({
      ...emptyForm,
      ...product,
      detailDescription: (product.detailDescription || []).join('\n')
    });
  };

  const submit = async (event) => {
    event.preventDefault();
    try {
      const payload = {
        ...form,
        detailDescription: String(form.detailDescription || '').split(/\n+/).map((item) => item.trim()).filter(Boolean),
        stock: Math.max(0, Number.parseInt(form.stock, 10) || 0)
      };
      const path = editingSlug ? `/api/products/${encodeURIComponent(editingSlug)}` : '/api/products';
      const method = editingSlug ? 'PUT' : 'POST';
      await apiRequest(path, { method, body: JSON.stringify(payload) });
      setForm(emptyForm);
      setEditingSlug('');
      setMessage('Producto guardado.');
      await load();
    } catch (error) {
      setMessage(error.message);
    }
  };

  const updateImage = async (file) => {
    const src = await fileToDataUrl(file);
    if (src) setForm((current) => ({ ...current, src }));
  };

  const remove = async (slug) => {
    if (!confirm('Eliminar producto?')) return;
    await apiRequest(`/api/products/${encodeURIComponent(slug)}`, { method: 'DELETE' });
    await load();
  };

  return (
    <div className="site-shell detail-shell auth-shell">
      <Header detail />
      <main className="admin-main">
        <section className="admin-panel">
          <div className="admin-heading"><div><p className="eyebrow">Admin</p><h1>Productos</h1></div><button className="button button-secondary" onClick={() => { setSession(null); window.location.href = '/auth'; }}>Cerrar sesion</button></div>
          <div className="admin-stats"><article><span>Productos</span><strong>{products.length}</strong></article><article><span>Usuarios</span><strong>{users.length}</strong></article><article><span>Clientes</span><strong>{users.filter((entry) => entry.role !== 'admin').length}</strong></article></div>
          <section className="admin-product-editor">
            <div className="admin-section-heading"><h2>{editingSlug ? 'Modificar producto' : 'Crear producto'}</h2>{editingSlug ? <button className="button button-secondary" onClick={() => { setEditingSlug(''); setForm(emptyForm); }}>Cancelar edicion</button> : null}</div>
            <form className="admin-product-form" onSubmit={submit}>
              <label><span>Nombre</span><input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></label>
              <label><span>Etiqueta</span><input value={form.label} onChange={(e) => setForm({ ...form, label: e.target.value })} /></label>
              <label><span>Precio</span><input required value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} /></label>
              <label><span>Stock</span><input type="number" min="0" value={form.stock} onChange={(e) => setForm({ ...form, stock: e.target.value })} /></label>
              <label><span>Texto alternativo imagen</span><input value={form.alt} onChange={(e) => setForm({ ...form, alt: e.target.value })} /></label>
              <label className="admin-toggle-field"><input type="checkbox" checked={form.allowPreorder} onChange={(e) => setForm({ ...form, allowPreorder: e.target.checked })} /><span>Permitir pre-reserva si no hay stock</span></label>
              <label className="admin-toggle-field"><input type="checkbox" checked={form.showInCarousel} onChange={(e) => setForm({ ...form, showInCarousel: e.target.checked })} /><span>Mostrar en carrusel principal</span></label>
              <label className="admin-form-wide"><span>Descripcion corta</span><textarea required rows="3" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })}></textarea></label>
              <label className="admin-form-wide"><span>Descripcion de detalle</span><textarea rows="5" value={form.detailDescription} onChange={(e) => setForm({ ...form, detailDescription: e.target.value })}></textarea></label>
              <label className="admin-form-wide"><span>Imagen del producto</span><input type="file" accept=".png,.jpg,.jpeg,image/png,image/jpeg" onChange={(e) => updateImage(e.target.files?.[0])} /></label>
              <div className="admin-product-preview admin-form-wide"><img src={form.src || '/assets/logo.png'} alt="Vista previa" /><p>Si no elegis una imagen nueva, se mantiene la actual.</p></div>
              {message ? <p className="auth-message admin-form-message admin-form-wide">{message}</p> : null}
              <button className="button button-primary admin-form-wide" type="submit">{editingSlug ? 'Guardar cambios' : 'Crear producto'}</button>
            </form>
          </section>
          <section className="admin-products">
            <div className="admin-section-heading"><h2>Items publicados</h2><Link className="button button-secondary" href="/productos">Ver pagina de items</Link></div>
            {products.map((product) => (
              <article className="admin-product-row" key={product.slug}>
                <img src={product.src} alt={product.alt || product.name} />
                <div><strong>{product.name}</strong><span>{product.label}</span><p>{product.description}</p><small>Stock: {product.stock} · {product.allowPreorder ? 'Pre-reserva activa' : 'Sin pre-reserva'} · {product.showInCarousel ? 'En carrusel' : 'Fuera del carrusel'}</small></div>
                <strong>{product.price}</strong>
                <div className="admin-row-actions"><button className="button button-secondary" onClick={() => edit(product)}>Editar</button><button className="button button-danger" onClick={() => remove(product.slug)}>Eliminar</button></div>
              </article>
            ))}
          </section>
        </section>
      </main>
    </div>
  );
}
