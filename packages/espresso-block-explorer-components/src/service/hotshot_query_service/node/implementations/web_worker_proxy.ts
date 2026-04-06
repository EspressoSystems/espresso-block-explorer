import { numberCodec } from '@/convert/codec/number';
import UnimplementedError from '@/errors/unimplemented_error';
import { WebWorkerRequest } from '@/service/espresso_staking_api_service/web_worker_types';
import { activeValidatorsCodec } from '../active_validators';
import { HotShotQueryServiceNodeAPI } from '../node_api';
import { stakeTableCodec } from '../stake_table';

export type NodeRequest<
  Method extends keyof HotShotQueryServiceNodeAPI =
    keyof HotShotQueryServiceNodeAPI,
> = WebWorkerRequest<
  'node',
  Method,
  Parameters<HotShotQueryServiceNodeAPI[Method]>
>;

export class WebWorkerProxyNodeAPI {
  private service: HotShotQueryServiceNodeAPI;
  constructor(service: HotShotQueryServiceNodeAPI) {
    this.service = service;
  }

  async getStakeTableForEpoch(epoch: number) {
    return stakeTableCodec.encode(
      await this.service.getStakeTableForEpoch(epoch),
    );
  }

  async getValidatorsAtEpoch(epoch: number) {
    return activeValidatorsCodec.encode(
      await this.service.getValidatorsAtEpoch(epoch),
    );
  }

  async handleRequest(request: NodeRequest) {
    switch (request.method) {
      case 'getStakeTableForEpoch':
        return this.getStakeTableForEpoch(numberCodec.decode(request.param[0]));
      case 'getValidatorsAtEpoch':
        return this.getValidatorsAtEpoch(numberCodec.decode(request.param[0]));

      default:
        throw new UnimplementedError();
    }
  }
}
