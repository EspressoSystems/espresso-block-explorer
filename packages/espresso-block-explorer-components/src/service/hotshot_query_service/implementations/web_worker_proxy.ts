import UnimplementedError from '@/errors/unimplemented_error';
import {
  AvailabilityRequest,
  WebWorkerProxyAvailabilityAPI,
} from '../availability/implementations/web_worker_proxy';
import {
  ExplorerRequest,
  WebWorkerProxyExplorerAPI,
} from '../explorer/implementations/web_worker_proxy';
import { CappuccinoHotShotQueryService } from '../hot_shot_query_service_api';
import {
  NodeRequest,
  WebWorkerProxyNodeAPI,
} from '../node/implementations/web_worker_proxy';
import {
  RewardStateRequest,
  WebWorkerProxyRewardStateAPI,
} from '../reward_state/implementations/web_worker_proxy';
import {
  StatusRequest,
  WebWorkerProxyStatusAPI,
} from '../status/implementations/web_worker_proxy';

export class WebWorkerProxyHotShotQueryService {
  public readonly availability: WebWorkerProxyAvailabilityAPI;
  public readonly status: WebWorkerProxyStatusAPI;
  public readonly explorer: WebWorkerProxyExplorerAPI;
  public readonly rewardState: WebWorkerProxyRewardStateAPI;
  public readonly node: WebWorkerProxyNodeAPI;

  constructor(service: CappuccinoHotShotQueryService) {
    this.availability = new WebWorkerProxyAvailabilityAPI(service.availability);
    this.status = new WebWorkerProxyStatusAPI(service.status);
    this.explorer = new WebWorkerProxyExplorerAPI(service.explorer);
    this.rewardState = new WebWorkerProxyRewardStateAPI(service.rewardState);
    this.node = new WebWorkerProxyNodeAPI(service.node);
  }

  async handleRequest(
    request:
      | AvailabilityRequest
      | StatusRequest
      | ExplorerRequest
      | NodeRequest
      | RewardStateRequest,
  ) {
    // This is our entry point, and where we will receive / process messages
    switch (request.api) {
      case 'availability':
        return this.availability.handleRequest(request);
      case 'status':
        return this.status.handleRequest(request);
      case 'explorer':
        return this.explorer.handleRequest(request);
      case 'reward-state':
        return this.rewardState.handleRequest(request);
      case 'node':
        return this.node.handleRequest(request);

      default:
        throw new UnimplementedError();
    }
  }
}
