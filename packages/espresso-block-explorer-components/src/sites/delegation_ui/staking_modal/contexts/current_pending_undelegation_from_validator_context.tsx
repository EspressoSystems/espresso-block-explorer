import { DataContext } from '@/components/contexts/data_provider';
import PromiseResolver from '@/components/data/async_data/promise_resolver';
import { RainbowKitAccountAddressContext } from '@/components/rainbowkit/contexts/contexts';
import { Undelegation } from '@/contracts/stake_table/stake_table_interface';
import { neverPromise } from '@/functional/functional_async';
import { ConfirmedValidatorContext } from '@/sites/delegation_ui/contexts/confirmed_valdiator_context';
import { L1RefreshTimestampContext } from '@/sites/delegation_ui/contexts/l1_refresh_timestamp_context';
import { StakeTableContractContext } from '@/sites/delegation_ui/contexts/stake_table_contract_context';
import React from 'react';

export const CurrentPendingUndelegationFromValidatorContext =
  React.createContext<null | Undelegation>(null);

export const ProvideCurrentPendingUndelegationToValidator: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  React.useContext(L1RefreshTimestampContext);
  const stakeTableContract = React.useContext(StakeTableContractContext);
  const accountAddress = React.useContext(RainbowKitAccountAddressContext);
  const confirmedValidator = React.useContext(ConfirmedValidatorContext);

  const promise =
    !stakeTableContract || !accountAddress || !confirmedValidator
      ? neverPromise
      : stakeTableContract.undelegation(
          confirmedValidator,
          accountAddress.toLowerCase() as `0x${string}`,
        );

  return (
    <PromiseResolver promise={promise}>
      <TransformDataToCurrenPendingUndelegationFromValidator>
        {children}
      </TransformDataToCurrenPendingUndelegationFromValidator>
    </PromiseResolver>
  );
};

const TransformDataToCurrenPendingUndelegationFromValidator: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  const data = React.useContext(DataContext) as null | Undelegation;

  return (
    <CurrentPendingUndelegationFromValidatorContext.Provider value={data}>
      {children}
    </CurrentPendingUndelegationFromValidatorContext.Provider>
  );
};
