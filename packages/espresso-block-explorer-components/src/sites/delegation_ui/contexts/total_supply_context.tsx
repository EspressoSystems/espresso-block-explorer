import { EspressoConfigContext } from '@/components/config';
import { DataContext } from '@/components/contexts/DataProvider';
import { AsyncSnapshotContext } from '@/components/data';
import { AsyncSnapshot } from '@/components/data/async_data/AsyncSnapshot';
import EspToken from '@/contracts/EspToken';
import React from 'react';
import { ReadContractToAsyncSnapshot } from '../read_contract_to_async_snapshot';

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
  const espressoConfig = React.useContext(EspressoConfigContext);
  const abi = EspToken;
  const contractAddress = espressoConfig?.espTokenContractAddress ?? undefined;

  return (
    <ReadContractToAsyncSnapshot
      abi={abi}
      address={contractAddress}
      functionName="totalSupply"
    >
      <ProvideTotalSupplyAsyncSnapshot>
        <ConvertDataToTotalSupply>{children}</ConvertDataToTotalSupply>
      </ProvideTotalSupplyAsyncSnapshot>
    </ReadContractToAsyncSnapshot>
  );
};

/**
 * ProvideTotalSupplyAsyncSnapshot is a React component that
 * reads the AsyncSnapshot from AsyncSnapshotContext and
 * provides it via TotalSupplyAsyncSnapshotContext.
 */
const ProvideTotalSupplyAsyncSnapshot: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const asyncSnapshot = React.useContext(
    AsyncSnapshotContext,
  ) as AsyncSnapshot<bigint>;
  return (
    <TotalSupplyAsyncSnapshotContext.Provider value={asyncSnapshot}>
      {children}
    </TotalSupplyAsyncSnapshotContext.Provider>
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
  const totalSupply = React.useContext(DataContext) as null | bigint;

  return (
    <TotalSupplyContext.Provider value={totalSupply}>
      {children}
    </TotalSupplyContext.Provider>
  );
};
