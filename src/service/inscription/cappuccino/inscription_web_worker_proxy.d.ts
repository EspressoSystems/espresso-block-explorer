type PostMessageFunction = typeof postMessage;
export declare class WebWorkerProxy {
    private service;
    constructor(postMessage: PostMessageFunction);
    handleEvent(event: MessageEvent): Promise<void>;
}
export {};
