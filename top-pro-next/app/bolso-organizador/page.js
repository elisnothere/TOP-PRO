import ProductDetailClient from '@/components/ProductDetailClient';
import { getProduct } from '@/lib/db';

export const dynamic = 'force-dynamic';

export default function BagPage() {
  return <ProductDetailClient initialProduct={getProduct('bolso-organizador')} slug="bolso-organizador" />;
}
