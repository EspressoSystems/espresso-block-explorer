import { Codec } from '@/convert/codec/convert';
import { numberCodec } from '@/convert/codec/number';
import { AsyncRequestHelper } from '@/service/espresso_l1_validator_service/web_worker_types';
import { HotShotQueryServiceStatusAPI } from '../status_api';

export class WebWorkerClientBasedHotShotQueryServiceStatusAPI implements HotShotQueryServiceStatusAPI {
  private helper: AsyncRequestHelper;
  constructor(helper: AsyncRequestHelper) {
    this.helper = helper;
  }

  private async sendRequest<
    T,
    Method extends keyof WebWorkerClientBasedHotShotQueryServiceStatusAPI =
      keyof WebWorkerClientBasedHotShotQueryServiceStatusAPI,
    Param = unknown,
  >(codec: Codec<T, unknown>, method: Method, ...args: Param[]): Promise<T> {
    return this.helper.submitRequest(codec, 'status', method, args);
  }

  async blockHeight(): Promise<number> {
    return await this.sendRequest(numberCodec, 'blockHeight');
  }
}
