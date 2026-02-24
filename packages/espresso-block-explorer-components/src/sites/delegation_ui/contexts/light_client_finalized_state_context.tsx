import { PromiseResolver } from '@/components/data';
import { DataContext } from '@/contexts/data_provider';
import { LightClientContractContext } from '@/contexts/light_client_contract_context';
import { LightClientState } from '@/contracts/light_client/light_client_interface';
import { neverPromise } from '@/functional/functional_async';
import React from 'react';
import { L1RefreshTimestampContext } from './l1_refresh_timestamp_context';

/**
 * LightClientFinalizedStateContext is a context holding the LightClientState
 * that is currently provided for the rest of the React app.
 */
export const LightClientFinalizedStateContext =
  React.createContext<null | LightClientState>(null);

export const RetrieveLightClientFinalizedState: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  // We'll refresh every time this timestamp updates
  React.useContext(L1RefreshTimestampContext);
  const lightClientContract = React.useContext(LightClientContractContext);

  const finalizedState =
    !lightClientContract || typeof window === 'undefined'
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
