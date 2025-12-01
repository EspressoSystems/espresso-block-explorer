import UnimplementedError from '@/errors/UnimplementedError';
import { RewardClaimInput } from '../reward_claim_input';
import { CappuccinoHotShotQueryServiceRewardStateAPI } from '../reward_start_api';

/**
 * UnimplementedCappuccinoHotShotQueryServiceRewardStateAPI is a class that
 * implements the CappuccinoHotShotQueryServiceRewardStateAPI interface, but
 * throws an UnimplementedError for all methods. This class is meant to be used
 * as a placeholder for the Reward State API, and should be replaced with a real
 * implementation.
 */
export class UnimplementedCappuccinoHotShotQueryServiceRewardStateAPI implements CappuccinoHotShotQueryServiceRewardStateAPI {
  async getLatestRewardBalance(): Promise<bigint> {
    throw new UnimplementedError();
  }
  async getLatestRewardClaimInput(): Promise<RewardClaimInput | null> {
    throw new UnimplementedError();
  }
  async getRewardBalance(): Promise<null | bigint> {
    throw new UnimplementedError();
  }
  async getRewardClaimInput(): Promise<RewardClaimInput | null> {
    throw new UnimplementedError();
  }
}
