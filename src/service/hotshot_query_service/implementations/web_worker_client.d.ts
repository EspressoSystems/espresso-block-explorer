import { HotShotQueryServiceAvailabilityAPI } from '../availability/availability_api';
import { HotShotQueryServiceExplorerAPI } from '../explorer/explorer_api';
import { HotShotQueryService } from '../hot_shot_query_service_api';
import { HotShotQueryServiceNodeAPI } from '../node/node_api';
import { HotShotQueryServiceRewardStateAPI } from '../reward_state/reward_start_api';
import { HotShotQueryServiceStatusAPI } from '../status/status_api';
export declare class WebWorkerClientBasedHotShotQueryService implements HotShotQueryService {
    readonly availability: HotShotQueryServiceAvailabilityAPI;
    readonly status: HotShotQueryServiceStatusAPI;
    readonly explorer: HotShotQueryServiceExplorerAPI;
    readonly rewardState: HotShotQueryServiceRewardStateAPI;
    readonly node: HotShotQueryServiceNodeAPI;
    private helper;
    constructor();
    private sendRequest;
    setURL(url: string): Promise<boolean>;
}
