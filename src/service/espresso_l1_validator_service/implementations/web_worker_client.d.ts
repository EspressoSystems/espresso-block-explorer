import { L1BlockAPI } from '../l1_block/l1_block_api';
import { L1ValidatorService } from '../l1_validator_service_api';
import { ValidatorsActiveAPI } from '../validators_active/validators_active_api';
import { ValidatorsAllAPI } from '../validators_all/validators_all_api';
import { WalletAPI } from '../wallet/wallet_api';
/**
 * WebWorkerClientBasedL1ValidatorService is an implementation of
 * L1ValidatorService that uses a Web Worker to communicate with the
 * Validator Service API.
 */
export declare class WebWorkerClientBasedL1ValidatorService implements L1ValidatorService {
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
