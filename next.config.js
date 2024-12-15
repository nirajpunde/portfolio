/** @type {import('next').NextConfig} */
const repoName = process.env.NEXT_PUBLIC_PAGES_BASE_PATH || '';
const nextConfig = {
  output: 'export',
  basePath: repoName,
  assetPrefix: repoName ? `${repoName}/` : undefined,
  images: { unoptimized: true },
};

module.exports = nextConfig;
