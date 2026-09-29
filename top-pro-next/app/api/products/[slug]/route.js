import { deleteProduct, getProduct, updateProduct } from '@/lib/db';
import { json, readBody, requireAdmin } from '@/lib/api';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

async function getSlug(context) {
  const params = await context.params;
  return decodeURIComponent(params.slug);
}

export async function GET(_request, context) {
  const product = getProduct(await getSlug(context));
  return product ? json({ product }) : json({ error: 'Producto no encontrado.' }, 404);
}

export async function PUT(request, context) {
  if (!requireAdmin(request)) {
    return json({ error: 'Necesitas una cuenta admin.' }, 403);
  }

  const product = updateProduct(await getSlug(context), await readBody(request));
  if (!product) return json({ error: 'Producto no encontrado.' }, 404);
  if (product.error) return json({ error: product.error }, 400);
  return json({ product });
}

export async function DELETE(request, context) {
  if (!requireAdmin(request)) {
    return json({ error: 'Necesitas una cuenta admin.' }, 403);
  }

  deleteProduct(await getSlug(context));
  return json({ ok: true });
}
