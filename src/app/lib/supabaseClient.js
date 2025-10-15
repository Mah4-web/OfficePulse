import { createClient } from "@supabase/supabase-js";

// Supabase
const supabaseUrl = "https://dfjgwfuvixvxdagyvlyx.supabase.co";

// ANON PUBLIC key
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRmamd3ZnV2aXh2eGRhZ3l2bHl4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA1MDIzMDAsImV4cCI6MjA3NjA3ODMwMH0.E1-Vz5f_zuB0_UFh_AUfArO3B5egwzbFzQqVn_xcGwk";

// client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
