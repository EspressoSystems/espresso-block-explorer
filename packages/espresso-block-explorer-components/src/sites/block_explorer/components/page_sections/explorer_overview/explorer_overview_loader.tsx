import { AsyncRetriever } from '@/async/async_retriever';
import { DataContext } from '@/contexts/data_provider';
import { ExplorerSummaryContext } from '@/contexts/explorer_api_contexts';
import { UnimplementedError } from '@/errors/unimplemented_error';
import { default as React } from 'react';

export interface ExplorerOverview {
  rollups: number;
  transactions: number;
  blocks: number;
  sequencerNodes: number;
}

export const ExplorerOverviewLoaderContext = React.createContext<
  AsyncRetriever<void, ExplorerOverview>
>({
  retrieve() {
    throw new UnimplementedError();
  },
});

export const ExplorerOverviewProvider = React.createContext<ExplorerOverview>({
  rollups: 0,
  transactions: 0,
  blocks: 0,
  sequencerNodes: 0,
});

interface ExplorerOverviewLoaderProps {
  children: React.ReactNode | React.ReactNode[];
}
export const ExplorerOverviewLoader: React.FC<ExplorerOverviewLoaderProps> = (
  props,
) => {
  const data = React.useContext(ExplorerSummaryContext);

  return (
    <DataContext.Provider value={data?.genesisOverview ?? null}>
      {props.children}
    </DataContext.Provider>
  );
};
