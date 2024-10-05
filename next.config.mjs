/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;
