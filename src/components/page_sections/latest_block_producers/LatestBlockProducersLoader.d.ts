import { AsyncRetriever } from '../../../../../../../../../../../src/async/AsyncRetriever';
import { default as React } from 'react';
/**
 * The LatestBlockProducer type is the data type that is expected to be
 * displayed on the Latest Block Producers.
 */
export interface LatestBlockProducer {
    proposer: ArrayBuffer;
    count: number;
}
/**
 * The LatestBlockProducerLoaderContext is an interface that is used to
 * retrieve the data that is expected to be displayed on the Latest Block
 * Producers section. It is expected to be used to retrieve the data
 * asynchronously.
 */
export declare const LatestBlockProducerLoaderContext: React.Context<AsyncRetriever<void, LatestBlockProducer[]>>;
/**
 * The LatestBlockProducersProvider is a React context that is used to store the
 * Latest Block Producers.  This context can be used to retrieve the latest
 * block summary.
 * It is expected to be used to retrieve the data asynchronously.
 */
export declare const LatestBlockProducersProvider: React.Context<LatestBlockProducer[]>;
interface LatestBlockSummaryDataLoaderProps {
    children: React.ReactNode | React.ReactNode[];
}
/**
 * LatestBlockProducersDataLoader is a component that is used to consume any
 * data the can be retrieved from the AsyncRetriever defined by the current
 * LatestBlockProducerLoaderContext.  It does this via a `PromiseResolver`.
 * Any children passed into this component will be passed the resolved contexts
 * of the `PromiseResolver`.
 */
export declare const LatestBlockProducersDataLoader: React.FC<LatestBlockSummaryDataLoaderProps>;
/**
 * The LatestBlockProducersStreamContext is a React context that is used to store
 * the Latest Block PRoducers.  This data can be used to stream the
 * latest block Producers.
 */
export declare const LatestBlockProducersStreamContext: React.Context<AsyncIterable<LatestBlockProducer[]>>;
interface LatestBlockProducerStreamConsumerProps {
    children: React.ReactNode | React.ReactNode[];
}
/**
 * LatestBlockProducersStreamConsumer is a component that is used to consume
 * the `AsyncIterable` stream of data that is defined by the current context.
 * It does this via an `AsyncIterableResolver`.  Any children passed into this
 * component will be passed the resolved contexts of the `AsyncIterableResolver`.
 */
export declare const LatestBlockProducersStreamConsumer: React.FC<LatestBlockProducerStreamConsumerProps>;
export {};
