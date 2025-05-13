import type { NextConfig } from "next";

const NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'randomuser.me',

      },
      // Add more hostnames as needed
    ],
  },
};

module.exports = NextConfig;