const authRoot = document.getElementById('auth-page-root');
const auth = window.TopProAuth;

const getAuthMode = () => new URLSearchParams(window.location.search).get('mode') === 'register'
  ? 'register'
  : 'login';

const setAuthMessage = (message, type = 'info') => {
  const messageElement = document.getElementById('auth-message');

  if (!messageElement) {
    return;
  }

  messageElement.textContent = message;
  messageElement.dataset.type = type;
  messageElement.hidden = !message;
};

const renderAuthPage = () => {
  if (!authRoot || !auth) {
    return;
  }

  const currentUser = auth.getCurrentUser();
  const mode = getAuthMode();
  const isRegisterMode = mode === 'register';

  authRoot.innerHTML = `
    <div class="site-shell detail-shell auth-shell">
      <header class="topbar detail-topbar">
        <a class="brand" href="index.html#home" aria-label="Volver al inicio de Top Pro">
          <span class="brand-mark has-logo">
            <img class="brand-logo" src="./assets/logo.png?v=20260910a" alt="Top Pro logo" />
          </span>
          <span class="brand-copy">
            <strong>Top Pro</strong>
            <small>Rally-ready goods</small>
          </span>
        </a>

        <button
          class="nav-toggle"
          type="button"
          aria-expanded="false"
          aria-controls="auth-nav"
        >
          <span></span>
          <span></span>
          <span></span>
          <span class="sr-only">Abrir navegacion</span>
        </button>

        <nav class="nav detail-nav" id="auth-nav" aria-label="Navegacion secundaria">
          <a href="index.html#home">Inicio</a>
          <a href="productos.html">Productos</a>
        </nav>
      </header>

      <button class="mobile-menu-backdrop" type="button" aria-label="Cerrar navegacion"></button>

      <main class="auth-main">
        <section class="auth-panel">
          <div class="auth-copy">
            <p class="eyebrow">Cuenta Top Pro</p>
            <h1>${currentUser ? 'Mi cuenta' : (isRegisterMode ? 'Crear cuenta' : 'Iniciar sesion')}</h1>
            <p class="lede">
              ${currentUser
                ? 'Tu sesion esta activa en este navegador.'
                : 'Ingresa para guardar tu cuenta y acceder al panel si sos administrador.'}
            </p>
          </div>

          ${currentUser
            ? `
              <article class="account-summary">
                <span>${currentUser.role === 'admin' ? 'Administrador' : 'Cliente'}</span>
                <strong>${currentUser.name}</strong>
                <p>${currentUser.email}</p>
                <div class="auth-actions-row">
                  ${currentUser.role === 'admin' ? '<a class="button button-primary" href="admin.html">Abrir admin</a>' : '<a class="button button-primary" href="productos.html">Ver productos</a>'}
                  <button class="button button-secondary" id="logout-button" type="button">Cerrar sesion</button>
                </div>
              </article>
            `
            : `
              <div class="auth-card">
                <div class="auth-tabs" role="tablist" aria-label="Opciones de cuenta">
                  <a class="${!isRegisterMode ? 'is-active' : ''}" href="auth.html">Iniciar sesion</a>
                  <a class="${isRegisterMode ? 'is-active' : ''}" href="auth.html?mode=register">Crear cuenta</a>
                </div>

                <form class="auth-form" id="auth-form">
                  ${isRegisterMode
                    ? `
                      <label>
                        <span>Nombre</span>
                        <input name="name" type="text" autocomplete="name" required />
                      </label>
                    `
                    : ''}
                  <label>
                    <span>Email</span>
                    <input name="email" type="email" autocomplete="email" required />
                  </label>
                  <label>
                    <span>Contraseña</span>
                    <input name="password" type="password" autocomplete="${isRegisterMode ? 'new-password' : 'current-password'}" required minlength="6" />
                  </label>
                  <p class="auth-message" id="auth-message" hidden></p>
                  <button class="button button-primary" type="submit">${isRegisterMode ? 'Crear cuenta' : 'Iniciar sesion'}</button>
                </form>

                <article class="admin-access-note">
                  <span>Acceso admin</span>
                  <p>Si tenes permisos de administrador, inicia sesion con tu cuenta admin.</p>
                </article>
              </div>
            `}
        </section>
      </main>
    </div>
  `;

  auth.enhanceNavigation();
  auth.setupTopbarNavigation(authRoot);

  const logoutButton = document.getElementById('logout-button');

  if (logoutButton) {
    logoutButton.addEventListener('click', () => {
      auth.logout();
      renderAuthPage();
    });
  }

  const form = document.getElementById('auth-form');

  if (!form) {
    return;
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password')
    };
    const result = isRegisterMode ? await auth.register(payload) : await auth.login(payload);

    if (!result.ok) {
      setAuthMessage(result.message, 'error');
      return;
    }

    setAuthMessage(result.message, 'success');
    window.setTimeout(() => {
      window.location.href = result.user.role === 'admin' ? 'admin.html' : 'auth.html';
    }, 450);
  });
};

renderAuthPage();
