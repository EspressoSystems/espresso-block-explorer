import { RewardClaimInput } from '../reward_claim_input';
import { CappuccinoHotShotQueryServiceRewardStateAPI } from '../reward_start_api';
/**
 * UnimplementedCappuccinoHotShotQueryServiceRewardStateAPI is a class that
 * implements the CappuccinoHotShotQueryServiceRewardStateAPI interface, but
 * throws an UnimplementedError for all methods. This class is meant to be used
 * as a placeholder for the Reward State API, and should be replaced with a real
 * implementation.
 */
export declare class UnimplementedCappuccinoHotShotQueryServiceRewardStateAPI implements CappuccinoHotShotQueryServiceRewardStateAPI {
    getLatestRewardBalance(): Promise<bigint>;
    getLatestRewardClaimInput(): Promise<RewardClaimInput | null>;
    getRewardBalance(): Promise<null | bigint>;
    getRewardClaimInput(): Promise<RewardClaimInput | null>;
}
