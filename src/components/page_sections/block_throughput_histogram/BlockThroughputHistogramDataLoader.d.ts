import { AsyncRetriever } from '../../../../../../../../../../../src/async/AsyncRetriever';
import { default as React } from 'react';

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
export interface BlockThroughputHistogramAsyncRetriever extends AsyncRetriever<void, BlockThroughputHistogramData> {
}
/**
 * The BlockThroughputHistogramAsyncRetrieverContext is a React context that is
 * used to store the BlockThroughputHistogramAsyncRetriever.  This retriever can
 * be used to retrieve the throughput histogram data.
 */
export declare const BlockThroughputHistogramAsyncRetrieverContext: React.Context<BlockThroughputHistogramAsyncRetriever>;
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
export declare const BlockThroughputHistogramLoader: React.FC<BlockThroughputHistogramLoaderProps>;
/**
 * BlockThroughputHistogramStreamContext is a React context that is used to
 * make available an `AsyncIterable` stream of data that conforms to the type of
 * BlockThroughputHistogramData`.  This stream is expected to be reactively
 * updated.
 */
export declare const BlockThroughputHistogramStreamContext: React.Context<AsyncIterable<BlockThroughputHistogramData>>;
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
export declare const BlockThroughputHistogramStreamConsumer: React.FC<BlockThroughputHistogramStreamConsumerProps>;
export {};
