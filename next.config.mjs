/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    serverExternalPackages: ['@prisma/client'],
  },
};

export default nextConfig;
