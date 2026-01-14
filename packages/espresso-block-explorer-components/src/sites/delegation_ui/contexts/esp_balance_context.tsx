import { PromiseResolver } from '@/components/data';
import { AsyncSnapshot } from '@/components/data/async_data/async_snapshot';
import { RainbowKitAccountAddressContext } from '@/components/rainbowkit';
import { DataContext } from '@/contexts/data_provider';
import { ESPTokenContractContext } from '@/contexts/esp_token_contract_context';
import { neverPromise } from '@/functional/functional_async';
import React from 'react';
import { L1RefreshTimestampContext } from './l1_refresh_timestamp_context';

export const ESPBalanceContext = React.createContext<bigint>(0n);
export const ESPBalanceAsyncSnapshotContext = React.createContext<
  AsyncSnapshot<bigint>
>(AsyncSnapshot.nothing());

/**
 * ProvideESPBalance is a React component that fetches the current wallet's
 * ESP balance and provides it via TotalSupplyContext.
 */
export const ProvideESPBalance: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <ProvideESPBalanceFromContractCall>
      {children}
    </ProvideESPBalanceFromContractCall>
  );
};

/**
 * ProvideESPBalanceFromAPICall is a React component that fetches
 * the current balance for the active wallet from the ESPTokenContract
 * and provides it via ESPBalanceContext.
 */
export const ProvideESPBalanceFromContractCall: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  React.useContext(L1RefreshTimestampContext);
  const espTokenContract = React.useContext(ESPTokenContractContext);
  const address = React.useContext(RainbowKitAccountAddressContext);

  const promise =
    !address || !espTokenContract
      ? neverPromise
      : espTokenContract.balanceOf(address as `0x${string}`);

  return (
    <PromiseResolver promise={promise}>
      <ConvertDataToESPBalance>{children}</ConvertDataToESPBalance>
    </PromiseResolver>
  );
};

/**
 * ConvertDataToESPBalance is a React component that converts the data
 * from the DataContext and provides it via ESPBalanceContext.
 */
const ConvertDataToESPBalance: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const balance = (React.useContext(DataContext) ?? null) as null | bigint;

  return (
    <ESPBalanceContext.Provider value={balance ?? 0n}>
      {children}
    </ESPBalanceContext.Provider>
  );
};
