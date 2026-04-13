import { L1BlockID } from '../../common/l1_block_id';
import { AsyncRequestHelper } from '../../web_worker_types';
import { L1BlockAPI } from '../l1_block_api';
/**
 * WebWorkerClientBasedL1BlockAPI is an implementation of L1BlockAPI
 * that uses a Web Worker to communicate with the `l1/block` endpoints
 * for the Validator Service API.
 */
export declare class WebWorkerClientBasedL1BlockAPI implements L1BlockAPI {
    private helper;
    constructor(helper: AsyncRequestHelper);
    /**
     * sendRequest sends a request to the Web Worker encoded specifically
     * for the L1BlockAPI, and returns the decoded response.
     */
    private sendRequest;
    getBlockForHeight(number: bigint): Promise<L1BlockID>;
    getLatestBlock(): Promise<L1BlockID>;
}
