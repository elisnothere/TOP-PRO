const productsPageData = window.TOP_PRO_DATA || {};
const catalogProducts = productsPageData.products || [];
const productsPageRoot = document.getElementById('products-page-root');
const productsPageAssetVersion = '20260618p';
const productsPageLogoAsset = './assets/logo.png';

const withProductsAssetVersion = (path) => `${path}?v=${productsPageAssetVersion}`;

const getCatalogProductMediaMarkup = (product) => {
  const productVariants = Array.isArray(product.variants) ? product.variants : [];
  const bagVariantFronts = productVariants
    .map((variant) => {
      const variantViews = Array.isArray(variant.views) ? variant.views : [];
      const frontView = variantViews.find((view) => view.id === 'front') || variantViews[0] || null;

      if (!frontView) {
        return null;
      }

      return {
        id: variant.id,
        src: frontView.src,
        alt: frontView.alt || `${product.name} ${variant.label}`
      };
    })
    .filter(Boolean);

  if (product.slug === 'bolso-organizador' && bagVariantFronts.length > 0) {
    return `
      <div class="catalog-product-image-grid">
        ${bagVariantFronts.map((variant) => `
          <div class="catalog-product-image-tile" data-variant-id="${variant.id}">
            <img src="${withProductsAssetVersion(variant.src)}" alt="${variant.alt}" />
          </div>
        `).join('')}
      </div>
    `;
  }

  return `<img src="${withProductsAssetVersion(product.src)}" alt="${product.alt}" />`;
};

const setupProductsNavigation = () => {
  if (!productsPageRoot) {
    return;
  }

  const topbar = productsPageRoot.querySelector('.detail-topbar');
  const toggle = productsPageRoot.querySelector('.nav-toggle');
  const nav = productsPageRoot.querySelector('.detail-nav');
  const backdrop = productsPageRoot.querySelector('.mobile-menu-backdrop');

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

if (productsPageRoot) {
  const productCardsMarkup = catalogProducts.length
    ? catalogProducts.map(
      (product) => `
        <a class="catalog-product-link" href="${product.page}" aria-label="Ver detalle de ${product.name}">
          <article class="catalog-product-card">
            <div class="catalog-product-image-wrap">
              ${getCatalogProductMediaMarkup(product)}
            </div>

            <div class="catalog-product-copy">
              <span>${product.label}</span>
              <h2>${product.name}</h2>
              <p>${product.description}</p>
            </div>

            <div class="catalog-product-footer">
              <strong class="catalog-product-price">${product.price}</strong>
              <span class="catalog-product-cta">Ver producto</span>
            </div>
          </article>
        </a>
      `
    ).join('')
    : `
      <article class="not-found-panel">
        <p class="eyebrow">Top Pro</p>
        <h1>Sin productos por ahora</h1>
        <p>Estamos preparando el catalogo. Volve al inicio para conocer la marca.</p>
        <a class="button button-primary" href="index.html#home">Volver al inicio</a>
      </article>
    `;

  productsPageRoot.innerHTML = `
    <div class="site-shell detail-shell">
      <header class="topbar detail-topbar">
        <a class="brand" href="index.html#home" aria-label="Volver al inicio de Top Pro">
          <span class="brand-mark has-logo">
            <img class="brand-logo" src="${withProductsAssetVersion(productsPageLogoAsset)}" alt="Top Pro logo" />
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
          aria-controls="products-nav"
        >
          <span></span>
          <span></span>
          <span></span>
          <span class="sr-only">Abrir navegacion</span>
        </button>

        <nav class="nav detail-nav" id="products-nav" aria-label="Navegacion secundaria">
          <a href="index.html#featured">Inicio</a>
          <a href="donde-encontrarnos.html">Contacto</a>
        </nav>
      </header>

      <button class="mobile-menu-backdrop" type="button" aria-label="Cerrar navegacion"></button>

      <main class="catalog-main">
        <section class="catalog-hero-panel">
          <div>
            <p class="eyebrow"></p>
            <h1>Productos disponibles:</h1>
            <br/>
            <p class="lede">
              Revisa precios, conoce cada producto y entra a su pagina dedicada para pedirlo por WhatsApp.
            </p>
          </div>

          <div class="store-actions">
            <a class="button button-primary" href="donde-encontrarnos.html">Donde encontrarnos</a>
            <a class="button button-secondary" href="index.html#home">Volver al inicio</a>
          </div>
        </section>

        <section class="catalog-grid" aria-label="Catalogo completo de productos Top Pro">
          ${productCardsMarkup}
        </section>
      </main>
    </div>
  `;

  setupProductsNavigation();
}