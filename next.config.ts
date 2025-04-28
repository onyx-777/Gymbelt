import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    useCache: true,
    cacheLife: {
      "1 hours": {
        stale: 3600, // Time (in seconds) after which data is considered stale
        revalidate: 3600, // Time (in seconds) after which data should be revalidated
        expire: 7200, // Time (in seconds) after which the cache expires
      },
    },
  },
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
      {
        protocol: "https", // Ensure the correct protocol (https)
        hostname: "originui.com", // For Unsplash images
      },
      {
        protocol: "https", // Ensure the correct protocol (https)
        hostname: "assets.aceternity.com", // For Unsplash images
      },
    ],
  },
};

export default nextConfig;
