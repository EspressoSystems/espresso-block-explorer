import 'espresso-block-explorer-components/dist/espresso-block-explorer-components.css';
import React from 'react';

import LayoutClientComponent from '@/client_components/layout';
import './globals.css';

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
    <LayoutClientComponent>
      <html lang="en">
        <body>{children}</body>
      </html>
    </LayoutClientComponent>
  );
}
