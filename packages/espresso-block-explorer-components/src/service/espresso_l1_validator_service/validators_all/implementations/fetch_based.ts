import { validateAndExpandResponse } from '@/async/fetch/response_validators';
import { hexArrayBufferCodec } from '@/convert/codec';
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
 * FetchBasedValidatorsAllAPI is an implementation of ValidatorsAllAPI
 * that uses the Fetch API to communicate with the `validators/all` endpoints
 * for the Validator Service API as an external service over HTTP REST requests.
 */
export class FetchBasedValidatorsAllAPI implements ValidatorsAllAPI {
  private readonly fetcher: typeof fetch;
  private readonly baseURL: URL;

  constructor(fetcher: typeof fetch, baseURL: URL) {
    this.fetcher = fetcher;
    this.baseURL = baseURL;
  }

  async snapshot(): Promise<FullNodeSetSnapshot> {
    return this.fetcher(this.baseURL).then(
      validateAndExpandResponse(fullNodeSetSnapshotJSONCodec.decoder),
    );
  }

  async updatesSince(hash: ArrayBuffer): Promise<FullNodeSetUpdate> {
    const url = new URL(
      `all/updates/${hexArrayBufferCodec.encode(hash)}`,
      this.baseURL,
    );
    return this.fetcher(url).then(
      validateAndExpandResponse(fullNodeSetUpdateJSONCodec.decoder),
    );
  }
}
