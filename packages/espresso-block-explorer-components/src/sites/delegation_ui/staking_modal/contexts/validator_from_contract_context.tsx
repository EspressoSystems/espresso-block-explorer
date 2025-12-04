import { DataContext } from '@/components/contexts/data_provider';
import PromiseResolver from '@/components/data/async_data/promise_resolver';
import { RainbowKitAccountAddressContext } from '@/components/rainbowkit/contexts/contexts';
import { Validator } from '@/contracts/stake_table/stake_table_interface';
import { neverPromise } from '@/functional/functional_async';
import { ConfirmedValidatorContext } from '@/sites/delegation_ui/contexts/confirmed_valdiator_context';
import { L1RefreshTimestampContext } from '@/sites/delegation_ui/contexts/l1_refresh_timestamp_context';
import { StakeTableContractContext } from '@/sites/delegation_ui/contexts/stake_table_contract_context';
import React from 'react';

export const ValidatorFromContractContext =
  React.createContext<null | Validator>(null);

export const ProvideValidatorFromContract: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  const lastRefresh = React.useContext(L1RefreshTimestampContext);
  const stakeTableContract = React.useContext(StakeTableContractContext);
  const accountAddress = React.useContext(RainbowKitAccountAddressContext);
  const confirmedValidator = React.useContext(ConfirmedValidatorContext);

  const promise = React.useMemo(
    () =>
      !stakeTableContract || !confirmedValidator || !accountAddress
        ? neverPromise
        : stakeTableContract.validator(confirmedValidator),

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [lastRefresh, stakeTableContract, confirmedValidator, accountAddress],
  );

  return (
    <PromiseResolver promise={promise}>
      <TransformDataToValidatorFromContract>
        {children}
      </TransformDataToValidatorFromContract>
    </PromiseResolver>
  );
};

const TransformDataToValidatorFromContract: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  const data = React.useContext(DataContext) as null | Validator;

  return (
    <ValidatorFromContractContext.Provider value={data}>
      {children}
    </ValidatorFromContractContext.Provider>
  );
};
