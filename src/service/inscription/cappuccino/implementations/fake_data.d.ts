import { Channel } from '../../../../../../../../../../../../src/async/channel';
import { Sink } from '../../../../../../../../../../../../src/async/sink/sink';
import { default as WebSocketStatus } from '../../../../../../../../../../../../src/models/web_worker/web_socket/status/web_socket_status';
import { WebWorkerProxyRequest } from '../../../../../../../../../../../../src/models/web_worker/web_worker_proxy_request';
import { WebWorkerProxyResponse } from '../../../../../../../../../../../../src/models/web_worker/web_worker_proxy_response';
import { default as CappuccinoInscriptionResponse } from '../responses/inscription_response';
import { WebWorkerInscriptionAPI } from '../web_worker_proxy_api';

export default class FakeDataInscriptionAPI implements WebWorkerInscriptionAPI {
    readonly responseStream: Channel<WebWorkerProxyResponse>;
    readonly requestStream: Channel<WebWorkerProxyRequest>;
    readonly webSocketStatusSink: Sink<WebSocketStatus>;
    readonly inscriptionResponseSink: Sink<CappuccinoInscriptionResponse>;
    constructor(requestStream: Channel<WebWorkerProxyRequest>, responseStream: Channel<WebWorkerProxyResponse>);
    get stream(): AsyncIterable<WebWorkerProxyResponse>;
    send(request: WebWorkerProxyRequest): Promise<void>;
    private prng;
    private latestInscriptions;
    private allInscriptions;
    initializeState(): Promise<void>;
    startProcessing(): Promise<void>;
    handleRequests(): Promise<void>;
    streamInscriptions(): Promise<void>;
    private handleRequest;
    private handleWebSocketCommand;
    private handleInscriptionsRequest;
    private isConnected;
    private handleConnect;
    private handleClose;
    private handlePutInscription;
}
