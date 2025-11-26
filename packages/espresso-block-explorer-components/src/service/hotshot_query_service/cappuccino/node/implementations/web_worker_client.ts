import { Codec } from '@/convert/codec/convert';
import { numberCodec } from '@/convert/codec/number';
import { AsyncRequestHelper } from '@/service/espresso_l1_validator_service/web_worker_types';
import { ActiveValidators, activeValidatorsCodec } from '../active_validators';
import { CappuccinoHotShotQueryServiceNodeAPI } from '../node_api';
import { StakeTable, stakeTableCodec } from '../stake_table';

export class WebWorkerClientBasedCappuccinoHotShotQueryServiceNodeAPI
  implements CappuccinoHotShotQueryServiceNodeAPI
{
  private helper: AsyncRequestHelper;
  constructor(helper: AsyncRequestHelper) {
    this.helper = helper;
  }

  public async getStakeTableForEpoch(epoch: number): Promise<StakeTable> {
    return await this.sendRequest(
      stakeTableCodec,
      'getStakeTableForEpoch',
      numberCodec.encode(epoch),
    );
  }

  public async getValidatorsAtEpoch(epoch: number): Promise<ActiveValidators> {
    return await this.sendRequest(
      activeValidatorsCodec,
      'getValidatorsAtEpoch',
      numberCodec.encode(epoch),
    );
  }

  private async sendRequest<
    T,
    Method extends
      keyof WebWorkerClientBasedCappuccinoHotShotQueryServiceNodeAPI = keyof WebWorkerClientBasedCappuccinoHotShotQueryServiceNodeAPI,
    Param = unknown,
  >(codec: Codec<T, unknown>, method: Method, ...args: Param[]): Promise<T> {
    return this.helper.submitRequest(codec, 'node', method, args);
  }
}
