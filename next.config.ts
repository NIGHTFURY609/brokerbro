import type { NextConfig } from "next";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        pathname: '/api/portraits/**', // Optional: specify a path pattern
      },
      // Add more hostnames as needed
    ],
  },
};

module.exports = nextConfig;