"use server";

import { supabase } from "@/app/lib/supabaseClient";
import jwt from "jsonwebtoken";

const SECRET_KEY = "your_super_secret_key";

export async function loginAction(formData) {
  const email = formData.get("username");
  const password = formData.get("password");

  const { data: user, error } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .eq("password", password)
    .single();

  if (error || !user) throw new Error("Invalid credentials");

  const token = jwt.sign({ email, role: "user" }, SECRET_KEY, {
    expiresIn: "1h",
  });
  return token;
}
