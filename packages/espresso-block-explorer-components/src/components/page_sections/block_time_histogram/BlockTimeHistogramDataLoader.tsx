import { AsyncRetriever } from '@/async/AsyncRetriever';
import UnimplementedError from '@/errors/UnimplementedError';
import React from 'react';
import PromiseResolver from '../../data/async_data/PromiseResolver';

export interface BlockTimeHistogramData {
  blocks: number[];
  blockTime: number[];
}

export interface BlockTimeHistogramAsyncRetriever
  extends AsyncRetriever<void, BlockTimeHistogramData> {}

export const BlockTimeHistogramAsyncRetrieverContext =
  React.createContext<BlockTimeHistogramAsyncRetriever>({
    async retrieve() {
      throw new UnimplementedError();
    },
  });

export interface BlockTimeHistogramLoaderProps {
  children?: React.ReactNode | React.ReactNode[];
}

export const BlockTimeHistogramLoader: React.FC<
  BlockTimeHistogramLoaderProps
> = ({ ...props }) => {
  // Need to retrieve the actual data source
  const retriever = React.useContext(BlockTimeHistogramAsyncRetrieverContext);

  return (
    <PromiseResolver promise={retriever.retrieve()}>
      <>{props.children}</>
    </PromiseResolver>
  );
};
