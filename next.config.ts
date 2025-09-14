import type {NextConfig} from 'next';

const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'glc_mecanica';
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

const assetPrefix = isGithubActions ? `/${repo}/` : undefined;
const basePath = isGithubActions ? `/${repo}` : undefined;

const nextConfig: NextConfig = {
  output: 'export',
  assetPrefix: assetPrefix,
  basePath: basePath,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
