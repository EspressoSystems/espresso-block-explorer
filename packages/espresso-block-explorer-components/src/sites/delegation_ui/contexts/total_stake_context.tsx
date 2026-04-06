import { emptyIterator, foldRIterable } from '@/functional/functional';
import { NodeSetEntry } from '@/service/espresso_staking_api_service/common/node_set_entry';
import React from 'react';
import { FullNodeSetSnapshotContext } from './full_node_set_snapshot_context';

/**
 * TotalStakeContext provides a React Context
 * for the total stake of all validators.
 */
export const TotalStakeContext = React.createContext<bigint>(0n);

/**
 * DeriveTotalStake is a component that Provides the TotalStakeContext
 * by calculating the total stake from the AllValidatorsContext.
 */
export const DeriveTotalStake: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <DeriveTotalStakeFromAllValidators>
      {children}
    </DeriveTotalStakeFromAllValidators>
  );
};

const DeriveTotalStakeFromAllValidators: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const fullNodeSet = React.useContext(FullNodeSetSnapshotContext);
  const totalStake = foldRIterable(
    (totalStake: bigint, node) => totalStake + node.stake,
    0n,
    fullNodeSet?.nodes ?? emptyIterator<NodeSetEntry>(),
  );

  return (
    <TotalStakeContext.Provider value={totalStake}>
      {children}
    </TotalStakeContext.Provider>
  );
};
