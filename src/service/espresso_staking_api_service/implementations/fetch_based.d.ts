import { L1BlockAPI } from '../l1_block/l1_block_api';
import { StakingAPIService } from '../staking_api_service';
import { ValidatorsActiveAPI } from '../validators_active/validators_active_api';
import { ValidatorsAllAPI } from '../validators_all/validators_all_api';
import { WalletAPI } from '../wallet/wallet_api';
/**
 * FetchBasedStakingAPIService is an implementation of StakingAPIService
 * that uses the Fetch API to communicate with the Validator Service API as
 * an external service over HTTP REST requests.
 */
export declare class FetchBasedStakingAPIService implements StakingAPIService {
    readonly l1Block: L1BlockAPI;
    readonly validatorsAll: ValidatorsAllAPI;
    readonly validatorsActive: ValidatorsActiveAPI;
    readonly wallet: WalletAPI;
    constructor(fetcher: typeof fetch, baseURL: URL);
    setURL(): Promise<boolean>;
}
