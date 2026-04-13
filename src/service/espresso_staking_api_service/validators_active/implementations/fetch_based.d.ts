import { ActiveNodeSetSnapshot } from '../active_node_set_snapshot';
import { ActiveNodeSetUpdate } from '../active_node_set_update';
import { ValidatorsActiveAPI } from '../validators_active_api';
/**
 * FetchBasedValidatorsActiveAPI is an implementation of ValidatorsActiveAPI
 * that uses the Fetch API to communicate with the `validators/active` endpoints
 * for the Validator Service API as an external service over HTTP REST requests.
 */
export declare class FetchBasedValidatorsActiveAPI implements ValidatorsActiveAPI {
    private readonly fetcher;
    private readonly baseURL;
    constructor(fetcher: typeof fetch, baseURL: URL);
    active(): Promise<ActiveNodeSetSnapshot>;
    activeFor(height: bigint): Promise<ActiveNodeSetSnapshot>;
    updatesSince(block: bigint): Promise<ActiveNodeSetUpdate>;
}
