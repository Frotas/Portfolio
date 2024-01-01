require("dotenv");
/** @type {import('next').NextConfig} */
const nextConfig = {
  output:
    process.env.ENVIRONMENT === "Pages" && process.env.ENVIRONMENT !== "Docker"
      ? "export"
      : "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        pathname: "/u/**",
      },
    ],
  },
};

module.exports = nextConfig;
