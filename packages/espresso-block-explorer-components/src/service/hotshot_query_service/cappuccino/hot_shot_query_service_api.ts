import { CappuccinoHotShotQueryServiceAvailabilityAPI } from './availability/availability_api';
import { CappuccinoHotShotQueryServiceExplorerAPI } from './explorer/explorer_api';
import { CappuccinoHotShotQueryServiceNodeAPI } from './node/node_api';
import { CappuccinoHotShotQueryServiceRewardStateAPI } from './reward_state/reward_start_api';
import { CappuccinoHotShotQueryServiceStatusAPI } from './status/status_api';

/**
 * CappuccinoHotShotQueryService is a type that represents the Cappuccino
 * HotShot Query Service. This interface represents the idealized interactions
 * for the Cappuccino HotShot Query Service.  This should allow for easy
 * interactions with the Cappuccino HotShot Query Service, while also allowing
 * for different implementations for testing purposes.
 */
export interface CappuccinoHotShotQueryService {
  readonly availability: CappuccinoHotShotQueryServiceAvailabilityAPI;
  readonly status: CappuccinoHotShotQueryServiceStatusAPI;
  readonly explorer: CappuccinoHotShotQueryServiceExplorerAPI;
  readonly rewardState: CappuccinoHotShotQueryServiceRewardStateAPI;
  readonly node: CappuccinoHotShotQueryServiceNodeAPI;

  setURL(url: string): Promise<boolean>;
}
