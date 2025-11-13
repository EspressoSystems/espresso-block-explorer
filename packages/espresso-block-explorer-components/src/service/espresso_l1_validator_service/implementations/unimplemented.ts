import UnimplementedError from '@/errors/UnimplementedError';
import { UnimplementedL1BlockAPI } from '../l1_block/implementations/unimplemented';
import { L1BlockAPI } from '../l1_block/l1_block_api';
import { L1ValidatorService } from '../l1_validator_service_api';
import { UnimplementedActiveValidatorsAPI } from '../validators_active/implementations/unimplemented';
import { ValidatorsActiveAPI } from '../validators_active/validators_active_api';
import { UnimplementedValidatorAllAPI } from '../validators_all/implementations/unimplemented';
import { ValidatorsAllAPI } from '../validators_all/validators_all_api';
import { UnimplementedWalletAPI } from '../wallet/implementations/unimplemented';
import { WalletAPI } from '../wallet/wallet_api';

/**
 * UnimplementedL1ValidatorService is a stub implementation of the
 * L1ValidatorService interface that throws UnimplementedError for all methods.
 *
 * It is provided for convenience to serve as a default, and to allow partial
 * implementations to extend it without having to implement all methods.
 */
export class UnimplementedL1ValidatorService implements L1ValidatorService {
  readonly l1Block: L1BlockAPI = new UnimplementedL1BlockAPI();
  readonly validatorsAll: ValidatorsAllAPI = new UnimplementedValidatorAllAPI();
  readonly validatorsActive: ValidatorsActiveAPI =
    new UnimplementedActiveValidatorsAPI();
  readonly wallet: WalletAPI = new UnimplementedWalletAPI();

  async setURL(): Promise<boolean> {
    throw new UnimplementedError();
  }
}
