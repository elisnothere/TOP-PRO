const adminRoot = document.getElementById('admin-page-root');
const adminAuth = window.TopProAuth;

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

const renderAdminPage = () => {
  if (!adminRoot || !adminAuth) {
    return;
  }

  const currentUser = adminAuth.getCurrentUser();

  if (!currentUser) {
    adminRoot.innerHTML = `
      <div class="site-shell detail-shell auth-shell">
        <main class="auth-main">
          <section class="auth-panel">
            <header class="auth-minimal-header">
              <a class="brand" href="index.html#home" aria-label="Volver al inicio de Top Pro">
                <span class="brand-mark has-logo">
                  <img class="brand-logo" src="./assets/logo.png?v=20260910a" alt="Top Pro logo" />
                </span>
                <span class="brand-copy">
                  <strong>Top Pro</strong>
                  <small>Panel admin</small>
                </span>
              </a>
            </header>
            <div class="auth-copy">
              <p class="eyebrow">Admin</p>
              <h1>Inicia sesion</h1>
              <p class="lede">Necesitas entrar con la cuenta admin para ver este panel.</p>
            </div>
            <div class="auth-actions-row">
              <a class="button button-primary" href="auth.html">Iniciar sesion</a>
              <a class="button button-secondary" href="index.html#home">Volver al inicio</a>
            </div>
          </section>
        </main>
      </div>
    `;
    return;
  }

  if (currentUser.role !== 'admin') {
    adminRoot.innerHTML = `
      <div class="site-shell detail-shell auth-shell">
        <main class="auth-main">
          <section class="auth-panel">
            <header class="auth-minimal-header">
              <a class="brand" href="index.html#home" aria-label="Volver al inicio de Top Pro">
                <span class="brand-mark has-logo">
                  <img class="brand-logo" src="./assets/logo.png?v=20260910a" alt="Top Pro logo" />
                </span>
                <span class="brand-copy">
                  <strong>Top Pro</strong>
                  <small>Panel admin</small>
                </span>
              </a>
            </header>
            <div class="auth-copy">
              <p class="eyebrow">Admin</p>
              <h1>Sin acceso</h1>
              <p class="lede">Esta cuenta no tiene permisos de administrador.</p>
            </div>
            <div class="auth-actions-row">
              <a class="button button-primary" href="productos.html">Ver productos</a>
              <button class="button button-secondary" id="admin-logout-button" type="button">Cerrar sesion</button>
            </div>
          </section>
        </main>
      </div>
    `;
  } else {
    const users = adminAuth.getUsers();
    const customerCount = users.filter((user) => user.role !== 'admin').length;
    const usersMarkup = users.map((user) => `
      <article class="admin-user-row">
        <div>
          <strong>${user.name}</strong>
          <span>${user.email}</span>
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
              <img class="brand-logo" src="./assets/logo.png?v=20260910a" alt="Top Pro logo" />
            </span>
            <span class="brand-copy">
              <strong>Top Pro</strong>
              <small>Panel admin</small>
            </span>
          </a>

          <button
            class="nav-toggle"
            type="button"
            aria-expanded="false"
            aria-controls="admin-nav"
          >
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
                <h1>Panel de cuentas</h1>
              </div>
              <button class="button button-secondary" id="admin-logout-button" type="button">Cerrar sesion</button>
            </div>

            <div class="admin-stats">
              <article>
                <span>Usuarios</span>
                <strong>${users.length}</strong>
              </article>
              <article>
                <span>Clientes</span>
                <strong>${customerCount}</strong>
              </article>
              <article>
                <span>Admins</span>
                <strong>${users.length - customerCount}</strong>
              </article>
            </div>

            <section class="admin-users" aria-label="Usuarios registrados">
              ${usersMarkup}
            </section>
          </section>
        </main>
      </div>
    `;
  }

  adminAuth.enhanceNavigation();
  adminAuth.setupTopbarNavigation(adminRoot);

  const logoutButton = document.getElementById('admin-logout-button');

  if (logoutButton) {
    logoutButton.addEventListener('click', () => {
      adminAuth.logout();
      window.location.href = 'auth.html';
    });
  }
};

renderAdminPage();
