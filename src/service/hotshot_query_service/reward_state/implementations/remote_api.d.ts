import { HeightAndAddress } from '../height_and_address';
import { RewardClaimInput } from '../reward_claim_input';
import { HotShotQueryServiceRewardStateAPI } from '../reward_start_api';
export declare class FetchBasedHotShotQueryServiceRewardStateAPI implements HotShotQueryServiceRewardStateAPI {
    private readonly fetcher;
    private readonly baseURL;
    private readonly rewardBalanceResponseValidator;
    private readonly rewardClaimInputResponseValidator;
    constructor(fetcher: typeof fetch, baseURL: URL);
    getLatestRewardBalance(address: string): Promise<null | bigint>;
    getLatestRewardClaimInput(address: string): Promise<RewardClaimInput | null>;
    getRewardBalance(request: HeightAndAddress): Promise<null | bigint>;
    getRewardClaimInput(request: HeightAndAddress): Promise<RewardClaimInput | null>;
}
