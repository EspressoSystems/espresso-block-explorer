import { RewardClaimInput } from '../reward_claim_input';
import { HotShotQueryServiceRewardStateAPI } from '../reward_start_api';
/**
 * UnimplementedHotShotQueryServiceRewardStateAPI is a class that
 * implements the HotShotQueryServiceRewardStateAPI interface, but
 * throws an UnimplementedError for all methods. This class is meant to be used
 * as a placeholder for the Reward State API, and should be replaced with a real
 * implementation.
 */
export declare class UnimplementedHotShotQueryServiceRewardStateAPI implements HotShotQueryServiceRewardStateAPI {
    getLatestRewardBalance(): Promise<bigint>;
    getLatestRewardClaimInput(): Promise<RewardClaimInput | null>;
    getRewardBalance(): Promise<null | bigint>;
    getRewardClaimInput(): Promise<RewardClaimInput | null>;
}
