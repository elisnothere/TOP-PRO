const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const vm = require('node:vm');
const { DatabaseSync } = require('node:sqlite');

const PORT = Number(process.env.PORT || 4173);
const ROOT_DIR = __dirname;
const DATA_DIR = path.join(ROOT_DIR, 'data');
const DB_PATH = path.join(DATA_DIR, 'top-pro.sqlite');
const ADMIN_EMAIL = 'admin@toppro.com';
const ADMIN_PASSWORD = 'TopProAdmin2026';

fs.mkdirSync(DATA_DIR, { recursive: true });

const db = new DatabaseSync(DB_PATH);
db.exec('PRAGMA foreign_keys = ON');

const sendJson = (res, status, payload) => {
  const body = JSON.stringify(payload);
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(body)
  });
  res.end(body);
};

const getRequestBody = (req) => new Promise((resolve, reject) => {
  const chunks = [];
  let size = 0;

  req.on('data', (chunk) => {
    size += chunk.length;

    if (size > 12 * 1024 * 1024) {
      reject(new Error('El pedido es demasiado grande.'));
      req.destroy();
      return;
    }

    chunks.push(chunk);
  });

  req.on('end', () => {
    const body = Buffer.concat(chunks).toString('utf8');

    try {
      resolve(body ? JSON.parse(body) : {});
    } catch (error) {
      reject(new Error('JSON invalido.'));
    }
  });
});

const slugify = (value) => {
  const slug = String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

  return slug || `producto-${Date.now()}`;
};

const hashPassword = (password, salt = crypto.randomBytes(16).toString('hex')) => {
  const hash = crypto.scryptSync(String(password || ''), salt, 64).toString('hex');
  return `${salt}:${hash}`;
};

const verifyPassword = (password, storedHash) => {
  const [salt, expectedHash] = String(storedHash || '').split(':');

  if (!salt || !expectedHash) {
    return false;
  }

  const actualHash = crypto.scryptSync(String(password || ''), salt, 64);
  const expectedBuffer = Buffer.from(expectedHash, 'hex');

  return expectedBuffer.length === actualHash.length && crypto.timingSafeEqual(actualHash, expectedBuffer);
};

const loadCatalogProducts = () => {
  const catalogPath = path.join(ROOT_DIR, 'catalog-data.js');
  const source = fs.readFileSync(catalogPath, 'utf8');
  const context = { window: {} };
  vm.createContext(context);
  vm.runInContext(source, context, { filename: catalogPath });
  return context.window.TOP_PRO_DATA?.products || [];
};

const prepareProduct = (product) => ({
  slug: product.slug,
  page: product.page || `producto.html?slug=${product.slug}`,
  name: product.name,
  label: product.label || 'Producto Top Pro',
  description: product.description || '',
  detailDescription: Array.isArray(product.detailDescription)
    ? product.detailDescription
    : [product.description || ''].filter(Boolean),
  price: product.price || 'Consultar precio',
  src: product.src || './assets/logo.png',
  alt: product.alt || product.name || 'Producto Top Pro',
  variants: Array.isArray(product.variants) ? product.variants : [],
  views: Array.isArray(product.views) ? product.views : [],
  carouselViews: Array.isArray(product.carouselViews) ? product.carouselViews : []
});

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    role TEXT NOT NULL DEFAULT 'customer',
    password_hash TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS sessions (
    token TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    expires_at TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
  );

  CREATE TABLE IF NOT EXISTS products (
    slug TEXT PRIMARY KEY,
    page TEXT NOT NULL,
    name TEXT NOT NULL,
    label TEXT NOT NULL,
    description TEXT NOT NULL,
    detail_description TEXT NOT NULL,
    price TEXT NOT NULL,
    src TEXT NOT NULL,
    alt TEXT NOT NULL,
    variants TEXT NOT NULL DEFAULT '[]',
    views TEXT NOT NULL DEFAULT '[]',
    carousel_views TEXT NOT NULL DEFAULT '[]',
    is_seed INTEGER NOT NULL DEFAULT 0,
    is_deleted INTEGER NOT NULL DEFAULT 0,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  );
