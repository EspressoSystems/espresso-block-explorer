import { ErrorCarry, ErrorJoiner } from '@/components/contexts/ErrorProvider';
import AsyncIterableResolver from '@/components/data/async_data/AsyncIterableResolver';
import { unimplementedAsyncIterable } from '@/functional/functional_async';
import ChainDetails from '@/service/inscription/cappuccino/chain_details';
import Inscription from '@/service/inscription/cappuccino/inscription';
import InscriptionAndChainDetails from '@/service/inscription/cappuccino/inscription_and_chain_details';
import WalletAddress from '@/service/inscription/cappuccino/wallet_address';
import React from 'react';

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
