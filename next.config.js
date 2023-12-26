/** @type {import('next').NextConfig} */
const nextConfig = {
  output:'export',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/u/**',
      }
    ]
  }
}

module.exports = nextConfig
