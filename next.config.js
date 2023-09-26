/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  env: {
    BACKEND_URL: "http://localhost:4000/api/v1/",
  },
  nextConfig,
};
