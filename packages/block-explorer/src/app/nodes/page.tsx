'use client';

import {
  NodesPage,
  ProvideCappuccinoNodeValidatorStreams,
} from 'espresso-block-explorer-components';

/**
 * Nodes represents the Node Validator Page.
 *
 * It displays a summary of the state of the Block Chain and the nodes that
 * are connected to the network.
 */
export default function Nodes() {
  return (
    <ProvideCappuccinoNodeValidatorStreams>
      <NodesPage />
    </ProvideCappuccinoNodeValidatorStreams>
  );
}
