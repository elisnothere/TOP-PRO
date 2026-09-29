import { listUsers } from '@/lib/db';
import { json, requireAdmin } from '@/lib/api';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(request) {
  if (!requireAdmin(request)) {
    return json({ error: 'Necesitas una cuenta admin.' }, 403);
  }

  return json({ users: listUsers() });
}
