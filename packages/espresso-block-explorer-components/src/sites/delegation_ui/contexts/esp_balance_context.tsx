import { assertNotNull } from '@/assert/assert';
import { EspressoConfigContext } from '@/components/config';
import { DataContext } from '@/components/contexts/DataProvider';
import { AsyncSnapshotContext, PromiseResolver } from '@/components/data';
import { AsyncSnapshot } from '@/components/data/async_data/AsyncSnapshot';
import { RainbowKitAccountAddressContext } from '@/components/rainbowkit';
import EspToken from '@/contracts/esp_token/esp_token_abi';
import { neverPromise } from '@/functional/functional_async';
import React from 'react';
import { ReadContractToAsyncSnapshot } from '../read_contract_to_async_snapshot';
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
 * ProvideTotalSupplyFromContractRead is a React component that fetches
 * the total supply of the ESP token from the blockchain
 * and provides it via TotalSupplyContext.
 */
export const ProvideESPBalanceFromContractRead: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  const address = React.useContext(RainbowKitAccountAddressContext);
  assertNotNull(address);
  const espressoConfig = React.useContext(EspressoConfigContext);
  const abi = EspToken;
  const contractAddress = espressoConfig?.espTokenContractAddress ?? undefined;

  return (
    <ReadContractToAsyncSnapshot
      abi={abi}
      address={contractAddress}
      functionName="balanceOf"
      args={[address as `0x${string}`]}
    >
      <ProvideESPBalanceAsyncSnapshot>
        <ConvertDataToESPBalance>{children}</ConvertDataToESPBalance>
      </ProvideESPBalanceAsyncSnapshot>
    </ReadContractToAsyncSnapshot>
  );
};

/**
 */
const ProvideESPBalanceAsyncSnapshot: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const asyncSnapshot = React.useContext(
    AsyncSnapshotContext,
  ) as AsyncSnapshot<bigint>;
  return (
    <ESPBalanceAsyncSnapshotContext.Provider value={asyncSnapshot}>
      {children}
    </ESPBalanceAsyncSnapshotContext.Provider>
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
