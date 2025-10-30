import UnimplementedError from '@/errors/UnimplementedError';
import {
  L1BlockAPIRequest,
  WebWorkerProxyL1API,
} from '../l1_block/implementations/web_worker_proxy';
import { L1ValidatorService } from '../l1_validator_service_api';
import {
  ValidatorsActiveAPIRequest,
  WebWorkerProxyValidatorsActiveAPI,
} from '../validators_active/implementations/web_worker_proxy';
import {
  ValidatorsActiveAllRequest,
  WebWorkerProxyValidatorsAllAPI,
} from '../validators_all/implementations/web_worker_proxy';
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
export class WebWorkerL1ValidatorService {
  public readonly l1Block: WebWorkerProxyL1API;
  public readonly validatorsActive: WebWorkerProxyValidatorsActiveAPI;
  public readonly validatorsAll: WebWorkerProxyValidatorsAllAPI;

  constructor(service: L1ValidatorService) {
    this.l1Block = new WebWorkerProxyL1API(service.l1Block);
    this.validatorsActive = new WebWorkerProxyValidatorsActiveAPI(
      service.validatorsActive,
    );
    this.validatorsAll = new WebWorkerProxyValidatorsAllAPI(
      service.validatorsAll,
    );
  }

  async handleRequest(
    request:
      | L1BlockAPIRequest
      | ValidatorsActiveAPIRequest
      | ValidatorsActiveAllRequest,
  ) {
    // This is our entry point, and where we will receive / process messages
    switch (request.api) {
      case 'l1Block':
        return this.l1Block.handleRequest(request);

      case 'validatorsActive':
        return this.validatorsActive.handleRequest(request);

      case 'validatorsAll':
        return this.validatorsAll.handleRequest(request);

      default:
        throw new UnimplementedError();
    }
  }
}
