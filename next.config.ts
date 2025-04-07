import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow cross-origin requests from specific domains during development
  allowedDevOrigins: [
    "http://localhost:3000", // Replace with your specific domain for local development
    "https://rnooy-122-161-68-55.a.free.pinggy.link", // Your external link
    "https://*.pinggy.link", // Wildcard for pinggy subdomains, if required
  ],

  images: {
    remotePatterns: [
      {
        protocol: "https", // Ensure the correct protocol (https)
        hostname: "www.launchuicomponents.com", // Use the full hostname
        pathname: "/app-dark.png", // Optional if you want to limit the path
      },
      {
        protocol: "https", // Ensure the correct protocol (https)
        hostname: "www.launchuicomponents.com", // Use the full hostname
        pathname: "/app-light.png", // Optional if you want to limit the path
      },
      {
        protocol: "https", // Ensure the correct protocol (https)
        hostname: "images.unsplash.com", // For Unsplash images
      },
      {
        protocol: "https", // Ensure the correct protocol (https)
        hostname: "utfs.io", // For Unsplash images
      },
      {
        protocol: "https", // Ensure the correct protocol (https)
        hostname: "ddvnxxtuwp.ufs.sh", // For Unsplash images
      },
    ],
  },
};

export default nextConfig;
