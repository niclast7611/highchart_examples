/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    MLB_KEY: process.env.MLB_KEY,
  },
};
module.exports = nextConfig;
