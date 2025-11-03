import { Codec } from '@/convert/codec/convert';
import { numberCodec } from '@/convert/codec/number';
import { L1BlockID, l1BlockIDJSONCodec } from '../../common/l1_block_id';
import { AsyncRequestHelper } from '../../web_worker_types';
import { L1BlockAPI } from '../l1_block_api';

/**
 * WebWorkerClientBasedL1BlockAPI is an implementation of L1BlockAPI
 * that uses a Web Worker to communicate with the `l1/block` endpoints
 * for the Validator Service API.
 */
export class WebWorkerClientBasedL1BlockAPI implements L1BlockAPI {
  private helper: AsyncRequestHelper;
  constructor(helper: AsyncRequestHelper) {
    this.helper = helper;
  }

  /**
   * sendRequest sends a request to the Web Worker encoded specifically
   * for the L1BlockAPI, and returns the decoded response.
   */
  private async sendRequest<
    T,
    Method extends keyof L1BlockAPI = keyof L1BlockAPI,
    Param = unknown,
  >(codec: Codec<T, unknown>, method: Method, ...args: Param[]): Promise<T> {
    return this.helper.submitRequest(codec, 'l1Block', method, args);
  }

  async getBlockForHeight(number: number): Promise<L1BlockID> {
    return await this.sendRequest(
      l1BlockIDJSONCodec,
      'getBlockForHeight',
      numberCodec.encode(number),
    );
  }
}
