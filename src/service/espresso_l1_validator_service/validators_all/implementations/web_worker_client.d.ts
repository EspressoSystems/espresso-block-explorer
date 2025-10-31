import { AsyncRequestHelper } from '../../web_worker_types';
import { FullValidatorSetSnapshot } from '../full_validator_set_snapshot';
import { FullValidatorSetUpdate } from '../full_validator_set_update';
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
    snapshot(): Promise<FullValidatorSetSnapshot>;
    updatesSince(hash: ArrayBuffer): Promise<FullValidatorSetUpdate>;
}
