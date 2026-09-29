const storesData = window.TOP_PRO_DATA || {};
const storesList = storesData.stores || [];
const storesWhatsappNumber = storesData.whatsappNumber || '595986732551';
const storesAssetVersion = '20260618p';
const storesLogoAsset = './assets/logo.png';
const storesRoot = document.getElementById('stores-page-root');

const withStoresAssetVersion = (path) => `${path}?v=${storesAssetVersion}`;

const storesWhatsappHref = `https://wa.me/${storesWhatsappNumber}?text=${encodeURIComponent(
  'Hola Top Pro, deseo saber donde encontrar sus productos.'
)}`;

const setupStoresNavigation = () => {
  if (!storesRoot) {
    return;
  }

  const topbar = storesRoot.querySelector('.detail-topbar');
  const toggle = storesRoot.querySelector('.nav-toggle');
  const nav = storesRoot.querySelector('.detail-nav');
  const backdrop = storesRoot.querySelector('.mobile-menu-backdrop');

  if (!topbar || !toggle || !nav || !backdrop) {
    return;
  }

  const setOpen = (open) => {
    topbar.classList.toggle('is-open', open);
    nav.classList.toggle('is-open', open);
    backdrop.classList.toggle('is-visible', open);
    document.body.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', String(open));
  };

  const onKeyDown = (event) => {
    if (event.key === 'Escape') {
      setOpen(false);
    }
  };

  toggle.addEventListener('click', () => {
    setOpen(!topbar.classList.contains('is-open'));
  });

  backdrop.addEventListener('click', () => setOpen(false));

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setOpen(false));
  });

  window.addEventListener('keydown', onKeyDown);

  window.addEventListener('resize', () => {
    if (window.innerWidth > 760) {
      setOpen(false);
    }
  });
};

if (storesRoot) {
  const storesMarkup = storesList.length
    ? storesList.map(
      (store) => `
        <article class="store-card">
          <p class="eyebrow">Top Pro</p>
          <h2>${store.name}</h2>
          <p>${store.detail}</p>
        </article>
      `
    ).join('')
    : `
      <article class="store-card">
        <p class="eyebrow">Top Pro</p>
        <h2>Proximamente</h2>
        <p>Estamos preparando la informacion de nuestros puntos de venta aliados.</p>
      </article>
    `;

  storesRoot.innerHTML = `
    <div class="site-shell detail-shell">
      <header class="topbar detail-topbar">
        <a class="brand" href="index.html#home" aria-label="Volver al inicio de Top Pro">
          <span class="brand-mark has-logo">
            <img class="brand-logo" src="${withStoresAssetVersion(storesLogoAsset)}" alt="Top Pro logo" />
          </span>
          <span class="brand-copy">
            <strong>Top Pro</strong>
            <small>Rally Books & Design</small>
          </span>
        </a>

        <button
          class="nav-toggle"
          type="button"
          aria-expanded="false"
          aria-controls="stores-nav"
        >
          <span></span>
          <span></span>
          <span></span>
          <span class="sr-only">Abrir navegacion</span>
        </button>

        <nav class="nav detail-nav" id="stores-nav" aria-label="Navegacion secundaria">
          <a href="productos.html">Productos</a>
          <a href="index.html#contact">Contactanos</a>
        </nav>
      </header>

      <button class="mobile-menu-backdrop" type="button" aria-label="Cerrar navegacion"></button>

      <main class="stores-main">
        <section class="stores-hero-panel">
          <div>
            <p class="eyebrow"></p>
            <h1>Puntos de Venta</h1>
            <p class="lede">
              Podes ubicar productos Top Pro en estos puntos aliados. Te recomendamos consultar disponibilidad antes de acercarte.
            </p>
          </div>

          <div class="store-actions">
            <a class="button button-primary" href="productos.html">Ver productos</a>
            <a
              class="button button-secondary"
              href="${storesWhatsappHref}"
              target="_blank"
              rel="noopener noreferrer"
            >
              Consultar por WhatsApp
            </a>
          </div>
        </section>

        <section class="store-list" aria-label="Tiendas disponibles de Top Pro">
          ${storesMarkup}
        </section>
      </main>
    </div>
  `;

  setupStoresNavigation();
  setupStoresNavigation();

const cards = storesRoot.querySelectorAll('.store-card');

cards.forEach((card, index) => {
  const store = storesList[index];

  if (store?.action) {
    card.style.cursor = 'pointer';

    card.addEventListener('click', () => {
      store.action();
    });
  }
});




}
