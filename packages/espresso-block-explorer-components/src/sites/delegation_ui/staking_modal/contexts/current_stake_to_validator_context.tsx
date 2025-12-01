import { DataContext } from '@/components/contexts/DataProvider';
import { PromiseResolver } from '@/components/data';
import { RainbowKitAccountAddressContext } from '@/components/rainbowkit/contexts/contexts';
import { neverPromise } from '@/functional/functional_async';
import { ConfirmedValidatorContext } from '@/sites/delegation_ui/contexts/confirmed_valdiator_context';
import { L1RefreshTimestampContext } from '@/sites/delegation_ui/contexts/l1_refresh_timestamp_context';
import { StakeTableContractContext } from '@/sites/delegation_ui/contexts/stake_table_contract_context';
import React from 'react';

export const CurrentStakeToValidatorContext = React.createContext<
  null | bigint
>(null);

export const ProvideCurrentStakeToValidator: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  const l1refreshTimestamp = React.useContext(L1RefreshTimestampContext);
  const stakeTableContract = React.useContext(StakeTableContractContext);
  const accountAddress = React.useContext(RainbowKitAccountAddressContext);
  const confirmedValidator = React.useContext(ConfirmedValidatorContext);

  const promise = React.useMemo(
    () =>
      !stakeTableContract || !accountAddress || !confirmedValidator
        ? neverPromise
        : stakeTableContract.delegation(
            confirmedValidator,
            accountAddress.toLowerCase() as `0x${string}`,
          ),

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      l1refreshTimestamp,
      stakeTableContract,
      accountAddress,
      confirmedValidator,
    ],
  );

  return (
    <PromiseResolver promise={promise}>
      <TransformDataToCurrenStakeToValidator>
        {children}
      </TransformDataToCurrenStakeToValidator>
    </PromiseResolver>
  );
};

const TransformDataToCurrenStakeToValidator: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  const data = React.useContext(DataContext) as null | bigint;

  return (
    <CurrentStakeToValidatorContext.Provider value={data}>
      {children}
    </CurrentStakeToValidatorContext.Provider>
  );
};
