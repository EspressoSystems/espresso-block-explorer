import { L1BlockAPI } from './l1_block/l1_block_api';
import { ValidatorsActiveAPI } from './validators_active/validators_active_api';
import { ValidatorsAllAPI } from './validators_all/validators_all_api';
import { WalletAPI } from './wallet/wallet_api';

/**
 * L1ValidatorService is the main interface for communicating with the
 * Validator Service API.
 *
 * The point of this service is to provide access to the state derived from
 * the L1 blockchain state.
 */
export interface L1ValidatorService {
  /**
   * l1Block provides access to L1 block data and related operations.
   */
  readonly l1Block: L1BlockAPI;

  /**
   * validatorsAll provides access to the complete set of validators.
   */
  readonly validatorsAll: ValidatorsAllAPI;

  /**
   * validatorsActive provides access to the set of active validators.
   */
  readonly validatorsActive: ValidatorsActiveAPI;

  /**
   * wallet provides access to wallet-related information.
   */
  readonly wallet: WalletAPI;

  /**
   * setURL sets the base URL for the API client.
   *
   * NOTE: This is a method specific for WebWorker served APIs.
   */
  setURL(url: string): Promise<boolean>;
}
