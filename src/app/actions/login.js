"use server"; // server action

import jwt from "jsonwebtoken";
import { promises as fs } from "fs";
import path from "path";

const SECRET_KEY = "your_super_secret_key";
const USERS_FILE = path.join(process.cwd(), "users.json");

export async function loginAction(formData) {
  const email = formData.get("username");
  const password = formData.get("password");

  // Load existing users (demo)
  let users = [];
  try {
    const data = await fs.readFile(USERS_FILE, "utf-8");
    users = JSON.parse(data);
  } catch (err) {}

  // Check credentials
  const user = users.find((u) => u.email === email && u.password === password);
  if (!user) throw new Error("Invalid credentials");

  // Generate JWT
  const token = jwt.sign({ email, role: "user" }, SECRET_KEY, {
    expiresIn: "1h",
  });

  return token; // token can be send to cookies/localStorage
}
