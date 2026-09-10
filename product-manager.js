(function () {
  const STORAGE_KEY = 'top-pro-product-changes';
  const PRODUCT_PAGE = 'producto.html';
  const API_BASE = `${window.location.origin}/api`;

  const originalData = window.TOP_PRO_DATA || {};
  const baseProducts = Array.isArray(originalData.products) ? originalData.products : [];
  let cachedProducts = [];
  let backendReady = false;

  const getAuthToken = () => window.TopProAuth?.getToken?.() || '';

  const apiRequest = async (path, options = {}) => {
    const headers = {
      'Content-Type': 'application/json',
      ...(options.headers || {})
    };
    const token = getAuthToken();

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    const response = await fetch(`${API_BASE}${path}`, { ...options, headers });
    const payload = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(payload.error || 'No se pudo completar la accion.');
    }

    return payload;
  };

  const cloneProduct = (product) => JSON.parse(JSON.stringify(product));

  const getStoredChanges = () => {
    try {
      const parsedChanges = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');

      return {
        created: Array.isArray(parsedChanges.created) ? parsedChanges.created : [],
        updated: parsedChanges.updated && typeof parsedChanges.updated === 'object' ? parsedChanges.updated : {},
        deleted: Array.isArray(parsedChanges.deleted) ? parsedChanges.deleted : []
      };
    } catch (error) {
      return { created: [], updated: {}, deleted: [] };
    }
  };

  const slugify = (value) => {
    const normalizedValue = String(value || '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');

    return normalizedValue || `producto-${Date.now()}`;
  };

  const prepareProduct = (product) => ({
    ...product,
    slug: product.slug,
    page: product.page || `${PRODUCT_PAGE}?slug=${product.slug}`,
    label: product.label || 'Producto Top Pro',
    description: product.description || '',
    detailDescription: Array.isArray(product.detailDescription)
      ? product.detailDescription.filter(Boolean)
      : [product.description || ''].filter(Boolean),
    price: product.price || 'Consultar precio',
    src: product.src || './assets/logo.png',
    alt: product.alt || product.name || 'Producto Top Pro',
    stock: Math.max(0, Number.parseInt(product.stock, 10) || 0),
    allowPreorder: product.allowPreorder === true,
    showInCarousel: product.showInCarousel !== false,
    isCustom: Boolean(product.isCustom)
  });

  const getLocalProducts = () => {
    const changes = getStoredChanges();
    const deletedSlugs = new Set(changes.deleted);
    const productsBySlug = new Map();

    baseProducts.forEach((product) => {
      if (!deletedSlugs.has(product.slug)) {
        productsBySlug.set(product.slug, prepareProduct({
          ...cloneProduct(product),
          ...(changes.updated[product.slug] || {})
        }));
      }
    });

    changes.created.forEach((product) => {
      if (!deletedSlugs.has(product.slug)) {
        productsBySlug.set(product.slug, prepareProduct({ ...product, isCustom: true }));
      }
    });

    return Array.from(productsBySlug.values());
  };

  const saveStoredChanges = (changes) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(changes));
    syncWindowProducts(getLocalProducts());
  };

  const getUniqueSlug = (name, currentSlug = '') => {
    const wantedSlug = slugify(name);
    const existingSlugs = getLocalProducts()
      .map((product) => product.slug)
      .filter((slug) => slug !== currentSlug);
    let slug = wantedSlug;
    let index = 2;

    while (existingSlugs.includes(slug)) {
      slug = `${wantedSlug}-${index}`;
      index += 1;
    }

    return slug;
  };

  const syncWindowProducts = (products) => {
    cachedProducts = products.map(prepareProduct);
    window.TOP_PRO_DATA = {
      ...originalData,
      products: cachedProducts
    };
    window.dispatchEvent(new CustomEvent('toppro-products-change', { detail: cachedProducts }));
  };

  const hydrateFromBackend = async () => {
    try {
      const payload = await apiRequest('/products', { method: 'GET' });
      backendReady = true;
      syncWindowProducts(payload.products || []);
    } catch (error) {
      backendReady = false;
      syncWindowProducts(getLocalProducts());
    }
  };

  const getProducts = () => cachedProducts.length ? cachedProducts : getLocalProducts();
  const getProduct = (slug) => getProducts().find((product) => product.slug === slug) || null;

  const createLocalProduct = (payload) => {
    const changes = getStoredChanges();
    const slug = getUniqueSlug(payload.name);
    const product = prepareProduct({
      ...payload,
      slug,
      page: `${PRODUCT_PAGE}?slug=${slug}`,
      isCustom: true,
      createdAt: new Date().toISOString()
    });

    changes.created.push(product);
    saveStoredChanges(changes);
    return product;
  };

  const updateLocalProduct = (slug, payload) => {
    const changes = getStoredChanges();
    const existingCreatedIndex = changes.created.findIndex((product) => product.slug === slug);

    if (existingCreatedIndex >= 0) {
      const nextSlug = getUniqueSlug(payload.name, slug);
      const nextPayload = prepareProduct({
        ...payload,
        slug: nextSlug,
        page: `${PRODUCT_PAGE}?slug=${nextSlug}`,
        updatedAt: new Date().toISOString()
      });

      changes.created[existingCreatedIndex] = {
        ...changes.created[existingCreatedIndex],
        ...nextPayload,
        isCustom: true
      };
      saveStoredChanges(changes);
      return getProduct(nextSlug);
    }

    if (baseProducts.some((product) => product.slug === slug)) {
      changes.updated[slug] = {
        ...changes.updated[slug],
        ...payload,
        updatedAt: new Date().toISOString()
      };
      saveStoredChanges(changes);
      return getProduct(slug);
    }

    return null;
  };

  const deleteLocalProduct = (slug) => {
    const changes = getStoredChanges();

    changes.created = changes.created.filter((product) => product.slug !== slug);
    delete changes.updated[slug];

    if (baseProducts.some((product) => product.slug === slug) && !changes.deleted.includes(slug)) {
      changes.deleted.push(slug);
    }

    saveStoredChanges(changes);
  };

  const createProduct = async (payload) => {
    if (backendReady) {
      const result = await apiRequest('/products', {
        method: 'POST',
        body: JSON.stringify(payload)
      });
      await hydrateFromBackend();
      return result.product;
    }

    return createLocalProduct(payload);
  };

  const updateProduct = async (slug, payload) => {
    if (backendReady) {
      const result = await apiRequest(`/products/${encodeURIComponent(slug)}`, {
        method: 'PUT',
        body: JSON.stringify(payload)
      });
      await hydrateFromBackend();
      return result.product;
    }

    return updateLocalProduct(slug, payload);
  };

  const deleteProduct = async (slug) => {
    if (backendReady) {
      await apiRequest(`/products/${encodeURIComponent(slug)}`, { method: 'DELETE' });
      await hydrateFromBackend();
      return;
    }

    deleteLocalProduct(slug);
  };

  const resetProducts = () => {
    localStorage.removeItem(STORAGE_KEY);
    syncWindowProducts(getLocalProducts());
  };

  window.TopProProducts = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
    resetProducts,
    hydrateFromBackend,
    isBackendReady: () => backendReady
  };

  syncWindowProducts(getLocalProducts());
  hydrateFromBackend();
})();
