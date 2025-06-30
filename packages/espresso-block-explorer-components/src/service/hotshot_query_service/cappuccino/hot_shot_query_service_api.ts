import UnimplementedError from '@/errors/UnimplementedError';
import {
  CappuccinoHotShotQueryServiceAvailabilityAPI,
  UnimplementedCappuccinoHotShotQueryServiceAvailabilityAPI,
} from './availability/availability_api';
import {
  CappuccinoHotShotQueryServiceExplorerAPI,
  UnimplementedCappuccinoHotShotQueryServiceExplorerAPI,
} from './explorer/explorer_api';
import {
  CappuccinoHotShotQueryServiceRewardStateAPI,
  UnimplementedCappuccinoHotShotQueryServiceRewardStateAPI,
} from './reward_state/reward_start_api';
import {
  CappuccinoHotShotQueryServiceStatusAPI,
  UnimplementedCappuccinoHotShotQueryServiceStatusAPI,
} from './status/status_api';

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

  setURL(url: string): Promise<boolean>;
}

/**
 * UnimplementedCappuccinoHotShotQueryService is a class that implements the
 * CappuccinoHotShotQueryService interface, but throws an UnimplementedError for
 * all methods. This class is meant to be used as a placeholder for the
 * Cappuccino HotShot Query Service, and should be replaced with a real
 * implementation.
 */
export class UnimplementedCappuccinoHotShotQueryService
  implements CappuccinoHotShotQueryService
{
  readonly availability =
    new UnimplementedCappuccinoHotShotQueryServiceAvailabilityAPI();
  readonly status = new UnimplementedCappuccinoHotShotQueryServiceStatusAPI();
  readonly explorer =
    new UnimplementedCappuccinoHotShotQueryServiceExplorerAPI();
  readonly rewardState =
    new UnimplementedCappuccinoHotShotQueryServiceRewardStateAPI();

  setURL(): Promise<boolean> {
    throw new UnimplementedError();
  }
}
