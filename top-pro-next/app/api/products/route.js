import { createProduct, listProducts } from '@/lib/db';
import { json, readBody, requireAdmin } from '@/lib/api';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET() {
  return json({ products: listProducts() });
}

export async function POST(request) {
  if (!requireAdmin(request)) {
    return json({ error: 'Necesitas una cuenta admin.' }, 403);
  }

  const product = createProduct(await readBody(request));
  if (product?.error) {
    return json({ error: product.error }, 400);
  }

  return json({ product }, 201);
}
