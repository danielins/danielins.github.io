const isGitHubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = '/'

if ( isGitHubActions ) {
  const repo = process.env.GITHUB_ACTIONS.replace(/.*?\//, '')

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