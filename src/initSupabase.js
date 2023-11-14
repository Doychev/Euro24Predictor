import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

// Better put your these secret keys in .env file
export const supabase = createClient(
  "https://qburmbeclbbvxhtnpjzi.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFidXJtYmVjbGJidnhodG5wanppIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk4MDkwMDksImV4cCI6MjAxNTM4NTAwOX0.b8TAtBQXyxvp6PokXI4QmUBOOvLht1s4eY03PDkFpyI",
  {
    localStorage: AsyncStorage,
    detectSessionInUrl: false, // Prevents Supabase from evaluating window.location.href, breaking mobile
  }
);
