import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { DatabaseSync } from 'node:sqlite';
import { catalogProducts } from './catalog';
import { normalizeProduct, slugify } from './normalize';

const ADMIN_EMAIL = 'admin@toppro.com';
const ADMIN_PASSWORD = 'TopProAdmin2026';

const dataDir = path.resolve(process.cwd(), '..', 'data');
fs.mkdirSync(dataDir, { recursive: true });

const dbPath = path.join(dataDir, 'top-pro.sqlite');
const db = new DatabaseSync(dbPath);
db.exec('PRAGMA busy_timeout = 10000');
db.exec('PRAGMA journal_mode = WAL');
db.exec('PRAGMA foreign_keys = ON');

function hashPassword(password, salt = crypto.randomBytes(16).toString('hex')) {
  const hash = crypto.scryptSync(String(password || ''), salt, 64).toString('hex');
  return `${salt}:${hash}`;
}

export function verifyPassword(password, storedHash) {
  const [salt, expectedHash] = String(storedHash || '').split(':');
  if (!salt || !expectedHash) return false;
  const actualHash = crypto.scryptSync(String(password || ''), salt, 64);
  const expectedBuffer = Buffer.from(expectedHash, 'hex');
  return expectedBuffer.length === actualHash.length && crypto.timingSafeEqual(actualHash, expectedBuffer);
}

function parseJsonArray(value) {
  try {
    const parsed = JSON.parse(value || '[]');
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function toDbProduct(product) {
  return normalizeProduct(product);
}

export function rowToProduct(row) {
  return normalizeProduct({
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
    stock: row.stock,
    allowPreorder: Boolean(row.allow_preorder),
    showInCarousel: Boolean(row.show_in_carousel),
    isCustom: !row.is_seed
  });
}

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
    stock INTEGER NOT NULL DEFAULT 0,
    allow_preorder INTEGER NOT NULL DEFAULT 0,
    show_in_carousel INTEGER NOT NULL DEFAULT 1,
    is_seed INTEGER NOT NULL DEFAULT 0,
    is_deleted INTEGER NOT NULL DEFAULT 0,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  );
`);

for (const [name, definition] of [
  ['stock', 'INTEGER NOT NULL DEFAULT 0'],
  ['allow_preorder', 'INTEGER NOT NULL DEFAULT 0'],
  ['show_in_carousel', 'INTEGER NOT NULL DEFAULT 1']
]) {
  const columns = db.prepare('PRAGMA table_info(products)').all();
  if (!columns.some((column) => column.name === name)) {
    db.exec(`ALTER TABLE products ADD COLUMN ${name} ${definition}`);
  }
}

if (db.prepare('SELECT COUNT(*) AS total FROM users').get().total === 0) {
  db.prepare(`
    INSERT INTO users (id, name, email, role, password_hash, created_at)
    VALUES (?, ?, ?, ?, ?, ?)
  `).run('admin', 'Admin Top Pro', ADMIN_EMAIL, 'admin', hashPassword(ADMIN_PASSWORD), new Date().toISOString());
}

for (const product of catalogProducts) {
  const prepared = toDbProduct(product);
  db.prepare(`
    INSERT OR IGNORE INTO products (
      slug, page, name, label, description, detail_description, price, src, alt,
      variants, views, carousel_views, stock, allow_preorder, show_in_carousel, is_seed, created_at, updated_at
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1, ?, ?)
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
    prepared.stock,
    prepared.allowPreorder ? 1 : 0,
    prepared.showInCarousel ? 1 : 0,
    new Date().toISOString(),
    new Date().toISOString()
  );
}

export function listProducts() {
  return db.prepare(`
    SELECT * FROM products
    WHERE is_deleted = 0
    ORDER BY created_at ASC
  `).all().map(rowToProduct);
}

export function getProduct(slug) {
  const row = db.prepare('SELECT * FROM products WHERE slug = ? AND is_deleted = 0').get(slug);
  return row ? rowToProduct(row) : null;
}

export function getUniqueSlug(name, currentSlug = '') {
  const baseSlug = slugify(name);
  let slug = baseSlug;
  let index = 2;
  while (db.prepare('SELECT slug FROM products WHERE slug = ? AND slug != ?').get(slug, currentSlug)) {
    slug = `${baseSlug}-${index}`;
    index += 1;
  }
  return slug;
}

