import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    // Static export (output: 'export') has no runtime image optimizer.
    // All raster assets are pre-sized; nearly all visuals are CSS-built.
    unoptimized: true,
  },
  typescript: { ignoreBuildErrors: false },
};

export default nextConfig;
