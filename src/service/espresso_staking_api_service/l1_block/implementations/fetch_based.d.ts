import { L1BlockID } from '../../common/l1_block_id';
import { L1BlockAPI } from '../l1_block_api';
/**
 * FetchBasedL1BlockAPI is an implementation of L1BlockAPI
 * that uses the Fetch API to communicate with the `l1/block` endpoints
 * for the Validator Service API as an external service over HTTP REST requests.
 */
export declare class FetchBasedL1BlockAPI implements L1BlockAPI {
    private readonly fetcher;
    private readonly baseURL;
    constructor(fetcher: typeof fetch, baseURL: URL);
    getBlockForHeight(number: bigint): Promise<L1BlockID>;
    getLatestBlock(): Promise<L1BlockID>;
}
