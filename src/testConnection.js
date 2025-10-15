import { supabase } from "./app/lib/supabaseClient";

export async function testSupabaseConnection() {
  try {
    const { data, error } = await supabase.from("users").select("*").limit(1);

    if (error) {
      console.error("❌ Supabase error:", error.message);
    } else {
      console.log("✅ Supabase connection successful! Sample data:", data);
    }
  } catch (err) {
    console.error("⚠️ Unexpected error connecting to Supabase:", err);
  }
}
