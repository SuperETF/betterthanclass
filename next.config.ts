import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["readdy.ai"], // 여기에 허용할 외부 도메인 추가!
  },
};

export default nextConfig;
