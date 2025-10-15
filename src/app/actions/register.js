"use server";

import jwt from "jsonwebtoken";
import { promises as fs } from "fs";
import path from "path";

const SECRET_KEY = "your_super_secret_key";
const USERS_FILE = path.join(process.cwd(), "users.json");

export async function registerAction(formData) {
  const email = formData.get("username");
  const password = formData.get("password");

  // Load existing users
  let users = [];
  try {
    const data = await fs.readFile(USERS_FILE, "utf-8");
    users = JSON.parse(data);
  } catch (err) {}

  // Check if user exists
  if (users.find((u) => u.email === email))
    throw new Error("User already exists");

  // Add new user
  users.push({ email, password }); // In production: hash passwords!
  await fs.writeFile(USERS_FILE, JSON.stringify(users, null, 2));

  // Generate JWT
  const token = jwt.sign({ email, role: "user" }, SECRET_KEY, {
    expiresIn: "1h",
  });

  return token;
}