`);

const userCount = db.prepare('SELECT COUNT(*) AS total FROM users').get().total;

if (userCount === 0) {
  db.prepare(`
    INSERT INTO users (id, name, email, role, password_hash, created_at)
    VALUES (?, ?, ?, ?, ?, ?)
  `).run('admin', 'Admin Top Pro', ADMIN_EMAIL, 'admin', hashPassword(ADMIN_PASSWORD), new Date().toISOString());
}

loadCatalogProducts().forEach((product) => {
  const prepared = prepareProduct(product);
  db.prepare(`
    INSERT OR IGNORE INTO products (
      slug, page, name, label, description, detail_description, price, src, alt,
      variants, views, carousel_views, is_seed, created_at, updated_at
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1, ?, ?)
  `).run(
    prepared.slug,
    prepared.page,
    prepared.name,
    prepared.label,
    prepared.description,
    JSON.stringify(prepared.detailDescription),
    prepared.price,
    prepared.src,
    prepared.alt,
    JSON.stringify(prepared.variants),
    JSON.stringify(prepared.views),
    JSON.stringify(prepared.carouselViews),
    new Date().toISOString(),
    new Date().toISOString()
  );
});

const parseJsonArray = (value) => {
  try {
    const parsed = JSON.parse(value || '[]');
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
};

const rowToProduct = (row) => ({
  slug: row.slug,
  page: row.page,
  name: row.name,
  label: row.label,
  description: row.description,
  detailDescription: parseJsonArray(row.detail_description),
  price: row.price,
  src: row.src,
  alt: row.alt,
  variants: parseJsonArray(row.variants),
  views: parseJsonArray(row.views),
  carouselViews: parseJsonArray(row.carousel_views),
  isCustom: !row.is_seed
});

const listProducts = () => db.prepare(`
  SELECT * FROM products
  WHERE is_deleted = 0
  ORDER BY created_at ASC
