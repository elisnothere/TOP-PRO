const adminRoot = document.getElementById('admin-page-root');
const adminAuth = window.TopProAuth;
const productStore = window.TopProProducts;

let editingProductSlug = '';

const escapeHtml = (value) => String(value || '')
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#039;');

const formatDate = (value) => {
  if (!value) {
    return 'Sin fecha';
  }

  return new Intl.DateTimeFormat('es-PY', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }).format(new Date(value));
};

const fileToDataUrl = (file) => new Promise((resolve, reject) => {
  if (!file) {
    resolve('');
    return;
  }

  const reader = new FileReader();
  reader.onload = () => resolve(reader.result);
  reader.onerror = () => reject(new Error('No se pudo leer la imagen.'));
  reader.readAsDataURL(file);
});

const getProductFormData = async (form, existingProduct = null) => {
  const formData = new FormData(form);
  const imageFile = formData.get('image');
  const imageData = imageFile && imageFile.size > 0 ? await fileToDataUrl(imageFile) : '';
  const description = String(formData.get('description') || '').trim();
  const detailText = String(formData.get('detailDescription') || '').trim();
  const details = detailText
    .split(/\n+/)
    .map((item) => item.trim())
    .filter(Boolean);

  return {
    name: String(formData.get('name') || '').trim(),
    label: String(formData.get('label') || '').trim() || 'Producto Top Pro',
    price: String(formData.get('price') || '').trim() || 'Consultar precio',
    stock: Math.max(0, Number.parseInt(formData.get('stock'), 10) || 0),
    allowPreorder: formData.get('allowPreorder') === 'on',
    showInCarousel: formData.get('showInCarousel') === 'on',
    description,
    detailDescription: details.length ? details : [description].filter(Boolean),
    src: imageData || existingProduct?.src || './assets/logo.png',
    alt: String(formData.get('alt') || '').trim() || String(formData.get('name') || '').trim() || 'Producto Top Pro'
  };
};

const renderAccessShell = ({ title, text, isBlocked = false }) => {
  adminRoot.innerHTML = `
    <div class="site-shell detail-shell auth-shell">
      <main class="auth-main">
        <section class="auth-panel">
          <header class="auth-minimal-header">
            <a class="brand" href="index.html#home" aria-label="Volver al inicio de Top Pro">
              <span class="brand-mark has-logo">
                <img class="brand-logo" src="./assets/logo.png?v=20260910b" alt="Top Pro logo" />
              </span>
              <span class="brand-copy">
                <strong>Top Pro</strong>
                <small>Panel admin</small>
              </span>
            </a>
          </header>
          <div class="auth-copy">
            <p class="eyebrow">Admin</p>
            <h1>${title}</h1>
            <p class="lede">${text}</p>
          </div>
          <div class="auth-actions-row">
            ${isBlocked ? '<a class="button button-primary" href="productos.html">Ver productos</a>' : '<a class="button button-primary" href="auth.html">Iniciar sesion</a>'}
            <a class="button button-secondary" href="index.html#home">Volver al inicio</a>
          </div>
        </section>
      </main>
    </div>
  `;
};

const renderProductRows = (products) => products.map((product) => `
  <article class="admin-product-row" data-product-slug="${escapeHtml(product.slug)}">
    <img src="${escapeHtml(product.src)}" alt="${escapeHtml(product.alt || product.name)}" />
    <div>
      <strong>${escapeHtml(product.name)}</strong>
      <span>${escapeHtml(product.label || 'Producto Top Pro')}</span>
      <p>${escapeHtml(product.description)}</p>
      <small>
        Stock: ${Number.parseInt(product.stock, 10) || 0}
        · ${product.allowPreorder ? 'Pre-reserva activa' : 'Sin pre-reserva'}
        · ${product.showInCarousel ? 'En carrusel' : 'Fuera del carrusel'}
      </small>
    </div>
    <strong>${escapeHtml(product.price)}</strong>
    <div class="admin-row-actions">
      <button class="button button-secondary" type="button" data-edit-product="${escapeHtml(product.slug)}">Editar</button>
      <button class="button button-danger" type="button" data-delete-product="${escapeHtml(product.slug)}">Eliminar</button>
    </div>
  </article>
`).join('');

