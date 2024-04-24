import { AsyncRetriever } from '@/async/AsyncRetriever';
import UnimplementedError from '@/errors/UnimplementedError';
import React from 'react';
import PromiseResolver from '../../data/async_data/PromiseResolver';

export interface BlockThroughputHistogramData {
  blocks: number[];
  blockThroughput: number[];
}

export interface BlockThroughputHistogramAsyncRetriever
  extends AsyncRetriever<void, BlockThroughputHistogramData> {}

export const BlockThroughputHistogramAsyncRetrieverContext =
  React.createContext<BlockThroughputHistogramAsyncRetriever>({
    async retrieve() {
      throw new UnimplementedError();
    },
  });

export interface BlockThroughputHistogramLoaderProps {
  children?: React.ReactNode | React.ReactNode[];
}

export const BlockThroughputHistogramLoader: React.FC<
  BlockThroughputHistogramLoaderProps
> = ({ ...props }) => {
  // Need to retrieve the actual data source
  const retriever = React.useContext(
    BlockThroughputHistogramAsyncRetrieverContext,
  );

  return (
    <PromiseResolver promise={retriever.retrieve()}>
      <>{props.children}</>
    </PromiseResolver>
  );
};
