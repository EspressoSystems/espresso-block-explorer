import { DataContext } from '@/components/contexts/data_provider';
import { PromiseResolver } from '@/components/data';
import { nullableBigintCodec } from '@/convert/codec';
import { CappuccinoHotShotQueryServiceAPIContext } from 'pages';
import React from 'react';
import { EspressoRefreshTimestampContext } from './espresso_refresh_timestamp_context';

/**
 * EspressoBlockHeightContext provides a React Context
 * for the last queried block height of the Espresso Chain
 */
export const EspressoBlockHeightContext = React.createContext<null | bigint>(
  null,
);

/**
 * RetrieveActiveValidators is a React Component that retrieves
 * the current Espresso Block Height set and provides it
 * via the EspressoBlockHeightContext to its children.
 */
export const RetrieveEspressoBlockHeight: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  // We'll refresh every time this timestamp updates
  React.useContext(EspressoRefreshTimestampContext);

  const hotShotQueryService = React.useContext(
    CappuccinoHotShotQueryServiceAPIContext,
  );

  const currentBlockHeight = hotShotQueryService.status.blockHeight();

  return (
    <PromiseResolver promise={currentBlockHeight}>
      <ResolveEspressoBlockHeight>{children}</ResolveEspressoBlockHeight>
    </PromiseResolver>
  );
};

/**
 * ResolveEspressoBlockHeight is a React Component that
 * resolves the Espresso block height from the DataContext
 * and provides it via the EspressoBlockHeightContext to its children.
 */
const ResolveEspressoBlockHeight: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const data = (React.useContext(DataContext) ?? null) as null | number;

  return (
    <EspressoBlockHeightContext.Provider
      value={nullableBigintCodec.decode(data)}
    >
      {children}
    </EspressoBlockHeightContext.Provider>
  );
};
