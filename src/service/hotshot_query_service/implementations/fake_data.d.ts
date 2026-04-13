import { HotShotQueryServiceAvailabilityAPI } from '../availability/availability_api';
import { HotShotQueryServiceExplorerAPI } from '../explorer/explorer_api';
import { HotShotQueryService } from '../hot_shot_query_service_api';
import { HotShotQueryServiceNodeAPI } from '../node/node_api';
import { HotShotQueryServiceRewardStateAPI } from '../reward_state/reward_start_api';
import { HotShotQueryServiceStatusAPI } from '../status/status_api';
export declare class FakeDataHotShotQueryService implements HotShotQueryService {
    readonly availability: HotShotQueryServiceAvailabilityAPI & HotShotQueryServiceAvailabilityAPI;
    readonly status: HotShotQueryServiceStatusAPI;
    readonly explorer: HotShotQueryServiceExplorerAPI;
    readonly rewardState: HotShotQueryServiceRewardStateAPI;
    readonly node: HotShotQueryServiceNodeAPI;
    setURL(): Promise<boolean>;
}
