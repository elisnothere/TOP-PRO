import { createSession, getUserByEmail, verifyPassword } from '@/lib/db';
import { json, readBody } from '@/lib/api';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request) {
  const body = await readBody(request);
  const email = String(body.email || '').trim().toLowerCase();
  const user = getUserByEmail(email);

  if (!user || !verifyPassword(body.password, user.password_hash)) {
    return json({ error: 'Email o contraseña incorrectos.' }, 401);
  }

  const token = createSession(user.id);
  return json({
    token,
    user: { id: user.id, name: user.name, email: user.email, role: user.role }
  });
}
