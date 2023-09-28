/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  env: {
    BACKEND_URL: process.env.BACKEND_URL,
  },
  nextConfig,
};
