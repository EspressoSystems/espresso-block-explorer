import { emptyIterator, foldRIterable } from '@/functional/functional';
import { NodeSetEntry } from '@/service/espresso_l1_validator_service/common/node_set_entry';
import React from 'react';
import { AllValidatorsContext } from './all_validators_context';

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
  const allValidators = React.useContext(AllValidatorsContext);
  const totalStake = foldRIterable(
    (totalStake: bigint, node) => totalStake + node.stake,
    0n,
    allValidators?.nodes ?? emptyIterator<NodeSetEntry>(),
  );

  return (
    <TotalStakeContext.Provider value={totalStake}>
      {children}
    </TotalStakeContext.Provider>
  );
};
