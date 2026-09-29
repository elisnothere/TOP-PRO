export const productPage = (slug) => `/producto/${encodeURIComponent(slug)}`;

export function normalizeProduct(product = {}) {
  const slug = product.slug || slugify(product.name || 'producto');
  return {
    ...product,
    slug,
    page: product.page?.startsWith('/') ? product.page : product.page || productPage(slug),
    label: product.label || 'Producto Top Pro',
    description: product.description || '',
    detailDescription: Array.isArray(product.detailDescription)
      ? product.detailDescription.filter(Boolean)
      : [product.description || ''].filter(Boolean),
    price: product.price || 'Consultar precio',
    src: product.src || '/assets/logo.png',
    alt: product.alt || product.name || 'Producto Top Pro',
    variants: Array.isArray(product.variants) ? product.variants : [],
    views: Array.isArray(product.views) ? product.views : [],
    carouselViews: Array.isArray(product.carouselViews) ? product.carouselViews : [],
    stock: Math.max(0, Number.parseInt(product.stock, 10) || 0),
    allowPreorder: product.allowPreorder === true,
    showInCarousel: product.showInCarousel !== false
  };
}

export function slugify(value) {
  const slug = String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

  return slug || `producto-${Date.now()}`;
}

export function canAddProduct(product) {
  const current = normalizeProduct(product);
  return current.stock > 0 || current.allowPreorder === true;
}

export function availabilityLabel(product) {
  const current = normalizeProduct(product);
  if (current.stock > 0) return `Stock disponible: ${current.stock}`;
  if (current.allowPreorder) return 'Sin stock inmediato · Pre-reserva disponible';
  return 'Sin stock';
}
