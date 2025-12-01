import {
  getStartingSeed,
  PseudoRandomNumberGenerator,
} from '@/data_source/fake_data_source';
import { HeightAndAddress } from '../height_and_address';
import { RewardClaimInput } from '../reward_claim_input';
import { CappuccinoHotShotQueryServiceRewardStateAPI } from '../reward_start_api';

const prng = new PseudoRandomNumberGenerator(getStartingSeed());
export class FakeDataCappuccinoHotShotQueryServiceRewardStateAPI implements CappuccinoHotShotQueryServiceRewardStateAPI {
  async getLatestRewardBalance(): Promise<null | bigint> {
    return 123000000000000000000n;
  }

  async getLatestRewardClaimInput(): Promise<null | RewardClaimInput> {
    return new RewardClaimInput(123000000000000000000n, prng.fillBytes(5344));
  }

  async getRewardBalance(): Promise<null | bigint> {
    return 123000000000000000000n;
  }

  async getRewardClaimInput(
    request: HeightAndAddress,
  ): Promise<null | RewardClaimInput> {
    const prng = new PseudoRandomNumberGenerator(request.height);
    return new RewardClaimInput(123000000000000000000n, prng.fillBytes(5344));
  }
}
