/** @type {import('next').NextConfig} */

module.exports = {
  distDir: '../../dist/client',
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(graphql|gql)/,
      exclude: /node_modules/,
      loader: "graphql-tag/loader"
    })

    return config
  }
};
