import { Channel } from '../../../../../../../../../../../../src/async/channel';
import { Sink } from '../../../../../../../../../../../../src/async/sink/sink';
import { WebWorkerProxyRequest } from '../requests/web_worker_proxy_request';
import { default as CappuccinoNodeValidatorResponse } from '../responses/node_validator_response';
import { default as WebWorkerLifeCycleResponse } from '../responses/web_worker_life_cycle_response';
import { WebWorkerProxyResponse } from '../responses/web_worker_proxy_response';
import { WebWorkerNodeValidatorAPI } from '../web_worker_proxy_api';

export default class WebSocketDataCappuccinoNodeValidatorAPI implements WebWorkerNodeValidatorAPI {
    readonly responseStream: Channel<WebWorkerProxyResponse>;
    readonly requestStream: Channel<WebWorkerProxyRequest>;
    readonly serviceBaseURL: URL;
    readonly lifecycleResponseSink: Sink<WebWorkerLifeCycleResponse>;
    readonly nodeValidatorResponseSink: Sink<CappuccinoNodeValidatorResponse>;
    readonly errorResponseSink: Sink<unknown>;
    constructor(requestStream: Channel<WebWorkerProxyRequest>, responseStream: Channel<WebWorkerProxyResponse>, serviceBaseURL: URL);
    get stream(): AsyncIterable<WebWorkerProxyResponse>;
    send(request: WebWorkerProxyRequest): Promise<void>;
    startProcessing(): Promise<void>;
    handleRequests(): Promise<void>;
    private handleRequest;
    private handleLifeCycleRequest;
    private handleNodeValidatorRequest;
    private assertNotConnected;
    private assertConnected;
    private webSocket;
    private webSocketCompleter;
    private handleConnect;
    private handleClose;
}
