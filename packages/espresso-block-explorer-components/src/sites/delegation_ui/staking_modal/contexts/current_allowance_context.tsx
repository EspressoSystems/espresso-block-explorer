import { PromiseResolver } from '@/components/data';
import { RainbowKitAccountAddressContext } from '@/components/rainbowkit/contexts/contexts';
import { DataContext } from '@/contexts/data_provider';
import { ESPTokenContractContext } from '@/contexts/esp_token_contract_context';
import { StakeTableContractContext } from '@/contexts/stake_table_contract_context';
import { neverPromise } from '@/functional/functional_async';
import { L1RefreshTimestampContext } from '@/sites/delegation_ui/contexts/l1_refresh_timestamp_context';
import React from 'react';

export const CurrentAllowanceToStakeTableContext = React.createContext<
  null | bigint
>(null);

export const ProvideCurrentAllowanceToStakeTable: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  const lastL1RefreshTimestamp = React.useContext(L1RefreshTimestampContext);
  const espContract = React.useContext(ESPTokenContractContext);
  const stakeTableContract = React.useContext(StakeTableContractContext);
  const accountAddress = React.useContext(RainbowKitAccountAddressContext) as
    | null
    | `0x${string}`;

  const promise = React.useMemo(
    () =>
      !espContract || !stakeTableContract || !accountAddress
        ? neverPromise
        : espContract.allowance(accountAddress, stakeTableContract.address),

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [espContract, stakeTableContract, accountAddress, lastL1RefreshTimestamp],
  );

  return (
    <PromiseResolver promise={promise}>
      <TransformDataToCurrentAllowanceToStakeTable>
        {children}
      </TransformDataToCurrentAllowanceToStakeTable>
    </PromiseResolver>
  );
};

const TransformDataToCurrentAllowanceToStakeTable: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  const data = React.useContext(DataContext) as null | bigint;

  return (
    <CurrentAllowanceToStakeTableContext.Provider value={data}>
      {children}
    </CurrentAllowanceToStakeTableContext.Provider>
  );
};
