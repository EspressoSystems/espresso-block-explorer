import { FakeDataL1BlockAPI } from '../l1_block/implementations/fake_data';
import { L1ValidatorService } from '../l1_validator_service_api';
import { FakeDataValidatorsActiveAPI } from '../validators_active/implementations/fake_data';
import { FakeDataValidatorsAllAPI } from '../validators_all/implementations/fake_data';
/**
 * FakeDataL1ValidatorService is an implementation of L1ValidatorService
 * that uses fake data to simulate the Validator Service API.
 */
export declare class FakeDataL1ValidatorService implements L1ValidatorService {
    readonly l1Block: FakeDataL1BlockAPI;
    readonly validatorsAll: FakeDataValidatorsAllAPI;
    readonly validatorsActive: FakeDataValidatorsActiveAPI;
    setURL(): Promise<boolean>;
}
