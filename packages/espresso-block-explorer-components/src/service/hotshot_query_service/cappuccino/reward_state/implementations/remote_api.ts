import { validateAndExpandResponse } from '@/async/fetch/response_validators';
import { nullableBigintCodec } from '@/convert/codec';
import { CappuccinoHotShotQueryServiceRewardStateAPI } from '../reward_start_api';

export class FetchBasedCappuccinoHotShotQueryServiceRewardStateAPI
  implements CappuccinoHotShotQueryServiceRewardStateAPI
{
  private readonly fetcher: typeof fetch;
  private readonly baseURL: URL;
  private readonly rewardBalanceResponseValidator = validateAndExpandResponse(
    nullableBigintCodec.decoder,
  );

  constructor(fetcher: typeof fetch, url: URL) {
    this.fetcher = fetcher;
    this.baseURL = url;
  }

  getLatestRewardBalance(address: string): Promise<null | bigint> {
    // This is a placeholder implementation. The actual implementation should
    // fetch the latest reward balance from the API.
    return this.fetcher(
      new URL(`reward-balance/latest/${address}`, this.baseURL),
    ).then(this.rewardBalanceResponseValidator);
  }
}
