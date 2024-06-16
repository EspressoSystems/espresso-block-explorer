import { AsyncRetriever } from '@/async/AsyncRetriever';
import AsyncIterableResolver from '@/components/data/async_data/AsyncIterableResolver';
import UnimplementedError from '@/errors/UnimplementedError';
import { unimplementedAsyncIterable } from '@/functional/functional_async';
import React from 'react';
import PromiseResolver from '../../data/async_data/PromiseResolver';

/**
 * The BlockSizeHistogramData type is the data type that is expected to be
 * displayed on the Block Size Histogram. It is expected to represent a
 * block size value for the y axis against a block height for the x-axis.
 */
export interface BlockSizeHistogramData {
  blocks: (null | number)[];
  blockSize: (null | number)[];
}

/**
 * The BlockSizeHistogramAsyncRetriever is an interface that is used to
 * retrieve the data that is expected to be displayed on the Block Size
 * Histogram. It is expected to be used to retrieve the data asynchronously.
 */
export interface BlockSizeHistogramAsyncRetriever
  extends AsyncRetriever<void, BlockSizeHistogramData> {}

/**
 * The BlockSizeHistogramAsyncRetrieverContext is a React context that is
 * used to store the BlockSizeHistogramAsyncRetriever.  This retriever can
 * be used to retrieve the size histogram data.
 */
export const BlockSizeHistogramAsyncRetrieverContext =
  React.createContext<BlockSizeHistogramAsyncRetriever>({
    async retrieve() {
      throw new UnimplementedError();
    },
  });

export interface BlockSizeHistogramLoaderProps {
  children?: React.ReactNode | React.ReactNode[];
}

/**
 * BlockSizeHistogramLoader is a component that is used to consume any
 * data the can be retrieved from the AsyncRetriever defined by the current
 * BlockSizeHistogramAsyncRetrieverContext.  It does this via a
 * `PromiseResolver`. Any children passed into this component will be passed
 * the resolved contexts of the `PromiseResolver`.
 */
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

/**
 * BlockSizeHistogramStreamContext is a React context that is used to store the
 * BlockSizeHistogramData.  This data can be used to stream the size histogram
 * data.
 */
export const BlockSizeHistogramStreamContext = React.createContext<
  AsyncIterable<BlockSizeHistogramData>
>(unimplementedAsyncIterable());

interface BlockSizeHistogramStreamConsumerProps {
  children: React.ReactNode | React.ReactNode[];
}

/**
 * BlockSizeHistogramStreamConsumer is a component that is used to consume the
 * data that is stored in the BlockSizeHistogramStreamContext.  This data is
 * expected to be streamed to the children of this component.
 */
export const BlockSizeHistogramStreamConsumer: React.FC<
  BlockSizeHistogramStreamConsumerProps
> = (props) => {
  const stream = React.useContext(BlockSizeHistogramStreamContext);

  return (
    <AsyncIterableResolver asyncIterable={stream}>
      {props.children}
    </AsyncIterableResolver>
  );
};
