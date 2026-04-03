import { booleanCodec } from '@/convert/codec/boolean';
import { Codec } from '@/convert/codec/convert';
import { stringCodec } from '@/convert/codec/string';
import { AsyncRequestHelper } from '@/service/espresso_l1_validator_service/web_worker_types';
import { HotShotQueryServiceAvailabilityAPI } from '../availability/availability_api';
import { WebWorkerClientBasedHotShotQueryServiceAvailabilityAPI } from '../availability/implementations/web_worker_client';
import { HotShotQueryServiceExplorerAPI } from '../explorer/explorer_api';
import { WebWorkerClientBasedHotShotQueryServiceExplorerAPI } from '../explorer/implementations/web_worker_client';
import { HotShotQueryService } from '../hot_shot_query_service_api';
import ProxyWorker from '../hotshot_query_service_web_worker_api.js?worker';
import { WebWorkerClientBasedHotShotQueryServiceNodeAPI } from '../node/implementations/web_worker_client';
import { HotShotQueryServiceNodeAPI } from '../node/node_api';
import { WebWorkerClientBasedHotShotQueryServiceRewardStateAPI } from '../reward_state/implementations/web_worker_client';
import { HotShotQueryServiceRewardStateAPI } from '../reward_state/reward_start_api';
import { WebWorkerClientBasedHotShotQueryServiceStatusAPI } from '../status/implementations/web_worker_client';
import { HotShotQueryServiceStatusAPI } from '../status/status_api';

let singletonWorker: null | Worker = null;
function createWorker(): Worker {
  if (!singletonWorker) {
    singletonWorker = new ProxyWorker();
  }

  return singletonWorker;
}

export class WebWorkerClientBasedHotShotQueryService implements HotShotQueryService {
  public readonly availability: HotShotQueryServiceAvailabilityAPI;
  public readonly status: HotShotQueryServiceStatusAPI;
  public readonly explorer: HotShotQueryServiceExplorerAPI;
  public readonly rewardState: HotShotQueryServiceRewardStateAPI;
  public readonly node: HotShotQueryServiceNodeAPI;
  private helper: AsyncRequestHelper;

  constructor() {
    const worker = createWorker();
    const helper = new AsyncRequestHelper(worker);
    this.helper = helper;
    this.availability =
      new WebWorkerClientBasedHotShotQueryServiceAvailabilityAPI(helper);
    this.status = new WebWorkerClientBasedHotShotQueryServiceStatusAPI(helper);
    this.explorer = new WebWorkerClientBasedHotShotQueryServiceExplorerAPI(
      helper,
    );
    this.rewardState =
      new WebWorkerClientBasedHotShotQueryServiceRewardStateAPI(helper);
    this.node = new WebWorkerClientBasedHotShotQueryServiceNodeAPI(helper);
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
