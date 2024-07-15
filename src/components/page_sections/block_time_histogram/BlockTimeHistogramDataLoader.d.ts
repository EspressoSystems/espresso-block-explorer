import { AsyncRetriever } from '../../../../../../../../../../../src/async/AsyncRetriever';
import { default as React } from 'react';

/**
 * The BlockTimeHistogramData type is the data type that is expected to be
 * displayed on the Block Time Histogram. It is expected to represent a
 * block time value for the y axis against a block height for the x-axis.
 */
export interface BlockTimeHistogramData {
    blocks: (null | number)[];
    blockTime: (null | number)[];
}
/**
 * The BlockTimeHistogramAsyncRetriever is an interface that is used to
 * retrieve the data that is expected to be displayed on the Block Time
 * Histogram.
 */
export interface BlockTimeHistogramAsyncRetriever extends AsyncRetriever<void, BlockTimeHistogramData> {
}
/**
 * The BlockTimeHistogramAsyncRetrieverContext is a React context that is
 * used to store the BlockTimeHistogramAsyncRetriever.  This retriever can
 * be used to retrieve the time histogram data.
 */
export declare const BlockTimeHistogramAsyncRetrieverContext: React.Context<BlockTimeHistogramAsyncRetriever>;
export interface BlockTimeHistogramLoaderProps {
    children?: React.ReactNode | React.ReactNode[];
}
/**
 * BlockTimeHistogramLoader is a component that is used to consume any
 * data the can be retrieved from the AsyncRetriever defined by the current
 * BlockTimeHistogramAsyncRetrieverContext.  It does this via a
 * `PromiseResolver`. Any children passed into this component will be passed
 * the resolved contexts of the `PromiseResolver`.
 */
export declare const BlockTimeHistogramLoader: React.FC<BlockTimeHistogramLoaderProps>;
/**
 * The BlockTimeHistogramStreamContext is a React context that is used to store
 * the BlockTimeHistogramData.  This data can be used to stream the time
 * histogram data.
 */
export declare const BlockTimeHistogramStreamContext: React.Context<AsyncIterable<BlockTimeHistogramData>>;
interface BlockTimeHistogramStreamConsumerProps {
    children: React.ReactNode | React.ReactNode[];
}
/**
 * BlockTimeHistogramStreamConsumer is a component that is used to consume any
 * data that can be streamed from the BlockTimeHistogramStreamContext.  It does
 * this via an `AsyncIterableResolver`.  Any children passed into this component
 * will be passed the resolved contexts of the `AsyncIterableResolver`.
 */
export declare const BlockTimeHistogramStreamConsumer: React.FC<BlockTimeHistogramStreamConsumerProps>;
export {};
