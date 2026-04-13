import { FakeDataL1BlockAPI } from '../l1_block/implementations/fake_data';
import { StakingAPIService } from '../staking_api_service';
import { FakeDataValidatorsActiveAPI } from '../validators_active/implementations/fake_data';
import { FakeDataValidatorsAllAPI } from '../validators_all/implementations/fake_data';
import { FakeDataWalletAPI } from '../wallet/implementations/fake_data';
/**
 * FakeDataStakingAPIService is an implementation of StakingAPIService
 * that uses fake data to simulate the Staking API Service.
 */
export declare class FakeDataStakingAPIService implements StakingAPIService {
    readonly l1Block: FakeDataL1BlockAPI;
    readonly validatorsAll: FakeDataValidatorsAllAPI;
    readonly validatorsActive: FakeDataValidatorsActiveAPI;
    readonly wallet: FakeDataWalletAPI;
    setURL(): Promise<boolean>;
}
