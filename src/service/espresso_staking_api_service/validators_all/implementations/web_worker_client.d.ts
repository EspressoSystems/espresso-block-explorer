import { AsyncRequestHelper } from '../../web_worker_types';
import { FullNodeSetSnapshot } from '../full_node_set_snapshot';
import { FullNodeSetUpdate } from '../full_node_set_update';
import { ValidatorsAllAPI } from '../validators_all_api';
/**
 * WebWorkerClientBasedValidatorsAllAPI is an implementation of ValidatorsAllAPI
 * that uses a Web Worker to communicate with the `validators/all` endpoints
 * for the Validator Service API.
 */
export declare class WebWorkerClientBasedValidatorsAllAPI implements ValidatorsAllAPI {
    private helper;
    constructor(helper: AsyncRequestHelper);
    /**
     * sendRequest sends a request to the Web Worker encoded specifically
     * for the ValidatorsAllAPI, and returns the decoded response.
     */
    private sendRequest;
    snapshot(hash: ArrayBuffer): Promise<FullNodeSetSnapshot>;
    updatesSince(hash: ArrayBuffer): Promise<FullNodeSetUpdate>;
}
