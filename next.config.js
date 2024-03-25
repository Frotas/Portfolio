require("dotenv");
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.ENVIRONMENT === "Production" ? "export" : "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        pathname: "/u/**",
      },
      {
        protocol: "https",
        hostname: "media.licdn.com",
        pathname: "/dms/image/**"
      },
      {
        protocol: "https",
        hostname: "placehold.co",
        pathname: "/**"
      }
    ],
  },
};

module.exports = nextConfig;