`).all().map(rowToProduct);

const getUserByToken = (req) => {
  const authHeader = req.headers.authorization || '';
  const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : '';

  if (!token) {
    return null;
  }

  return db.prepare(`
    SELECT users.id, users.name, users.email, users.role
    FROM sessions
    JOIN users ON users.id = sessions.user_id
    WHERE sessions.token = ? AND sessions.expires_at > ?
  `).get(token, new Date().toISOString()) || null;
};

const requireAdmin = (req, res) => {
  const user = getUserByToken(req);

  if (!user || user.role !== 'admin') {
    sendJson(res, 403, { error: 'Necesitas una cuenta admin.' });
    return null;
  }

  return user;
};

const createSession = (userId) => {
  const token = crypto.randomBytes(32).toString('hex');
  const expiresAt = new Date(Date.now() + 1000 * 60 * 60 * 24 * 30).toISOString();

  db.prepare('INSERT INTO sessions (token, user_id, expires_at) VALUES (?, ?, ?)').run(token, userId, expiresAt);
  return token;
};

const getUniqueSlug = (name, currentSlug = '') => {
  const baseSlug = slugify(name);
  let slug = baseSlug;
  let index = 2;

  while (true) {
    const existing = db.prepare('SELECT slug FROM products WHERE slug = ? AND slug != ?').get(slug, currentSlug);

    if (!existing) {
      return slug;
    }

    slug = `${baseSlug}-${index}`;
    index += 1;
  }
};

const normalizeProductPayload = (payload, existingProduct = null) => {
  const name = String(payload.name || '').trim();
  const description = String(payload.description || '').trim();

  if (!name || !description) {
    return { error: 'Completa nombre y descripcion.' };
  }

  const details = Array.isArray(payload.detailDescription)
    ? payload.detailDescription.map((item) => String(item || '').trim()).filter(Boolean)
    : String(payload.detailDescription || '').split(/\n+/).map((item) => item.trim()).filter(Boolean);

  return {
    name,
    label: String(payload.label || '').trim() || 'Producto Top Pro',
    description,
    detailDescription: details.length ? details : [description],
    price: String(payload.price || '').trim() || 'Consultar precio',
    src: String(payload.src || '').trim() || existingProduct?.src || './assets/logo.png',
    alt: String(payload.alt || '').trim() || name,
    variants: Array.isArray(payload.variants) ? payload.variants : existingProduct?.variants || [],
    views: Array.isArray(payload.views) ? payload.views : existingProduct?.views || [],
    carouselViews: Array.isArray(payload.carouselViews) ? payload.carouselViews : existingProduct?.carouselViews || []
  };
};

const handleApiRequest = async (req, res, url) => {
  if (req.method === 'GET' && url.pathname === '/api/health') {
    sendJson(res, 200, { ok: true });
    return;
  }

  if (req.method === 'GET' && url.pathname === '/api/products') {
    sendJson(res, 200, { products: listProducts() });
    return;
  }

  if (req.method === 'POST' && url.pathname === '/api/auth/register') {
    const body = await getRequestBody(req);
    const name = String(body.name || '').trim();
    const email = String(body.email || '').trim().toLowerCase();
    const password = String(body.password || '');

    if (name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || password.length < 6) {
      sendJson(res, 400, { error: 'Revisa nombre, email y contraseña.' });
      return;
    }

    try {
      const id = `user-${crypto.randomUUID()}`;
      db.prepare(`
        INSERT INTO users (id, name, email, role, password_hash, created_at)
        VALUES (?, ?, ?, 'customer', ?, ?)
      `).run(id, name, email, hashPassword(password), new Date().toISOString());
      const token = createSession(id);
      sendJson(res, 201, { token, user: { id, name, email, role: 'customer' } });
    } catch (error) {
      sendJson(res, 409, { error: 'Ya existe una cuenta con ese email.' });
    }
    return;
  }

  if (req.method === 'POST' && url.pathname === '/api/auth/login') {
    const body = await getRequestBody(req);
    const email = String(body.email || '').trim().toLowerCase();
    const user = db.prepare('SELECT * FROM users WHERE email = ?').get(email);

    if (!user || !verifyPassword(body.password, user.password_hash)) {
      sendJson(res, 401, { error: 'Email o contraseña incorrectos.' });
      return;
    }

    const token = createSession(user.id);
    sendJson(res, 200, {
      token,
      user: { id: user.id, name: user.name, email: user.email, role: user.role }
    });
    return;
  }

  if (req.method === 'GET' && url.pathname === '/api/users') {
    if (!requireAdmin(req, res)) {
      return;
    }

    const users = db.prepare('SELECT id, name, email, role, created_at AS createdAt FROM users ORDER BY created_at ASC').all();
    sendJson(res, 200, { users });
    return;
  }

  if (req.method === 'POST' && url.pathname === '/api/products') {
    if (!requireAdmin(req, res)) {
      return;
    }

    const payload = normalizeProductPayload(await getRequestBody(req));

    if (payload.error) {
      sendJson(res, 400, { error: payload.error });
      return;
    }

    const slug = getUniqueSlug(payload.name);
    const now = new Date().toISOString();

    db.prepare(`
      INSERT INTO products (
        slug, page, name, label, description, detail_description, price, src, alt,
        variants, views, carousel_views, is_seed, is_deleted, created_at, updated_at
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 0, 0, ?, ?)
    `).run(
      slug,
      `producto.html?slug=${slug}`,
      payload.name,
      payload.label,
      payload.description,
      JSON.stringify(payload.detailDescription),
      payload.price,
      payload.src,
      payload.alt,
      JSON.stringify(payload.variants),
      JSON.stringify(payload.views),
      JSON.stringify(payload.carouselViews),
      now,
      now
    );

    sendJson(res, 201, { product: db.prepare('SELECT * FROM products WHERE slug = ?').get(slug) && listProducts().find((product) => product.slug === slug) });
    return;
  }

  const productMatch = url.pathname.match(/^\/api\/products\/([^/]+)$/);

  if (productMatch && req.method === 'PUT') {
    if (!requireAdmin(req, res)) {
      return;
    }

    const slug = decodeURIComponent(productMatch[1]);
    const existingRow = db.prepare('SELECT * FROM products WHERE slug = ? AND is_deleted = 0').get(slug);

    if (!existingRow) {
      sendJson(res, 404, { error: 'Producto no encontrado.' });
      return;
    }

    const payload = normalizeProductPayload(await getRequestBody(req), rowToProduct(existingRow));

    if (payload.error) {
      sendJson(res, 400, { error: payload.error });
      return;
    }

    const nextSlug = existingRow.is_seed ? slug : getUniqueSlug(payload.name, slug);
    db.prepare(`
      UPDATE products
      SET slug = ?, page = ?, name = ?, label = ?, description = ?, detail_description = ?,
        price = ?, src = ?, alt = ?, variants = ?, views = ?, carousel_views = ?, updated_at = ?
      WHERE slug = ?
    `).run(
      nextSlug,
      existingRow.is_seed ? existingRow.page : `producto.html?slug=${nextSlug}`,
      payload.name,
      payload.label,
      payload.description,
      JSON.stringify(payload.detailDescription),
      payload.price,
      payload.src,
      payload.alt,
      JSON.stringify(payload.variants),
      JSON.stringify(payload.views),
      JSON.stringify(payload.carouselViews),
      new Date().toISOString(),
      slug
    );

    sendJson(res, 200, { product: listProducts().find((product) => product.slug === nextSlug) });
    return;
  }

  if (productMatch && req.method === 'DELETE') {
    if (!requireAdmin(req, res)) {
      return;
    }

    const slug = decodeURIComponent(productMatch[1]);
    db.prepare('UPDATE products SET is_deleted = 1, updated_at = ? WHERE slug = ?').run(new Date().toISOString(), slug);
    sendJson(res, 200, { ok: true });
    return;
  }

  sendJson(res, 404, { error: 'Ruta no encontrada.' });
};

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon'
};

const serveStatic = (req, res, url) => {
  const requestedPath = decodeURIComponent(url.pathname === '/' ? '/index.html' : url.pathname);
  const filePath = path.normalize(path.join(ROOT_DIR, requestedPath));

  if (!filePath.startsWith(ROOT_DIR)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  fs.readFile(filePath, (error, content) => {
    if (error) {
      res.writeHead(404);
      res.end('Not found');
      return;
    }

    res.writeHead(200, {
      'Content-Type': mimeTypes[path.extname(filePath).toLowerCase()] || 'application/octet-stream'
    });
    res.end(content);
  });
};

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host || `localhost:${PORT}`}`);

  try {
    if (url.pathname.startsWith('/api/')) {
      await handleApiRequest(req, res, url);
      return;
    }

    serveStatic(req, res, url);
  } catch (error) {
    sendJson(res, 500, { error: error.message || 'Error interno.' });
  }
});

server.listen(PORT, () => {
  console.log(`Top Pro listo en http://localhost:${PORT}`);
  console.log(`Base de datos: ${DB_PATH}`);
});
