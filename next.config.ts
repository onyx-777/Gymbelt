import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow cross-origin requests from any subdomain of localhost
  allowedDevOrigins: ["http://*.localhost:3000"],

  images: {
    remotePatterns: [
      {
        protocol: "https", // Ensure the correct protocol (https)
        hostname: "www.launchuicomponents.com", // Use the full hostname
        pathname: "/app-dark.png", // You can specify a pathname if needed
      },
      {
        protocol: "https", // Ensure the correct protocol (https)
        hostname: "www.launchuicomponents.com", // Use the full hostname
        pathname: "/app-light.png", // You can specify a pathname if needed
      },
      {
        protocol: "https", // Ensure the correct protocol (https)
        hostname: "images.unsplash.com", // Use the full hostname
      },
    ],
  },
};

export default nextConfig;
