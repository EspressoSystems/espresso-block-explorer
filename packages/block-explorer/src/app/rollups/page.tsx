import RollupsClientComponent from '@/client_components/rollups';
import { DeriveEnvironmentFromEnv } from '@/helpers/environment';
import { readFromEnv } from '@/helpers/read_from_env';

/**
 * Rollups is a summary page for listing various Rollups that are in use in
 * the system, as well as statistics concerning how many transactions they
 * have contributed.
 */
export default async function RollUps() {
  const env = readFromEnv();
  return (
    <DeriveEnvironmentFromEnv env={env}>
      <RollupsClientComponent />
    </DeriveEnvironmentFromEnv>
  );
}
