/** @type {import('next').NextConfig} */
const nextConfig = {
  optimizeFonts: true,
  compress: true,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;
