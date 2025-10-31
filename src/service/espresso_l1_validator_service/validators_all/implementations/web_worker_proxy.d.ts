import { WebWorkerRequest } from '../../web_worker_types';
import { FullValidatorSetSnapshot } from '../full_validator_set_snapshot';
import { FullValidatorSetUpdate } from '../full_validator_set_update';
import { ValidatorsAllAPI } from '../validators_all_api';
/**
 * ValidatorsActiveAllRequest represents a Web Worker request for the
 * ValidatorsAllAPI.
 */
export type ValidatorsActiveAllRequest<Method extends keyof ValidatorsAllAPI = keyof ValidatorsAllAPI> = WebWorkerRequest<'validatorsAll', Method, Parameters<ValidatorsAllAPI[Method]>>;
/**
 * WebWorkerProxyValidatorsAllAPI is a proxy for the ValidatorsAllAPI
 * that forwards requests to the underlying service implementation, it
 * handles the encoding and decoding of requests and responses.
 */
export declare class WebWorkerProxyValidatorsAllAPI {
    private service;
    constructor(service: ValidatorsAllAPI);
    snapshot(): Promise<FullValidatorSetSnapshot>;
    updatesSince(hash: ArrayBuffer): Promise<FullValidatorSetUpdate>;
    handleRequest(request: ValidatorsActiveAllRequest): Promise<unknown>;
}
