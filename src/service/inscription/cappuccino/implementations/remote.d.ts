import { Channel } from '../../../../../../../../../../../../src/async/channel';
import { Sink } from '../../../../../../../../../../../../src/async/sink/sink';
import { default as WebSocketStatus } from '../../../../../../../../../../../../src/models/web_worker/web_socket/status/web_socket_status';
import { WebWorkerProxyRequest } from '../../../../../../../../../../../../src/models/web_worker/web_worker_proxy_request';
import { WebWorkerProxyResponse } from '../../../../../../../../../../../../src/models/web_worker/web_worker_proxy_response';
import { default as CappuccinoInscriptionResponse } from '../responses/inscription_response';
import { WebWorkerInscriptionAPI } from '../web_worker_proxy_api';

export default class RemoteInscriptionAPI implements WebWorkerInscriptionAPI {
    readonly responseStream: Channel<WebWorkerProxyResponse>;
    readonly requestStream: Channel<WebWorkerProxyRequest>;
    readonly serviceBaseWebSocketURL: URL;
    readonly serviceBaseURL: URL;
    readonly lifecycleResponseSink: Sink<WebSocketStatus>;
    readonly inscriptionResponseSink: Sink<CappuccinoInscriptionResponse>;
    readonly errorResponseSink: Sink<unknown>;
    constructor(requestStream: Channel<WebWorkerProxyRequest>, responseStream: Channel<WebWorkerProxyResponse>, serviceBaseWebsocketURL: URL, serviceBaseURL: URL);
    get stream(): AsyncIterable<WebWorkerProxyResponse>;
    send(request: WebWorkerProxyRequest): Promise<void>;
    startProcessing(): Promise<void>;
    handleRequests(): Promise<void>;
    private handleRequest;
    private handleWebSocketRequest;
    private handleInscriptionsRequest;
    private assertNotConnected;
    private assertConnected;
    private webSocket;
    private webSocketCompleter;
    private handleConnect;
    private handleClose;
    private handlePutInscriptionFetch;
    private validateResponse;
    private handlePutInscription;
    /**
     * handleRetrieveInscriptionsForAddressFetch is a method that will fetch the
     * most recent inscription and chain details from the API service for the
     * given Wallet Address.
     */
    private handleRetrieveInscriptionsForAddressFetch;
    /**
     * handleRetrieveInscriptionsForAddress is a method that will fetch the
     * most recent inscription and chain details from the API service for the
     * given Wallet Address.
     */
    private handleRetrieveInscriptionsForAddress;
    private retrieveInscriptionsForAddressCache;
    /**
     * This method performs the same action as handleRetrieveInscriptionsForAddress
     * however, it will cache a successful response for a request with the same
     * given address.
     *
     * This will help reduce unnecessary re-requests to the API service.
     */
    private handleRetrieveInscriptionsForAddressMemoized;
}
