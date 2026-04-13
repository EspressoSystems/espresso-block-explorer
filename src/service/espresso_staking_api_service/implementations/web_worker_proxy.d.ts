import { L1BlockAPIRequest, WebWorkerProxyL1API } from '../l1_block/implementations/web_worker_proxy';
import { StakingAPIService } from '../staking_api_service';
import { ValidatorsActiveAPIRequest, WebWorkerProxyValidatorsActiveAPI } from '../validators_active/implementations/web_worker_proxy';
import { ValidatorsActiveAllRequest, WebWorkerProxyValidatorsAllAPI } from '../validators_all/implementations/web_worker_proxy';
import { WalletAPIRequest, WebWorkerProxyWalletAPI } from '../wallet/implementations/web_worker_proxy';
import { WebWorkerRequest } from '../web_worker_types';
/**
 * ProxyRequest represents a Web Worker request for the Proxy itself.
 */
export type ProxyRequest = WebWorkerRequest<'proxy', 'set-url', [string]>;
/**
 * WebWorkerStakingAPIService is a proxy for the StakingAPIService
 * that forwards requests to the underlying service implementation, it
 * handles the routing of the requests to the specific API proxies.
 */
export declare class WebWorkerStakingAPIService {
    readonly l1Block: WebWorkerProxyL1API;
    readonly validatorsActive: WebWorkerProxyValidatorsActiveAPI;
    readonly validatorsAll: WebWorkerProxyValidatorsAllAPI;
    readonly wallet: WebWorkerProxyWalletAPI;
    constructor(service: StakingAPIService);
    handleRequest(request: L1BlockAPIRequest | ValidatorsActiveAPIRequest | ValidatorsActiveAllRequest | WalletAPIRequest): Promise<unknown>;
}
