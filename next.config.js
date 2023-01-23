const repo = 'danielins.github.io'
const assetPrefix = `/${repo}/`
const basePath = `/${repo}`

const nextConfig = {
  images: {
    loader: 'akamai',
    path: '',
  },
  basePath: basePath,
  assetPrefix: assetPrefix
}

module.exports = nextConfig;