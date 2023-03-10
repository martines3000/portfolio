const StylelintPlugin = require('stylelint-webpack-plugin');

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
  experimental: {
    appDir: true,
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'] } },
    ],
  },
  reactStrictMode: true,
  swcMinify: true,
  // https://nextjs.org/docs/advanced-features/output-file-tracing#automatically-copying-traced-files
  output: 'standalone',
  // https://nextjs.org/docs/messages/next-image-unconfigured-host
  images: {
    domains: [
      'www.datocms-assets.com',
      'i.scdn.co',
      'localhost',
      'portfolio.skippy-ai.com',
    ],
  },
  // Security headers and CSP
  // https://nextjs.org/docs/advanced-features/security-headers
  headers: async () => {
    return isProd
      ? [
          {
            source: '/:path',
            headers: [
              {
                key: 'X-DNS-Prefetch-Control',
                value: 'on',
              },
              {
                key: 'Strict-Transport-Security',
                value: 'max-age=63072000; includeSubDomains; preload',
              },
              {
                key: 'X-XSS-Protection',
                value: '1; mode=block',
              },
              {
                key: 'X-Frame-Options',
                value: 'SAMEORIGIN',
              },
              {
                key: 'X-Content-Type-Options',
                value: 'nosniff',
              },
              {
                key: 'Content-Security-Policy',
                value: contentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
              },
            ],
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
  webpack: (config) => {
    config.plugins.push(new StylelintPlugin());
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(nextConfig);
