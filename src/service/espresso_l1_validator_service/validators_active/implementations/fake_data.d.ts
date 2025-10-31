import { ActiveValidatorSetSnapshot } from '../active_validator_set_snapshot';
import { ActiveValidatorSetUpdate } from '../active_validator_set_update';
import { ValidatorsActiveAPI } from '../validators_active_api';
/**
 * FakeDataValidatorsActiveAPI is an implementation of ValidatorsActiveAPI
 * that uses fake data to simulate the `validators/active` endpoints
 * for the Validator Service API.
 */
export declare class FakeDataValidatorsActiveAPI implements ValidatorsActiveAPI {
    active(): Promise<ActiveValidatorSetSnapshot>;
    updatesSince(): Promise<ActiveValidatorSetUpdate>;
}
