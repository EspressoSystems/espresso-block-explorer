import { AsyncRequestHelper } from '../../web_worker_types';
import { ActiveNodeSetSnapshot } from '../active_node_set_snapshot';
import { ActiveNodeSetUpdate } from '../active_node_set_update';
import { ValidatorsActiveAPI } from '../validators_active_api';
/**
 * WebWorkerClientBasedValidatorsActiveAPI is an implementation of
 * ValidatorsActiveAPI that uses a Web Worker to communicate with the
 * `validators/active` endpoints for the Validator Service API.
 */
export declare class WebWorkerClientBasedValidatorsActiveAPI implements ValidatorsActiveAPI {
    private helper;
    constructor(helper: AsyncRequestHelper);
    /**
     * sendRequest sends a request to the Web Worker encoded specifically
     * for the ValidatorsActiveAPI, and returns the decoded response.
     */
    private sendRequest;
    active(): Promise<ActiveNodeSetSnapshot>;
    activeFor(height: bigint): Promise<ActiveNodeSetSnapshot>;
    updatesSince(hash: bigint): Promise<ActiveNodeSetUpdate>;
}
