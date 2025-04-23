import { createClient } from "@supabase/supabase-js";
import type { Database } from "../types/supabase";

// Initialize Supabase client with environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Log environment variables for debugging (without exposing sensitive data)
console.log("Supabase URL available:", !!supabaseUrl);
console.log("Supabase Anon Key available:", !!supabaseAnonKey);

// Ensure we have valid values before creating the client
const validSupabaseUrl = supabaseUrl || "https://missing-url-error.supabase.co";
const validSupabaseKey = supabaseAnonKey || "missing-key-error";

// Create a single instance of the Supabase client with more robust error handling
export const supabase = createClient<Database>(
  validSupabaseUrl,
  validSupabaseKey,
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
    },
  },
);

// Helper function to check if Supabase is properly configured
export const isSupabaseConfigured = (): boolean => {
  const configured = !!supabaseUrl && !!supabaseAnonKey;
  console.log("Supabase configured check:", configured);

  if (!configured) {
    console.error(
      "Supabase is not properly configured. Please check your environment variables.",
    );
  }

  return configured;
};
