import { WebWorkerRequest } from '../../web_worker_types';
import { WalletAPI } from '../wallet_api';
import { WalletSnapshot } from '../wallet_snapshot';
import { WalletUpdate } from '../wallet_update';
/**
 * WalletAPIRequest represents a Web Worker request for the WalletAPI.
 */
export type WalletAPIRequest<Method extends keyof WalletAPI = keyof WalletAPI> = WebWorkerRequest<'wallet', Method, Parameters<WalletAPI[Method]>>;
/**
 * WebWorkerProxyWalletAPI is a proxy for the WalletAPI
 * that forwards requests to the underlying service implementation, it
 * handles the encoding and decoding of requests and responses.
 */
export declare class WebWorkerProxyWalletAPI {
    private readonly service;
    constructor(service: WalletAPI);
    snapshot(address: ArrayBuffer, hash: ArrayBuffer): Promise<WalletSnapshot>;
    /**
     * updates returns the updates that affected the wallet identified by the
     * given address at a specific block hash.
     */
    updates(address: ArrayBuffer, hash: ArrayBuffer): Promise<WalletUpdate>;
    handleRequest(request: WalletAPIRequest): Promise<unknown>;
}
