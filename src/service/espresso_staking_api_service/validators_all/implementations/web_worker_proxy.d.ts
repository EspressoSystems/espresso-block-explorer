import { WebWorkerRequest } from '../../web_worker_types';
import { FullNodeSetSnapshot } from '../full_node_set_snapshot';
import { FullNodeSetUpdate } from '../full_node_set_update';
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
    snapshot(hash: ArrayBuffer): Promise<FullNodeSetSnapshot>;
    updatesSince(hash: ArrayBuffer): Promise<FullNodeSetUpdate>;
    handleRequest(request: ValidatorsActiveAllRequest): Promise<unknown>;
}
