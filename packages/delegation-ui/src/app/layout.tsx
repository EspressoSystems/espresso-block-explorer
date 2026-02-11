import LayoutClientComponent from '@/client_components/layout';
import { readFromEnv } from '@/helpers/read_from_env';
import 'espresso-block-explorer-components/delegation-ui.css';
import React from 'react';
import './globals.css';
// Growing pains... It's unclear why these css file code splits are occurring.
// After spending some time to resolve / determine them without success, we're
// just adopting them for now until we can figure out how to resolve them
// at a later time.
import 'espresso-block-explorer-components/stake_table_v2_contract_context.css';

// Force dynamic rendering to ensure environment variables are read at runtime
export const dynamic = 'force-dynamic';
export const revalidate = 86400;

if (
  typeof localStorage === 'undefined' ||
  typeof localStorage.getItem === 'undefined'
) {
  (globalThis as any).localStorage = {
    getItem: (_key: string) => null,

    setItem: (_key: string, _value: string) => {},

    removeItem: (_key: string) => {},
    clear: () => {},
  };
}

/**
 * RootLayout is the default layout of the NextJS Application.  All Pages,
 * by default, have this layout as their default layout.
 *
 * As such, we include a bunch of the provided Contexts at this level in
 * order to ensure that they are available consistently on every page.
 */
export default async function RootLayout({
  children,
}: React.PropsWithChildren) {
  // Read environment variables on the server at runtime
  const env = readFromEnv();

  return (
    <html lang="en">
      <body>
        <LayoutClientComponent env={env}>{children}</LayoutClientComponent>
      </body>
    </html>
  );
}
