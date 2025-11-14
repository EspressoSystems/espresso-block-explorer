import { HeightAndAddress } from '../height_and_address';
import { RewardClaimInput } from '../reward_claim_input';
import { CappuccinoHotShotQueryServiceRewardStateAPI } from '../reward_start_api';
export declare class FetchBasedCappuccinoHotShotQueryServiceRewardStateAPI implements CappuccinoHotShotQueryServiceRewardStateAPI {
    private readonly fetcher;
    private readonly baseURL;
    private readonly rewardBalanceResponseValidator;
    private readonly rewardClaimInputResponseValidator;
    constructor(fetcher: typeof fetch, url: URL);
    getLatestRewardBalance(address: string): Promise<null | bigint>;
    getLatestRewardClaimInput(address: string): Promise<RewardClaimInput | null>;
    getRewardBalance(request: HeightAndAddress): Promise<null | bigint>;
    getRewardClaimInput(request: HeightAndAddress): Promise<RewardClaimInput | null>;
}
