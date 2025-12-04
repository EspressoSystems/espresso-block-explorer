import { AsyncRetriever } from '@/async/AsyncRetriever';
import { DataContext, ErrorCarry, ErrorJoiner } from '@/components/contexts';
import AsyncIterableResolver from '@/components/data/async_data/AsyncIterableResolver';
import UnimplementedError from '@/errors/UnimplementedError';
import { unimplementedAsyncIterable } from '@/functional/functional_async';
import React from 'react';
import { ExplorerSummaryProvider } from '../explorer_summary/ExplorerSummaryLoader';

/**
 * The BlockThroughputHistogramData type is the data type that is expected to be
 * displayed on the Block Throughput Histogram. It is expected to represent a
 * throughput value for the y axis against a block height for the x-axis.
 */
export interface BlockThroughputHistogramData {
  blocks: (null | number)[];
  blockThroughput: (null | number)[];
}

/**
 * The BlockThroughputHistogramAsyncRetriever is an interface that is used to
 * retrieve the data that is expected to be displayed on the Block Throughput
 * Histogram. It is expected to be used to retrieve the data asynchronously.
 */
export interface BlockThroughputHistogramAsyncRetriever extends AsyncRetriever<
  void,
  BlockThroughputHistogramData
> {}

/**
 * The BlockThroughputHistogramAsyncRetrieverContext is a React context that is
 * used to store the BlockThroughputHistogramAsyncRetriever.  This retriever can
 * be used to retrieve the throughput histogram data.
 */
export const BlockThroughputHistogramAsyncRetrieverContext =
  React.createContext<BlockThroughputHistogramAsyncRetriever>({
    async retrieve() {
      throw new UnimplementedError();
    },
  });

export interface BlockThroughputHistogramLoaderProps {
  children?: React.ReactNode | React.ReactNode[];
}

/**
 * BlockThroughputHistogramLoader is a component that is used to consume any
 * data the can be retrieved from the AsyncRetriever defined by the current
 * BlockThroughputHistogramAsyncRetrieverContext.  It does this via a
 * `PromiseResolver`.  Any children passed into this component will be passed
 * the resolved contexts of the `PromiseResolver`.
 */
export const BlockThroughputHistogramLoader: React.FC<
  BlockThroughputHistogramLoaderProps
> = ({ ...props }) => {
  const data = React.useContext(ExplorerSummaryProvider);

  if (!data) {
    return (
      <DataContext.Provider value={null}>{props.children}</DataContext.Provider>
    );
  }

  return (
    <DataContext.Provider value={data.histograms}>
      {props.children}
    </DataContext.Provider>
  );
};

/**
 * BlockThroughputHistogramStreamContext is a React context that is used to
 * make available an `AsyncIterable` stream of data that conforms to the type of
 * BlockThroughputHistogramData`.  This stream is expected to be reactively
 * updated.
 */
export const BlockThroughputHistogramStreamContext = React.createContext<
  AsyncIterable<BlockThroughputHistogramData>
>(unimplementedAsyncIterable());

interface BlockThroughputHistogramStreamConsumerProps {
  children: React.ReactNode | React.ReactNode[];
}

/**
 * BlockThroughputHistogramStreamConsumer is a component that is used to consume
 * the `AsyncIterable` stream of data that is defined by the current
 * `BlockThroughputHistogramStreamContext`. It consumes this `AsyncIterable`
 * stream by using the `AsyncIterableResolver` component. Any children passed
 * into this component will be passed the resolved contexts of the
 * `AsyncIterableResolver`.
 */
export const BlockThroughputHistogramStreamConsumer: React.FC<
  BlockThroughputHistogramStreamConsumerProps
> = (props) => {
  const stream = React.useContext(BlockThroughputHistogramStreamContext);

  return (
    <ErrorCarry>
      <AsyncIterableResolver asyncIterable={stream}>
        <ErrorJoiner>{props.children}</ErrorJoiner>
      </AsyncIterableResolver>
    </ErrorCarry>
  );
};
