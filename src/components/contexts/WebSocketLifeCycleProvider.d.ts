import { LifeCycleResponse } from '../../../../../../../../../../src/service/node_validator/cappuccino/responses/web_worker_proxy_response';
import { default as React } from '../../../../../node_modules/react';

/**
 * LifeCycleResponseContext is a React Context that is used to store and make
 * available the current LifeCycleResponse.
 */
export declare const LifeCycleResponseContext: React.Context<LifeCycleResponse>;
/**
 * LifeCycleResponseStreamContext is a React Context that is able to provide
 * a stream of LifeCycleResponses. These can be used to update the UI in order
 * to indicate the current state of the WebSocket connection.
 */
export declare const LifeCycleResponseStreamContext: React.Context<AsyncIterable<LifeCycleResponse>>;
export interface LifeCycleResponseStreamConsumerProps {
    children: React.ReactNode | React.ReactNode[];
}
/**
 * LifeCycleResponseStreamConsumer is a component that is able to consume the
 * LifeCycleResponseStreamContext, and provide the LifeCycleResponse to the
 * children of the component via the LifeCycleResponseContext context.
 */
export declare const LifeCycleResponseStreamConsumer: React.FC<LifeCycleResponseStreamConsumerProps>;
