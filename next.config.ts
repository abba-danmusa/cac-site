import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ['cdn.prod.website-files.com', 'encrypted-tbn0.gstatic.com'],
  },
};

export default nextConfig;
