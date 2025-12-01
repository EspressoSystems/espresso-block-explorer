import { AsyncRequestHelper } from '../../../../../../../../../../../../../src/service/espresso_l1_validator_service/web_worker_types';
import { HeightAndAddress } from '../height_and_address';
import { RewardClaimInput } from '../reward_claim_input';
import { CappuccinoHotShotQueryServiceRewardStateAPI } from '../reward_start_api';
export declare class WebWorkerClientBasedCappuccinoHotShotQueryServiceRewardStateAPI implements CappuccinoHotShotQueryServiceRewardStateAPI {
    private helper;
    constructor(helper: AsyncRequestHelper);
    private sendRequest;
    getLatestRewardBalance(address: string): Promise<null | bigint>;
    getLatestRewardClaimInput(address: string): Promise<RewardClaimInput | null>;
    getRewardBalance(request: HeightAndAddress): Promise<null | bigint>;
    getRewardClaimInput(request: HeightAndAddress): Promise<RewardClaimInput | null>;
}
