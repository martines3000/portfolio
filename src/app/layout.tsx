import './globals.css';

import type { Metadata } from 'next';
import { IBM_Plex_Sans } from 'next/font/google';
import clsx from 'clsx';

import AnalyticsWrapper from '@/components/AnalyticsWrapper';
import Header from '@/components/Header';
import Menu from '@/components/Menu';
import { Providers } from '../providers';

const ibm_plex_sans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  preload: false,
  display: 'swap',
  style: ['normal'],
  variable: '--font-ibm-plex-sans',
});

// https://nextjs.org/docs/api-reference/metadata
export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio.skippy-ai.com'),
  title: {
    default: 'Martin Domajnko',
    template: '%s | Martin Domajnko',
  },
  openGraph: {
    title: 'Martin Domajnko',
    description:
      'Developer, blockchain enthusiast, and self-improvement addict.',
    url: 'https://portfolio.skippy-ai.com',
    siteName: 'Martin Domajnko',
    images: [
      {
        url: '/api/og',
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'en-US',
    type: 'website',
    countryName: 'Slovenia',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Martin Domajnko',
    card: 'summary_large_image',
  },
  icons: {
    shortcut: '/favicon.ico',
  },
  verification: {
    google: 'wZUCGGs4tMFk3TOrhYzWepGdtCaTAk0ZTip5ebXb-wE',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="/themes/tomorrow-night-bright.css"
          rel="stylesheet"
          media="(prefers-color-scheme: dark)"
          // @ts-ignore
          precedence="default"
        />
        <link
          href="/themes/github.css"
          rel="stylesheet"
          media="(prefers-color-scheme: light)"
          // @ts-ignore
          precedence="default"
        />
        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icons/icon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/icon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link
          href="/icons/icon-48x48.png"
          rel="icon"
          type="image/png"
          sizes="48x48"
        />
        <link
          href="/icons/icon-180x180.png"
          rel="icon"
          type="image/png"
          sizes="180x180"
        />
        <link
          href="/icons/icon-192x192.png"
          rel="icon"
          type="image/png"
          sizes="192x192"
        />
        <link
          href="/icons/icon-512x512.png"
          rel="icon"
          type="image/png"
          sizes="512x512"
        />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <meta name="theme-color" content="#000" />
      </head>
      <body
        className={clsx(
          `${ibm_plex_sans.variable} font-sans`,
          'bg-white text-black dark:bg-black dark:text-white',
        )}
      >
        <Providers>
          <div className="relative flex h-full max-h-full w-full max-w-full">
            <Menu />
            <main className="flex-1 overflow-hidden">
              <Header />
              <div
                className={
                  'relative flex h-full flex-1 overflow-y-auto overflow-x-hidden bg-white [background-image:radial-gradient(rgb(231_231_231)_10%,_transparent_10.4%)] [background-position:8px_8px] [background-size:16px_16px] dark:bg-black dark:[background-image:radial-gradient(rgb(24_24_24)_10%,_transparent_10.4%)]'
                }
              >
                <div className="mx-auto h-fit w-full max-w-4xl px-6 py-12">
                  {children}
                </div>
              </div>
            </main>
          </div>
        </Providers>
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
