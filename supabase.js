const SUPABASE_URL = "https://hbwgxesnylsejvhjhonl.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhid2d4ZXNueWxzZWp2aGpob25sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkwNDY2NjQsImV4cCI6MjA5NDYyMjY2NH0.pK7gxdxSQtE-Mfx8BjWL0ZZodQM3yMwFgbcCImVWOpY";

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
