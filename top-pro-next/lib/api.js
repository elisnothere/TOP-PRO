import { NextResponse } from 'next/server';
import { getUserByToken } from './db';

export function json(payload, status = 200) {
  return NextResponse.json(payload, {
    status,
    headers: { 'Cache-Control': 'no-store' }
  });
}

export async function readBody(request) {
  return request.json().catch(() => ({}));
}

export function requireAdmin(request) {
  const header = request.headers.get('authorization') || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : '';
  const user = getUserByToken(token);
  return user?.role === 'admin' ? user : null;
}
