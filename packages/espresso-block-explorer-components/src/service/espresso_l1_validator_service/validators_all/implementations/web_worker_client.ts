import { stdBase64ArrayBufferCodec } from '@/convert/codec/array_buffer';
import { Codec } from '@/convert/codec/convert';
import { AsyncRequestHelper } from '../../web_worker_types';
import {
  FullValidatorSetSnapshot,
  fullValidatorSetSnapshotJSONCodec,
} from '../full_validator_set_snapshot';
import {
  FullValidatorSetUpdate,
  fullValidatorSetUpdateJSONCodec,
} from '../full_validator_set_update';
import { ValidatorsAllAPI } from '../validators_all_api';

/**
 * WebWorkerClientBasedValidatorsAllAPI is an implementation of ValidatorsAllAPI
 * that uses a Web Worker to communicate with the `validators/all` endpoints
 * for the Validator Service API.
 */
export class WebWorkerClientBasedValidatorsAllAPI implements ValidatorsAllAPI {
  private helper: AsyncRequestHelper;
  constructor(helper: AsyncRequestHelper) {
    this.helper = helper;
  }

  /**
   * sendRequest sends a request to the Web Worker encoded specifically
   * for the ValidatorsAllAPI, and returns the decoded response.
   */
  private async sendRequest<
    T,
    Method extends keyof ValidatorsAllAPI = keyof ValidatorsAllAPI,
    Param = unknown,
  >(codec: Codec<T, unknown>, method: Method, ...param: Param[]): Promise<T> {
    return this.helper.submitRequest<T>(codec, 'validatorsAll', method, param);
  }

  async snapshot(): Promise<FullValidatorSetSnapshot> {
    return await this.sendRequest(
      fullValidatorSetSnapshotJSONCodec,
      'snapshot',
    );
  }

  async updatesSince(hash: ArrayBuffer): Promise<FullValidatorSetUpdate> {
    return await this.sendRequest(
      fullValidatorSetUpdateJSONCodec,
      'updatesSince',
      stdBase64ArrayBufferCodec.encode(hash),
    );
  }
}
