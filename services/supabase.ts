// ไฟล์ที่ใช้ตั้งค่าการเชื่อมต่อ Supabase ซึ้งต้องใช้ URL และ KEY ของ Supabase

import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://qlezgzilmtdjhacwudkw.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFsZXpnemlsbXRkamhhY3d1ZGt3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg2MDgzMzAsImV4cCI6MjA5NDE4NDMzMH0.DmGnl7F3mSeE0EcJ63rytiDduPSgWGwII9MJyd7kyPs";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
