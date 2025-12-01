import { UnimplementedCappuccinoHotShotQueryServiceAvailabilityAPI } from '../availability/implementations/unimplemented';
import { UnimplementedCappuccinoHotShotQueryServiceExplorerAPI } from '../explorer/implementations/unimplemented';
import { CappuccinoHotShotQueryService } from '../hot_shot_query_service_api';
import { UnimplementedCappuccinoHotShotQueryServiceNodeAPI } from '../node/implementations/unimplemented';
import { UnimplementedCappuccinoHotShotQueryServiceRewardStateAPI } from '../reward_state/implementations/unimplemented';
import { UnimplementedCappuccinoHotShotQueryServiceStatusAPI } from '../status/implementations/unimplemented';
/**
 * UnimplementedCappuccinoHotShotQueryService is a class that implements the
 * CappuccinoHotShotQueryService interface, but throws an UnimplementedError for
 * all methods. This class is meant to be used as a placeholder for the
 * Cappuccino HotShot Query Service, and should be replaced with a real
 * implementation.
 */
export declare class UnimplementedCappuccinoHotShotQueryService implements CappuccinoHotShotQueryService {
    readonly availability: UnimplementedCappuccinoHotShotQueryServiceAvailabilityAPI;
    readonly status: UnimplementedCappuccinoHotShotQueryServiceStatusAPI;
    readonly explorer: UnimplementedCappuccinoHotShotQueryServiceExplorerAPI;
    readonly rewardState: UnimplementedCappuccinoHotShotQueryServiceRewardStateAPI;
    readonly node: UnimplementedCappuccinoHotShotQueryServiceNodeAPI;
    setURL(): Promise<boolean>;
}
