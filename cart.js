(function () {
  const CART_KEY = 'top-pro-cart';
  const whatsappNumber = window.TOP_PRO_DATA?.whatsappNumber || '595986732551';

  const readCart = () => {
    try {
      const parsedCart = JSON.parse(localStorage.getItem(CART_KEY) || '[]');
      return Array.isArray(parsedCart) ? parsedCart : [];
    } catch (error) {
      return [];
    }
  };

  const saveCart = (items, { notify = true } = {}) => {
    localStorage.setItem(CART_KEY, JSON.stringify(items));
    if (notify) {
      window.dispatchEvent(new CustomEvent('toppro-cart-change', { detail: items }));
    }
    updateCartNavigation();
    return items;
  };

  const sanitizeQuantity = (value) => {
    const parsedValue = Number.parseInt(value, 10);
    return Number.isFinite(parsedValue) && parsedValue > 0 ? parsedValue : 1;
  };

  const getItemKey = (slug, variantId = '') => `${slug || 'producto'}::${variantId || 'default'}`;

  const getFirstVariant = (product) => {
    const variants = Array.isArray(product?.variants) ? product.variants : [];
    return variants[0] || null;
  };

  const getVariantImage = (variant, product) => {
    const views = Array.isArray(variant?.views) ? variant.views : [];
    const frontView = views.find((view) => view.id === 'front') || views[0] || null;
    return {
      src: frontView?.src || product?.src || '',
      alt: frontView?.alt || product?.alt || product?.name || 'Producto Top Pro'
    };
  };

  const normalizeCartItem = (product, options = {}) => {
    const variant = options.variant || null;
    const fallbackVariant = variant || getFirstVariant(product);
    const image = options.image || getVariantImage(fallbackVariant, product);
    const variantLabel = options.variantLabel || fallbackVariant?.label || '';
    const variantId = options.variantId || fallbackVariant?.id || '';
    const displayName = options.name || (variantLabel ? `${product.name} - ${variantLabel}` : product.name);

    return {
      key: getItemKey(product.slug, variantId),
      slug: product.slug,
      page: product.page || `producto.html?slug=${encodeURIComponent(product.slug || '')}`,
      name: displayName,
      baseName: product.name,
      variantId,
      variantLabel,
      price: options.price || fallbackVariant?.price || product.price || '',
      src: image.src || product.src || '',
      alt: image.alt || product.alt || product.name,
      quantity: sanitizeQuantity(options.quantity)
    };
  };

  const findVariantById = (product, variantId = '') => {
    const variants = Array.isArray(product?.variants) ? product.variants : [];
    return variants.find((variant) => variant.id === variantId) || null;
  };

  const areCartItemsEqual = (currentItems, nextItems) => (
    JSON.stringify(currentItems) === JSON.stringify(nextItems)
  );

  const reconcileCart = ({ notify = false } = {}) => {
    const currentItems = readCart();
    const nextItems = currentItems
      .map((item) => {
        const latestProduct = getLatestProduct(item);

        if (!latestProduct || !canAddProduct(latestProduct)) {
          return null;
        }

        const variant = item.variantId ? findVariantById(latestProduct, item.variantId) : null;

        if (item.variantId && !variant) {
          return null;
        }

        return normalizeCartItem(latestProduct, {
          quantity: item.quantity,
          variant,
          variantId: item.variantId,
          variantLabel: variant?.label || item.variantLabel,
          price: variant?.price || latestProduct.price || item.price
        });
      })
      .filter(Boolean);

    if (!areCartItemsEqual(currentItems, nextItems)) {
      saveCart(nextItems, { notify });
    }

    return nextItems;
  };

  const getCart = () => reconcileCart({ notify: false });
  const getCount = () => getCart().reduce((total, item) => total + sanitizeQuantity(item.quantity), 0);

  const getUsdPriceValue = (price) => {
    const normalizedPrice = String(price || '').replace(',', '.');
    const match = normalizedPrice.match(/(\d+(?:\.\d+)?)/);
    return match ? Number.parseFloat(match[1]) : null;
  };

  const formatUsdTotal = (amount) => {
    const roundedAmount = Math.round((amount + Number.EPSILON) * 100) / 100;
    return `${roundedAmount.toFixed(2)} USD`;
  };

  const getTotal = () => getCart().reduce((total, item) => {
    const priceValue = getUsdPriceValue(item.price);

    if (!Number.isFinite(priceValue)) {
      return total;
    }

    return total + (priceValue * sanitizeQuantity(item.quantity));
  }, 0);

  const getLatestProduct = (product) => {
    if (!product?.slug) {
      return product;
    }

    return window.TopProProducts?.getProduct?.(product.slug)
      || (window.TOP_PRO_DATA?.products || []).find((item) => item.slug === product.slug)
      || product;
  };

  const canAddProduct = (product) => {
    const latestProduct = getLatestProduct(product);

    if (!latestProduct) {
      return false;
    }

    const stock = Number.parseInt(latestProduct.stock, 10) || 0;
    return stock > 0 || latestProduct.allowPreorder === true;
  };

  const getAvailabilityLabel = (product) => {
    const latestProduct = getLatestProduct(product);
    const stock = Number.parseInt(latestProduct?.stock, 10) || 0;

    if (stock > 0) {
      return `Stock disponible: ${stock}`;
    }

    if (latestProduct?.allowPreorder === true) {
      return 'Sin stock inmediato · Pre-reserva disponible';
    }

    return 'Sin stock';
  };

  const addProduct = (product, options = {}) => {
    const latestProduct = getLatestProduct(product);

    if (!latestProduct || !latestProduct.slug) {
      return getCart();
    }

    if (!canAddProduct(latestProduct)) {
      return getCart();
    }

    const nextItem = normalizeCartItem(latestProduct, options);
    const items = getCart();
    const existingIndex = items.findIndex((item) => item.key === nextItem.key);

    if (existingIndex >= 0) {
      items[existingIndex] = {
        ...items[existingIndex],
        ...nextItem,
        quantity: sanitizeQuantity(items[existingIndex].quantity) + nextItem.quantity
      };
    } else {
      items.push(nextItem);
    }

    return saveCart(items);
  };

  const updateQuantity = (key, quantity) => {
    const cleanQuantity = sanitizeQuantity(quantity);
    return saveCart(getCart().map((item) => (
      item.key === key ? { ...item, quantity: cleanQuantity } : item
    )));
  };

  const removeItem = (key) => saveCart(getCart().filter((item) => item.key !== key));
  const clearCart = () => saveCart([]);

  const buildWhatsAppHref = (extraMessage = '') => {
    const items = getCart();
    const productLines = items.map((item) => (
      `- ${sanitizeQuantity(item.quantity)} x ${item.name}${item.price ? ` (${item.price})` : ''}`
    ));
    const total = getTotal();
    const message = [
      'Hola Top Pro, quiero pedir estos productos:',
      ...productLines,
      Number.isFinite(total) && total > 0 ? `\nTotal: ${formatUsdTotal(total)}` : '',
      extraMessage ? `\nDatos del pedido:\n${extraMessage}` : ''
    ].filter(Boolean).join('\n');

    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  function updateCartNavigation() {
    const count = getCount();
    document.querySelectorAll('.nav, .detail-nav').forEach((nav) => {
      const label = count > 0 ? `Carrito, ${count} productos` : 'Carrito';
      const topbar = nav.closest('.topbar, .detail-topbar');
      let actions = topbar?.querySelector(':scope > .header-actions') || nav.querySelector('.nav-actions');
      if (!actions) {
        actions = document.createElement('div');
        actions.className = topbar ? 'header-actions' : 'nav-actions';
        if (topbar) {
          const toggle = topbar.querySelector(':scope > .nav-toggle');
          topbar.insertBefore(actions, toggle || null);
        } else {
          nav.appendChild(actions);
        }
      }
      let cartLink = actions.querySelector('[data-cart-nav]') || nav.querySelector('[data-cart-nav]');

      if (!cartLink) {
        cartLink = document.createElement('a');
        cartLink.setAttribute('data-cart-nav', 'true');
        cartLink.className = 'nav-icon-button nav-cart-link';
        cartLink.href = 'carrito.html';
        cartLink.innerHTML = '<img class="nav-icon" src="assets/cart.png" alt="" />';
        actions.appendChild(cartLink);
      } else if (cartLink.parentElement !== actions) {
        actions.appendChild(cartLink);
      }

      const firstAuthItem = actions.querySelector('[data-auth-nav]');
      if (firstAuthItem && cartLink.nextElementSibling !== firstAuthItem) {
        actions.insertBefore(cartLink, firstAuthItem);
      }

      let badge = cartLink.querySelector('.nav-cart-count');
      if (count > 0 && !badge) {
        badge = document.createElement('span');
        badge.className = 'nav-cart-count';
        cartLink.appendChild(badge);
      }

      if (badge) {
        badge.textContent = String(count);
        badge.hidden = count <= 0;
      }

      const ariaLabel = `${label} de compras`;
      if (cartLink.getAttribute('aria-label') !== ariaLabel) {
        cartLink.setAttribute('aria-label', ariaLabel);
      }
    });
  }

  window.TopProCart = {
    getCart,
    getCount,
    getTotal,
    formatUsdTotal,
    getLatestProduct,
    canAddProduct,
    getAvailabilityLabel,
    reconcileCart,
    addProduct,
    updateQuantity,
    removeItem,
    clearCart,
    buildWhatsAppHref,
    refreshNavigation: updateCartNavigation
  };

  const scheduleNavigationUpdate = () => window.requestAnimationFrame(updateCartNavigation);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', scheduleNavigationUpdate);
  } else {
    scheduleNavigationUpdate();
  }

  window.addEventListener('toppro-auth-change', scheduleNavigationUpdate);
  window.addEventListener('toppro-products-change', () => {
    reconcileCart({ notify: true });
    scheduleNavigationUpdate();
  });

  const observer = new MutationObserver(scheduleNavigationUpdate);
  observer.observe(document.documentElement, { childList: true, subtree: true });
})();
