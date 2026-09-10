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

  const saveCart = (items) => {
    localStorage.setItem(CART_KEY, JSON.stringify(items));
    window.dispatchEvent(new CustomEvent('toppro-cart-change', { detail: items }));
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

  const getCart = () => readCart();
  const getCount = () => getCart().reduce((total, item) => total + sanitizeQuantity(item.quantity), 0);

  const addProduct = (product, options = {}) => {
    if (!product || !product.slug) {
      return getCart();
    }

    const nextItem = normalizeCartItem(product, options);
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
    const message = [
      'Hola Top Pro, quiero pedir estos productos:',
      ...productLines,
      extraMessage ? `\nDatos del pedido:\n${extraMessage}` : ''
    ].filter(Boolean).join('\n');

    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  function updateCartNavigation() {
    const count = getCount();
    document.querySelectorAll('.nav, .detail-nav').forEach((nav) => {
      const label = count > 0 ? `Carrito (${count})` : 'Carrito';
      let cartLink = nav.querySelector('[data-cart-nav]');

      if (!cartLink) {
        cartLink = document.createElement('a');
        cartLink.setAttribute('data-cart-nav', 'true');
        cartLink.href = 'carrito.html';
        nav.appendChild(cartLink);
      }

      if (cartLink.textContent !== label) {
        cartLink.textContent = label;
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
  window.addEventListener('toppro-products-change', scheduleNavigationUpdate);

  const observer = new MutationObserver(scheduleNavigationUpdate);
  observer.observe(document.documentElement, { childList: true, subtree: true });
})();
