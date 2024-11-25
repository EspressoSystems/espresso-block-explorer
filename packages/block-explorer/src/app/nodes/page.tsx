'use client';

import {
  NodesPage,
  ProvideCappuccinoNodeValidatorServiceAPIContext,
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
    <ProvideCappuccinoNodeValidatorServiceAPIContext>
      <ProvideCappuccinoNodeValidatorStreams>
        <NodesPage />
      </ProvideCappuccinoNodeValidatorStreams>
    </ProvideCappuccinoNodeValidatorServiceAPIContext>
  );
}
