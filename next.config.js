const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = null
let basePath = null

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

const nextConfig = {
  images: {
    loader: 'akamai',
    path: '',
  },
  basePath: basePath,
  assetPrefix: assetPrefix
}

module.exports = nextConfig;