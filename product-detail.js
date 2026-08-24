const detailData = window.TOP_PRO_DATA || {};
const detailProducts = detailData.products || [];
const detailWhatsappNumber = detailData.whatsappNumber || '595986732551';
const detailAssetVersion = '20260618p';
const detailLogoAsset = './assets/logo.png';
const detailRoot = document.getElementById('product-page-root');
const detailSlug = document.body.dataset.productSlug || '';

const detailProduct = detailProducts.find((item) => item.slug === detailSlug);

const withDetailAssetVersion = (path) => `${path}?v=${detailAssetVersion}`;

const sanitizeQuantity = (value) => {
  const parsedValue = Number.parseInt(value, 10);
  return Number.isFinite(parsedValue) && parsedValue > 0 ? parsedValue : 1;
};

const createWhatsappHref = (productName, quantity, selectedVariantLabel = '') => {
  const variantSuffix = selectedVariantLabel ? ` - ${selectedVariantLabel}` : '';
  const message = `Hola Top Pro, deseo el producto: ${productName}${variantSuffix} ${quantity}`;
  return `https://wa.me/${detailWhatsappNumber}?text=${encodeURIComponent(message)}`;
};

const setupDetailNavigation = () => {
  if (!detailRoot) {
    return;
  }

  const topbar = detailRoot.querySelector('.detail-topbar');
  const toggle = detailRoot.querySelector('.nav-toggle');
  const nav = detailRoot.querySelector('.detail-nav');
  const backdrop = detailRoot.querySelector('.mobile-menu-backdrop');

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

const renderMissingProduct = () => {
  if (!detailRoot) {
    return;
  }

  document.title = 'Producto no encontrado | Top Pro';
  detailRoot.innerHTML = `
    <div class="site-shell detail-shell">
      <main class="detail-main">
        <section class="not-found-panel">
          <p class="eyebrow">Top Pro</p>
          <h1>Producto no encontrado</h1>
          <p>No pudimos cargar esta pagina. Volve al catalogo principal para revisar los productos disponibles.</p>
          <a class="button button-primary" href="productos.html">Volver al catalogo</a>
        </section>
      </main>
    </div>
  `;
};

const renderProductDetail = () => {
  if (!detailRoot) {
    return;
  }

  if (!detailProduct) {
    renderMissingProduct();
    return;
  }

  document.title = `${detailProduct.name} | Top Pro`;

  const detailParagraphs = (detailProduct.detailDescription || [])
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join('');
  const detailVariants = Array.isArray(detailProduct.variants) ? detailProduct.variants : [];
  const hasDetailVariants = detailVariants.length > 0;
  const initialVariant = detailVariants[0] || null;
  const directViews = Array.isArray(detailProduct.views) ? detailProduct.views : [];
  const initialViews = hasDetailVariants ? (initialVariant?.views || []) : directViews;
  const initialFrontView = initialViews.find((view) => view.id === 'front') || initialViews[0] || null;
  const initialBackView = initialViews.find((view) => view.id === 'back') || initialViews[1] || initialFrontView;
  const hasImageRotation = Boolean(initialBackView);
  const variantSelectorMarkup = hasDetailVariants
    ? `
      <div class="detail-variant-panel" aria-label="Opciones del bolso organizador">
        <div class="detail-option-group">
          <span class="field-label">Elegir bolso</span>
          <select class="detail-variant-select" id="detail-bag-variant-select" aria-label="Elegir bolso">
            ${detailVariants.map((variant, index) => `
              <option value="${variant.id}"${index === 0 ? ' selected' : ''}>${variant.label}</option>
            `).join('')}
          </select>
        </div>
      </div>
    `
    : '';

  detailRoot.innerHTML = `
    <div class="site-shell detail-shell">
      <header class="topbar detail-topbar">
        <a class="brand" href="index.html#home" aria-label="Volver al inicio de Top Pro">
          <span class="brand-mark has-logo">
            <img class="brand-logo" src="${withDetailAssetVersion(detailLogoAsset)}" alt="Top Pro logo" />
          </span>
          <span class="brand-copy">
            <strong>Top Pro</strong>
            <small>Accesorios de rally</small>
          </span>
        </a>

        <button
          class="nav-toggle"
          type="button"
          aria-expanded="false"
          aria-controls="detail-nav"
        >
          <span></span>
          <span></span>
          <span></span>
          <span class="sr-only">Abrir navegacion</span>
        </button>

        <nav class="nav detail-nav" id="detail-nav" aria-label="Navegacion secundaria">
          <a href="productos.html">Productos</a>
          <a href="donde-encontrarnos.html">Contacto</a>
        </nav>
      </header>

      <button class="mobile-menu-backdrop" type="button" aria-label="Cerrar navegacion"></button>

      <main class="detail-main">
        <section class="detail-panel">
          <div class="detail-copy">
            <p class="eyebrow">${detailProduct.label}</p>
            <h1>${detailProduct.name}</h1>
            <p class="lede">${detailProduct.description}</p>

            <div class="detail-description">
              ${detailParagraphs}
            </div>

            <div class="detail-price-card">
              <span>Precio</span>
              <strong>${detailProduct.price}</strong>
            </div>
          </div>

          <aside class="detail-aside">
            <div
              class="detail-image-card detail-image-toggle${hasImageRotation ? ' has-rotation' : ''}"
              id="detail-image-toggle"
            >
              <img
                class="detail-product-image detail-product-image-front"
                id="detail-product-image-front"
                src="${withDetailAssetVersion(initialFrontView?.src || detailProduct.src)}"
                alt="${initialFrontView?.alt || detailProduct.alt}"
                data-fallback-src="${withDetailAssetVersion(detailProduct.src)}"
                data-view-id="front"
              />
              ${hasImageRotation
                ? `
                  <img
                    class="detail-product-image detail-product-image-back"
                    id="detail-product-image-back"
                    src="${withDetailAssetVersion(initialBackView.src)}"
                    alt=""
                    aria-hidden="true"
                    data-fallback-src="${withDetailAssetVersion(detailProduct.src)}"
                    data-view-id="back"
                  />
                `
                : ''}
            </div>

            ${variantSelectorMarkup}

            <div class="request-card">
              <p class="request-note">Elegi la cantidad y te preparamos el mensaje listo para WhatsApp.</p>
              <label class="field-label" for="product-quantity">Cantidad deseada</label>
              <input
                class="quantity-input"
                id="product-quantity"
                name="product-quantity"
                type="number"
                min="1"
                step="1"
                inputmode="numeric"
                value="1"
              />
              <a
                class="button button-primary detail-whatsapp-button"
                id="product-whatsapp-link"
                href="${createWhatsappHref(detailProduct.name, 1)}"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pedir a traves de whatsapp
              </a>
              <a class="button button-secondary" href="productos.html">Volver a productos</a>
            </div>
          </aside>
        </section>
      </main>
    </div>
  `;

  const quantityInput = detailRoot.querySelector('#product-quantity');
  const whatsappLink = detailRoot.querySelector('#product-whatsapp-link');
  const productTitle = detailRoot.querySelector('.detail-copy h1');
  const productPrice = detailRoot.querySelector('.detail-price-card strong');
  const frontProductImage = detailRoot.querySelector('#detail-product-image-front');
  const backProductImage = detailRoot.querySelector('#detail-product-image-back');
  const productImages = [frontProductImage, backProductImage].filter(Boolean);
  const imageToggle = detailRoot.querySelector('#detail-image-toggle');
  const variantSelect = detailRoot.querySelector('#detail-bag-variant-select');
  let selectedVariantId = initialVariant?.id || '';

  setupDetailNavigation();

  if (!quantityInput || !whatsappLink) {
    return;
  }

  const getSelectedVariant = () => detailVariants.find((variant) => variant.id === selectedVariantId) || initialVariant;

  const getVariantView = (variant, viewId) => {
    const variantViews = hasDetailVariants ? (variant?.views || []) : directViews;
    return variantViews.find((view) => view.id === viewId)
      || (viewId === 'front' ? variantViews[0] : variantViews[1])
      || variantViews[0]
      || null;
  };

  const syncImageFallback = (imageElement) => {
    if (!imageElement) {
      return;
    }

    imageElement.onerror = () => {
      const fallbackSrc = imageElement.dataset.fallbackSrc;

      if (!fallbackSrc || imageElement.dataset.fallbackApplied === 'true') {
        return;
      }

      imageElement.dataset.fallbackApplied = 'true';
      imageElement.src = fallbackSrc;
    };

    imageElement.onload = () => {
      imageElement.dataset.fallbackApplied = 'false';
    };
  };

  const syncVariantState = () => {
    const selectedVariant = getSelectedVariant();
    const frontView = getVariantView(selectedVariant, 'front');
    const backView = getVariantView(selectedVariant, 'back');
    const selectedProductName = hasDetailVariants ? (selectedVariant?.label || detailProduct.name) : detailProduct.name;

    if (variantSelect && selectedVariant) {
      variantSelect.value = selectedVariant.id;
    }

    if (productTitle) {
      productTitle.textContent = selectedProductName;
    }

    if (productPrice) {
      productPrice.textContent = selectedVariant?.price || detailProduct.price;
    }

    document.title = `${selectedProductName} | Top Pro`;

    if (frontProductImage && frontView) {
      frontProductImage.dataset.fallbackApplied = 'false';
      frontProductImage.src = withDetailAssetVersion(frontView.src);
      frontProductImage.alt = frontView.alt || detailProduct.alt;
      frontProductImage.dataset.viewId = 'front';
    }

    if (backProductImage && backView) {
      backProductImage.dataset.fallbackApplied = 'false';
      backProductImage.src = withDetailAssetVersion(backView.src);
      backProductImage.dataset.viewId = 'back';
    }

    if (imageToggle) {
      const imageLabel = hasDetailVariants
        ? (selectedVariant?.label || detailProduct.name)
        : detailProduct.name;
      imageToggle.setAttribute('aria-label', `${imageLabel} frente y dorso`);
    }
  };

  const syncWhatsappLink = () => {
    const quantity = sanitizeQuantity(quantityInput.value);
    const selectedVariant = getSelectedVariant();
    const selectedVariantLabel = selectedVariant?.whatsappLabel || '';
    quantityInput.value = String(quantity);
    whatsappLink.href = createWhatsappHref(detailProduct.name, quantity, selectedVariantLabel);
    whatsappLink.setAttribute(
      'aria-label',
      `Pedir ${detailProduct.name}${selectedVariantLabel ? ` ${selectedVariantLabel}` : ''} en cantidad ${quantity} a traves de WhatsApp`
    );
  };

  if (variantSelect) {
    variantSelect.addEventListener('change', () => {
      selectedVariantId = variantSelect.value || selectedVariantId;
      syncVariantState();
      syncWhatsappLink();
    });
  }

  quantityInput.addEventListener('input', syncWhatsappLink);
  quantityInput.addEventListener('blur', syncWhatsappLink);
  productImages.forEach((imageElement) => {
    syncImageFallback(imageElement);
  });
  syncVariantState();
  syncWhatsappLink();
};

renderProductDetail();
