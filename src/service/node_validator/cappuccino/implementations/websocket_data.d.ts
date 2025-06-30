import { Channel } from '../../../../../../../../../../../../src/async/channel';
import { Sink } from '../../../../../../../../../../../../src/async/sink/sink';
import { default as WebSocketStatus } from '../../../../../../../../../../../../src/models/web_worker/web_socket/status/web_socket_status';
import { WebWorkerProxyRequest } from '../../../../../../../../../../../../src/models/web_worker/web_worker_proxy_request';
import { WebWorkerProxyResponse } from '../../../../../../../../../../../../src/models/web_worker/web_worker_proxy_response';
import { default as CappuccinoNodeValidatorResponse } from '../responses/node_validator_response';
import { WebWorkerNodeValidatorAPI } from '../web_worker_proxy_api';
import { WebSocketInterface } from '../websocket/websocket_interface';
export default class WebSocketDataCappuccinoNodeValidatorAPI implements WebWorkerNodeValidatorAPI {
    readonly responseStream: Channel<WebWorkerProxyResponse>;
    readonly requestStream: Channel<WebWorkerProxyRequest>;
    readonly serviceBaseURL: URL;
    readonly webSocketCreator: (url: URL) => WebSocketInterface;
    readonly lifecycleResponseSink: Sink<WebSocketStatus>;
    readonly nodeValidatorResponseSink: Sink<CappuccinoNodeValidatorResponse>;
    readonly errorResponseSink: Sink<unknown>;
    constructor(requestStream: Channel<WebWorkerProxyRequest>, responseStream: Channel<WebWorkerProxyResponse>, serviceBaseURL: URL, webSocketCreator?: (url: URL) => WebSocketInterface);
    get stream(): AsyncIterable<WebWorkerProxyResponse>;
    send(request: WebWorkerProxyRequest): Promise<void>;
    startProcessing(): Promise<void>;
    handleRequests(): Promise<void>;
    private handleRequest;
    private handleWebSocketCommand;
    private handleNodeValidatorRequest;
    private assertConnected;
    private lastConnectTime;
    private rapidConnectCount;
    /**
     * rapidREconnectProtection is a function that will delay the connection
     * attempts if the last connection request was made too rapidly.
     */
    private rapidReconnectProtection;
    private webSocket;
    private handleConnect;
    private handleClose;
}
