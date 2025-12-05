import { DataContext } from '@/components/contexts/data_provider';
import { PromiseResolver } from '@/components/data';
import { AsyncSnapshot } from '@/components/data/async_data/async_snapshot';
import { neverPromise } from '@/functional/functional_async';
import React from 'react';
import { ESPTokenContractContext } from './esp_token_contract_context';
import { L1RefreshTimestampContext } from './l1_refresh_timestamp_context';

/**
 * TotalSupplyContext provides a React Context
 * for the total supply of the ESP token.
 */
export const TotalSupplyContext = React.createContext<null | bigint>(null);
export const TotalSupplyAsyncSnapshotContext = React.createContext<
  AsyncSnapshot<bigint>
>(AsyncSnapshot.nothing());

/**
 * ProvideTotalSupply is a React component that fetches
 * the total supply of the ESP token from the blockchain
 * and provides it via TotalSupplyContext.
 */
export const ProvideTotalSupply: React.FC<React.PropsWithChildren> = ({
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

  const promise = !espTokenContract
    ? neverPromise
    : espTokenContract.totalSupply();

  return (
    <PromiseResolver promise={promise}>
      <ConvertDataToTotalSupply>{children}</ConvertDataToTotalSupply>
    </PromiseResolver>
  );
};

/**
 * ConvertDataToTotalSupply is a React component that
 * reads the data from DataContext and provides it
 * via TotalSupplyContext.
 */
const ConvertDataToTotalSupply: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const totalSupply = (React.useContext(DataContext) ?? null) as null | bigint;

  return (
    <TotalSupplyContext.Provider value={totalSupply}>
      {children}
    </TotalSupplyContext.Provider>
  );
};
