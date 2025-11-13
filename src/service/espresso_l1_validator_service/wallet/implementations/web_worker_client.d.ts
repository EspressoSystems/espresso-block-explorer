import { AsyncRequestHelper } from '../../web_worker_types';
import { WalletAPI } from '../wallet_api';
import { WalletSnapshot } from '../wallet_snapshot';
import { WalletUpdate } from '../wallet_update';
/**
 * WebWorkerClientBasedWalletAPI is an implementation of
 * WalletAPI that uses a Web Worker to communicate with the
 * `wallet` endpoints for the Validator Service API.
 */
export declare class WebWorkerClientBasedWalletAPI implements WalletAPI {
    private helper;
    constructor(helper: AsyncRequestHelper);
    /**
     * sendRequest sends a request to the Web Worker encoded specifically
     * for the WalletAPI, and returns the decoded response.
     */
    private sendRequest;
    snapshot(address: ArrayBuffer, hash: ArrayBuffer): Promise<WalletSnapshot>;
    updates(address: ArrayBuffer, hash: ArrayBuffer): Promise<WalletUpdate>;
}
