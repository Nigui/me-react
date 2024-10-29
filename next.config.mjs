/** @type {import('next').NextConfig} */
const config = {
  experimental: {
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

export default config;
