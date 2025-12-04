import UnimplementedError from '@/errors/unimplemented_error';
import { FakeDataL1BlockAPI } from '../l1_block/implementations/fake_data';
import { L1ValidatorService } from '../l1_validator_service_api';
import { FakeDataValidatorsActiveAPI } from '../validators_active/implementations/fake_data';
import { FakeDataValidatorsAllAPI } from '../validators_all/implementations/fake_data';
import { FakeDataWalletAPI } from '../wallet/implementations/fake_data';

/**
 * FakeDataL1ValidatorService is an implementation of L1ValidatorService
 * that uses fake data to simulate the Validator Service API.
 */
export class FakeDataL1ValidatorService implements L1ValidatorService {
  public readonly l1Block = new FakeDataL1BlockAPI();
  public readonly validatorsAll = new FakeDataValidatorsAllAPI();
  public readonly validatorsActive = new FakeDataValidatorsActiveAPI();
  public readonly wallet = new FakeDataWalletAPI();

  public async setURL(): Promise<boolean> {
    throw new UnimplementedError();
  }
}
