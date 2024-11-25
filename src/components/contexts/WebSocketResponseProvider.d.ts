import { WebSocketResponse } from '../../../../../../../../../../src/models/web_worker/web_socket/web_socket_response';
import { default as React } from '../../../../../node_modules/react';

/**
 * WebSocketResponseContext is a React Context that is used to store
 * and make available the current LifeCycleResponse.
 */
export declare const WebSocketResponseContext: React.Context<WebSocketResponse>;
/**
 * WebSocketResponseStreamContext is a React Context that is able to provide
 * a stream of WebSocketResponses. These can be used to update the UI in order
 * to indicate the current state of the WebSocket connection.
 */
export declare const WebSocketResponseStreamContext: React.Context<AsyncIterable<WebSocketResponse>>;
export interface WebSocketResponseStreamConsumerProps {
    children: React.ReactNode | React.ReactNode[];
}
/**
 * WebSocketResponseStreamConsumer is a component that is able to consume the
 * WebSocketResponseContext, and provide the WebSocketResponse to the
 * children of the component via the WebSocketResponseContext context.
 */
export declare const WebSocketResponseStreamConsumer: React.FC<WebSocketResponseStreamConsumerProps>;
