import { ProxyRequest } from './implementations/web_worker_proxy';
/**
 * PostMessageFunction is the type of the postMessage function.
 */
type PostMessageFunction = typeof postMessage;
/**
 * WebWorkerProxy is the main proxy class that handles incoming requests
 * from the main thread, forwards them to the appropriate service implementation,
 * and sends back the responses.
 */
export declare class WebWorkerProxy {
    private service;
    private postMessage;
    private requestChannel;
    constructor(postMessage: PostMessageFunction);
    /**
     * handleProxyRequest handles requests specific to the proxy itself.
     * This is specific to methods that are not part of the L1ValidatorService
     * API, and only serve to configure the proxy itself.
     */
    handleProxyRequest(request: ProxyRequest): Promise<boolean>;
    /**
     * processRequests processes incoming requests from the request channel.
     * It forwards them to the appropriate service implementation, and sends back
     * the responses.
     */
    private processRequests;
    /**
     * handleEvent handles incoming messages from the main thread.
     */
    handleEvent(event: MessageEvent): Promise<void>;
}
export {};