const renderAdminPage = async () => {
  if (!adminRoot || !adminAuth || !productStore) {
    return;
  }

  const currentUser = adminAuth.getCurrentUser();

  if (!currentUser) {
    renderAccessShell({
      title: 'Inicia sesion',
      text: 'Necesitas entrar con la cuenta admin para ver este panel.'
    });
    return;
  }

  if (currentUser.role !== 'admin') {
    renderAccessShell({
      title: 'Sin acceso',
      text: 'Esta cuenta no tiene permisos de administrador.',
      isBlocked: true
    });
    return;
  }

  const users = await adminAuth.getRemoteUsers();
  const products = productStore.getProducts();
  const editingProduct = editingProductSlug ? productStore.getProduct(editingProductSlug) : null;
  const customerCount = users.filter((user) => user.role !== 'admin').length;
  const usersMarkup = users.map((user) => `
    <article class="admin-user-row">
      <div>
        <strong>${escapeHtml(user.name)}</strong>
        <span>${escapeHtml(user.email)}</span>
      </div>
      <p>${user.role === 'admin' ? 'Admin' : 'Cliente'}</p>
      <small>${formatDate(user.createdAt)}</small>
    </article>
  `).join('');

  adminRoot.innerHTML = `
    <div class="site-shell detail-shell auth-shell">
      <header class="topbar detail-topbar">
        <a class="brand" href="index.html#home" aria-label="Volver al inicio de Top Pro">
          <span class="brand-mark has-logo">
            <img class="brand-logo" src="./assets/logo.png?v=20260910b" alt="Top Pro logo" />
          </span>
          <span class="brand-copy">
            <strong>Top Pro</strong>
            <small>Panel admin</small>
          </span>
        </a>

        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="admin-nav">
          <span></span>
          <span></span>
          <span></span>
          <span class="sr-only">Abrir navegacion</span>
        </button>

        <nav class="nav detail-nav" id="admin-nav" aria-label="Navegacion secundaria">
          <a href="index.html#home">Inicio</a>
          <a href="productos.html">Productos</a>
        </nav>
      </header>

      <button class="mobile-menu-backdrop" type="button" aria-label="Cerrar navegacion"></button>

      <main class="admin-main">
        <section class="admin-panel">
          <div class="admin-heading">
            <div>
              <p class="eyebrow">Admin</p>
              <h1>Productos</h1>
            </div>
            <button class="button button-secondary" id="admin-logout-button" type="button">Cerrar sesion</button>
          </div>

          <div class="admin-stats">
            <article>
              <span>Productos</span>
              <strong>${products.length}</strong>
            </article>
            <article>
              <span>Usuarios</span>
              <strong>${users.length}</strong>
            </article>
            <article>
              <span>Clientes</span>
              <strong>${customerCount}</strong>
            </article>
          </div>

          <section class="admin-product-editor" aria-label="Editor de productos">
            <div class="admin-section-heading">
              <h2>${editingProduct ? 'Modificar producto' : 'Crear producto'}</h2>
              ${editingProduct ? '<button class="button button-secondary" id="cancel-edit-button" type="button">Cancelar edicion</button>' : ''}
            </div>

            <form class="admin-product-form" id="admin-product-form">
              <label>
                <span>Nombre</span>
                <input name="name" type="text" required value="${escapeHtml(editingProduct?.name || '')}" />
              </label>
              <label>
                <span>Etiqueta</span>
                <input name="label" type="text" value="${escapeHtml(editingProduct?.label || '')}" placeholder="Disponible ahora" />
              </label>
              <label>
                <span>Precio</span>
                <input name="price" type="text" required value="${escapeHtml(editingProduct?.price || '')}" placeholder="9.85 USD" />
              </label>
              <label>
                <span>Stock</span>
                <input name="stock" type="number" min="0" step="1" value="${Number.parseInt(editingProduct?.stock, 10) || 0}" />
              </label>
              <label>
                <span>Texto alternativo imagen</span>
                <input name="alt" type="text" value="${escapeHtml(editingProduct?.alt || '')}" />
              </label>
              <label class="admin-toggle-field">
                <input name="allowPreorder" type="checkbox" ${editingProduct?.allowPreorder === true ? 'checked' : ''} />
                <span>Permitir pre-reserva si no hay stock</span>
              </label>
              <label class="admin-toggle-field">
                <input name="showInCarousel" type="checkbox" ${editingProduct?.showInCarousel !== false ? 'checked' : ''} />
                <span>Mostrar en carrusel principal</span>
              </label>
              <label class="admin-form-wide">
                <span>Descripcion corta</span>
                <textarea name="description" required rows="3">${escapeHtml(editingProduct?.description || '')}</textarea>
              </label>
              <label class="admin-form-wide">
                <span>Descripcion de detalle</span>
                <textarea name="detailDescription" rows="5">${escapeHtml((editingProduct?.detailDescription || []).join('\n'))}</textarea>
              </label>
              <label class="admin-form-wide">
                <span>Imagen del producto</span>
                <input name="image" type="file" accept="image/png,image/jpeg,image/webp" />
              </label>
              <div class="admin-product-preview admin-form-wide">
                <img id="admin-image-preview" src="${escapeHtml(editingProduct?.src || './assets/logo.png')}" alt="Vista previa del producto" />
                <p>${editingProduct ? 'Si no elegis una imagen nueva, se mantiene la actual.' : 'La imagen se guarda en este navegador y se muestra en catalogo, carrusel y detalle.'}</p>
              </div>
              <p class="auth-message admin-form-message admin-form-wide" id="product-form-message" hidden></p>
              <button class="button button-primary admin-form-wide" type="submit">${editingProduct ? 'Guardar cambios' : 'Crear producto'}</button>
            </form>
          </section>

          <section class="admin-products" aria-label="Productos cargados">
            <div class="admin-section-heading">
              <h2>Items publicados</h2>
              <a class="button button-secondary" href="productos.html">Ver pagina de items</a>
            </div>
            ${products.length ? renderProductRows(products) : '<p class="lede">Todavia no hay productos cargados.</p>'}
          </section>

          <section class="admin-users" aria-label="Usuarios registrados">
            <div class="admin-section-heading">
              <h2>Cuentas</h2>
            </div>
            ${usersMarkup}
          </section>
        </section>
      </main>
    </div>
  `;

  bindAdminEvents();
};

