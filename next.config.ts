import type { NextConfig } from "next";

const NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        pathname: '/api/**', // Optional: specify a path pattern
      },
      // Add more hostnames as needed
    ],
  },
};

module.exports = NextConfig;