// @ts-nocheck
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

require('dotenv').config()

/**
 * @type {import('next').NextConfig}
 **/
module.exports = withBundleAnalyzer({
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
})

const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/jobs',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
