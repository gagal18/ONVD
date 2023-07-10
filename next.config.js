const nextConfig = {
  trailingSlash: true,
  output: 'export',
  publicRuntimeConfig: {
    basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
    assetsPath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
  },
}
module.exports = nextConfig
