// Content-Security-Policy
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy
const contentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' cdn.vercel-insights.com;
  child-src 'none';
  img-src 'self' https://github.githubassets.com/images/icons/emoji/ https://media.giphy.com/media/ https://github.com/martines3000/ https://raw.githubusercontent.com/martines3000/ data:;
  style-src 'self' 'unsafe-inline';
  font-src 'self';
  connect-src *;
`;

const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ignore build errors in production
  typescript: {
    ignoreBuildErrors: isProd,
  },
  // Ignore ESLint errors in production
  eslint: {
    ignoreDuringBuilds: isProd,
  },
  optimizeFonts: true,
  reactStrictMode: false,
  swcMinify: true,
  // https://nextjs.org/docs/advanced-features/output-file-tracing#automatically-copying-traced-files
  output: 'standalone',
  // https://nextjs.org/docs/messages/next-image-unconfigured-host
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.scdn.co',
      },
      {
        protocol: 'https',
        hostname: 'portfolio.skippy-ai.com',
      },
      {
        protocol: 'https',
        hostname: 'www.datocms-assets.com',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
  },
  // Security headers and CSP
  // https://nextjs.org/docs/advanced-features/security-headers
  headers: () => {
    return isProd
      ? [
          {
            source: '/(.*).(jpg|png|gif)',
            headers: [
              {
                key: 'Cache-Control',
                value:
                  'public, max-age=3600, s-maxage=3600, stale-while-revalidate=3600',
              },
            ],
          },
        ]
      : [];
  },
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(nextConfig);
