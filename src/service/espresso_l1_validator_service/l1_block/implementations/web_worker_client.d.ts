import { AsyncRequestHelper } from '../../web_worker_types';
import { L1BlockAPI } from '../l1_block_api';
import { L1BlockInfo } from '../l1_block_info';
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
    getBlockForHeight(number: number): Promise<L1BlockInfo>;
}
