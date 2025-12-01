import { numberCodec } from '@/convert/codec/number';
import UnimplementedError from '@/errors/UnimplementedError';
import { WebWorkerRequest } from '@/service/espresso_l1_validator_service/web_worker_types';
import { activeValidatorsCodec } from '../active_validators';
import { CappuccinoHotShotQueryServiceNodeAPI } from '../node_api';
import { stakeTableCodec } from '../stake_table';

export type NodeRequest<
  Method extends keyof CappuccinoHotShotQueryServiceNodeAPI =
    keyof CappuccinoHotShotQueryServiceNodeAPI,
> = WebWorkerRequest<
  'node',
  Method,
  Parameters<CappuccinoHotShotQueryServiceNodeAPI[Method]>
>;

export class WebWorkerProxyNodeAPI {
  private service: CappuccinoHotShotQueryServiceNodeAPI;
  constructor(service: CappuccinoHotShotQueryServiceNodeAPI) {
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
