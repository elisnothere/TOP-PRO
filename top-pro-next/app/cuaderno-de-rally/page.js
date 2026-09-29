import ProductDetailClient from '@/components/ProductDetailClient';
import { getProduct } from '@/lib/db';

export const dynamic = 'force-dynamic';

export default function NotebookPage() {
  return <ProductDetailClient initialProduct={getProduct('cuaderno-de-rally')} slug="cuaderno-de-rally" />;
}
