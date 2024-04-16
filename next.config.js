/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["www.gravatar.com"],
  },
};

module.exports = nextConfig;
