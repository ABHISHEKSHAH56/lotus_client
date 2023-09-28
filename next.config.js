/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  env: {
    BACKEND_URL: "http://64.227.152.24/api/v1/",
  },
  nextConfig,
};
