import { DataContext } from '@/components/contexts';
import { PromiseResolver } from '@/components/data';
import { emptyIterator, foldRIterable } from '@/functional/functional';
import { NodeSetEntry } from '@/service/espresso_l1_validator_service/common/node_set_entry';
import React from 'react';
import { AllValidatorsContext } from './all_validators_context';
import { L1RefreshTimestampContext } from './l1_refresh_timestamp_context';
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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const DeriveTotalStakeFromStakeTableV2Contract: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  React.useContext(L1RefreshTimestampContext);
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
  const data = React.useContext(DataContext) ?? null;

  const value = data === null || typeof data !== 'bigint' ? 0n : data;

  return (
    <TotalStakeContext.Provider value={value}>
      {children}
    </TotalStakeContext.Provider>
  );
};
