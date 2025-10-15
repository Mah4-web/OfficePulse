'use server';
import bcrypt from 'bcryptjs';
import db from '@/utils/dbConnection.js';

export async function registerAction(formData) {
    const username = formData.get('username')?.trim();
    const password = formData.get('password');
    if (!username || !password) throw new Error('Missing fields');

    const hash = await bcrypt.hash(password, 10);
    try {
    await db.query('INSERT INTO users (username, password_hash) VALUES ($1, $2)', [username, hash]);
    } catch (err) {
    if (err.code === '23505') throw new Error('Username already exists'); //this is a postgress sql error for dupilcation, I'll try to make notes of everything so if someone is interested then just use it and understand it.
    throw new Error('DB error');
    }
}
