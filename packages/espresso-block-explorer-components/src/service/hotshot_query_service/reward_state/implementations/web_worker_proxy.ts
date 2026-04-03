import { nullableBigintCodec } from '@/convert/codec/bigint';
import { stringCodec } from '@/convert/codec/string';
import UnimplementedError from '@/errors/unimplemented_error';
import { WebWorkerRequest } from '@/service/espresso_l1_validator_service/web_worker_types';
import { HeightAndAddress, heightAndAddressCodec } from '../height_and_address';
import { nullableRewardClaimInputCodec } from '../reward_claim_input';
import { HotShotQueryServiceRewardStateAPI } from '../reward_start_api';

export type RewardStateRequest<
  Method extends keyof HotShotQueryServiceRewardStateAPI =
    keyof HotShotQueryServiceRewardStateAPI,
> = WebWorkerRequest<
  'reward-state',
  Method,
  Parameters<HotShotQueryServiceRewardStateAPI[Method]>
>;

export class WebWorkerProxyRewardStateAPI {
  private service: HotShotQueryServiceRewardStateAPI;
  constructor(service: HotShotQueryServiceRewardStateAPI) {
    this.service = service;
  }

  async getLatestRewardBalance(address: string) {
    return nullableBigintCodec.encode(
      await this.service.getLatestRewardBalance(address),
    );
  }

  async getLatestRewardClaimInput(address: string) {
    return nullableRewardClaimInputCodec.encode(
      await this.service.getLatestRewardClaimInput(address),
    );
  }

  async getRewardBalance(request: HeightAndAddress) {
    return nullableBigintCodec.encode(
      await this.service.getRewardBalance(request),
    );
  }

  async getRewardClaimInput(request: HeightAndAddress) {
    return nullableRewardClaimInputCodec.encode(
      await this.service.getRewardClaimInput(request),
    );
  }

  async handleRequest(request: RewardStateRequest): Promise<unknown> {
    switch (request.method) {
      case 'getLatestRewardBalance':
        return await this.getLatestRewardBalance(
          stringCodec.decode(request.param[0]),
        );

      case 'getLatestRewardClaimInput':
        return await this.getLatestRewardClaimInput(
          stringCodec.decode(request.param[0]),
        );

      case 'getRewardBalance':
        return await this.getRewardBalance(
          heightAndAddressCodec.decode(request.param[0]),
        );

      case 'getRewardClaimInput':
        return await this.getRewardClaimInput(
          heightAndAddressCodec.decode(request.param[0]),
        );

      default:
        throw new UnimplementedError();
    }
  }
}
