import 'espresso-block-explorer-components/dist/espresso-block-explorer-components.css';
import React from 'react';

import LayoutClientComponent from '@/client_components/layout';
import {
  determineEnvironmentFromVariable,
  validateContractAddress,
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
    contract_address_stake_table: validateContractAddress(
      process.env.CONTRACT_ADDRESS_STAKE_TABLE,
    ),
    contract_address_esp_token: validateContractAddress(
      process.env.CONTRACT_ADDRESS_ESP_TOKEN,
    ),
  };

  return (
    <html lang="en">
      <body>
        <LayoutClientComponent env={env}>{children}</LayoutClientComponent>
      </body>
    </html>
  );
}
