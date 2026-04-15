import {
  ExplorerBlockDetailContext,
  ExplorerSummaryContext,
} from '@/contexts/explorer_api_contexts';
import { default as React } from 'react';

/**
 * LatestBlockSummaryStreamConsumer is a component that is used to consume
 * the `AsyncIterable` stream of data that is defined by the current context.
 * It does this via an `AsyncIterableResolver`.  Any children passed into this
 * component will be passed the resolved contexts of the `AsyncIterableResolver`.
 */
export const LatestBlockSummaryStreamConsumer: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  const entry = React.useContext(ExplorerSummaryContext);

  return (
    <ExplorerBlockDetailContext.Provider value={entry?.latestBlock ?? null}>
      {children}
    </ExplorerBlockDetailContext.Provider>
  );
};
