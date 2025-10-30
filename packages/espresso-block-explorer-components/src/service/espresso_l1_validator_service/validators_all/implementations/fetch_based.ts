import { validateAndExpandResponse } from '@/async/fetch/response_validators';
import { hexArrayBufferCodec } from '@/convert/codec';
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

  async snapshot(): Promise<FullValidatorSetSnapshot> {
    return this.fetcher(this.baseURL).then(
      validateAndExpandResponse(fullValidatorSetSnapshotJSONCodec.decoder),
    );
  }

  async updatesSince(hash: ArrayBuffer): Promise<FullValidatorSetUpdate> {
    const url = new URL(
      `./updates/${hexArrayBufferCodec.decode(hash)}`,
      this.baseURL,
    );
    return this.fetcher(url).then(
      validateAndExpandResponse(fullValidatorSetUpdateJSONCodec.decoder),
    );
  }
}
