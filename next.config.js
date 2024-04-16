/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack5: false,
  images: {
    domains: ["www.gravatar.com"],
  },
};

module.exports = nextConfig;
