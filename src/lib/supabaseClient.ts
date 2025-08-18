import { createClient } from '@supabase/supabase-js';

// --- Accessing Environment Variables ---
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Supabase URL and Anon Key must be defined in your .env file");
}

// --- Initialize and export the Supabase client ---
export const supabase = createClient(supabaseUrl, supabaseAnonKey);