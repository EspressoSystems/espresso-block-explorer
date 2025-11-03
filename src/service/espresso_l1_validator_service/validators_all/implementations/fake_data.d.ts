import { FullNodeSetSnapshot } from '../full_node_set_snapshot';
import { FullNodeSetUpdate } from '../full_node_set_update';
import { ValidatorsAllAPI } from '../validators_all_api';
/**
 * FakeDataValidatorsAllAPI is an implementation of ValidatorsAllAPI
 * that uses fake data to simulate the `validators/all` endpoints
 * for the Validator Service API.
 */
export declare class FakeDataValidatorsAllAPI implements ValidatorsAllAPI {
    snapshot(): Promise<FullNodeSetSnapshot>;
    updatesSince(): Promise<FullNodeSetUpdate>;
}
