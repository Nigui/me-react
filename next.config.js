/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    typedRoutes: false, // disable for now to use turbopack
  },
};

module.exports = nextConfig;
