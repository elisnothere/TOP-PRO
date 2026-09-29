import ProductDetailClient from '@/components/ProductDetailClient';
import { getProduct } from '@/lib/db';

export const dynamic = 'force-dynamic';

export default async function ProductPage({ params }) {
  const { slug } = await params;

  return <ProductDetailClient initialProduct={getProduct(slug)} slug={slug} />;
}
