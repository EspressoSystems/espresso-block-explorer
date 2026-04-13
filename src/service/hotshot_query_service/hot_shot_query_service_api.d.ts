import { HotShotQueryServiceAvailabilityAPI } from './availability/availability_api';
import { HotShotQueryServiceExplorerAPI } from './explorer/explorer_api';
import { HotShotQueryServiceNodeAPI } from './node/node_api';
import { HotShotQueryServiceRewardStateAPI } from './reward_state/reward_start_api';
import { HotShotQueryServiceStatusAPI } from './status/status_api';
/**
 * HotShotQueryService is a type that represents the
 * HotShot Query Service. This interface represents the idealized interactions
 * for the HotShot Query Service.  This should allow for easy
 * interactions with the HotShot Query Service, while also allowing
 * for different implementations for testing purposes.
 */
export interface HotShotQueryService {
    readonly availability: HotShotQueryServiceAvailabilityAPI;
    readonly status: HotShotQueryServiceStatusAPI;
    readonly explorer: HotShotQueryServiceExplorerAPI;
    readonly rewardState: HotShotQueryServiceRewardStateAPI;
    readonly node: HotShotQueryServiceNodeAPI;
    setURL(url: string): Promise<boolean>;
}
