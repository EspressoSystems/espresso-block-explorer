import { bigintCodec } from '@/convert/codec/bigint';
import { Codec } from '@/convert/codec/convert';
import { AsyncRequestHelper } from '../../web_worker_types';
import {
  ActiveValidatorSetSnapshot,
  activeValidatorSetSnapshotJSONCodec,
} from '../active_validator_set_snapshot';
import {
  ActiveValidatorSetUpdate,
  activeValidatorSetUpdateJSONCodec,
} from '../active_validator_set_update';
import { ValidatorsActiveAPI } from '../validators_active_api';

/**
 * WebWorkerClientBasedValidatorsActiveAPI is an implementation of
 * ValidatorsActiveAPI that uses a Web Worker to communicate with the
 * `validators/active` endpoints for the Validator Service API.
 */
export class WebWorkerClientBasedValidatorsActiveAPI
  implements ValidatorsActiveAPI
{
  private helper: AsyncRequestHelper;
  constructor(helper: AsyncRequestHelper) {
    this.helper = helper;
  }

  /**
   * sendRequest sends a request to the Web Worker encoded specifically
   * for the ValidatorsActiveAPI, and returns the decoded response.
   */
  private async sendRequest<
    T,
    Method extends keyof ValidatorsActiveAPI = keyof ValidatorsActiveAPI,
    Param = unknown,
  >(codec: Codec<T, unknown>, method: Method, ...param: Param[]): Promise<T> {
    return this.helper.submitRequest<T>(
      codec,
      'validatorsActive',
      method,
      param,
    );
  }

  async active(): Promise<ActiveValidatorSetSnapshot> {
    return await this.sendRequest(
      activeValidatorSetSnapshotJSONCodec,
      'active',
    );
  }
  async updatesSince(hash: bigint): Promise<ActiveValidatorSetUpdate> {
    return await this.sendRequest(
      activeValidatorSetUpdateJSONCodec,
      'updatesSince',
      bigintCodec.encode(hash),
    );
  }
}
