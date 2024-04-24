import { AsyncRetriever } from '@/async/AsyncRetriever';
import UnimplementedError from '@/errors/UnimplementedError';
import React from 'react';
import PromiseResolver from '../../data/async_data/PromiseResolver';

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
  const retriever = React.useContext(ExplorerOverviewLoaderContext);

  return (
    <PromiseResolver promise={retriever.retrieve()}>
      {props.children}
    </PromiseResolver>
  );
};
