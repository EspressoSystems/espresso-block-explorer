import {
  hexArrayBufferCodec,
  stdBase64ArrayBufferCodec,
} from '@/convert/codec/array_buffer';
import { WebWorkerRequest } from '../../web_worker_types';
import {
  FullNodeSetSnapshot,
  fullNodeSetSnapshotJSONCodec,
} from '../full_node_set_snapshot';
import {
  FullNodeSetUpdate,
  fullNodeSetUpdateJSONCodec,
} from '../full_node_set_update';
import { ValidatorsAllAPI } from '../validators_all_api';

/**
 * ValidatorsActiveAllRequest represents a Web Worker request for the
 * ValidatorsAllAPI.
 */
export type ValidatorsActiveAllRequest<
  Method extends keyof ValidatorsAllAPI = keyof ValidatorsAllAPI,
> = WebWorkerRequest<
  'validatorsAll',
  Method,
  Parameters<ValidatorsAllAPI[Method]>
>;

/**
 * WebWorkerProxyValidatorsAllAPI is a proxy for the ValidatorsAllAPI
 * that forwards requests to the underlying service implementation, it
 * handles the encoding and decoding of requests and responses.
 */
export class WebWorkerProxyValidatorsAllAPI {
  private service: ValidatorsAllAPI;
  constructor(service: ValidatorsAllAPI) {
    this.service = service;
  }

  async snapshot(hash: ArrayBuffer): Promise<FullNodeSetSnapshot> {
    return this.service.snapshot(hash);
  }

  async updatesSince(hash: ArrayBuffer): Promise<FullNodeSetUpdate> {
    return this.service.updatesSince(hash);
  }

  async handleRequest(request: ValidatorsActiveAllRequest): Promise<unknown> {
    switch (request.method) {
      case 'snapshot': {
        const hash = hexArrayBufferCodec.decode(request.param[0]);
        return fullNodeSetSnapshotJSONCodec.encode(await this.snapshot(hash));
      }

      case 'updatesSince':
        return fullNodeSetUpdateJSONCodec.encode(
          await this.updatesSince(
            stdBase64ArrayBufferCodec.decode(request.param[0]),
          ),
        );
    }
  }
}
