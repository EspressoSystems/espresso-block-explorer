import { FullValidatorSetSnapshot } from '../full_validator_set_snapshot';
import { FullValidatorSetUpdate } from '../full_validator_set_update';
import { ValidatorsAllAPI } from '../validators_all_api';
/**
 * FetchBasedValidatorsAllAPI is an implementation of ValidatorsAllAPI
 * that uses the Fetch API to communicate with the `validators/all` endpoints
 * for the Validator Service API as an external service over HTTP REST requests.
 */
export declare class FetchBasedValidatorsAllAPI implements ValidatorsAllAPI {
    private readonly fetcher;
    private readonly baseURL;
    constructor(fetcher: typeof fetch, baseURL: URL);
    snapshot(): Promise<FullValidatorSetSnapshot>;
    updatesSince(hash: ArrayBuffer): Promise<FullValidatorSetUpdate>;
}
