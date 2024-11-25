import 'espresso-block-explorer-components/dist/style.css';
import { Metadata } from 'next';
import { IBM_Plex_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import React from 'react';
import './globals.css';
import { ProvideProviders } from './provide_providers.jsx';

const ibm = IBM_Plex_Mono({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
  fallback: ['monospace'],
});

const neue = localFont({
  src: [
    {
      path: './PPNeueMontreal-Book.otf',
      weight: '400',
      style: 'normal',
    },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://infinitegarden.espressosys.com'),
};

/**
 * RootLayout is the default layout of the NextJS Application.  All Pages,
 * by default, have this layout as their default layout.
 *
 * As such, we include a bunch of the provided Contexts at this level in
 * order to ensure that they are available consistently on every page.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProvideProviders>
      <html lang="en">
        <body>
          <div
            style={
              {
                '--font-family--ibm-plex-mono': ibm.style.fontFamily,
                '--font-family--neue-montreal': neue.style.fontFamily,
              } as any
            }
          >
            {children}
          </div>
        </body>
      </html>
    </ProvideProviders>
  );
}
