(function () {
  const STORAGE_KEY = 'top-pro-product-changes';
  const PRODUCT_PAGE = 'producto.html';

  const originalData = window.TOP_PRO_DATA || {};
  const baseProducts = Array.isArray(originalData.products) ? originalData.products : [];

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

  const saveStoredChanges = (changes) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(changes));
    window.dispatchEvent(new CustomEvent('toppro-products-change'));
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

  const getUniqueSlug = (name, currentSlug = '') => {
    const wantedSlug = slugify(name);
    const existingSlugs = getProducts()
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
    isCustom: Boolean(product.isCustom)
  });

  const getProducts = () => {
    const changes = getStoredChanges();
    const deletedSlugs = new Set(changes.deleted);
    const productsBySlug = new Map();

    baseProducts.forEach((product) => {
      if (deletedSlugs.has(product.slug)) {
        return;
      }

      productsBySlug.set(product.slug, prepareProduct({
        ...cloneProduct(product),
        ...(changes.updated[product.slug] || {})
      }));
    });

    changes.created.forEach((product) => {
      if (!deletedSlugs.has(product.slug)) {
        productsBySlug.set(product.slug, prepareProduct({ ...product, isCustom: true }));
      }
    });

    return Array.from(productsBySlug.values());
  };

  const getProduct = (slug) => getProducts().find((product) => product.slug === slug) || null;

  const createProduct = (payload) => {
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

  const updateProduct = (slug, payload) => {
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
      changes.deleted = changes.deleted.map((deletedSlug) => deletedSlug === slug ? nextSlug : deletedSlug);
      saveStoredChanges(changes);
      return getProduct(nextSlug);
    }

    const baseProduct = baseProducts.find((product) => product.slug === slug);

    if (baseProduct) {
      changes.updated[slug] = {
        ...changes.updated[slug],
        ...payload,
        updatedAt: new Date().toISOString()
      };
    } else {
      return null;
    }

    saveStoredChanges(changes);
    return getProduct(slug);
  };

  const deleteProduct = (slug) => {
    const changes = getStoredChanges();

    changes.created = changes.created.filter((product) => product.slug !== slug);
    delete changes.updated[slug];

    if (baseProducts.some((product) => product.slug === slug) && !changes.deleted.includes(slug)) {
      changes.deleted.push(slug);
    }

    saveStoredChanges(changes);
  };

  const resetProducts = () => {
    localStorage.removeItem(STORAGE_KEY);
    window.dispatchEvent(new CustomEvent('toppro-products-change'));
  };

  window.TopProProducts = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
    resetProducts
  };

  window.TOP_PRO_DATA = {
    ...originalData,
    products: getProducts()
  };
})();
