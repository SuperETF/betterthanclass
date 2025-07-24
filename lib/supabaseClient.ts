// lib/supabaseClient.ts
import { createClient } from "@supabase/supabase-js";

// 환경 변수에서 값을 불러온다. (NEXT_PUBLIC_ 접두사 주의)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// createClient로 supabase 인스턴스를 생성
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
