import { AsyncRetriever } from '@/async/AsyncRetriever';
import { DataContext } from '@/components/contexts/DataProvider';
import UnimplementedError from '@/errors/UnimplementedError';
import React from 'react';
import { ExplorerSummaryProvider } from '../explorer_summary/ExplorerSummaryLoader';

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
  const data = React.useContext(ExplorerSummaryProvider);

  if (!data) {
    return (
      <DataContext.Provider value={null}>{props.children}</DataContext.Provider>
    );
  }

  return (
    <DataContext.Provider value={data.genesisOverview}>
      {props.children}
    </DataContext.Provider>
  );
};
