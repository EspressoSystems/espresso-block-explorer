import { WebWorkerRequest } from '../../../../../../../../../../../src/service/espresso_l1_validator_service/web_worker_types';
type ProxyRequest = WebWorkerRequest<'proxy', 'set-url', [string]>;
type PostMessageFunction = typeof postMessage;
export declare class WebWorkerProxy {
    private service;
    private postMessage;
    private requestChannel;
    constructor(postMessage: PostMessageFunction);
    handleProxyRequest(request: ProxyRequest): Promise<boolean>;
    private processRequests;
    handleEvent(event: MessageEvent): Promise<void>;
}
export {};
