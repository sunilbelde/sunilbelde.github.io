/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Uncomment the following lines if deploying to https://username.github.io/repo-name/
  // basePath: '/repo-name',
  // assetPrefix: '/repo-name/',
};

module.exports = nextConfig;
