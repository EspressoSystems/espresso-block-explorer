import { AsyncRetriever } from '@/async/AsyncRetriever';
import { ErrorCarry, ErrorJoiner } from '@/components/contexts';
import AsyncIterableResolver from '@/components/data/async_data/AsyncIterableResolver';
import UnimplementedError from '@/errors/UnimplementedError';
import { unimplementedAsyncIterable } from '@/functional/functional_async';
import React from 'react';
import PromiseResolver from '../../data/async_data/PromiseResolver';

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
export const LatestBlockProducerLoaderContext = React.createContext<
  AsyncRetriever<void, LatestBlockProducer[]>
>({
  retrieve() {
    throw new UnimplementedError();
  },
});

/**
 * The LatestBlockProducersProvider is a React context that is used to store the
 * Latest Block Producers.  This context can be used to retrieve the latest
 * block summary.
 * It is expected to be used to retrieve the data asynchronously.
 */
export const LatestBlockProducersProvider = React.createContext<
  LatestBlockProducer[]
>([]);

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
export const LatestBlockProducersDataLoader: React.FC<
  LatestBlockSummaryDataLoaderProps
> = (props) => {
  const retriever = React.useContext(LatestBlockProducerLoaderContext);

  return (
    <PromiseResolver promise={retriever.retrieve()}>
      {props.children}
    </PromiseResolver>
  );
};

/**
 * The LatestBlockProducersStreamContext is a React context that is used to store
 * the Latest Block PRoducers.  This data can be used to stream the
 * latest block Producers.
 */
export const LatestBlockProducersStreamContext = React.createContext<
  AsyncIterable<LatestBlockProducer[]>
>(unimplementedAsyncIterable());

interface LatestBlockProducerStreamConsumerProps {
  children: React.ReactNode | React.ReactNode[];
}

/**
 * LatestBlockProducersStreamConsumer is a component that is used to consume
 * the `AsyncIterable` stream of data that is defined by the current context.
 * It does this via an `AsyncIterableResolver`.  Any children passed into this
 * component will be passed the resolved contexts of the `AsyncIterableResolver`.
 */
export const LatestBlockProducersStreamConsumer: React.FC<
  LatestBlockProducerStreamConsumerProps
> = (props) => {
  const stream = React.useContext(LatestBlockProducersStreamContext);

  return (
    <ErrorCarry>
      <AsyncIterableResolver asyncIterable={stream}>
        <ErrorJoiner>{props.children}</ErrorJoiner>
      </AsyncIterableResolver>
    </ErrorCarry>
  );
};
