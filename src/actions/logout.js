'use server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function logoutAction() {
  // Delete the JWT cookie
    cookies().set({
    name: 'token',
    value: '',
    path: '/',
    maxAge: 0,
  });

  redirect('/');
}
