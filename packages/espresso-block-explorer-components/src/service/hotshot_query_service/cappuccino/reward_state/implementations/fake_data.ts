import { CappuccinoHotShotQueryServiceRewardStateAPI } from '../reward_start_api';

export class FakeDataCappuccinoHotShotQueryServiceRewardStateAPI
  implements CappuccinoHotShotQueryServiceRewardStateAPI
{
  async getLatestRewardBalance(): Promise<null | bigint> {
    return 12345678900000000n;
  }
}
