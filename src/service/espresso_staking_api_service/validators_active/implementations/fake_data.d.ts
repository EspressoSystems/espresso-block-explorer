import { ActiveNodeSetSnapshot } from '../active_node_set_snapshot';
import { ActiveNodeSetUpdate } from '../active_node_set_update';
import { ValidatorsActiveAPI } from '../validators_active_api';
/**
 * FakeDataValidatorsActiveAPI is an implementation of ValidatorsActiveAPI
 * that uses fake data to simulate the `validators/active` endpoints
 * for the Validator Service API.
 */
export declare class FakeDataValidatorsActiveAPI implements ValidatorsActiveAPI {
    active(): Promise<ActiveNodeSetSnapshot>;
    activeFor(): Promise<ActiveNodeSetSnapshot>;
    updatesSince(): Promise<ActiveNodeSetUpdate>;
}
