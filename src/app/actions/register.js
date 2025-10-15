"use server";

import { supabase } from "@/app/lib/supabaseClient";
import jwt from "jsonwebtoken";

const SECRET_KEY = "your_super_secret_key";

export async function registerAction(formData) {
  const email = formData.get("username");
  const password = formData.get("password");

  // Check if user exists in Supabase
  const { data: existingUser, error: fetchError } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single();

  if (fetchError && fetchError.code !== "PGRST116") {
    throw new Error("Database error: " + fetchError.message);
  }

  if (existingUser) throw new Error("User already exists");

  // Insert new user
  const { data, error } = await supabase
    .from("users")
    .insert([{ email, password }]); // In production: hash passwords!

  if (error) throw new Error("Insert error: " + error.message);

  // Generate JWT
  const token = jwt.sign({ email, role: "user" }, SECRET_KEY, {
    expiresIn: "1h",
  });
  return token;
}
