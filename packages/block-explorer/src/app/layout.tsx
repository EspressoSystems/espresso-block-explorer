import 'espresso-block-explorer-components/block-explorer.css';
import React from 'react';
// Growing pains... It's unclear why these css file code splits are occurring.
// After spending some time to resolve / determine them without success, we're
// just adopting them for now until we can figure out how to resolve them
// at a later time.
import 'espresso-block-explorer-components/stake_table_v2_contract_context.css';
import 'espresso-block-explorer-components/inscription.css';

import LayoutClientComponent from '@/client_components/layout';
import {
  determineEnvironmentFromVariable,
  type EnvironmentConfig,
} from '@/helpers/read_from_env';
import './globals.css';

// Force dynamic rendering to ensure environment variables are read at runtime
export const dynamic = 'force-dynamic';
export const revalidate = 86400;

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
  const env: EnvironmentConfig = {
    environment: determineEnvironmentFromVariable(process.env.ENVIRONMENT_NAME),
  };

  return (
    <html lang="en">
      <body>
        <LayoutClientComponent env={env}>{children}</LayoutClientComponent>
      </body>
    </html>
  );
}
