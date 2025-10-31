import { bigintCodec } from '@/convert/codec/bigint';
import { WebWorkerRequest } from '../../web_worker_types';
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
 * ValidatorsActiveAPIRequest represents a Web Worker request for the
 * ValidatorsActiveAPI.
 */
export type ValidatorsActiveAPIRequest<
  Method extends keyof ValidatorsActiveAPI = keyof ValidatorsActiveAPI,
> = WebWorkerRequest<
  'validatorsActive',
  Method,
  Parameters<ValidatorsActiveAPI[Method]>
>;

/**
 * WebWorkerProxyValidatorsActiveAPI is a proxy for the ValidatorsActiveAPI
 * that forwards requests to the underlying service implementation, it
 * handles the encoding and decoding of requests and responses.
 */
export class WebWorkerProxyValidatorsActiveAPI {
  private service: ValidatorsActiveAPI;
  constructor(service: ValidatorsActiveAPI) {
    this.service = service;
  }

  async active(): Promise<ActiveValidatorSetSnapshot> {
    return this.service.active();
  }

  async updatesSince(hash: bigint): Promise<ActiveValidatorSetUpdate> {
    return this.service.updatesSince(hash);
  }

  async handleRequest(request: ValidatorsActiveAPIRequest) {
    switch (request.method) {
      case 'active':
        return activeValidatorSetSnapshotJSONCodec.encode(await this.active());

      case 'updatesSince':
        return activeValidatorSetUpdateJSONCodec.encode(
          await this.updatesSince(bigintCodec.decode(request.param[0])),
        );
    }
  }
}
