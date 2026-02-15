/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/grand-complication',
  assetPrefix: '/grand-complication',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
