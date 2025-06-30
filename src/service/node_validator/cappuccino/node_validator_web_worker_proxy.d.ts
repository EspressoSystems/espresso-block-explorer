type PostMessageFunction = typeof postMessage;
export declare class WebWorkerProxy {
    private service;
    private stopPublishingResponses;
    private postMessage;
    private readonly requestChannel;
    constructor(postMessage: PostMessageFunction);
    setURL(url: string): Promise<boolean>;
    processRequests(): Promise<void>;
    handleEvent(event: MessageEvent): Promise<void>;
}
export {};