export function normalizeProductPayload(payload, existingProduct = null) {
  const name = String(payload.name || '').trim();
  const description = String(payload.description || '').trim();
  if (!name || !description) return { error: 'Completa nombre y descripcion.' };

  const details = Array.isArray(payload.detailDescription)
    ? payload.detailDescription.map((item) => String(item || '').trim()).filter(Boolean)
    : String(payload.detailDescription || '').split(/\n+/).map((item) => item.trim()).filter(Boolean);

  return normalizeProduct({
    name,
    label: String(payload.label || '').trim() || 'Producto Top Pro',
    description,
    detailDescription: details.length ? details : [description],
    price: String(payload.price || '').trim() || 'Consultar precio',
    src: String(payload.src || '').trim() || existingProduct?.src || '/assets/logo.png',
    alt: String(payload.alt || '').trim() || name,
    variants: Array.isArray(payload.variants) ? payload.variants : existingProduct?.variants || [],
    views: Array.isArray(payload.views) ? payload.views : existingProduct?.views || [],
    carouselViews: Array.isArray(payload.carouselViews) ? payload.carouselViews : existingProduct?.carouselViews || [],
    stock: payload.stock,
    allowPreorder: Boolean(payload.allowPreorder),
    showInCarousel: payload.showInCarousel !== false
  });
}

export function createProduct(payload) {
  const prepared = normalizeProductPayload(payload);
  if (prepared.error) return prepared;
  const slug = getUniqueSlug(prepared.name);
  const now = new Date().toISOString();
  db.prepare(`
    INSERT INTO products (
      slug, page, name, label, description, detail_description, price, src, alt,
      variants, views, carousel_views, stock, allow_preorder, show_in_carousel, is_seed, is_deleted, created_at, updated_at
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 0, 0, ?, ?)
  `).run(
    slug, `/producto/${slug}`, prepared.name, prepared.label, prepared.description,
    JSON.stringify(prepared.detailDescription), prepared.price, prepared.src, prepared.alt,
    JSON.stringify(prepared.variants), JSON.stringify(prepared.views), JSON.stringify(prepared.carouselViews),
    prepared.stock, prepared.allowPreorder ? 1 : 0, prepared.showInCarousel ? 1 : 0, now, now
  );
  return getProduct(slug);
}

export function updateProduct(slug, payload) {
  const row = db.prepare('SELECT * FROM products WHERE slug = ? AND is_deleted = 0').get(slug);
  if (!row) return null;
  const existing = rowToProduct(row);
  const prepared = normalizeProductPayload(payload, existing);
  if (prepared.error) return prepared;
  const nextSlug = row.is_seed ? slug : getUniqueSlug(prepared.name, slug);
  db.prepare(`
    UPDATE products
    SET slug = ?, page = ?, name = ?, label = ?, description = ?, detail_description = ?,
      price = ?, src = ?, alt = ?, variants = ?, views = ?, carousel_views = ?,
      stock = ?, allow_preorder = ?, show_in_carousel = ?, updated_at = ?
    WHERE slug = ?
  `).run(
    nextSlug, row.is_seed ? row.page : `/producto/${nextSlug}`, prepared.name, prepared.label, prepared.description,
    JSON.stringify(prepared.detailDescription), prepared.price, prepared.src, prepared.alt,
    JSON.stringify(prepared.variants), JSON.stringify(prepared.views), JSON.stringify(prepared.carouselViews),
    prepared.stock, prepared.allowPreorder ? 1 : 0, prepared.showInCarousel ? 1 : 0, new Date().toISOString(), slug
  );
  return getProduct(nextSlug);
}

export function deleteProduct(slug) {
  db.prepare('UPDATE products SET is_deleted = 1, updated_at = ? WHERE slug = ?').run(new Date().toISOString(), slug);
}

export function getUserByEmail(email) {
  return db.prepare('SELECT * FROM users WHERE email = ?').get(email);
}

export function createUser({ name, email, password }) {
  const id = `user-${crypto.randomUUID()}`;
  db.prepare(`
    INSERT INTO users (id, name, email, role, password_hash, created_at)
    VALUES (?, ?, ?, 'customer', ?, ?)
  `).run(id, name, email, hashPassword(password), new Date().toISOString());
  return { id, name, email, role: 'customer' };
}

export function createSession(userId) {
  const token = crypto.randomBytes(32).toString('hex');
  const expiresAt = new Date(Date.now() + 1000 * 60 * 60 * 24 * 30).toISOString();
  db.prepare('INSERT INTO sessions (token, user_id, expires_at) VALUES (?, ?, ?)').run(token, userId, expiresAt);
  return token;
}

export function getUserByToken(token) {
  if (!token) return null;
  return db.prepare(`
    SELECT users.id, users.name, users.email, users.role
    FROM sessions
    JOIN users ON users.id = sessions.user_id
    WHERE sessions.token = ? AND sessions.expires_at > ?
  `).get(token, new Date().toISOString()) || null;
}

export function listUsers() {
  return db.prepare('SELECT id, name, email, role, created_at AS createdAt FROM users ORDER BY created_at ASC').all();
}
