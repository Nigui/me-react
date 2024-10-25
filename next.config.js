/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    typedRoutes: false, // disable for now to use turbopack
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "random.danielpetrica.com",
        port: "",
        pathname: "/api/random",
      },
    ],
  },
};

module.exports = nextConfig;
