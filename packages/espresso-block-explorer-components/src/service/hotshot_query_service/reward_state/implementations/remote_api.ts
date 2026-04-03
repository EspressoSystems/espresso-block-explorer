import { validateAndExpandResponse } from '@/async/fetch/response_validators';
import { nullableBigintCodec } from '@/convert/codec/bigint';
import { HeightAndAddress } from '../height_and_address';
import { RewardClaimInput, rewardClaimInputCodec } from '../reward_claim_input';
import { HotShotQueryServiceRewardStateAPI } from '../reward_start_api';

export class FetchBasedHotShotQueryServiceRewardStateAPI implements HotShotQueryServiceRewardStateAPI {
  private readonly rewardBalanceResponseValidator = validateAndExpandResponse(
    nullableBigintCodec.decoder,
  );
  private readonly rewardClaimInputResponseValidator =
    validateAndExpandResponse(rewardClaimInputCodec.decoder);

  constructor(
    private readonly fetcher: typeof fetch,
    private readonly baseURL: URL,
  ) {}

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
