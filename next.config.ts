import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "readdy.ai", // 기존 값
      "jubzurynttsbzusfejqh.supabase.co" // ← 여기에 본인 supabase 도메인 추가!
    ],
  },
};

export default nextConfig;
