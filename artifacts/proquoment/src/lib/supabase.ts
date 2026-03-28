import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://qgyefzlanqkqzlgneyge.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFneWVmemxhbnFrcXpsZ25leWdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ3MDkzMTAsImV4cCI6MjA5MDI4NTMxMH0.znjY0MMbk8QhSNjW-3uOI3raoTgrg0JPmKCOwz4mCz0";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
