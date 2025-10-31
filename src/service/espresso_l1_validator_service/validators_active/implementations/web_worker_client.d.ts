import { AsyncRequestHelper } from '../../web_worker_types';
import { ActiveValidatorSetSnapshot } from '../active_validator_set_snapshot';
import { ActiveValidatorSetUpdate } from '../active_validator_set_update';
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
    active(): Promise<ActiveValidatorSetSnapshot>;
    updatesSince(hash: bigint): Promise<ActiveValidatorSetUpdate>;
}
