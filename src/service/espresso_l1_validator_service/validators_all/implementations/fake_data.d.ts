import { FullValidatorSetSnapshot } from '../full_validator_set_snapshot';
import { FullValidatorSetUpdate } from '../full_validator_set_update';
import { ValidatorsAllAPI } from '../validators_all_api';
/**
 * FakeDataValidatorsAllAPI is an implementation of ValidatorsAllAPI
 * that uses fake data to simulate the `validators/all` endpoints
 * for the Validator Service API.
 */
export declare class FakeDataValidatorsAllAPI implements ValidatorsAllAPI {
    snapshot(): Promise<FullValidatorSetSnapshot>;
    updatesSince(): Promise<FullValidatorSetUpdate>;
}
