import { WalletAPI } from '../wallet_api';
import { WalletSnapshot } from '../wallet_snapshot';
import { WalletUpdate } from '../wallet_update';
/**
 * FetchBasedWalletAPI is an implementation of WalletAPI
 * that uses the Fetch API to communicate with the `wallet` endpoints
 * for the Validator Service API as an external service over HTTP REST requests.
 */
export declare class FetchBasedWalletAPI implements WalletAPI {
    private readonly fetcher;
    private readonly baseURL;
    constructor(fetcher: typeof fetch, baseURL: URL);
    snapshot(address: ArrayBuffer, hash: ArrayBuffer): Promise<WalletSnapshot>;
    updates(address: ArrayBuffer, hash: ArrayBuffer): Promise<WalletUpdate>;
}
