import ProductsClient from '@/components/ProductsClient';
import { listProducts } from '@/lib/db';

export const dynamic = 'force-dynamic';

export default function ProductosPage() {
  return <ProductsClient initialProducts={listProducts()} />;
}
