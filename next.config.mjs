/* eslint-disable */
import ESLintPlugin from 'eslint-webpack-plugin'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { dev }) => {
    if (dev) { // Add this plugin only in dev mode
      config.plugins.push(
        new ESLintPlugin({
          context: './', // Location where it will scan all the files
          extensions: ['js', 'jsx', 'ts', 'tsx'], // File formats that should be scanned
          exclude: ['node_modules', '.next'], // Exclude everything in these folders
        })
      )
    }
    return config
  },
};

export default nextConfig;
