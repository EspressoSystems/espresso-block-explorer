import { emptyAsyncIterable } from '@/functional/functional_async';
import { WebSocketStatusConnectionClosed } from '@/models/web_worker/web_socket/status/closed';
import { WebSocketResponse } from '@/models/web_worker/web_socket/web_socket_response';
import React, { createContext } from 'react';
import { AsyncIterableResolver } from '../data';
import { DataContext } from './DataProvider';

/**
 * WebSocketResponseContext is a React Context that is used to store
 * and make available the current LifeCycleResponse.
 */
export const WebSocketResponseContext = createContext<WebSocketResponse>(
  new WebSocketResponse(new WebSocketStatusConnectionClosed()),
);

/**
 * WebSocketResponseStreamContext is a React Context that is able to provide
 * a stream of WebSocketResponses. These can be used to update the UI in order
 * to indicate the current state of the WebSocket connection.
 */
export const WebSocketResponseStreamContext =
  createContext<AsyncIterable<WebSocketResponse>>(emptyAsyncIterable());

export interface WebSocketResponseStreamConsumerProps {
  children: React.ReactNode | React.ReactNode[];
}

/**
 * WebSocketResponseStreamConsumer is a component that is able to consume the
 * WebSocketResponseContext, and provide the WebSocketResponse to the
 * children of the component via the WebSocketResponseContext context.
 */
export const WebSocketResponseStreamConsumer: React.FC<
  WebSocketResponseStreamConsumerProps
> = (props) => {
  const stream = React.useContext(WebSocketResponseStreamContext);

  return (
    <AsyncIterableResolver asyncIterable={stream}>
      <ProvideWebSocketResponse>{props.children}</ProvideWebSocketResponse>
    </AsyncIterableResolver>
  );
};

interface ProvideWebSocketResponseProps {
  children: React.ReactNode | React.ReactNode[];
}

/**
 * ProvideWebSocketResponse is a component that is able to provide the
 * WebSocketResponse to the children of the component via
 * the WebSocketResponseContext.  It does this by assuming that the DataContext
 * is a AsyncSnapshot result of a WebSocketResponse.
 */
const ProvideWebSocketResponse: React.FC<ProvideWebSocketResponseProps> = (
  props,
) => {
  const data = React.useContext(DataContext) as null | WebSocketResponse;

  if (data === null) {
    return (
      <WebSocketResponseContext.Provider
        value={new WebSocketResponse(new WebSocketStatusConnectionClosed())}
      >
        {props.children}
      </WebSocketResponseContext.Provider>
    );
  }

  return (
    <WebSocketResponseContext.Provider value={data}>
      {props.children}
    </WebSocketResponseContext.Provider>
  );
};
