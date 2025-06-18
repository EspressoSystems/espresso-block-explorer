'use server';

import ExplorerClientComponent from '@/client_components/explorer';
import { DeriveEnvironmentFromEnv } from '@/helpers/environment';
import { readFromEnv } from '@/helpers/read_from_env';

/**
 * Home represents the default home screen navigated to by the path '/'.
 *
 * It is currently a placeholder as we do not have the elements / components
 * for the "Block Explorer" home page fleshed out quite yet.
 */
export default async function Explorer() {
  const env = readFromEnv();
  return (
    <DeriveEnvironmentFromEnv env={env}>
      <ExplorerClientComponent />
    </DeriveEnvironmentFromEnv>
  );
}
