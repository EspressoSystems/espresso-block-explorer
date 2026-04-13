import { L1BlockAPI } from '../l1_block/l1_block_api';
import { StakingAPIService } from '../staking_api_service';
import { ValidatorsActiveAPI } from '../validators_active/validators_active_api';
import { ValidatorsAllAPI } from '../validators_all/validators_all_api';
import { WalletAPI } from '../wallet/wallet_api';
/**
 * WebWorkerClientBasedStakingAPIService is an implementation of
 * StakingAPIService that uses a Web Worker to communicate with the
 * Validator Service API.
 */
export declare class WebWorkerClientBasedStakingAPIService implements StakingAPIService {
    readonly l1Block: L1BlockAPI;
    readonly validatorsAll: ValidatorsAllAPI;
    readonly validatorsActive: ValidatorsActiveAPI;
    readonly wallet: WalletAPI;
    private helper;
    constructor();
    /**
     * sendRequest sends a request to the Web Worker encoded specifically
     * for the L1ValidatorService, and returns the decoded response.
     */
    private sendRequest;
    setURL(url: string): Promise<boolean>;
}
