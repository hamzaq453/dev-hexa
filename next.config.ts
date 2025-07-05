import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["images.unsplash.com", "assets.aceternity.com"],
  },
  eslint: {
    // Explicitly ignore ESLint errors during build
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Explicitly ignore TypeScript errors during build
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
