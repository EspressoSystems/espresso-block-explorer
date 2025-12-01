import { booleanCodec, stringCodec } from '@/convert/codec';
import { Codec } from '@/convert/codec/convert';
import { WebWorkerClientBasedL1BlockAPI } from '../l1_block/implementations/web_worker_client';
import { L1BlockAPI } from '../l1_block/l1_block_api';
import { L1ValidatorService } from '../l1_validator_service_api';
import ProxyWorker from '../l1_validator_service_web_worker_api.js?worker';
import { WebWorkerClientBasedValidatorsActiveAPI } from '../validators_active/implementations/web_worker_client';
import { ValidatorsActiveAPI } from '../validators_active/validators_active_api';
import { WebWorkerClientBasedValidatorsAllAPI } from '../validators_all/implementations/web_worker_client';
import { ValidatorsAllAPI } from '../validators_all/validators_all_api';
import { WebWorkerClientBasedWalletAPI } from '../wallet/implementations/web_worker_client';
import { WalletAPI } from '../wallet/wallet_api';
import { AsyncRequestHelper } from '../web_worker_types';

/**
 * singletonWorker is a singleton instance of the Web Worker
 * used by the WebWorkerClientBasedL1ValidatorService.
 */
let singletonWorker: null | Worker = null;

/**
 * createWorker creates a singleton Web Worker instance
 * used by the WebWorkerClientBasedL1ValidatorService.
 */
function createWorker(): Worker {
  if (!singletonWorker) {
    singletonWorker = new ProxyWorker();
  }

  return singletonWorker;
}

/**
 * WebWorkerClientBasedL1ValidatorService is an implementation of
 * L1ValidatorService that uses a Web Worker to communicate with the
 * Validator Service API.
 */
export class WebWorkerClientBasedL1ValidatorService implements L1ValidatorService {
  public readonly l1Block: L1BlockAPI;
  public readonly validatorsAll: ValidatorsAllAPI;
  public readonly validatorsActive: ValidatorsActiveAPI;
  public readonly wallet: WalletAPI;
  private helper: AsyncRequestHelper;

  constructor() {
    const worker = createWorker();
    const helper = new AsyncRequestHelper(worker);
    this.helper = helper;
    this.l1Block = new WebWorkerClientBasedL1BlockAPI(helper);
    this.validatorsAll = new WebWorkerClientBasedValidatorsAllAPI(helper);
    this.validatorsActive = new WebWorkerClientBasedValidatorsActiveAPI(helper);
    this.wallet = new WebWorkerClientBasedWalletAPI(helper);
  }

  /**
   * sendRequest sends a request to the Web Worker encoded specifically
   * for the L1ValidatorService, and returns the decoded response.
   */
  private async sendRequest<T, Param = unknown>(
    codec: Codec<T, unknown>,
    method: 'set-url',
    ...param: Param[]
  ): Promise<T> {
    return this.helper.submitRequest<T>(codec, 'proxy', method, param);
  }

  async setURL(url: string): Promise<boolean> {
    return await this.sendRequest(
      booleanCodec,
      'set-url',
      stringCodec.encode(url),
    );
  }
}
