// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://cicsnqqedndrjjnvoujl.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNpY3NucXFlZG5kcmpqbnZvdWpsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk3OTA0NzUsImV4cCI6MjA1NTM2NjQ3NX0.PiZQUobu2RViv2hYb0YG37uKPvUPzgjIe8uYPl3GcgQ";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);