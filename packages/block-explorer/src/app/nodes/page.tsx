import NodesClientComponent from '@/client_components/nodes';
import { DeriveEnvironmentFromEnv } from '@/helpers/environment';
import { readFromEnv } from '@/helpers/read_from_env';

/**
 * Nodes represents the Node Validator Page.
 *
 * It displays a summary of the state of the Block Chain and the nodes that
 * are connected to the network.
 */
export default async function Nodes() {
  const env = readFromEnv();
  return (
    <DeriveEnvironmentFromEnv env={env}>
      <NodesClientComponent />
    </DeriveEnvironmentFromEnv>
  );
}
