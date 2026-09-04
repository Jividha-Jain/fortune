import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "fortunegourmet.com",
      },
      {
        protocol: "http",
        hostname: "fortunegourmet.com",
      },
    ],
  },
};

export default nextConfig;
