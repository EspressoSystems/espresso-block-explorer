'use client';

import {
  ProvideDerivedDateTimeFormatters,
  ProvideDerivedNumberFormatters,
  ProvideNavigatorLanguage,
  ProvideTickEverySecond,
} from 'espresso-block-explorer-components';
import 'espresso-block-explorer-components/dist/style.css';
import { IBM_Plex_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import React from 'react';
import './globals.css';

const ibm = IBM_Plex_Mono({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-family--ibm-plex-mono',
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
    <ProvideNavigatorLanguage>
      <ProvideDerivedNumberFormatters>
        <ProvideDerivedDateTimeFormatters>
          <ProvideTickEverySecond>
            <html lang="en">
              <body className={ibm.className}>{children}</body>
            </html>
          </ProvideTickEverySecond>
        </ProvideDerivedDateTimeFormatters>
      </ProvideDerivedNumberFormatters>
    </ProvideNavigatorLanguage>
  );
}
