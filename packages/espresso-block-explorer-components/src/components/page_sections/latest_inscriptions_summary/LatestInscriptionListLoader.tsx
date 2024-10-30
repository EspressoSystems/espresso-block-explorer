import { AsyncRetriever } from '@/async/AsyncRetriever';
import { ErrorCarry, ErrorJoiner } from '@/components/contexts/ErrorProvider';
import AsyncIterableResolver from '@/components/data/async_data/AsyncIterableResolver';
import UnimplementedError from '@/errors/UnimplementedError';
import { unimplementedAsyncIterable } from '@/functional/functional_async';
import ChainDetails from '@/service/inscription/cappuccino/chain_details';
import Inscription from '@/service/inscription/cappuccino/inscription';
import InscriptionAndChainDetails from '@/service/inscription/cappuccino/inscription_and_chain_details';
import WalletAddress from '@/service/inscription/cappuccino/wallet_address';
import React from 'react';
import PromiseResolver from '../../data/async_data/PromiseResolver';

/**
 * The LatestInscriptionsLoaderContext is an interface that is used to
 * retrieve the data that is expected to be displayed on the list of
 * Inscriptions
 */
export const LatestInscriptionListLoaderContext = React.createContext<
  AsyncRetriever<void, InscriptionAndChainDetails[]>
>({
  retrieve() {
    throw new UnimplementedError();
  },
});

/**
 * The LatestInscriptionsProvider is a React context that is used to store the
 * Inscription list.  This context can be used to retrieve the latest
 * inscriptions. It is expected to be used to retrieve the data asynchronously.
 */
export const LatestInscriptionListProvider = React.createContext<
  InscriptionAndChainDetails[]
>([]);

export const InscriptionAndChainDetailsContext =
  React.createContext<InscriptionAndChainDetails>(
    new InscriptionAndChainDetails(
      new Inscription(new WalletAddress(new Uint8Array(0)), new Date(0), ''),
      new ChainDetails(0, 0),
    ),
  );

interface LatestInscriptionListDataLoaderProps {
  children: React.ReactNode | React.ReactNode[];
}

/**
 * LatestInscriptionListDataLoader is a component that is used to consume any
 * data the can be retrieved from the AsyncRetriever defined by the current
 * LatestInscriptionListLoaderContext.  It does this via a `PromiseResolver`.
 * Any children passed into this component will be passed the resolved contexts
 * of the `PromiseResolver`.
 */
export const LatestInscriptionListDataLoader: React.FC<
  LatestInscriptionListDataLoaderProps
> = (props) => {
  const retriever = React.useContext(LatestInscriptionListLoaderContext);

  return (
    <PromiseResolver promise={retriever.retrieve()}>
      {props.children}
    </PromiseResolver>
  );
};

/**
 * The LatestInscriptionListStreamContext is a React context that is used to
 * store the latest Inscriptions List.  This data can be used to stream
 * the latest Inscriptions List.
 */
export const LatestInscriptionListStreamContext = React.createContext<
  AsyncIterable<InscriptionAndChainDetails[]>
>(unimplementedAsyncIterable());

interface LatestInscriptionListStreamConsumerProps {
  children: React.ReactNode | React.ReactNode[];
}

/**
 * LatestInscriptionListStreamConsumer is a component that is used to consume
 * the `AsyncIterable` stream of data that is defined by the current context.
 * It does this via an `AsyncIterableResolver`.  Any children passed into this
 * component will be passed the resolved contexts of the `AsyncIterableResolver`.
 */
export const LatestInscriptionListStreamConsumer: React.FC<
  LatestInscriptionListStreamConsumerProps
> = (props) => {
  const stream = React.useContext(LatestInscriptionListStreamContext);

  return (
    <ErrorCarry>
      <AsyncIterableResolver asyncIterable={stream}>
        <ErrorJoiner>{props.children}</ErrorJoiner>
      </AsyncIterableResolver>
    </ErrorCarry>
  );
};
