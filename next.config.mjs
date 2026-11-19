/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'illustrations.popsy.co',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/tasarimlar/safepoint',
        destination: '/tasarimlar/prometal',
        permanent: true,
      },
      {
        source: '/preview/safepoint',
        destination: '/preview/prometal',
        permanent: true,
      },
      {
        source: '/tasarimlar/proguard',
        destination: '/tasarimlar/proteknik',
        permanent: true,
      },
      {
        source: '/preview/proguard',
        destination: '/preview/proteknik',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
