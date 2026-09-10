const detailData = window.TOP_PRO_DATA || {};
const detailProducts = detailData.products || [];
const detailAssetVersion = '20260910b';
const detailLogoAsset = './assets/logo.png';
const detailRoot = document.getElementById('product-page-root');
const detailSlug = document.body.dataset.productSlug || new URLSearchParams(window.location.search).get('slug') || '';

let detailProduct = detailProducts.find((item) => item.slug === detailSlug);

const getCurrentDetailProduct = () => {
  const products = window.TopProProducts?.getProducts?.() || window.TOP_PRO_DATA?.products || detailProducts;
  return products.find((item) => item.slug === detailSlug) || null;
};

const withDetailAssetVersion = (path) => /^(data:|blob:)/.test(String(path || '')) ? path : `${path}?v=${detailAssetVersion}`;
const buildDetailImageCandidates = (path) => {
  if (!path) {
    return [];
  }

  const extensionMatch = path.match(/\.(png|jpg|jpeg)$/i);

  if (!extensionMatch) {
    return [path];
  }

  const basePath = path.slice(0, -extensionMatch[0].length);
  return [`${basePath}.png`, `${basePath}.jpg`, `${basePath}.jpeg`];
};
const getVersionedDetailImageCandidates = (path) => buildDetailImageCandidates(path).map(withDetailAssetVersion);

