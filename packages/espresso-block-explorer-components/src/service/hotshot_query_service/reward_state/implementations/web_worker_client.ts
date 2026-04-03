import { nullableBigintCodec } from '@/convert/codec/bigint';
import { Codec } from '@/convert/codec/convert';
import { stringCodec } from '@/convert/codec/string';
import { AsyncRequestHelper } from '@/service/espresso_l1_validator_service/web_worker_types';
import { HeightAndAddress, heightAndAddressCodec } from '../height_and_address';
import {
  nullableRewardClaimInputCodec,
  RewardClaimInput,
} from '../reward_claim_input';
import { HotShotQueryServiceRewardStateAPI } from '../reward_start_api';

export class WebWorkerClientBasedHotShotQueryServiceRewardStateAPI implements HotShotQueryServiceRewardStateAPI {
  private helper: AsyncRequestHelper;
  constructor(helper: AsyncRequestHelper) {
    this.helper = helper;
  }

  private async sendRequest<
    T,
    Method extends keyof HotShotQueryServiceRewardStateAPI =
      keyof HotShotQueryServiceRewardStateAPI,
    Param = unknown,
  >(codec: Codec<T, unknown>, method: Method, ...param: Param[]): Promise<T> {
    return this.helper.submitRequest<T>(codec, 'reward-state', method, param);
  }

  async getLatestRewardBalance(address: string): Promise<null | bigint> {
    return await this.sendRequest(
      nullableBigintCodec,
      'getLatestRewardBalance',
      stringCodec.encode(address),
    );
  }

  async getLatestRewardClaimInput(
    address: string,
  ): Promise<RewardClaimInput | null> {
    return await this.sendRequest(
      nullableRewardClaimInputCodec,
      'getLatestRewardClaimInput',
      stringCodec.encode(address),
    );
  }

  async getRewardBalance(request: HeightAndAddress): Promise<null | bigint> {
    return await this.sendRequest(
      nullableBigintCodec,
      'getRewardBalance',
      heightAndAddressCodec.encode(request),
    );
  }

  async getRewardClaimInput(
    request: HeightAndAddress,
  ): Promise<RewardClaimInput | null> {
    return await this.sendRequest(
      nullableRewardClaimInputCodec,
      'getRewardClaimInput',
      heightAndAddressCodec.encode(request),
    );
  }
}
