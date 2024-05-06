import { AsyncRetriever } from '@/async/AsyncRetriever';
import UnimplementedError from '@/errors/UnimplementedError';
import React from 'react';
import PromiseResolver from '../../data/async_data/PromiseResolver';

export interface BlockSizeHistogramData {
  blocks: number[];
  blockSize: number[];
}

export interface BlockSizeHistogramAsyncRetriever
  extends AsyncRetriever<void, BlockSizeHistogramData> {}

export const BlockSizeHistogramAsyncRetrieverContext =
  React.createContext<BlockSizeHistogramAsyncRetriever>({
    async retrieve() {
      throw new UnimplementedError();
    },
  });

export interface BlockSizeHistogramLoaderProps {
  children?: React.ReactNode | React.ReactNode[];
}

export const BlockSizeHistogramLoader: React.FC<
  BlockSizeHistogramLoaderProps
> = ({ ...props }) => {
  // Need to retrieve the actual data source
  const retriever = React.useContext(BlockSizeHistogramAsyncRetrieverContext);

  return (
    <PromiseResolver promise={retriever.retrieve()}>
      <>{props.children}</>
    </PromiseResolver>
  );
};
