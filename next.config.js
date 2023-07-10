const nextConfig = {
  trailingSlash: true,
  publicRuntimeConfig: {
    basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio/' : '',
  },
    basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio/' : '',
}
module.exports = nextConfig
