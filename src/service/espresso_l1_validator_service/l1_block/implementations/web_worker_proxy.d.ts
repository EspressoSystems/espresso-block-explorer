import { L1BlockID } from '../../common/l1_block_id';
import { WebWorkerRequest } from '../../web_worker_types';
import { L1BlockAPI } from '../l1_block_api';
/**
 * L1BlockAPIRequest represents a Web Worker request for the L1BlockAPI.
 */
export type L1BlockAPIRequest<Method extends keyof L1BlockAPI = keyof L1BlockAPI> = WebWorkerRequest<'l1Block', Method, Parameters<L1BlockAPI[Method]>>;
/**
 * WebWorkerProxyL1API is a proxy for the L1BlockAPI that forwards requests
 * to the underlying service implementation, it handles the encoding and
 * decoding of requests and responses.
 */
export declare class WebWorkerProxyL1API {
    private service;
    constructor(service: L1BlockAPI);
    getBlockForHeight(number: bigint): Promise<L1BlockID>;
    getLatestBlock(): Promise<L1BlockID>;
    handleRequest(request: L1BlockAPIRequest): Promise<unknown>;
}
