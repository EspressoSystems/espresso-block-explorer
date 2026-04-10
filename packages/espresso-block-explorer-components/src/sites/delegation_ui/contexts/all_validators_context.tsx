import { mapIterable } from '@/functional/functional';
import { NodeMetadata } from '@/service/espresso_staking_api_service/common/node_metadata';
import { NodeMetadataContent } from '@/service/espresso_staking_api_service/common/node_metadata_content';
import { NodeSetEntry } from '@/service/espresso_staking_api_service/common/node_set_entry';
import { default as React } from 'react';
import { CuratedValidatorsMapContext } from './curated_validators_map_context';
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
 * populateFallback takes an incoming NodeSetEntry and a fallback
 * NodeMetadataContent, and populates missing data from the existing curated
 * data.
 */
function populateFallback(
  incoming: NodeSetEntry,
  fallback: null | undefined | NodeMetadataContent,
): NodeSetEntry {
  if (!fallback) {
    return incoming;
  }

  return new NodeSetEntry(
    incoming.address,
    incoming.stakingKey,
    incoming.stake,
    incoming.commission,
    new NodeMetadata(
      new URL(incoming.metadata?.uri ?? 'about:blank'),
      new NodeMetadataContent(
        incoming.metadata?.content?.name ?? fallback.name,
        incoming.metadata?.content?.description ?? fallback.description,
        incoming.metadata?.content?.companyName ?? fallback.companyName,
        incoming.metadata?.content?.companyWebsite ?? fallback.companyWebsite,
        incoming.metadata?.content?.clientVersion ?? fallback.clientVersion,
        incoming.metadata?.content?.icon ?? fallback.icon,
      ),
    ),
  );
}

/**
 * DeriveNodeSetFromFullNodeSetSnapshot is a React Component that
 * derives the NodeAddressListContext and AllValidatorsContext
 * from the FullNodeSetSnapshotContext and provides them to its descendants.
 */
export const DeriveNodeSetFromFullNodeSetSnapshot: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  const curatedMetadata = React.useContext(CuratedValidatorsMapContext);
  const snapshot = React.useContext(FullNodeSetSnapshotContext);

  const nodes = snapshot?.nodes ?? [];
  const allValidators = new Map(
    mapIterable(
      nodes,
      (node) =>
        [
          node.addressText,
          populateFallback(node, curatedMetadata.get(node.addressText)),
        ] as const,
    ),
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
