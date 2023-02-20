import '../styles/globals.css';
import Header from '../components/Header';
import Menu from '../components/Menu';
import { Providers } from '../providers';

import { IBM_Plex_Sans } from '@next/font/google';
import clsx from 'clsx';

const ibm_plex_sans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  preload: false,
  display: 'swap',
  style: ['normal'],
  variable: '--font-ibm-plex-sans',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={clsx(
          `${ibm_plex_sans.variable} font-sans`,
          'bg-white text-black dark:bg-black dark:text-white'
        )}
      >
        <Providers>
          <div className="relative flex h-screen max-h-full w-full">
            <Menu />
            <main className="max-h-full flex-1 overflow-hidden">
              <Header />
              <div
                className={
                  'relative flex h-full max-h-full flex-1 overflow-y-auto overflow-x-hidden bg-white [background-image:radial-gradient(rgb(231_231_231)_10%,_transparent_10.4%)] [background-position:8px_8px] [background-size:16px_16px] dark:bg-black dark:[background-image:radial-gradient(rgb(24_24_24)_10%,_transparent_10.4%)]'
                }
              >
                <div className="mx-auto h-fit w-full max-w-4xl px-6 py-12">
                  {children}
                </div>
              </div>
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
