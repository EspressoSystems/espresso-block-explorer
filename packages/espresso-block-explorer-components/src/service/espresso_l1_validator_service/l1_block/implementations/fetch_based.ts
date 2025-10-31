import { validateAndExpandResponse } from '@/async/fetch/response_validators';
import { L1BlockAPI } from '../l1_block_api';
import { L1BlockInfo, l1BlockInfoJSONCodec } from '../l1_block_info';

/**
 * FetchBasedL1BlockAPI is an implementation of L1BlockAPI
 * that uses the Fetch API to communicate with the `l1/block` endpoints
 * for the Validator Service API as an external service over HTTP REST requests.
 */
export class FetchBasedL1BlockAPI implements L1BlockAPI {
  private readonly fetcher: typeof fetch;
  private readonly baseURL: URL;

  constructor(fetcher: typeof fetch, baseURL: URL) {
    this.fetcher = fetcher;
    this.baseURL = baseURL;
  }

  async getBlockForHeight(number: number): Promise<L1BlockInfo> {
    const url = new URL(`${number}`, this.baseURL);
    return this.fetcher(url).then(
      validateAndExpandResponse(l1BlockInfoJSONCodec.decoder),
    );
  }
}
