import { emptyIterator, foldRIterable } from '@/functional/functional';
import { NodeSetEntry } from '@/service/espresso_staking_api_service/common/node_set_entry';
import { default as React } from 'react';
import { FullNodeSetSnapshotContext } from './full_node_set_snapshot_context';

/**
 * TotalStakeContext provides a React Context
 * for the total stake of all validators.
 */
export const TotalStakeContext = React.createContext<bigint>(0n);

/**
 * LargestNodeStakeContext provides a React Context for the largest stake among
 * all of the full node set.
 */
export const LargestNodeStakeContext = React.createContext<bigint>(0n);

/**
 * LargestNodeHasOver10PercentageContext is a context that is used as a quickly
 * referencable flag, that indicates whether a single validator node controls
 * at least 10% of the stake.
 *
 * This is utilized for formatting alignment purposes at the monent.
 */
export const LargestNodeHasOver10PercentageContext =
  React.createContext<boolean>(false);

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
  const largestStake = foldRIterable(
    (largestStake: bigint, node) => {
      if (largestStake < node.stake) {
        return node.stake;
      }

      return largestStake;
    },
    0n,
    fullNodeSet?.nodes ?? emptyIterator<NodeSetEntry>(),
  );

  return (
    <TotalStakeContext.Provider value={totalStake}>
      <LargestNodeStakeContext.Provider value={largestStake}>
        <LargestNodeHasOver10PercentageContext.Provider
          value={Number(largestStake) / Number(totalStake) >= 0.1}
        >
          {children}
        </LargestNodeHasOver10PercentageContext.Provider>
      </LargestNodeStakeContext.Provider>
    </TotalStakeContext.Provider>
  );
};
