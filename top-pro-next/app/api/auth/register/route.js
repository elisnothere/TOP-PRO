import { createSession, createUser } from '@/lib/db';
import { json, readBody } from '@/lib/api';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request) {
  const body = await readBody(request);
  const name = String(body.name || '').trim();
  const email = String(body.email || '').trim().toLowerCase();
  const password = String(body.password || '');

  if (name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || password.length < 6) {
    return json({ error: 'Revisa nombre, email y contraseña.' }, 400);
  }

  try {
    const user = createUser({ name, email, password });
    const token = createSession(user.id);
    return json({ token, user }, 201);
  } catch {
    return json({ error: 'Ya existe una cuenta con ese email.' }, 409);
  }
}
