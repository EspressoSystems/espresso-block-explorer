import { DataContext } from '@/components/contexts/data_provider';
import { PromiseResolver } from '@/components/data';
import { AsyncSnapshot } from '@/components/data/async_data/async_snapshot';
import { RainbowKitAccountAddressContext } from '@/components/rainbowkit';
import { neverPromise } from '@/functional/functional_async';
import React from 'react';
import { ESPTokenContractContext } from './esp_token_contract_context';
import { L1RefreshTimestampContext } from './l1_refresh_timestamp_context';

export const ESPBalanceContext = React.createContext<bigint>(0n);
export const ESPBalanceAsyncSnapshotContext = React.createContext<
  AsyncSnapshot<bigint>
>(AsyncSnapshot.nothing());

/**
 * ProvideTotalSupply is a React component that fetches
 * the total supply of the ESP token from the blockchain
 * and provides it via TotalSupplyContext.
 */
export const ProvideESPBalance: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <ProvideTotalSupplyFromContractCall>
      {children}
    </ProvideTotalSupplyFromContractCall>
  );
};

/**
 * ProvideTotalSupplyFromAPICall is a React component that fetches
 * the total supply of the ESP token from the local ESPTokenContract
 * and provides it via TotalSupplyContext.
 */
export const ProvideTotalSupplyFromContractCall: React.FC<
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
