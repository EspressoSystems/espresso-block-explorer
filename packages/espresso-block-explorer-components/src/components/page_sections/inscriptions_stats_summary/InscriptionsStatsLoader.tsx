import { ErrorCarry, ErrorJoiner } from '@/components/contexts/ErrorProvider';
import AsyncIterableResolver from '@/components/data/async_data/AsyncIterableResolver';
import { unimplementedAsyncIterable } from '@/functional/functional_async';
import { InscriptionStats } from '@/service/inscription/cappuccino/inscription_stats';
import React from 'react';

/**
 * The InscriptionStatsProvider is a React context that is used to store the
 * Inscription Stats.  This context can be used to retrieve the most recent
 * inscription service stats. It is expected to be used to retrieve the data
 * asynchronously.
 */
export const InscriptionStatsProvider = React.createContext<InscriptionStats>(
  new InscriptionStats(0, 0, 0),
);

/**
 * The InscriptionsStatsStreamContext is a React context that is used to
 * store the latest Inscriptions List.  This data can be used to stream
 * the latest Inscriptions List.
 */
export const InscriptionsStatsStreamContext = React.createContext<
  AsyncIterable<InscriptionStats>
>(unimplementedAsyncIterable());

interface InscriptionsStatsStreamConsumerProps {
  children: React.ReactNode | React.ReactNode[];
}

/**
 * InscriptionsStatsStreamConsumer is a component that is used to consume
 * the `AsyncIterable` stream of data that is defined by the current context.
 * It does this via an `AsyncIterableResolver`.  Any children passed into this
 * component will be passed the resolved contexts of the `AsyncIterableResolver`.
 */
export const InscriptionsStatsStreamConsumer: React.FC<
  InscriptionsStatsStreamConsumerProps
> = (props) => {
  const stream = React.useContext(InscriptionsStatsStreamContext);

  return (
    <ErrorCarry>
      <AsyncIterableResolver asyncIterable={stream}>
        <ErrorJoiner>{props.children}</ErrorJoiner>
      </AsyncIterableResolver>
    </ErrorCarry>
  );
};
