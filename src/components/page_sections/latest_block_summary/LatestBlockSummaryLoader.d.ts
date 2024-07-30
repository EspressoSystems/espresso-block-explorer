import { AsyncRetriever } from '../../../../../../../../../../../src/async/AsyncRetriever';
import { default as React } from '../../../../../../node_modules/react';

/**
 * The LatestBlock type is the data type that is expected to be
 * displayed on the Latest Block Summary.
 */
export interface LatestBlock {
    height: number;
    time: Date;
    size: number;
    transactions: number;
    proposer: ArrayBuffer;
}
/**
 * The LatestBlockAsyncRetriever is an interface that is used to
 * retrieve the data that is expected to be displayed on the Latest Block
 * Summary. It is expected to be used to retrieve the data asynchronously.
 */
export declare const LatestBlockSummaryLoaderContext: React.Context<AsyncRetriever<void, LatestBlock>>;
/**
 * The LatestBlockSummaryProvider is a React context that is used to store the
 * LatestBlock.  This context can be used to retrieve the latest block summary.
 * It is expected to be used to retrieve the data asynchronously.
 */
export declare const LatestBlockSummaryProvider: React.Context<LatestBlock>;
interface LatestBlockSummaryDataLoaderProps {
    children: React.ReactNode | React.ReactNode[];
}
/**
 * LatestBlockSummaryDataLoader is a component that is used to consume any
 * data the can be retrieved from the AsyncRetriever defined by the current
 * LatestBlockSummaryLoaderContext.  It does this via a `PromiseResolver`.
 * Any children passed into this component will be passed the resolved contexts
 * of the `PromiseResolver`.
 */
export declare const LatestBlockSummaryDataLoader: React.FC<LatestBlockSummaryDataLoaderProps>;
/**
 * The LatestBlockSummaryStreamContext is a React context that is used to store
 * the LatestBlock.  This data can be used to stream the latest block summary.
 */
export declare const LatestBlockSummaryStreamContext: React.Context<AsyncIterable<LatestBlock>>;
interface LatestBlockSummaryStreamConsumerProps {
    children: React.ReactNode | React.ReactNode[];
}
/**
 * LatestBlockSummaryStreamConsumer is a component that is used to consume
 * the `AsyncIterable` stream of data that is defined by the current context.
 * It does this via an `AsyncIterableResolver`.  Any children passed into this
 * component will be passed the resolved contexts of the `AsyncIterableResolver`.
 */
export declare const LatestBlockSummaryStreamConsumer: React.FC<LatestBlockSummaryStreamConsumerProps>;
export {};
