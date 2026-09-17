import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 turbopack: {
    root: __dirname, // treat this folder as the root
  },
};

export default nextConfig;
