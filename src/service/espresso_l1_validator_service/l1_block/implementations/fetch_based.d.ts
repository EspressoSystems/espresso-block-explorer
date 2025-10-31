import { L1BlockAPI } from '../l1_block_api';
import { L1BlockInfo } from '../l1_block_info';
/**
 * FetchBasedL1BlockAPI is an implementation of L1BlockAPI
 * that uses the Fetch API to communicate with the `l1/block` endpoints
 * for the Validator Service API as an external service over HTTP REST requests.
 */
export declare class FetchBasedL1BlockAPI implements L1BlockAPI {
    private readonly fetcher;
    private readonly baseURL;
    constructor(fetcher: typeof fetch, baseURL: URL);
    getBlockForHeight(number: number): Promise<L1BlockInfo>;
}
