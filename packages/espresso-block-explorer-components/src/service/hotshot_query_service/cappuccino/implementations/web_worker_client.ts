import { booleanCodec } from '@/convert/codec/boolean';
import { Codec } from '@/convert/codec/convert';
import { stringCodec } from '@/convert/codec/string';
import { AsyncRequestHelper } from '@/service/espresso_l1_validator_service/web_worker_types';
import { CappuccinoHotShotQueryServiceAvailabilityAPI } from '../availability/availability_api';
import { WebWorkerClientBasedCappuccinoHotShotQueryServiceAvailabilityAPI } from '../availability/implementations/web_worker_client';
import { CappuccinoHotShotQueryServiceExplorerAPI } from '../explorer/explorer_api';
import { WebWorkerClientBasedCappuccinoHotShotQueryServiceExplorerAPI } from '../explorer/implementations/web_worker_client';
import { CappuccinoHotShotQueryService } from '../hot_shot_query_service_api';
import ProxyWorker from '../hotshot_query_service_web_worker_api.js?worker';
import { WebWorkerClientBasedCappuccinoHotShotQueryServiceNodeAPI } from '../node/implementations/web_worker_client';
import { CappuccinoHotShotQueryServiceNodeAPI } from '../node/node_api';
import { WebWorkerClientBasedCappuccinoHotShotQueryServiceRewardStateAPI } from '../reward_state/implementations/web_worker_client';
import { CappuccinoHotShotQueryServiceRewardStateAPI } from '../reward_state/reward_start_api';
import { WebWorkerClientBasedCappuccinoHotShotQueryServiceStatusAPI } from '../status/implementations/web_worker_client';
import { CappuccinoHotShotQueryServiceStatusAPI } from '../status/status_api';

let singletonWorker: null | Worker = null;
function createWorker(): Worker {
  if (!singletonWorker) {
    singletonWorker = new ProxyWorker();
  }

  return singletonWorker;
}

export class WebWorkerClientBasedCappuccinoHotShotQueryService implements CappuccinoHotShotQueryService {
  public readonly availability: CappuccinoHotShotQueryServiceAvailabilityAPI;
  public readonly status: CappuccinoHotShotQueryServiceStatusAPI;
  public readonly explorer: CappuccinoHotShotQueryServiceExplorerAPI;
  public readonly rewardState: CappuccinoHotShotQueryServiceRewardStateAPI;
  public readonly node: CappuccinoHotShotQueryServiceNodeAPI;
  private helper: AsyncRequestHelper;

  constructor() {
    const worker = createWorker();
    const helper = new AsyncRequestHelper(worker);
    this.helper = helper;
    this.availability =
      new WebWorkerClientBasedCappuccinoHotShotQueryServiceAvailabilityAPI(
        helper,
      );
    this.status =
      new WebWorkerClientBasedCappuccinoHotShotQueryServiceStatusAPI(helper);
    this.explorer =
      new WebWorkerClientBasedCappuccinoHotShotQueryServiceExplorerAPI(helper);
    this.rewardState =
      new WebWorkerClientBasedCappuccinoHotShotQueryServiceRewardStateAPI(
        helper,
      );
    this.node = new WebWorkerClientBasedCappuccinoHotShotQueryServiceNodeAPI(
      helper,
    );
  }

  private async sendRequest<T, Param = unknown>(
    codec: Codec<T, unknown>,
    method: 'set-url',
    ...param: Param[]
  ): Promise<T> {
    return this.helper.submitRequest<T>(codec, 'proxy', method, param);
  }

  async setURL(url: string): Promise<boolean> {
    return await this.sendRequest(
      booleanCodec,
      'set-url',
      stringCodec.encode(url),
    );
  }
}
