import { UnimplementedError } from '@/errors/unimplemented_error';
import { FakeDataL1BlockAPI } from '../l1_block/implementations/fake_data';
import { StakingAPIService } from '../staking_api_service';
import { FakeDataValidatorsActiveAPI } from '../validators_active/implementations/fake_data';
import { FakeDataValidatorsAllAPI } from '../validators_all/implementations/fake_data';
import { FakeDataWalletAPI } from '../wallet/implementations/fake_data';

/**
 * FakeDataStakingAPIService is an implementation of StakingAPIService
 * that uses fake data to simulate the Staking API Service.
 */
export class FakeDataStakingAPIService implements StakingAPIService {
  public readonly l1Block = new FakeDataL1BlockAPI();
  public readonly validatorsAll = new FakeDataValidatorsAllAPI();
  public readonly validatorsActive = new FakeDataValidatorsActiveAPI();
  public readonly wallet = new FakeDataWalletAPI();

  public async setURL(): Promise<boolean> {
    throw new UnimplementedError();
  }
}
