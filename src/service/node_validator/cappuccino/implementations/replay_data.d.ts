import { Channel } from '../../../../../../../../../../../../src/async/channel';
import { Sink } from '../../../../../../../../../../../../src/async/sink/sink';
import { WebWorkerProxyRequest } from '../requests/web_worker_proxy_request';
import { default as CappuccinoNodeValidatorResponse } from '../responses/node_validator_response';
import { default as WebWorkerLifeCycleResponse } from '../responses/web_worker_life_cycle_response';
import { WebWorkerProxyResponse } from '../responses/web_worker_proxy_response';
import { WebWorkerNodeValidatorAPI } from '../web_worker_proxy_api';

export interface HARFormat {
    log: HARLog;
}
export interface HARLog {
    version: string;
    creator: {
        name: string;
        version: string;
    };
    pages: HARPage[];
    entries: HARLogEntry[];
}
export interface HARPage {
    startedDateTime: string;
    id: string;
    title: string;
    pageTimings: {
        onContentLoad: number;
        onLoad: number;
    };
}
export interface HARLogEntryBase {
    _initiator: {
        type: string;
    };
    _priority: string | null;
    _resourceType: string;
    cache: Record<string, unknown>;
    connection: string;
    pagref: string;
    request: HARRequest;
    response: HARResponse;
    serverIPAddress: string;
    startedDateTime: string;
    time: number;
    timings: Record<'blocked' | 'dns' | 'ssl' | 'connect' | 'send' | 'wait' | 'receive' | '_blocked_queueing', number>;
}
export interface HARLogEntryWebSocket extends HARLogEntryBase {
    _resourceType: 'websocket';
    _webSocketMessages: HARWebSocketMessage[];
}
export type HARLogEntry = HARLogEntryWebSocket | HARLogEntryBase;
export interface HARRequest {
    method: string;
    url: string;
    httpVersion: string;
    headers: HARHeader[];
    queryString: HARQueryString[];
    cookies: HARCookie[];
    headersSize: number;
    bodySize: number;
}
export interface HARResponse {
    status: number;
    statusText: string;
    httpVersion: string;
    headers: HARHeader[];
    cookies: HARCookie[];
    content: {
        size: number;
        mimeType: string;
        compression: number;
        text: string;
    };
    redirectURL: string;
    headersSize: number;
    bodySize: number;
    _transferSize: number;
    _error: string | null;
}
export interface HARHeader {
    name: string;
    value: string;
}
export interface HARQueryString {
    name: string;
    value: string;
}
export interface HARCookie {
    name: string;
    value: string;
}
export interface HARWebSocketMessage {
    type: 'send' | 'receive';
    time: number;
    opcode: number;
    data: string;
}
export default class ReplayDataCappuccinoNodeValidatorAPI implements WebWorkerNodeValidatorAPI {
    readonly responseStream: Channel<WebWorkerProxyRequest>;
    readonly requestStream: Channel<WebWorkerProxyResponse>;
    readonly capturedHAR: HARFormat;
    readonly lifecycleResponseSink: Sink<WebWorkerLifeCycleResponse>;
    readonly nodeValidatorResponseSink: Sink<CappuccinoNodeValidatorResponse>;
    constructor(requestStream: Channel<WebWorkerProxyRequest>, responseStream: Channel<WebWorkerProxyResponse>, capturedHAR: HARFormat);
    get stream(): AsyncIterable<WebWorkerProxyResponse>;
    send(request: WebWorkerProxyRequest): Promise<void>;
    startProcessing(): Promise<void>;
    handleRequests(): Promise<void>;
    private handleRequest;
    private handleLifeCycleRequest;
    private handleNodeValidatorRequest;
    private handleConnect;
    private handleClose;
    private handleSubscribeLatestBlock;
    private handleSubscribeNodeIdentity;
    private handleSubscribeVoters;
    private handleRequestBlocksSnapshot;
    private handleRequestHistogramSnapshot;
    private handleRequestNodeIdentitySnapshot;
    private handleRequestVotersSnapshot;
}
