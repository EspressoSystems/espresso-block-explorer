import { AsyncRetriever } from '@/async/AsyncRetriever';
import UnimplementedError from '@/errors/UnimplementedError';
import React from 'react';
import PromiseResolver from '../../data/async_data/PromiseResolver';

export interface LatestBlock {
  height: number;
  time: Date;
  size: number;
  transactions: number;
  proposer: ArrayBuffer;
}

export const LatestBlockSummaryLoaderContext = React.createContext<
  AsyncRetriever<void, LatestBlock>
>({
  retrieve() {
    throw new UnimplementedError();
  },
});

export const LatestBlockSummaryProvider = React.createContext<LatestBlock>({
  height: 0,
  time: new Date(),
  size: 0,
  transactions: 0,
  proposer: new ArrayBuffer(0),
});

interface LatestBlockSummaryDataLoader {
  children: React.ReactNode | React.ReactNode[];
}
export const LatestBlockSummaryDataLoader: React.FC<
  LatestBlockSummaryDataLoader
> = (props) => {
  const retriever = React.useContext(LatestBlockSummaryLoaderContext);

  return (
    <PromiseResolver promise={retriever.retrieve()}>
      {props.children}
    </PromiseResolver>
  );
};
