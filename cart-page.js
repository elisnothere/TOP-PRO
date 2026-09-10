const cartPageRoot = document.getElementById('cart-page-root');
const cartPageAssetVersion = '20260910d';
const cartPageLogoAsset = './assets/logo.png';

const withCartAssetVersion = (path) => /^(data:|blob:)/.test(String(path || '')) ? path : `${path}?v=${cartPageAssetVersion}`;
const sanitizeCartQuantity = (value) => {
  const parsedValue = Number.parseInt(value, 10);
  return Number.isFinite(parsedValue) && parsedValue > 0 ? parsedValue : 1;
};

const setupCartNavigation = () => {
  const topbar = cartPageRoot?.querySelector('.detail-topbar');
  const toggle = cartPageRoot?.querySelector('.nav-toggle');
  const nav = cartPageRoot?.querySelector('.detail-nav');
  const backdrop = cartPageRoot?.querySelector('.mobile-menu-backdrop');

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

const renderCartPage = () => {
  if (!cartPageRoot) {
    return;
  }

  const cartItems = window.TopProCart?.getCart?.() || [];
  const hasItems = cartItems.length > 0;
  const cartTotal = window.TopProCart?.getTotal?.() || 0;
  const formattedCartTotal = window.TopProCart?.formatUsdTotal?.(cartTotal) || '';
  const itemsMarkup = hasItems
    ? cartItems.map((item) => `
      <article class="cart-item">
        <a class="cart-item-image" href="${item.page || 'productos.html'}" aria-label="Ver ${item.name}">
          <img src="${withCartAssetVersion(item.src)}" alt="${item.alt || item.name}" />
        </a>
        <div class="cart-item-copy">
          <span>${item.variantLabel || item.baseName || 'Producto Top Pro'}</span>
          <h2>${item.name}</h2>
          <strong>${item.price || 'Precio a confirmar'}</strong>
        </div>
        <label class="cart-quantity-field">
          <span>Cantidad</span>
          <input type="number" min="1" step="1" inputmode="numeric" value="${sanitizeCartQuantity(item.quantity)}" data-cart-quantity="${item.key}" />
        </label>
        <button class="button button-secondary cart-remove-button" type="button" data-remove-cart-item="${item.key}">
          Quitar
        </button>
      </article>
    `).join('')
    : `
      <article class="not-found-panel cart-empty-panel">
        <p class="eyebrow">Carrito</p>
        <h1>Tu carrito esta vacio</h1>
        <p>Agrega productos desde el catalogo y despues podes pedir todo junto por WhatsApp o avanzar al checkout.</p>
        <a class="button button-primary" href="productos.html">Ver productos</a>
      </article>
    `;

  cartPageRoot.innerHTML = `
    <div class="site-shell detail-shell">
      <header class="topbar detail-topbar">
        <a class="brand" href="index.html#home" aria-label="Volver al inicio de Top Pro">
          <span class="brand-mark has-logo">
            <img class="brand-logo" src="${withCartAssetVersion(cartPageLogoAsset)}" alt="Top Pro logo" />
          </span>
          <span class="brand-copy">
            <strong>Top Pro</strong>
            <small>Rally-ready goods</small>
          </span>
        </a>

        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="cart-nav">
          <span></span>
          <span></span>
          <span></span>
          <span class="sr-only">Abrir navegacion</span>
        </button>

        <nav class="nav detail-nav" id="cart-nav" aria-label="Navegacion secundaria">
          <a href="index.html#home">Inicio</a>
          <a href="productos.html">Productos</a>
          <a href="donde-encontrarnos.html">Contacto</a>
        </nav>
      </header>

      <button class="mobile-menu-backdrop" type="button" aria-label="Cerrar navegacion"></button>

      <main class="cart-main">
        <section class="cart-panel">
          <div class="cart-heading">
            <p class="eyebrow">Pedido</p>
            <h1>Carrito</h1>
            <p class="lede">Revisa tus productos y cuando este todo listo, envia el pedido completo por WhatsApp o continua al checkout.</p>
          </div>

          <div class="cart-items">
            ${itemsMarkup}
          </div>

          ${hasItems ? `
            <aside class="cart-summary">
              ${cartTotal > 0 ? `
                <div>
                  <span>Total</span>
                  <strong>${formattedCartTotal}</strong>
                </div>
              ` : ''}
              <div class="cart-summary-actions">
                <a class="button button-primary" id="cart-whatsapp-link" href="${window.TopProCart.buildWhatsAppHref()}" target="_blank" rel="noopener noreferrer">
                  Pedir por WhatsApp
                </a>
                <a class="button button-secondary" href="checkout.html">Proceder a checkout</a>
                <button class="button button-secondary" type="button" id="clear-cart-button">Vaciar carrito</button>
              </div>
            </aside>
          ` : ''}
        </section>
      </main>
    </div>
  `;

  setupCartNavigation();
  window.TopProAuth?.enhanceNavigation?.();
  window.TopProCart?.refreshNavigation?.();

  cartPageRoot.querySelectorAll('[data-cart-quantity]').forEach((input) => {
    input.addEventListener('change', () => {
      window.TopProCart.updateQuantity(input.dataset.cartQuantity, input.value);
      renderCartPage();
    });
    input.addEventListener('blur', () => {
      input.value = String(sanitizeCartQuantity(input.value));
    });
  });

  cartPageRoot.querySelectorAll('[data-remove-cart-item]').forEach((button) => {
    button.addEventListener('click', () => {
      window.TopProCart.removeItem(button.dataset.removeCartItem);
      renderCartPage();
    });
  });

  cartPageRoot.querySelector('#clear-cart-button')?.addEventListener('click', () => {
    window.TopProCart.clearCart();
    renderCartPage();
  });
};

window.addEventListener('toppro-cart-change', renderCartPage);
renderCartPage();
