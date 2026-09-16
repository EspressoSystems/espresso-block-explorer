import LayoutClientComponent from '@/client_components/layout';
import 'espresso-block-explorer-components/block-explorer.css';
import 'espresso-block-explorer-components/espresso-block-explorer-components.css';

import type { Metadata } from 'next';
import React from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: {
    template: '__SITE_PREFIX__ %s | __NETWORK_SITE_NAME__',
    default: '__NETWORK_SITE_NAME__',
  },
  metadataBase: new URL('https://placeholder.espresso.foundation'),
  openGraph: {
    type: 'website',
    siteName: '__NETWORK_SITE_NAME__',
    images: ['/esp-block-explorer.png'],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@EspressoSys',
    images: ['/esp-block-explorer.png'],
  },
};

/**
 * RootLayout is the default layout of the NextJS Application.  All Pages,
 * by default, have this layout as their default layout.
 *
 * As such, we include a bunch of the provided Contexts at this level in
 * order to ensure that they are available consistently on every page.
 */
export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <LayoutClientComponent>{children}</LayoutClientComponent>
      </body>
    </html>
  );
}
