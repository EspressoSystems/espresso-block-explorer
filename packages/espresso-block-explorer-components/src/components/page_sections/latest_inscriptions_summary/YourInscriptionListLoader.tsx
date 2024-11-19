import { ErrorCarry, ErrorJoiner } from '@/components/contexts/ErrorProvider';
import AsyncIterableResolver from '@/components/data/async_data/AsyncIterableResolver';
import { unimplementedAsyncIterable } from '@/functional/functional_async';
import InscriptionAndChainDetails from '@/service/inscription/cappuccino/inscription_and_chain_details';
import React from 'react';

/**
 * The YourInscriptionsListStreamContext is a React context that is used to
 * store the latest Inscriptions List.  This data can be used to stream
 * the latest Inscriptions List.
 */
export const YourInscriptionsListStreamContext = React.createContext<
  AsyncIterable<InscriptionAndChainDetails[]>
>(unimplementedAsyncIterable());

interface YourInscriptionsListStreamConsumerProps {
  children: React.ReactNode | React.ReactNode[];
}

/**
 * YourInscriptionsListStreamConsumer is a component that is used to consume
 * the `AsyncIterable` stream of data that is defined by the current context.
 * It does this via an `AsyncIterableResolver`.  Any children passed into this
 * component will be passed the resolved contexts of the `AsyncIterableResolver`.
 */
export const YourInscriptionsListStreamConsumer: React.FC<
  YourInscriptionsListStreamConsumerProps
> = (props) => {
  const stream = React.useContext(YourInscriptionsListStreamContext);

  return (
    <ErrorCarry>
      <AsyncIterableResolver asyncIterable={stream}>
        <ErrorJoiner>{props.children}</ErrorJoiner>
      </AsyncIterableResolver>
    </ErrorCarry>
  );
};
