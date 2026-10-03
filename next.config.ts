import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Export each route as <route>/index.html so GitHub Pages serves both
  // /about and /about/.
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
