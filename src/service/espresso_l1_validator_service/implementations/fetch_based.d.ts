import { L1BlockAPI } from '../l1_block/l1_block_api';
import { L1ValidatorService } from '../l1_validator_service_api';
import { ValidatorsActiveAPI } from '../validators_active/validators_active_api';
import { ValidatorsAllAPI } from '../validators_all/validators_all_api';
import { WalletAPI } from '../wallet/wallet_api';
/**
 * FetchBasedL1ValidatorService is an implementation of L1ValidatorService
 * that uses the Fetch API to communicate with the Validator Service API as
 * an external service over HTTP REST requests.
 */
export declare class FetchBasedL1ValidatorService implements L1ValidatorService {
    readonly l1Block: L1BlockAPI;
    readonly validatorsAll: ValidatorsAllAPI;
    readonly validatorsActive: ValidatorsActiveAPI;
    readonly wallet: WalletAPI;
    constructor(fetcher: typeof fetch, baseURL: URL);
    setURL(): Promise<boolean>;
}
