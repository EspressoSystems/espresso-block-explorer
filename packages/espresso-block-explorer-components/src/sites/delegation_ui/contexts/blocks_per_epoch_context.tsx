import { DataContext } from '@/components/contexts/data_provider';
import { PromiseResolver } from '@/components/data';
import { neverPromise } from '@/functional/functional_async';
import React from 'react';
import { ActiveValidatorsContext } from './active_validators_context';
import { LightClientV2ContractContext } from './light_client_contract_v2_context';

/**
 * BlocksPerEpochContext is a React Context that provides the number of
 * blocks per epoch used for the Espresso Network.
 */
export const BlocksPerEpochContext = React.createContext<bigint>(0n);

/**
 * RetrieveBlocksPerEpoch is a React Component that retrieves the number
 * of blocks per epoch from the Light Client V2 Contract and provides it
 * via the BlocksPerEpochContext.
 */
export const RetrieveBlocksPerEpoch: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const lightClientV2 = React.useContext(LightClientV2ContractContext);

  const promise = !lightClientV2
    ? neverPromise
    : lightClientV2.blocksPerEpoch();

  return (
    <PromiseResolver promise={promise}>
      <ConvertDataToBlocksPerEpoch>{children}</ConvertDataToBlocksPerEpoch>
    </PromiseResolver>
  );
};

/**
 * ConvertDataToBlocksPerEpoch is a React Component that converts
 * the data provided by the DataContext into a bigint and provides it
 * via the BlocksPerEpochContext.
 */
const ConvertDataToBlocksPerEpoch: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const activeSnapshot = React.useContext(ActiveValidatorsContext);
  const data =
    (React.useContext(DataContext) as null | undefined | bigint) ??
    activeSnapshot?.espressoBlock?.blocksPerEpoch ??
    0n;

  return (
    <BlocksPerEpochContext.Provider value={data}>
      {children}
    </BlocksPerEpochContext.Provider>
  );
};
