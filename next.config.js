/** @type { import('next').nextConfig } */

const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  basePath: '/danielins.github.io',
  assetPrefix: '/danielins.github.io/'
}

module.exports = nextConfig;