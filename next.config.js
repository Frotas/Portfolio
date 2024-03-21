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
        //https://media.licdn.com/dms/image/
        protocol: "https",
        hostname: "media.licdn.com",
        pathname: "/dms/image/**"
      },
      {
        // https://placehold.co/
        protocol: "https",
        hostname: "placehold.co",
        pathname: "/**"
      }
    ],
  },
  headers: () => [
    {
      source: '/',
      headers: [
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
      ],
    },
  ]
};

module.exports = nextConfig;
