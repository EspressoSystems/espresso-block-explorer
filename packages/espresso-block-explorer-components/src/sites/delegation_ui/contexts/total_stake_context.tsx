import { foldRIterator } from '@/functional/functional';
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
  const allValidators = React.useContext(AllValidatorsContext);

  if (!allValidators) {
    return <>{children}</>;
  }

  const totalStake = foldRIterator(
    (totalStake: bigint, node) => totalStake + node.stake,
    0n,
    allValidators.nodes[Symbol.iterator](),
  );

  return (
    <TotalStakeContext.Provider value={totalStake}>
      {children}
    </TotalStakeContext.Provider>
  );
};
