type PostMessageFunction = typeof postMessage;
export declare class WebWorkerProxy {
    private service;
    private postMessage;
    constructor(postMessage: PostMessageFunction);
    handleEvent(event: MessageEvent): Promise<void>;
}
export {};
