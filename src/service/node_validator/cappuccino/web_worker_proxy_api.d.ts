import { WebWorkerProxyRequest } from '../../../../../../../../../../../src/models/web_worker/web_worker_proxy_request';
import { WebWorkerProxyResponse } from '../../../../../../../../../../../src/models/web_worker/web_worker_proxy_response';
import { NodeValidatorAPI } from '../types';
/**
 * WebWorkerNodeValidatorAPI is a type that represents the Node Validator API
 * for the Web Worker. This interface masks the implementation details of
 * the Web Worker Proxy for the Node Validator API.  This interface allows
 * for multiple implementations of the Node Validator API.  This allows for
 * easy testing of the Node Validator API.
 */
export interface WebWorkerNodeValidatorAPI extends NodeValidatorAPI<WebWorkerProxyRequest, WebWorkerProxyResponse> {
}
/**
 * UnimplementedWebWorkerNodeValidatorAPI is a class that implements the
 * WebWorkerNodeValidatorAPI interface, but throws an UnimplementedError for
 * all methods. This class is meant to be used as a placeholder for the Node
 * Validator API, and should be replaced with a real implementation.
 */
export declare class UnimplementedWebWorkerNodeValidatorAPI implements WebWorkerNodeValidatorAPI {
    get stream(): AsyncIterable<WebWorkerProxyResponse>;
    send(): Promise<void>;
}
