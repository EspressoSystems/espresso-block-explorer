import { L1BlockAPI } from '../l1_block/l1_block_api';
import { L1ValidatorService } from '../l1_validator_service_api';
import { ValidatorsActiveAPI } from '../validators_active/validators_active_api';
import { ValidatorsAllAPI } from '../validators_all/validators_all_api';
/**
 * UnimplementedL1ValidatorService is a stub implementation of the
 * L1ValidatorService interface that throws UnimplementedError for all methods.
 *
 * It is provided for convenience to serve as a default, and to allow partial
 * implementations to extend it without having to implement all methods.
 */
export declare class UnimplementedL1ValidatorService implements L1ValidatorService {
    readonly l1Block: L1BlockAPI;
    readonly validatorsAll: ValidatorsAllAPI;
    readonly validatorsActive: ValidatorsActiveAPI;
    setURL(): Promise<boolean>;
}
