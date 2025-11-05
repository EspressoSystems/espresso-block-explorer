import { DataContext } from '@/components/contexts';
import { PromiseResolver } from '@/components/data';
import { foldRIterator } from '@/functional/functional';
import React from 'react';
import { AllValidatorsContext } from './all_validators_context';
import { StakeTableV2ContractContext } from './stake_table_v2_contract_context';

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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const DeriveTotalStakeFromStakeTableV2Contract: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  const stakeTableV2 = React.useContext(StakeTableV2ContractContext);

  if (!stakeTableV2) {
    return (
      <DeriveTotalStakeFromAllValidators>
        {children}
      </DeriveTotalStakeFromAllValidators>
    );
  }

  return (
    <PromiseResolver promise={stakeTableV2.activeStake()}>
      <TranslateDataContextToTotalStake>
        {children}
      </TranslateDataContextToTotalStake>
    </PromiseResolver>
  );
};

const TranslateDataContextToTotalStake: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const data = React.useContext(DataContext);
  console.debug('TranslateDataContextToTotalStake data:', data);

  if (data === null || data === undefined || typeof data !== 'bigint') {
    return <>{children}</>;
  }

  return (
    <TotalStakeContext.Provider value={data}>
      {children}
    </TotalStakeContext.Provider>
  );
};
