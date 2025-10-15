'use server';
import bcrypt from 'bcryptjs';
import { db } from '@/utils/dbConnection';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { signToken } from '@/utils/auth'; 

const VULN = process.env.VULN === 'true';

// VULNERABLE: demo only — DO NOT USE IN PRODUCTION, in case someone just copy and paste
async function vulnerableFindUser(username) {
  // purposely insecure for demo
  const query = `SELECT id, username, password_hash FROM users WHERE username = '${username}' LIMIT 1`;
  const result = await db.query(query);
  const rows = result.rows;
  return rows[0] ?? null;
}

// SECURE: parameterized query
async function secureFindUser(username) {
  const result = await db.query(
    'SELECT id, username, password_hash FROM users WHERE username = $1 LIMIT 1',
    [username]
  );
  const rows = result.rows;
  return rows[0] ?? null;
}

export async function loginAction(formData) {
  const username = formData.get('username')?.trim();
  const password = formData.get('password');

  if (!username || !password) {
    // return or throw a controlled error; throwing is fine for demo but handle in UI
    throw new Error('Missing username or password');
  }

  const finder = VULN ? vulnerableFindUser : secureFindUser;
  const user = await finder(username);

  if (!user) {
    // a message to avoid 
    throw new Error('Invalid username or password');
  }

  const ok = await bcrypt.compare(password, user.password_hash);
  if (!ok) throw new Error('Invalid username or password');

  // signToken should sign with a secret and expiry (JWT)
  const token = signToken({ userId: user.id, username: user.username });

  cookies().set({
    name: 'token',
    value: token,
    httpOnly: true,
    path: '/',
    maxAge: 60 * 60, // 1 hour
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
  });

  redirect('/profile/' + user.id);
}
