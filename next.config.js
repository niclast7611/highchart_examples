/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    TEAM_COLOR: process.env.TEAM_COLOR,
  },
};
module.exports = nextConfig;
