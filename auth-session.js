(function () {
  const USERS_KEY = 'top-pro-users';
  const SESSION_KEY = 'top-pro-session';
  const TOKEN_KEY = 'top-pro-api-token';
  const ADMIN_EMAIL = 'admin@toppro.com';
  const ADMIN_PASSWORD = 'TopProAdmin2026';
  const API_BASE = `${window.location.origin}/api`;
  let cachedUsers = [];

  const getProducts = () => window.TopProProducts?.getProducts?.() || window.TOP_PRO_DATA?.products || [];

  const normalizeNavHref = (href = '') => href.replace(/^\.?\//, '');

  const ensureNavLayout = (nav) => {
    const topbar = nav.closest('.topbar, .detail-topbar');
    let center = nav.querySelector('.nav-center');
    let actions = topbar?.querySelector(':scope > .header-actions') || nav.querySelector('.nav-actions');

    if (!center) {
      center = document.createElement('div');
      center.className = 'nav-center';
      nav.prepend(center);
    }

    if (!actions) {
      actions = document.createElement('div');
      actions.className = 'header-actions';
      if (topbar) {
        const toggle = topbar.querySelector(':scope > .nav-toggle');
        topbar.insertBefore(actions, toggle || null);
      } else {
        actions.className = 'nav-actions';
        nav.appendChild(actions);
      }
    } else if (topbar && actions.parentElement !== topbar) {
      actions.className = 'header-actions';
      const toggle = topbar.querySelector(':scope > .nav-toggle');
      topbar.insertBefore(actions, toggle || null);
    }

    if (topbar) {
      const brand = topbar.querySelector(':scope > .brand');
      const toggle = topbar.querySelector(':scope > .nav-toggle');
      if (brand && nav.previousElementSibling !== brand) {
        topbar.insertBefore(nav, brand.nextElementSibling);
      }
      if (toggle && actions.nextElementSibling !== toggle) {
        topbar.insertBefore(actions, toggle);
      } else if (!toggle && actions.previousElementSibling !== nav) {
        topbar.insertBefore(actions, nav.nextElementSibling);
      }
    }

    [...nav.children].forEach((child) => {
      if (child === center || child === actions) {
        return;
      }

      if (child.matches('[data-auth-nav], [data-cart-nav], [data-search-nav], .nav-logout-button')) {
        actions.appendChild(child);
      } else {
        center.appendChild(child);
      }
    });

    center.querySelectorAll('a').forEach((link) => {
      if (normalizeNavHref(link.getAttribute('href')) === 'donde-encontrarnos.html' || link.getAttribute('href') === '#contact' || link.getAttribute('href') === 'index.html#contact') {
        link.textContent = 'Contactanos';
      }
    });

    return { center, actions };
  };

  const ensureSearchNavigation = (nav) => {
    const { actions } = ensureNavLayout(nav);

    if (actions.querySelector('[data-search-nav]')) {
      return;
    }

    const wrapper = document.createElement('div');
    wrapper.className = 'nav-search';
    wrapper.setAttribute('data-search-nav', 'true');
    const searchId = `site-search-${document.querySelectorAll('[data-search-nav]').length + 1}`;
    wrapper.innerHTML = `
      <button class="nav-icon-button" type="button" aria-label="Buscar productos" aria-expanded="false">
        <img class="nav-icon" src="assets/search.png" alt="" />
      </button>
      <form class="nav-search-panel">
        <label class="sr-only" for="${searchId}">Buscar productos</label>
        <input placeholder="Buscar productos" autocomplete="off" />
        <div class="nav-search-results"></div>
      </form>
    `;

    const button = wrapper.querySelector('button');
    const form = wrapper.querySelector('form');
    const input = wrapper.querySelector('input');
    const results = wrapper.querySelector('.nav-search-results');
    const label = wrapper.querySelector('label');
    input.id = label.getAttribute('for');

    const closeSearch = () => {
      wrapper.classList.remove('is-open');
      form.hidden = true;
      button.setAttribute('aria-expanded', 'false');
    };

    const renderResults = () => {
      const query = input.value.trim().toLowerCase();
      const products = getProducts();
      const matches = query
        ? products.filter((product) => [product.name, product.label, product.description, product.price, product.slug].join(' ').toLowerCase().includes(query))
        : products;

      results.innerHTML = matches.length
        ? matches.map((product) => `<a href="${product.page || `producto.html?slug=${encodeURIComponent(product.slug || '')}`}"><span>${product.name}</span><small>${product.price || ''}</small></a>`).join('')
        : '<p>No encontramos productos.</p>';
    };

    button.addEventListener('click', () => {
      const open = !wrapper.classList.contains('is-open');
      wrapper.classList.toggle('is-open', open);
      form.hidden = !open;
      button.setAttribute('aria-expanded', String(open));
      renderResults();
      if (open) {
        input.focus();
      }
    });

    document.addEventListener('pointerdown', (event) => {
      if (!wrapper.contains(event.target)) {
        closeSearch();
      }
    });
    window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closeSearch();
      }
    });
    input.addEventListener('input', renderResults);
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const firstResult = results.querySelector('a');
      if (firstResult) {
        closeSearch();
        window.location.href = firstResult.href;
      }
    });
    results.addEventListener('click', (event) => {
      if (event.target.closest('a')) {
        closeSearch();
      }
    });

    renderResults();
    form.hidden = true;
    actions.prepend(wrapper);
  };

  const normalizeEmail = (email) => String(email || '').trim().toLowerCase();

  const hashPassword = (password) => {
    const value = String(password || '');
    let hash = 2166136261;

    for (let index = 0; index < value.length; index += 1) {
      hash ^= value.charCodeAt(index);
      hash = Math.imul(hash, 16777619);
    }

    return (hash >>> 0).toString(16).padStart(8, '0');
  };

  const getStoredUsers = () => {
    try {
      const parsedUsers = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
      return Array.isArray(parsedUsers) ? parsedUsers : [];
    } catch (error) {
      return [];
    }
  };

  const saveUsers = (users) => {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  };

  const getPublicUser = (user) => {
    if (!user) {
      return null;
    }

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role || 'customer'
    };
  };

  const ensureAdminAccount = () => {
    const users = getStoredUsers();
    const adminIndex = users.findIndex((user) => normalizeEmail(user.email) === ADMIN_EMAIL);
    const adminUser = {
      id: 'admin',
      name: 'Admin Top Pro',
      email: ADMIN_EMAIL,
      role: 'admin',
      passwordHash: hashPassword(ADMIN_PASSWORD),
      createdAt: '2026-09-10T00:00:00.000Z'
    };

    if (adminIndex >= 0) {
      users[adminIndex] = { ...users[adminIndex], ...adminUser };
    } else {
      users.unshift(adminUser);
    }

    saveUsers(users);
    return users;
  };

  const getUsers = () => ensureAdminAccount();
  const getToken = () => localStorage.getItem(TOKEN_KEY) || '';

  const apiRequest = async (path, options = {}) => {
    const headers = {
      'Content-Type': 'application/json',
      ...(options.headers || {})
    };
    const token = getToken();

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    const response = await fetch(`${API_BASE}${path}`, { ...options, headers });
    const payload = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(payload.error || 'No se pudo completar la accion.');
    }

    return payload;
  };

  const setSession = (user, token = '') => {
    const sessionUser = getPublicUser(user);

    if (sessionUser) {
      localStorage.setItem(SESSION_KEY, JSON.stringify(sessionUser));
      if (token) {
        localStorage.setItem(TOKEN_KEY, token);
      }
    } else {
      localStorage.removeItem(SESSION_KEY);
      localStorage.removeItem(TOKEN_KEY);
    }

    window.dispatchEvent(new CustomEvent('toppro-auth-change', { detail: sessionUser }));
    return sessionUser;
  };

  const getCurrentUser = () => {
    try {
      const parsedSession = JSON.parse(localStorage.getItem(SESSION_KEY) || 'null');
      return parsedSession && parsedSession.email ? parsedSession : null;
    } catch (error) {
      return null;
    }
  };

  const setupTopbarNavigation = (root = document) => {
    const topbar = root.querySelector('.detail-topbar, .topbar');
    const toggle = root.querySelector('.nav-toggle');
    const nav = root.querySelector('.detail-nav, .nav');
    const backdrop = root.querySelector('.mobile-menu-backdrop');

    if (!topbar || !toggle || !nav || !backdrop || topbar.dataset.authToggleReady === 'true') {
      return;
    }

    const setOpen = (open) => {
      topbar.querySelectorAll('.nav-search').forEach((search) => {
        const form = search.querySelector('.nav-search-panel');
        const button = search.querySelector('.nav-icon-button');
        search.classList.remove('is-open');
        if (form) {
          form.hidden = true;
        }
        if (button) {
          button.setAttribute('aria-expanded', 'false');
        }
      });
      topbar.classList.toggle('is-open', open);
      nav.classList.toggle('is-open', open);
      backdrop.classList.toggle('is-visible', open);
      document.body.classList.toggle('menu-open', open);
      toggle.setAttribute('aria-expanded', String(open));
    };

    topbar.dataset.authToggleReady = 'true';
    toggle.addEventListener('click', () => setOpen(!topbar.classList.contains('is-open')));
    backdrop.addEventListener('click', () => setOpen(false));
    nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setOpen(false)));
    window.addEventListener('resize', () => {
      if (window.innerWidth > 760) {
        setOpen(false);
      }
    });
  };

  const getRemoteUsers = async () => {
    try {
      const payload = await apiRequest('/users', { method: 'GET' });
      cachedUsers = Array.isArray(payload.users) ? payload.users : [];
      return cachedUsers;
    } catch (error) {
      return getUsers().map(getPublicUser);
    }
  };

  const register = async ({ name, email, password }) => {
    const cleanName = String(name || '').trim();
    const cleanEmail = normalizeEmail(email);
    const cleanPassword = String(password || '');

    if (cleanName.length < 2) {
      return { ok: false, message: 'Escribi tu nombre.' };
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      return { ok: false, message: 'Ingresa un email valido.' };
    }

    if (cleanPassword.length < 6) {
      return { ok: false, message: 'La contraseña debe tener al menos 6 caracteres.' };
    }

    try {
      const payload = await apiRequest('/auth/register', {
        method: 'POST',
        body: JSON.stringify({ name: cleanName, email: cleanEmail, password: cleanPassword })
      });
      return { ok: true, user: setSession(payload.user, payload.token), message: 'Cuenta creada correctamente.' };
    } catch (error) {
      if (window.location.protocol !== 'file:') {
        return { ok: false, message: error.message };
      }
    }

    const users = getUsers();

    if (users.some((user) => normalizeEmail(user.email) === cleanEmail)) {
      return { ok: false, message: 'Ya existe una cuenta con ese email.' };
    }

    const user = {
      id: `user-${Date.now()}`,
      name: cleanName,
      email: cleanEmail,
      role: 'customer',
      passwordHash: hashPassword(cleanPassword),
      createdAt: new Date().toISOString()
    };

    users.push(user);
    saveUsers(users);
    return { ok: true, user: setSession(user), message: 'Cuenta creada correctamente.' };
  };

  const login = async ({ email, password }) => {
    const cleanEmail = normalizeEmail(email);

    try {
      const payload = await apiRequest('/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email: cleanEmail, password })
      });
      return { ok: true, user: setSession(payload.user, payload.token), message: 'Sesion iniciada.' };
    } catch (error) {
      if (window.location.protocol !== 'file:') {
        return { ok: false, message: error.message };
      }
    }

    const users = getUsers();
    const user = users.find((candidate) => normalizeEmail(candidate.email) === cleanEmail);

    if (!user || user.passwordHash !== hashPassword(password)) {
      return { ok: false, message: 'Email o contraseña incorrectos.' };
    }

    return { ok: true, user: setSession(user), message: 'Sesion iniciada.' };
  };

  const logout = () => {
    setSession(null);
  };

  const enhanceNavigation = () => {
    const currentUser = getCurrentUser();
    const navs = document.querySelectorAll('.nav, .detail-nav');

    navs.forEach((nav) => {
      ensureSearchNavigation(nav);
      const layout = ensureNavLayout(nav);
      const actions = layout.actions;
      const authState = currentUser
        ? `${currentUser.role}:${currentUser.email}:${currentUser.name}`
        : 'guest';

      if (nav.dataset.authState === authState && actions.querySelector('[data-auth-nav]')) {
        return;
      }

      nav.dataset.authState = authState;
      actions.querySelectorAll('[data-auth-nav]').forEach((item) => item.remove());

      if (currentUser?.role === 'admin') {
        actions.insertAdjacentHTML('beforeend', '<a data-auth-nav href="admin.html">Admin</a>');
      }

      if (currentUser) {
        actions.insertAdjacentHTML(
          'beforeend',
          `<a data-auth-nav class="nav-icon-button" href="auth.html" aria-label="${currentUser.name || 'Mi cuenta'}"><img class="nav-icon nav-login-icon" src="assets/login-cropped.png" alt="" /></a><button data-auth-nav class="nav-logout-button" type="button">Salir</button>`
        );
        nav.querySelectorAll('.nav-logout-button').forEach((button) => {
          button.addEventListener('click', () => {
            logout();
            window.location.href = 'index.html#home';
          });
        });
        return;
      }

      actions.insertAdjacentHTML('beforeend', '<a data-auth-nav class="nav-icon-button" href="auth.html" aria-label="Ingresar"><img class="nav-icon nav-login-icon" src="assets/login-cropped.png" alt="" /></a>');
    });
  };

  window.TopProAuth = {
    adminEmail: ADMIN_EMAIL,
    getUsers,
    getRemoteUsers,
    getCachedUsers: () => cachedUsers,
    getCurrentUser,
    getToken,
    register,
    login,
    logout,
    enhanceNavigation,
    setupTopbarNavigation
  };

  ensureAdminAccount();

  const scheduleNavigationEnhancement = () => window.requestAnimationFrame(enhanceNavigation);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', scheduleNavigationEnhancement);
  } else {
    scheduleNavigationEnhancement();
  }

  window.addEventListener('toppro-auth-change', scheduleNavigationEnhancement);

  const observer = new MutationObserver(scheduleNavigationEnhancement);
  observer.observe(document.documentElement, { childList: true, subtree: true });
})();
