import { AsyncRequestHelper } from '../../../../../../../../../../../../src/service/espresso_staking_api_service/web_worker_types';
import { HeightAndAddress } from '../height_and_address';
import { RewardClaimInput } from '../reward_claim_input';
import { HotShotQueryServiceRewardStateAPI } from '../reward_start_api';
export declare class WebWorkerClientBasedHotShotQueryServiceRewardStateAPI implements HotShotQueryServiceRewardStateAPI {
    private helper;
    constructor(helper: AsyncRequestHelper);
    private sendRequest;
    getLatestRewardBalance(address: string): Promise<null | bigint>;
    getLatestRewardClaimInput(address: string): Promise<RewardClaimInput | null>;
    getRewardBalance(request: HeightAndAddress): Promise<null | bigint>;
    getRewardClaimInput(request: HeightAndAddress): Promise<RewardClaimInput | null>;
}
