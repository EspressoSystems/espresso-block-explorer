import { WebWorkerRequest } from '../../web_worker_types';
import { ActiveNodeSetSnapshot } from '../active_node_set_snapshot';
import { ActiveNodeSetUpdate } from '../active_node_set_update';
import { ValidatorsActiveAPI } from '../validators_active_api';
/**
 * ValidatorsActiveAPIRequest represents a Web Worker request for the
 * ValidatorsActiveAPI.
 */
export type ValidatorsActiveAPIRequest<Method extends keyof ValidatorsActiveAPI = keyof ValidatorsActiveAPI> = WebWorkerRequest<'validatorsActive', Method, Parameters<ValidatorsActiveAPI[Method]>>;
/**
 * WebWorkerProxyValidatorsActiveAPI is a proxy for the ValidatorsActiveAPI
 * that forwards requests to the underlying service implementation, it
 * handles the encoding and decoding of requests and responses.
 */
export declare class WebWorkerProxyValidatorsActiveAPI {
    private service;
    constructor(service: ValidatorsActiveAPI);
    active(): Promise<ActiveNodeSetSnapshot>;
    updatesSince(hash: bigint): Promise<ActiveNodeSetUpdate>;
    handleRequest(request: ValidatorsActiveAPIRequest): Promise<unknown>;
}
