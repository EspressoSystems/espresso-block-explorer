import PromiseResolver from '@/components/data/async_data/promise_resolver';
import { DataContext } from '@/contexts/data_provider';
import { StakeTableV2ContractContext } from '@/contexts/stake_table_v2_contract_context';
import { neverPromise } from '@/functional/functional_async';
import React from 'react';

/**
 * MinimumDelegationAmountContext defines a React Context for the minimum
 * delegation amount required by the Espresso network.
 */
export const MinimumDelegationAmountContext =
  React.createContext<bigint>(1000000000000000000n);

/**
 * ProvideEspressoRefreshTimestampContext is a React Component that provides
 * the EspressoRefreshTimestampContext and SetEspressoRefreshTimestampContext
 * to its children.
 */
export const RetrieveMinimumDelegationAmount: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  const stakeTableContract = React.useContext(StakeTableV2ContractContext);

  const promise = !stakeTableContract
    ? neverPromise
    : stakeTableContract.minDelegateAmount();

  return (
    <PromiseResolver promise={promise}>
      <TransformDataToMinimumDelegation>
        {children}
      </TransformDataToMinimumDelegation>
    </PromiseResolver>
  );
};

const TransformDataToMinimumDelegation: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const data = (React.useContext(DataContext) ??
    1000000000000000000n) as bigint;

  return (
    <MinimumDelegationAmountContext.Provider value={data}>
      {children}
    </MinimumDelegationAmountContext.Provider>
  );
};