const setFormMessage = (message, type = 'success') => {
  const messageElement = document.getElementById('product-form-message');

  if (!messageElement) {
    return;
  }

  messageElement.textContent = message;
  messageElement.dataset.type = type;
  messageElement.hidden = !message;
};

const bindAdminEvents = () => {
  adminAuth.enhanceNavigation();
  adminAuth.setupTopbarNavigation(adminRoot);

  const logoutButton = document.getElementById('admin-logout-button');
  const cancelEditButton = document.getElementById('cancel-edit-button');
  const form = document.getElementById('admin-product-form');
  const imageInput = form?.querySelector('input[name="image"]');
  const imagePreview = document.getElementById('admin-image-preview');

  if (logoutButton) {
    logoutButton.addEventListener('click', () => {
      adminAuth.logout();
      window.location.href = 'auth.html';
    });
  }

  if (cancelEditButton) {
    cancelEditButton.addEventListener('click', () => {
      editingProductSlug = '';
      renderAdminPage();
    });
  }

  if (imageInput && imagePreview) {
    imageInput.addEventListener('change', async () => {
      const file = imageInput.files[0];

      if (!file) {
        return;
      }

      imagePreview.src = await fileToDataUrl(file);
    });
  }

  document.querySelectorAll('[data-edit-product]').forEach((button) => {
    button.addEventListener('click', async () => {
      editingProductSlug = button.dataset.editProduct;
      await renderAdminPage();
      document.querySelector('.admin-product-editor')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  document.querySelectorAll('[data-delete-product]').forEach((button) => {
    button.addEventListener('click', async () => {
      const slug = button.dataset.deleteProduct;
      const product = productStore.getProduct(slug);

      if (!product || !window.confirm(`Eliminar ${product.name}?`)) {
        return;
      }

      await productStore.deleteProduct(slug);

      if (editingProductSlug === slug) {
        editingProductSlug = '';
      }

      await renderAdminPage();
    });
  });

  if (!form) {
    return;
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    try {
      const existingProduct = editingProductSlug ? productStore.getProduct(editingProductSlug) : null;
      const payload = await getProductFormData(form, existingProduct);

      if (!payload.name || !payload.description) {
        setFormMessage('Completa nombre y descripcion.', 'error');
        return;
      }

      if (editingProductSlug) {
        await productStore.updateProduct(editingProductSlug, payload);
        editingProductSlug = '';
        await renderAdminPage();
        return;
      }

      await productStore.createProduct(payload);
      form.reset();
      await renderAdminPage();
    } catch (error) {
      setFormMessage(error.message || 'No se pudo guardar el producto.', 'error');
    }
  });
};

window.addEventListener('toppro-products-change', () => {
  renderAdminPage();
});

renderAdminPage();
