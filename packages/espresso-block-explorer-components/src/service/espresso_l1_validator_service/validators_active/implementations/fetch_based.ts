import { validateAndExpandResponse } from '@/async/fetch/response_validators';
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
 * FetchBasedValidatorsActiveAPI is an implementation of ValidatorsActiveAPI
 * that uses the Fetch API to communicate with the `validators/active` endpoints
 * for the Validator Service API as an external service over HTTP REST requests.
 */
export class FetchBasedValidatorsActiveAPI implements ValidatorsActiveAPI {
  private readonly fetcher: typeof fetch;
  private readonly baseURL: URL;

  constructor(fetcher: typeof fetch, baseURL: URL) {
    this.fetcher = fetcher;
    this.baseURL = baseURL;
  }

  async active(): Promise<ActiveValidatorSetSnapshot> {
    return this.fetcher(this.baseURL).then(
      validateAndExpandResponse(activeValidatorSetSnapshotJSONCodec.decoder),
    );
  }

  async updatesSince(block: bigint): Promise<ActiveValidatorSetUpdate> {
    const url = new URL(`active/updates/${block}`, this.baseURL);
    return this.fetcher(url).then(
      validateAndExpandResponse(activeValidatorSetUpdateJSONCodec.decoder),
    );
  }
}
