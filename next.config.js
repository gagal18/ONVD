const nextConfig = {
    trailingSlash: true,
    output: 'export',
    publicRuntimeConfig: {
        basePath: process.env.NODE_ENV === 'production' ? '/portfolio-revamp' : '',
    },
}
module.exports = nextConfig
