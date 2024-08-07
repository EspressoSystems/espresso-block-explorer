import { emptyAsyncIterable } from '@/functional/functional_async';
import { CappuccinoConnectionClosed } from '@/service/node_validator/cappuccino/responses/connection_closed';
import { LifeCycleResponse } from '@/service/node_validator/cappuccino/responses/web_worker_proxy_response';
import React, { createContext } from 'react';
import { AsyncIterableResolver } from '../data';
import { DataContext } from './DataProvider';

/**
 * LifeCycleResponseContext is a React Context that is used to store and make
 * available the current LifeCycleResponse.
 */
export const LifeCycleResponseContext = createContext<LifeCycleResponse>(
  new LifeCycleResponse(new CappuccinoConnectionClosed()),
);

/**
 * LifeCycleResponseStreamContext is a React Context that is able to provide
 * a stream of LifeCycleResponses. These can be used to update the UI in order
 * to indicate the current state of the WebSocket connection.
 */
export const LifeCycleResponseStreamContext =
  createContext<AsyncIterable<LifeCycleResponse>>(emptyAsyncIterable());

export interface LifeCycleResponseStreamConsumerProps {
  children: React.ReactNode | React.ReactNode[];
}

/**
 * LifeCycleResponseStreamConsumer is a component that is able to consume the
 * LifeCycleResponseStreamContext, and provide the LifeCycleResponse to the
 * children of the component via the LifeCycleResponseContext context.
 */
export const LifeCycleResponseStreamConsumer: React.FC<
  LifeCycleResponseStreamConsumerProps
> = (props) => {
  const stream = React.useContext(LifeCycleResponseStreamContext);

  return (
    <AsyncIterableResolver asyncIterable={stream}>
      <ProvideLifeCycleResponse>{props.children}</ProvideLifeCycleResponse>
    </AsyncIterableResolver>
  );
};

interface ProvideLifeCycleResponseProps {
  children: React.ReactNode | React.ReactNode[];
}

/**
 * ProvideLifeCycleResponse is a component that is able to provide the
 * LifeCycleResponse to the children of the component via
 * the LifeCycleResponseContext.  It does this by assuming that the DataContext
 * is a AsyncSnapshot result of a LifeCycleResponse.
 */
const ProvideLifeCycleResponse: React.FC<ProvideLifeCycleResponseProps> = (
  props,
) => {
  const data = React.useContext(DataContext) as null | LifeCycleResponse;

  if (data === null) {
    return (
      <LifeCycleResponseContext.Provider
        value={new LifeCycleResponse(new CappuccinoConnectionClosed())}
      >
        {props.children}
      </LifeCycleResponseContext.Provider>
    );
  }

  return (
    <LifeCycleResponseContext.Provider value={data}>
      {props.children}
    </LifeCycleResponseContext.Provider>
  );
};
