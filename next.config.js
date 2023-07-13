/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/u/6088236*",
      },
    ],
  },
  experimental: {
    appDir: true,
    typedRoutes: false, // disable for now to use turbopack
  },
};

module.exports = nextConfig;
