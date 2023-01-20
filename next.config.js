/** @type { import('next').nextConfig } */

const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  assetPrefix: './'
}

module.exports = nextConfig;