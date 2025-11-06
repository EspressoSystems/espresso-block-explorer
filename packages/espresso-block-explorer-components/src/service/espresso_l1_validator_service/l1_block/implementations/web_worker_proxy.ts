import { bigintCodec } from '@/convert/codec';
import UnimplementedError from '@/errors/UnimplementedError';
import { L1BlockID, l1BlockIDJSONCodec } from '../../common/l1_block_id';
import { WebWorkerRequest } from '../../web_worker_types';
import { L1BlockAPI } from '../l1_block_api';

/**
 * L1BlockAPIRequest represents a Web Worker request for the L1BlockAPI.
 */
export type L1BlockAPIRequest<
  Method extends keyof L1BlockAPI = keyof L1BlockAPI,
> = WebWorkerRequest<'l1Block', Method, Parameters<L1BlockAPI[Method]>>;

/**
 * WebWorkerProxyL1API is a proxy for the L1BlockAPI that forwards requests
 * to the underlying service implementation, it handles the encoding and
 * decoding of requests and responses.
 */
export class WebWorkerProxyL1API {
  private service: L1BlockAPI;
  constructor(service: L1BlockAPI) {
    this.service = service;
  }

  async getBlockForHeight(number: bigint): Promise<L1BlockID> {
    return this.service.getBlockForHeight(number);
  }

  async getLatestBlock(): Promise<L1BlockID> {
    return this.service.getLatestBlock();
  }

  async handleRequest(request: L1BlockAPIRequest) {
    switch (request.method) {
      case 'getBlockForHeight': {
        return l1BlockIDJSONCodec.encode(
          await this.getBlockForHeight(bigintCodec.decode(request.param[0])),
        );
      }

      case 'getLatestBlock': {
        return l1BlockIDJSONCodec.encode(await this.getLatestBlock());
      }
      default:
        throw new UnimplementedError();
    }
  }
}
