/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true, // Temporary for deployment
  },
  typescript: {
    ignoreBuildErrors: true, // Temporary
  }
}

module.exports = nextConfig
