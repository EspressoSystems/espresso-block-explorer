import { validateAndExpandResponse } from '@/async/fetch/response_validators';
import { nullableBigintCodec } from '@/convert/codec';
import { HeightAndAddress } from '../height_and_address';
import { RewardClaimInput, rewardClaimInputCodec } from '../reward_claim_input';
import { CappuccinoHotShotQueryServiceRewardStateAPI } from '../reward_start_api';

export class FetchBasedCappuccinoHotShotQueryServiceRewardStateAPI
  implements CappuccinoHotShotQueryServiceRewardStateAPI
{
  private readonly fetcher: typeof fetch;
  private readonly baseURL: URL;
  private readonly rewardBalanceResponseValidator = validateAndExpandResponse(
    nullableBigintCodec.decoder,
  );
  private readonly rewardClaimInputResponseValidator =
    validateAndExpandResponse(rewardClaimInputCodec.decoder);

  constructor(fetcher: typeof fetch, url: URL) {
    this.fetcher = fetcher;
    this.baseURL = url;
  }

  async getLatestRewardBalance(address: string): Promise<null | bigint> {
    return this.fetcher(
      new URL(`reward-balance/latest/${address}`, this.baseURL),
    ).then(this.rewardBalanceResponseValidator);
  }

  async getLatestRewardClaimInput(
    address: string,
  ): Promise<RewardClaimInput | null> {
    return this.fetcher(
      new URL(`reward-claim-input/latest/${address}`, this.baseURL),
    ).then(this.rewardClaimInputResponseValidator);
  }

  async getRewardBalance(request: HeightAndAddress): Promise<null | bigint> {
    return this.fetcher(
      new URL(
        `reward-balance/${request.height}/${request.address}`,
        this.baseURL,
      ),
    ).then(this.rewardBalanceResponseValidator);
  }

  async getRewardClaimInput(
    request: HeightAndAddress,
  ): Promise<RewardClaimInput | null> {
    return this.fetcher(
      new URL(
        `reward-claim-input/${request.height}/${request.address}`,
        this.baseURL,
      ),
    ).then(this.rewardClaimInputResponseValidator);
  }
}
