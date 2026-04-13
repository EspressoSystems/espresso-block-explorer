import { PromiseResolver } from '@/components/data/async_data';
import { RainbowKitAccountAddressContext } from '@/components/rainbowkit/contexts/contexts';
import { DataContext } from '@/contexts/data_provider';
import { StakeTableContractContext } from '@/contexts/stake_table_contract_context';
import { STValidator } from '@/contracts/stake_table/stake_table_interface';
import { neverPromise } from '@/functional/functional_async';
import { ConfirmedValidatorContext } from '@/sites/delegation_ui/contexts/confirmed_valdiator_context';
import { L1RefreshTimestampContext } from '@/sites/delegation_ui/contexts/l1_refresh_timestamp_context';
import { default as React } from 'react';

export const ValidatorFromContractContext =
  React.createContext<null | STValidator>(null);

export const ProvideValidatorFromContract: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  const lastRefresh = React.useContext(L1RefreshTimestampContext);
  const stakeTableContract = React.useContext(StakeTableContractContext);
  const accountAddress = React.useContext(RainbowKitAccountAddressContext);
  const confirmedValidator = React.useContext(ConfirmedValidatorContext);

  const promise = React.useMemo(
    () =>
      !stakeTableContract ||
      !confirmedValidator ||
      !accountAddress ||
      confirmedValidator === '0x'
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
  const data = React.useContext(DataContext) as null | STValidator;

  return (
    <ValidatorFromContractContext.Provider value={data}>
      {children}
    </ValidatorFromContractContext.Provider>
  );
};
