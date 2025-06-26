import NodesClientComponent from '@/client_components/nodes';

/**
 * Nodes represents the Node Validator Page.
 *
 * It displays a summary of the state of the Block Chain and the nodes that
 * are connected to the network.
 */
export default async function Nodes() {
  return <NodesClientComponent />;
}