const sanitizeQuantity = (value) => {
  const parsedValue = Number.parseInt(value, 10);
  return Number.isFinite(parsedValue) && parsedValue > 0 ? parsedValue : 1;
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

  detailProduct = getCurrentDetailProduct();

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
                src="${getVersionedDetailImageCandidates(initialFrontView?.src || detailProduct.src)[0] || withDetailAssetVersion(detailProduct.src)}"
                alt="${initialFrontView?.alt || detailProduct.alt}"
                data-fallback-src="${withDetailAssetVersion(detailProduct.src)}"
                data-source-candidates="${getVersionedDetailImageCandidates(initialFrontView?.src || detailProduct.src).slice(1).join('|')}"
                data-view-id="front"
              />
              ${hasImageRotation
                ? `
                  <img
                    class="detail-product-image detail-product-image-back"
                    id="detail-product-image-back"
                    src="${getVersionedDetailImageCandidates(initialBackView.src)[0] || withDetailAssetVersion(detailProduct.src)}"
                    alt=""
                    aria-hidden="true"
                    data-fallback-src="${withDetailAssetVersion(detailProduct.src)}"
                    data-source-candidates="${getVersionedDetailImageCandidates(initialBackView.src).slice(1).join('|')}"
                    data-view-id="back"
                  />
                `
                : ''}
            </div>

            ${variantSelectorMarkup}

            <div class="request-card">
              <p class="request-note">Elegi la cantidad y guardamos el producto en tu carrito.</p>
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
              <button class="button button-primary detail-cart-button" id="product-cart-button" type="button">
                Agregar a carrito
              </button>
              <a class="button button-secondary" href="carrito.html">Ver carrito</a>
              <a class="button button-secondary" href="productos.html">Volver a productos</a>
            </div>
          </aside>
        </section>
      </main>
    </div>
  `;

  const quantityInput = detailRoot.querySelector('#product-quantity');
  const cartButton = detailRoot.querySelector('#product-cart-button');
  const productTitle = detailRoot.querySelector('.detail-copy h1');
  const productPrice = detailRoot.querySelector('.detail-price-card strong');
  const frontProductImage = detailRoot.querySelector('#detail-product-image-front');
  const backProductImage = detailRoot.querySelector('#detail-product-image-back');
  const productImages = [frontProductImage, backProductImage].filter(Boolean);
  const imageToggle = detailRoot.querySelector('#detail-image-toggle');
  const variantSelect = detailRoot.querySelector('#detail-bag-variant-select');
  let selectedVariantId = initialVariant?.id || '';

  setupDetailNavigation();

  if (!quantityInput || !cartButton) {
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
      const sourceCandidates = (imageElement.dataset.sourceCandidates || '')
        .split('|')
        .filter(Boolean);
      const fallbackSrc = imageElement.dataset.fallbackSrc;
      const fallbackCandidates = getVersionedDetailImageCandidates(fallbackSrc);
      const nextCandidate =
        sourceCandidates.find((candidate) => candidate !== imageElement.src)
        || fallbackCandidates.find((candidate) => candidate !== imageElement.src);

      if (!nextCandidate || imageElement.dataset.fallbackApplied === 'true') {
        return;
      }

      const isFallbackCandidate = fallbackCandidates.includes(nextCandidate);
      imageElement.dataset.sourceCandidates = sourceCandidates
        .filter((candidate) => candidate !== nextCandidate)
        .join('|');
      imageElement.dataset.fallbackApplied = isFallbackCandidate ? 'true' : 'false';
      imageElement.src = nextCandidate;
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
      frontProductImage.dataset.sourceCandidates = getVersionedDetailImageCandidates(frontView.src).slice(1).join('|');
      frontProductImage.src = getVersionedDetailImageCandidates(frontView.src)[0] || withDetailAssetVersion(frontView.src);
      frontProductImage.alt = frontView.alt || detailProduct.alt;
      frontProductImage.dataset.viewId = 'front';
    }

    if (backProductImage && backView) {
      backProductImage.dataset.fallbackApplied = 'false';
      backProductImage.dataset.sourceCandidates = getVersionedDetailImageCandidates(backView.src).slice(1).join('|');
      backProductImage.src = getVersionedDetailImageCandidates(backView.src)[0] || withDetailAssetVersion(backView.src);
      backProductImage.dataset.viewId = 'back';
    }

    if (imageToggle) {
      const imageLabel = hasDetailVariants
        ? (selectedVariant?.label || detailProduct.name)
        : detailProduct.name;
      imageToggle.setAttribute('aria-label', `${imageLabel} frente y dorso`);
    }
  };

  const getSelectedCartOptions = () => {
    const quantity = sanitizeQuantity(quantityInput.value);
    const selectedVariant = getSelectedVariant();
    const selectedVariantLabel = selectedVariant?.label || '';
    const frontView = getVariantView(selectedVariant, 'front');
    quantityInput.value = String(quantity);
    return {
      quantity,
      variant: hasDetailVariants ? selectedVariant : null,
      variantId: selectedVariant?.id || '',
      variantLabel: selectedVariantLabel,
      price: selectedVariant?.price || detailProduct.price,
      image: {
        src: frontView?.src || detailProduct.src,
        alt: frontView?.alt || detailProduct.alt
      }
    };
  };

  const syncCartButton = () => {
    const cartOptions = getSelectedCartOptions();
    cartButton.setAttribute(
      'aria-label',
      `Agregar ${detailProduct.name}${cartOptions.variantLabel ? ` ${cartOptions.variantLabel}` : ''} en cantidad ${cartOptions.quantity} al carrito`
    );
  };

  if (variantSelect) {
    variantSelect.addEventListener('change', () => {
      selectedVariantId = variantSelect.value || selectedVariantId;
      syncVariantState();
      syncCartButton();
    });
  }

  quantityInput.addEventListener('input', syncCartButton);
  quantityInput.addEventListener('blur', syncCartButton);
  cartButton.addEventListener('click', () => {
    window.TopProCart?.addProduct?.(detailProduct, getSelectedCartOptions());
    cartButton.textContent = 'Agregado';
    window.setTimeout(() => {
      cartButton.textContent = 'Agregar a carrito';
    }, 1200);
  });
  productImages.forEach((imageElement) => {
    syncImageFallback(imageElement);
  });
  syncVariantState();
  syncCartButton();
  window.TopProAuth?.enhanceNavigation?.();
  window.TopProCart?.refreshNavigation?.();
};

window.addEventListener('toppro-products-change', renderProductDetail);
renderProductDetail();
