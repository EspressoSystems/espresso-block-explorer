import LayoutClientComponent from '@/client_components/layout';
import { readFromEnv } from '@/helpers/read_from_env';
import 'espresso-block-explorer-components/delegation-ui.css';
import { type Metadata } from 'next';
import Head from 'next/head';
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

export async function generateMetadata(): Promise<Metadata> {
  const BASE_URL = process.env.BASE_URL ?? 'https://claim.espresso.foundation';
  const BASE_PATH = process.env.BASE_PATH ?? '/';

  return {
    metadataBase: new URL(BASE_URL),
    title: 'Espresso Staking Dashboard',
    description:
      'Stake your ESP, delegate to validators, and monitor your contribution to securing the Espresso Network',
    alternates: {
      canonical: BASE_PATH,
    },
    openGraph: {
      url: BASE_PATH,
      images: [`${BASE_PATH}esp-staking-dashboard.png`],
      type: 'website',
    },
    twitter: {
      images: [`${BASE_PATH}esp-staking-dashboard.png`],
    },
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
