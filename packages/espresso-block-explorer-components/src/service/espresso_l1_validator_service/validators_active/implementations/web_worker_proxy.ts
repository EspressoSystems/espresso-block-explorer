import { bigintCodec } from '@/convert/codec/bigint';
import { WebWorkerRequest } from '../../web_worker_types';
import {
  ActiveNodeSetSnapshot,
  activeNodeSetSnapshotJSONCodec,
} from '../active_node_set_snapshot';
import {
  ActiveNodeSetUpdate,
  activeNodeSetUpdateJSONCodec,
} from '../active_node_set_update';
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

  async active(): Promise<ActiveNodeSetSnapshot> {
    return this.service.active();
  }

  async activeFor(height: bigint): Promise<ActiveNodeSetSnapshot> {
    return this.service.activeFor(height);
  }

  async updatesSince(hash: bigint): Promise<ActiveNodeSetUpdate> {
    return this.service.updatesSince(hash);
  }

  async handleRequest(request: ValidatorsActiveAPIRequest) {
    switch (request.method) {
      case 'active':
        return activeNodeSetSnapshotJSONCodec.encode(await this.active());

      case 'activeFor':
        return activeNodeSetSnapshotJSONCodec.encode(
          await this.activeFor(bigintCodec.decode(request.param[0])),
        );

      case 'updatesSince':
        return activeNodeSetUpdateJSONCodec.encode(
          await this.updatesSince(bigintCodec.decode(request.param[0])),
        );
    }
  }
}
