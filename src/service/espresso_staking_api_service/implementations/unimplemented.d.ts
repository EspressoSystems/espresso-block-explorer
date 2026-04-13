import { L1BlockAPI } from '../l1_block/l1_block_api';
import { StakingAPIService } from '../staking_api_service';
import { ValidatorsActiveAPI } from '../validators_active/validators_active_api';
import { ValidatorsAllAPI } from '../validators_all/validators_all_api';
import { WalletAPI } from '../wallet/wallet_api';
/**
 * UnimplementedStakingAPIService is a stub implementation of the
 * StakingAPIService interface that throws UnimplementedError for all methods.
 *
 * It is provided for convenience to serve as a default, and to allow partial
 * implementations to extend it without having to implement all methods.
 */
export declare class UnimplementedStakingAPIService implements StakingAPIService {
    readonly l1Block: L1BlockAPI;
    readonly validatorsAll: ValidatorsAllAPI;
    readonly validatorsActive: ValidatorsActiveAPI;
    readonly wallet: WalletAPI;
    setURL(): Promise<boolean>;
}
