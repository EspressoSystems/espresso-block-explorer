import { Codec } from '@/convert/codec/convert';
import { numberCodec } from '@/convert/codec/number';
import { AsyncRequestHelper } from '@/service/espresso_l1_validator_service/web_worker_types';
import { CappuccinoHotShotQueryServiceStatusAPI } from '../status_api';

export class WebWorkerClientBasedCappuccinoHotShotQueryServiceStatusAPI implements CappuccinoHotShotQueryServiceStatusAPI {
  private helper: AsyncRequestHelper;
  constructor(helper: AsyncRequestHelper) {
    this.helper = helper;
  }

  private async sendRequest<
    T,
    Method extends
      keyof WebWorkerClientBasedCappuccinoHotShotQueryServiceStatusAPI =
      keyof WebWorkerClientBasedCappuccinoHotShotQueryServiceStatusAPI,
    Param = unknown,
  >(codec: Codec<T, unknown>, method: Method, ...args: Param[]): Promise<T> {
    return this.helper.submitRequest(codec, 'status', method, args);
  }

  async blockHeight(): Promise<number> {
    return await this.sendRequest(numberCodec, 'blockHeight');
  }
}
