import { CappuccinoHotShotQueryServiceAvailabilityAPI } from '../availability/availability_api';
import { CappuccinoHotShotQueryServiceExplorerAPI } from '../explorer/explorer_api';
import { CappuccinoHotShotQueryService } from '../hot_shot_query_service_api';
import { CappuccinoHotShotQueryServiceNodeAPI } from '../node/node_api';
import { CappuccinoHotShotQueryServiceRewardStateAPI } from '../reward_state/reward_start_api';
import { CappuccinoHotShotQueryServiceStatusAPI } from '../status/status_api';
export declare class WebWorkerClientBasedCappuccinoHotShotQueryService implements CappuccinoHotShotQueryService {
    readonly availability: CappuccinoHotShotQueryServiceAvailabilityAPI;
    readonly status: CappuccinoHotShotQueryServiceStatusAPI;
    readonly explorer: CappuccinoHotShotQueryServiceExplorerAPI;
    readonly rewardState: CappuccinoHotShotQueryServiceRewardStateAPI;
    readonly node: CappuccinoHotShotQueryServiceNodeAPI;
    private helper;
    constructor();
    private sendRequest;
    setURL(url: string): Promise<boolean>;
}
