import ProductDetailClient from '@/components/ProductDetailClient';
import { getProduct } from '@/lib/db';

export const dynamic = 'force-dynamic';

export default function ShirtPage() {
  return <ProductDetailClient initialProduct={getProduct('remera-top-pro')} slug="remera-top-pro" />;
}
