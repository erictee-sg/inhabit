import { createClient } from "@supabase/supabase-js";
import type { Database } from "../types/supabase";

// Initialize Supabase client with environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Ensure we have valid values before creating the client
const validSupabaseUrl = supabaseUrl || "https://missing-url-error.supabase.co";
const validSupabaseKey = supabaseAnonKey || "missing-key-error";

// Create a single instance of the Supabase client
export const supabase = createClient<Database>(
  validSupabaseUrl,
  validSupabaseKey,
);

// Helper function to check if Supabase is properly configured
export const isSupabaseConfigured = (): boolean => {
  return !!supabaseUrl && !!supabaseAnonKey;
};
