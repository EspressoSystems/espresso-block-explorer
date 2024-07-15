import { AsyncRetriever } from '@/async/AsyncRetriever';
import AsyncIterableResolver from '@/components/data/async_data/AsyncIterableResolver';
import UnimplementedError from '@/errors/UnimplementedError';
import { unimplementedAsyncIterable } from '@/functional/functional_async';
import React from 'react';
import PromiseResolver from '../../data/async_data/PromiseResolver';

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
export const LatestBlockSummaryLoaderContext = React.createContext<
  AsyncRetriever<void, LatestBlock>
>({
  retrieve() {
    throw new UnimplementedError();
  },
});

/**
 * The LatestBlockSummaryProvider is a React context that is used to store the
 * LatestBlock.  This context can be used to retrieve the latest block summary.
 * It is expected to be used to retrieve the data asynchronously.
 */
export const LatestBlockSummaryProvider = React.createContext<LatestBlock>({
  height: 0,
  time: new Date(),
  size: 0,
  transactions: 0,
  proposer: new ArrayBuffer(0),
});

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
export const LatestBlockSummaryDataLoader: React.FC<
  LatestBlockSummaryDataLoaderProps
> = (props) => {
  const retriever = React.useContext(LatestBlockSummaryLoaderContext);

  return (
    <PromiseResolver promise={retriever.retrieve()}>
      {props.children}
    </PromiseResolver>
  );
};

/**
 * The LatestBlockSummaryStreamContext is a React context that is used to store
 * the LatestBlock.  This data can be used to stream the latest block summary.
 */
export const LatestBlockSummaryStreamContext = React.createContext<
  AsyncIterable<LatestBlock>
>(unimplementedAsyncIterable());

interface LatestBlockSummaryStreamConsumerProps {
  children: React.ReactNode | React.ReactNode[];
}

/**
 * LatestBlockSummaryStreamConsumer is a component that is used to consume
 * the `AsyncIterable` stream of data that is defined by the current context.
 * It does this via an `AsyncIterableResolver`.  Any children passed into this
 * component will be passed the resolved contexts of the `AsyncIterableResolver`.
 */
export const LatestBlockSummaryStreamConsumer: React.FC<
  LatestBlockSummaryStreamConsumerProps
> = (props) => {
  const stream = React.useContext(LatestBlockSummaryStreamContext);

  return (
    <AsyncIterableResolver asyncIterable={stream}>
      {props.children}
    </AsyncIterableResolver>
  );
};
