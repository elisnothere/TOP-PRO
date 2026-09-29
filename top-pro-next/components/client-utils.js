'use client';

export const TOKEN_KEY = 'top-pro-api-token';
export const SESSION_KEY = 'top-pro-session';
export const CART_KEY = 'top-pro-cart';

export function getToken() {
  if (typeof window === 'undefined') return '';
  return localStorage.getItem(TOKEN_KEY) || '';
}

export function getSession() {
  if (typeof window === 'undefined') return null;
  try {
    return JSON.parse(localStorage.getItem(SESSION_KEY) || 'null');
  } catch {
    return null;
  }
}

export function setSession(user, token = '') {
  if (!user) {
    localStorage.removeItem(SESSION_KEY);
    localStorage.removeItem(TOKEN_KEY);
  } else {
    localStorage.setItem(SESSION_KEY, JSON.stringify(user));
    if (token) localStorage.setItem(TOKEN_KEY, token);
  }
  window.dispatchEvent(new CustomEvent('toppro-auth-change'));
}

export async function apiRequest(path, options = {}) {
  const headers = {
    'Content-Type': 'application/json',
    ...(options.headers || {})
  };
  const token = getToken();
  if (token) headers.Authorization = `Bearer ${token}`;

  const response = await fetch(path, { ...options, headers, cache: 'no-store' });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(payload.error || 'No se pudo completar la accion.');
  return payload;
}

export function canAddProduct(product) {
  const stock = Number.parseInt(product?.stock, 10) || 0;
  return stock > 0 || product?.allowPreorder === true;
}

export function availabilityLabel(product) {
  const stock = Number.parseInt(product?.stock, 10) || 0;
  if (stock > 0) return `Stock disponible: ${stock}`;
  if (product?.allowPreorder) return 'Sin stock inmediato · Pre-reserva disponible';
  return 'Sin stock';
}

export function getCart() {
  if (typeof window === 'undefined') return [];
  try {
    const parsed = JSON.parse(localStorage.getItem(CART_KEY) || '[]');
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function getItemKey(slug, variantId = '') {
  return `${slug || 'producto'}::${variantId || 'default'}`;
}

export function normalizeCartItem(product, options = {}) {
  const variant = options.variant || null;
  const variantLabel = options.variantLabel || variant?.label || '';
  const variantId = options.variantId || variant?.id || '';
  const frontView = variant?.views?.find((view) => view.id === 'front') || variant?.views?.[0] || null;
  return {
    key: getItemKey(product.slug, variantId),
    slug: product.slug,
    page: product.page || `/producto/${product.slug}`,
    name: variantLabel ? `${product.name} - ${variantLabel}` : product.name,
    baseName: product.name,
    variantId,
    variantLabel,
    price: options.price || variant?.price || product.price || '',
    src: options.image?.src || frontView?.src || product.src || '',
    alt: options.image?.alt || frontView?.alt || product.alt || product.name,
    quantity: Math.max(1, Number.parseInt(options.quantity, 10) || 1)
  };
}

export async function reconcileCart(products = null, notify = false) {
  const currentItems = getCart();
  let latestProducts = products;
  if (!latestProducts) {
    latestProducts = (await apiRequest('/api/products')).products || [];
  }
  const productMap = new Map(latestProducts.map((product) => [product.slug, product]));
  const nextItems = currentItems.map((item) => {
    const product = productMap.get(item.slug);
    if (!product || !canAddProduct(product)) return null;
    const variant = item.variantId ? (product.variants || []).find((entry) => entry.id === item.variantId) : null;
    if (item.variantId && !variant) return null;
    return normalizeCartItem(product, {
      quantity: item.quantity,
      variant,
      variantId: item.variantId,
      variantLabel: variant?.label || item.variantLabel,
      price: variant?.price || product.price || item.price
    });
  }).filter(Boolean);

  if (JSON.stringify(currentItems) !== JSON.stringify(nextItems)) {
    localStorage.setItem(CART_KEY, JSON.stringify(nextItems));
    if (notify) window.dispatchEvent(new CustomEvent('toppro-cart-change'));
  }
  return nextItems;
}

export async function addToCart(product, options = {}) {
  const products = (await apiRequest('/api/products')).products || [];
  const latest = products.find((item) => item.slug === product.slug) || product;
  if (!canAddProduct(latest)) {
    await reconcileCart(products, true);
    return { ok: false };
  }
  const items = await reconcileCart(products, false);
  const nextItem = normalizeCartItem(latest, options);
  const existingIndex = items.findIndex((item) => item.key === nextItem.key);
  if (existingIndex >= 0) {
    items[existingIndex] = { ...items[existingIndex], ...nextItem, quantity: items[existingIndex].quantity + nextItem.quantity };
  } else {
    items.push(nextItem);
  }
  localStorage.setItem(CART_KEY, JSON.stringify(items));
  window.dispatchEvent(new CustomEvent('toppro-cart-change'));
  return { ok: true };
}

export function updateCartQuantity(key, quantity) {
  const items = getCart().map((item) => item.key === key ? { ...item, quantity: Math.max(1, Number.parseInt(quantity, 10) || 1) } : item);
  localStorage.setItem(CART_KEY, JSON.stringify(items));
  window.dispatchEvent(new CustomEvent('toppro-cart-change'));
}

export function removeCartItem(key) {
  localStorage.setItem(CART_KEY, JSON.stringify(getCart().filter((item) => item.key !== key)));
  window.dispatchEvent(new CustomEvent('toppro-cart-change'));
}

export function clearCart() {
  localStorage.setItem(CART_KEY, '[]');
  window.dispatchEvent(new CustomEvent('toppro-cart-change'));
}

export function formatUsdTotal(amount) {
  return `${(Math.round((amount + Number.EPSILON) * 100) / 100).toFixed(2)} USD`;
}

export function cartTotal(items) {
  return items.reduce((total, item) => {
    const match = String(item.price || '').replace(',', '.').match(/(\d+(?:\.\d+)?)/);
    const price = match ? Number.parseFloat(match[1]) : 0;
    return total + price * (Number.parseInt(item.quantity, 10) || 1);
  }, 0);
}

export function whatsappHref(items, extra = '') {
  const lines = items.map((item) => `- ${item.quantity} x ${item.name}${item.price ? ` (${item.price})` : ''}`);
  const total = cartTotal(items);
  const message = [
    'Hola Top Pro, quiero pedir estos productos:',
    ...lines,
    total > 0 ? `\nTotal: ${formatUsdTotal(total)}` : '',
    extra ? `\nDatos del pedido:\n${extra}` : ''
  ].filter(Boolean).join('\n');
  return `https://wa.me/595986732551?text=${encodeURIComponent(message)}`;
}
