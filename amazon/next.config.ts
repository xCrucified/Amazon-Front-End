import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['lh3.googleusercontent.com'], 
  },
};

module.exports = {
  env: {
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com', // Replace with the correct hostname
        port: '', // Leave this blank if no specific port is needed
        pathname: '/**', // Allow all paths
        search: '', // Optional: can be left blank to match all search queries
      },
    ],
  },
}

export default nextConfig;
