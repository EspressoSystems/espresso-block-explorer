import { L1BlockAPIRequest, WebWorkerProxyL1API } from '../l1_block/implementations/web_worker_proxy';
import { L1ValidatorService } from '../l1_validator_service_api';
import { ValidatorsActiveAPIRequest, WebWorkerProxyValidatorsActiveAPI } from '../validators_active/implementations/web_worker_proxy';
import { ValidatorsActiveAllRequest, WebWorkerProxyValidatorsAllAPI } from '../validators_all/implementations/web_worker_proxy';
import { WalletAPIRequest, WebWorkerProxyWalletAPI } from '../wallet/implementations/web_worker_proxy';
import { WebWorkerRequest } from '../web_worker_types';
/**
 * ProxyRequest represents a Web Worker request for the Proxy itself.
 */
export type ProxyRequest = WebWorkerRequest<'proxy', 'set-url', [string]>;
/**
 * WebWorkerL1ValidatorService is a proxy for the L1ValidatorService
 * that forwards requests to the underlying service implementation, it
 * handles the routing of the requests to the specific API proxies.
 */
export declare class WebWorkerL1ValidatorService {
    readonly l1Block: WebWorkerProxyL1API;
    readonly validatorsActive: WebWorkerProxyValidatorsActiveAPI;
    readonly validatorsAll: WebWorkerProxyValidatorsAllAPI;
    readonly wallet: WebWorkerProxyWalletAPI;
    constructor(service: L1ValidatorService);
    handleRequest(request: L1BlockAPIRequest | ValidatorsActiveAPIRequest | ValidatorsActiveAllRequest | WalletAPIRequest): Promise<unknown>;
}
