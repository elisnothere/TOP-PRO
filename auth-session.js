(function () {
  const USERS_KEY = 'top-pro-users';
  const SESSION_KEY = 'top-pro-session';
  const ADMIN_EMAIL = 'admin@toppro.com';
  const ADMIN_PASSWORD = 'TopProAdmin2026';

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

  const setSession = (user) => {
    const sessionUser = getPublicUser(user);

    if (sessionUser) {
      localStorage.setItem(SESSION_KEY, JSON.stringify(sessionUser));
    } else {
      localStorage.removeItem(SESSION_KEY);
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

  const register = ({ name, email, password }) => {
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

  const login = ({ email, password }) => {
    const cleanEmail = normalizeEmail(email);
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
      const authState = currentUser
        ? `${currentUser.role}:${currentUser.email}:${currentUser.name}`
        : 'guest';

      if (nav.dataset.authState === authState && nav.querySelector('[data-auth-nav]')) {
        return;
      }

      nav.dataset.authState = authState;
      nav.querySelectorAll('[data-auth-nav]').forEach((item) => item.remove());

      if (currentUser?.role === 'admin') {
        nav.insertAdjacentHTML('beforeend', '<a data-auth-nav href="admin.html">Admin</a>');
      }

      if (currentUser) {
        nav.insertAdjacentHTML(
          'beforeend',
          `<a data-auth-nav href="auth.html">${currentUser.name || 'Mi cuenta'}</a><button data-auth-nav class="nav-logout-button" type="button">Salir</button>`
        );
        nav.querySelectorAll('.nav-logout-button').forEach((button) => {
          button.addEventListener('click', () => {
            logout();
            window.location.href = 'index.html#home';
          });
        });
        return;
      }

      nav.insertAdjacentHTML('beforeend', '<a data-auth-nav href="auth.html">Ingresar</a>');
    });
  };

  window.TopProAuth = {
    adminEmail: ADMIN_EMAIL,
    getUsers,
    getCurrentUser,
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
