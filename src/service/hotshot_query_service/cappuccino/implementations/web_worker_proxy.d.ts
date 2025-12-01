import { AvailabilityRequest, WebWorkerProxyAvailabilityAPI } from '../availability/implementations/web_worker_proxy';
import { ExplorerRequest, WebWorkerProxyExplorerAPI } from '../explorer/implementations/web_worker_proxy';
import { CappuccinoHotShotQueryService } from '../hot_shot_query_service_api';
import { NodeRequest, WebWorkerProxyNodeAPI } from '../node/implementations/web_worker_proxy';
import { RewardStateRequest, WebWorkerProxyRewardStateAPI } from '../reward_state/implementations/web_worker_proxy';
import { StatusRequest, WebWorkerProxyStatusAPI } from '../status/implementations/web_worker_proxy';
export declare class WebWorkerProxyHotShotQueryService {
    readonly availability: WebWorkerProxyAvailabilityAPI;
    readonly status: WebWorkerProxyStatusAPI;
    readonly explorer: WebWorkerProxyExplorerAPI;
    readonly rewardState: WebWorkerProxyRewardStateAPI;
    readonly node: WebWorkerProxyNodeAPI;
    constructor(service: CappuccinoHotShotQueryService);
    handleRequest(request: AvailabilityRequest | StatusRequest | ExplorerRequest | NodeRequest | RewardStateRequest): Promise<unknown>;
}
