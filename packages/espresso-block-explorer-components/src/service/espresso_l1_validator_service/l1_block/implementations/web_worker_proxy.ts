import { numberCodec } from '@/convert/codec/number';
import UnimplementedError from '@/errors/UnimplementedError';
import { WebWorkerRequest } from '../../web_worker_types';
import { L1BlockAPI } from '../l1_block_api';
import { L1BlockInfo, l1BlockInfoJSONCodec } from '../l1_block_info';

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

  async getBlockForHeight(number: number): Promise<L1BlockInfo> {
    return this.service.getBlockForHeight(number);
  }

  async handleRequest(request: L1BlockAPIRequest) {
    switch (request.method) {
      case 'getBlockForHeight': {
        return l1BlockInfoJSONCodec.encode(
          await this.getBlockForHeight(numberCodec.decode(request.param[0])),
        );
      }
      default:
        throw new UnimplementedError();
    }
  }
}
