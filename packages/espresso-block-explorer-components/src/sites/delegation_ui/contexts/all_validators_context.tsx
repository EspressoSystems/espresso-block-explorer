import { mapIterable } from '@/functional/functional';
import { NodeSetEntry } from '@/service/espresso_l1_validator_service/common/node_set_entry';
import React from 'react';
import { FullNodeSetSnapshotContext } from './full_node_set_snapshot_context';

/**
 * AllValidatorsContext provides a React Context
 * for the current full validator set snapshot.
 */
export const AllValidatorsContext = React.createContext<
  Map<`0x${string}`, NodeSetEntry>
>(new Map());

/**
 * NodeAddressListContext provides a React Context for a list of validator
 * addresses.
 */
export const NodeAddressListContext = React.createContext<`0x${string}`[]>([]);

/**
 * DeriveNodeSetFromFullNodeSetSnapshot is a React Component that
 * derives the NodeAddressListContext and AllValidatorsContext
 * from the FullNodeSetSnapshotContext and provides them to its descendants.
 */
export const DeriveNodeSetFromFullNodeSetSnapshot: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  const snapshot = React.useContext(FullNodeSetSnapshotContext);

  const nodes = snapshot?.nodes ?? [];
  const allValidators = new Map(
    mapIterable(nodes, (node) => [node.addressText, node] as const),
  );
  const nodeAddressList = nodes.map((node) => node.addressText).toSorted();

  return (
    <NodeAddressListContext.Provider value={nodeAddressList}>
      <AllValidatorsContext.Provider value={allValidators}>
        {children}
      </AllValidatorsContext.Provider>
    </NodeAddressListContext.Provider>
  );
};
