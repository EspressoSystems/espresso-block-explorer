import { DataContext } from '@/contexts/data_provider';
import { PromiseResolver } from '@/components/data';
import { LightClientState } from '@/contracts/light_client/light_client_interface';
import { neverPromise } from '@/functional/functional_async';
import React from 'react';
import { L1RefreshTimestampContext } from './l1_refresh_timestamp_context';
import { LightClientContractContext } from './light_client_contract_context';

export const LightClientFinalizedStateContext =
  React.createContext<null | LightClientState>(null);

export const RetrieveLightClientFinalizedState: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  // We'll refresh every time this timestamp updates
  React.useContext(L1RefreshTimestampContext);
  const lightClientContract = React.useContext(LightClientContractContext);

  const finalizedState = !lightClientContract
    ? neverPromise
    : lightClientContract.finalizedState();

  return (
    <PromiseResolver promise={finalizedState}>
      <ResolveLightClientFinalizedState>
        {children}
      </ResolveLightClientFinalizedState>
    </PromiseResolver>
  );
};

const ResolveLightClientFinalizedState: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const data = (React.useContext(DataContext) ??
    null) as null | LightClientState;

  return (
    <LightClientFinalizedStateContext.Provider value={data}>
      {children}
    </LightClientFinalizedStateContext.Provider>
  );
};
