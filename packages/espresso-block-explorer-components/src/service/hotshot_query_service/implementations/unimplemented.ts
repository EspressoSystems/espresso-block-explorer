import UnimplementedError from '@/errors/unimplemented_error';
import { UnimplementedHotShotQueryServiceAvailabilityAPI } from '../availability/implementations/unimplemented';
import { UnimplementedHotShotQueryServiceExplorerAPI } from '../explorer/implementations/unimplemented';
import { HotShotQueryService } from '../hot_shot_query_service_api';
import { UnimplementedHotShotQueryServiceNodeAPI } from '../node/implementations/unimplemented';
import { UnimplementedHotShotQueryServiceRewardStateAPI } from '../reward_state/implementations/unimplemented';
import { UnimplementedHotShotQueryServiceStatusAPI } from '../status/implementations/unimplemented';

/**
 * UnimplementedHotShotQueryService is a class that implements the
 * HotShotQueryService interface, but throws an UnimplementedError for
 * all methods. This class is meant to be used as a placeholder for the
 * HotShot Query Service, and should be replaced with a real
 * implementation.
 */
export class UnimplementedHotShotQueryService implements HotShotQueryService {
  readonly availability = new UnimplementedHotShotQueryServiceAvailabilityAPI();
  readonly status = new UnimplementedHotShotQueryServiceStatusAPI();
  readonly explorer = new UnimplementedHotShotQueryServiceExplorerAPI();
  readonly rewardState = new UnimplementedHotShotQueryServiceRewardStateAPI();
  readonly node = new UnimplementedHotShotQueryServiceNodeAPI();

  setURL(): Promise<boolean> {
    throw new UnimplementedError();
  }
}
