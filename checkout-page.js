const checkoutPageRoot = document.getElementById('checkout-page-root');
const checkoutAssetVersion = '20260910d';
const checkoutLogoAsset = './assets/logo.png';

const withCheckoutAssetVersion = (path) => /^(data:|blob:)/.test(String(path || '')) ? path : `${path}?v=${checkoutAssetVersion}`;

const setupCheckoutNavigation = () => {
  const topbar = checkoutPageRoot?.querySelector('.detail-topbar');
  const toggle = checkoutPageRoot?.querySelector('.nav-toggle');
  const nav = checkoutPageRoot?.querySelector('.detail-nav');
  const backdrop = checkoutPageRoot?.querySelector('.mobile-menu-backdrop');

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

  toggle.addEventListener('click', () => setOpen(!topbar.classList.contains('is-open')));
  backdrop.addEventListener('click', () => setOpen(false));
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setOpen(false)));
};

const getCheckoutMessage = () => {
  const form = checkoutPageRoot?.querySelector('#checkout-form');
  if (!form) {
    return '';
  }

  const formData = new FormData(form);
  return [
    `Nombre: ${formData.get('name') || ''}`,
    `Telefono: ${formData.get('phone') || ''}`,
    `Email: ${formData.get('email') || ''}`,
    `Entrega: ${formData.get('delivery') || ''}`,
    `Notas: ${formData.get('notes') || ''}`
  ].join('\n');
};

const renderCheckoutPage = () => {
  if (!checkoutPageRoot) {
    return;
  }

  const cartItems = window.TopProCart?.getCart?.() || [];
  const hasItems = cartItems.length > 0;

  checkoutPageRoot.innerHTML = `
    <div class="site-shell detail-shell">
      <header class="topbar detail-topbar">
        <a class="brand" href="index.html#home" aria-label="Volver al inicio de Top Pro">
          <span class="brand-mark has-logo">
            <img class="brand-logo" src="${withCheckoutAssetVersion(checkoutLogoAsset)}" alt="Top Pro logo" />
          </span>
          <span class="brand-copy">
            <strong>Top Pro</strong>
            <small>Rally-ready goods</small>
          </span>
        </a>

        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="checkout-nav">
          <span></span>
          <span></span>
          <span></span>
          <span class="sr-only">Abrir navegacion</span>
        </button>

        <nav class="nav detail-nav" id="checkout-nav" aria-label="Navegacion secundaria">
          <a href="index.html#home">Inicio</a>
          <a href="productos.html">Productos</a>
          <a href="carrito.html">Carrito</a>
        </nav>
      </header>

      <button class="mobile-menu-backdrop" type="button" aria-label="Cerrar navegacion"></button>

      <main class="cart-main">
        <section class="cart-panel checkout-panel">
          <div class="cart-heading">
            <p class="eyebrow">Checkout</p>
            <h1>Finalizar pedido</h1>
            <p class="lede">Dejanos tus datos para preparar el pedido. Por ahora la confirmacion final se envia por WhatsApp.</p>
          </div>

          ${hasItems ? `
            <form class="checkout-form" id="checkout-form">
              <label>
                <span>Nombre</span>
                <input name="name" type="text" autocomplete="name" required />
              </label>
              <label>
                <span>Telefono</span>
                <input name="phone" type="tel" autocomplete="tel" required />
              </label>
              <label>
                <span>Email</span>
                <input name="email" type="email" autocomplete="email" />
              </label>
              <label>
                <span>Entrega</span>
                <select name="delivery">
                  <option value="Retiro en punto de venta">Retiro en punto de venta</option>
                  <option value="Coordinar envio">Coordinar envio</option>
                </select>
              </label>
              <label class="checkout-form-wide">
                <span>Notas</span>
                <textarea name="notes" rows="4" placeholder="Talles, horarios, direccion o aclaraciones."></textarea>
              </label>
              <button class="button button-primary checkout-form-wide" type="submit">Confirmar por WhatsApp</button>
            </form>

            <aside class="cart-summary checkout-summary">
              <h2>Resumen</h2>
              ${cartItems.map((item) => `
                <div class="checkout-summary-item">
                  <img src="${withCheckoutAssetVersion(item.src)}" alt="${item.alt || item.name}" />
                  <p>${item.quantity} x ${item.name}</p>
                  <strong>${item.price || 'A confirmar'}</strong>
                </div>
              `).join('')}
              <a class="button button-secondary" href="carrito.html">Editar carrito</a>
            </aside>
          ` : `
            <article class="not-found-panel cart-empty-panel">
              <p class="eyebrow">Checkout</p>
              <h1>No hay productos</h1>
              <p>Primero agrega productos al carrito y despues podes completar tus datos.</p>
              <a class="button button-primary" href="productos.html">Ver productos</a>
            </article>
          `}
        </section>
      </main>
    </div>
  `;

  setupCheckoutNavigation();
  window.TopProAuth?.enhanceNavigation?.();
  window.TopProCart?.refreshNavigation?.();

  checkoutPageRoot.querySelector('#checkout-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    window.open(window.TopProCart.buildWhatsAppHref(getCheckoutMessage()), '_blank', 'noopener,noreferrer');
  });
};

window.addEventListener('toppro-cart-change', renderCheckoutPage);
renderCheckoutPage();
