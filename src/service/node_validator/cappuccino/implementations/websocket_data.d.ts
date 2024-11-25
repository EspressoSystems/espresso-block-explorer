import { Channel } from '../../../../../../../../../../../../src/async/channel';
import { Sink } from '../../../../../../../../../../../../src/async/sink/sink';
import { default as WebSocketStatus } from '../../../../../../../../../../../../src/models/web_worker/web_socket/status/web_socket_status';
import { WebWorkerProxyRequest } from '../../../../../../../../../../../../src/models/web_worker/web_worker_proxy_request';
import { WebWorkerProxyResponse } from '../../../../../../../../../../../../src/models/web_worker/web_worker_proxy_response';
import { default as CappuccinoNodeValidatorResponse } from '../responses/node_validator_response';
import { WebWorkerNodeValidatorAPI } from '../web_worker_proxy_api';

export default class WebSocketDataCappuccinoNodeValidatorAPI implements WebWorkerNodeValidatorAPI {
    readonly responseStream: Channel<WebWorkerProxyResponse>;
    readonly requestStream: Channel<WebWorkerProxyRequest>;
    readonly serviceBaseURL: URL;
    readonly lifecycleResponseSink: Sink<WebSocketStatus>;
    readonly nodeValidatorResponseSink: Sink<CappuccinoNodeValidatorResponse>;
    readonly errorResponseSink: Sink<unknown>;
    constructor(requestStream: Channel<WebWorkerProxyRequest>, responseStream: Channel<WebWorkerProxyResponse>, serviceBaseURL: URL);
    get stream(): AsyncIterable<WebWorkerProxyResponse>;
    send(request: WebWorkerProxyRequest): Promise<void>;
    startProcessing(): Promise<void>;
    handleRequests(): Promise<void>;
    private handleRequest;
    private handleWebSocketCommand;
    private handleNodeValidatorRequest;
    private assertNotConnected;
    private assertConnected;
    private webSocket;
    private webSocketCompleter;
    private handleConnect;
    private handleClose;
}
