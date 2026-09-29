import Header from '@/components/Header';
import { listProducts } from '@/lib/db';
import HomeClient from '@/components/HomeClient';

export const dynamic = 'force-dynamic';

export default function HomePage() {
  const products = listProducts();
  return <HomeClient products={products} />;
}
