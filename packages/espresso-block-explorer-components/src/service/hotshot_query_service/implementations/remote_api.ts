import UnimplementedError from '@/errors/unimplemented_error';
import { HotShotQueryServiceAvailabilityAPI } from '../availability/availability_api';
import { FetchBasedHotShotQueryServiceAvailabilityAPI } from '../availability/implementations/remote_api';
import { HotShotQueryServiceExplorerAPI } from '../explorer/explorer_api';
import { FetchBasedHotShotQueryServiceExplorerAPI } from '../explorer/implementations/remote_api';
import { HotShotQueryService } from '../hot_shot_query_service_api';
import { FetchBasedHotShotQueryServiceNodeAPI } from '../node/implementations/remote_api';
import { HotShotQueryServiceNodeAPI } from '../node/node_api';
import { FetchBasedHotShotQueryServiceRewardStateAPI } from '../reward_state/implementations/remote_api';
import { HotShotQueryServiceRewardStateAPI } from '../reward_state/reward_start_api';
import { FetchBasedHotShotQueryServiceStatusAPI } from '../status/implementations/remote_api';
import { HotShotQueryServiceStatusAPI } from '../status/status_api';

export class FetchBasedHotShotQueryService implements HotShotQueryService {
  public readonly availability: HotShotQueryServiceAvailabilityAPI;
  public readonly status: HotShotQueryServiceStatusAPI;
  public readonly explorer: HotShotQueryServiceExplorerAPI;
  public readonly rewardState: HotShotQueryServiceRewardStateAPI;
  public readonly node: HotShotQueryServiceNodeAPI;

  constructor(fetcher: typeof fetch, baseURL: URL) {
    this.availability = new FetchBasedHotShotQueryServiceAvailabilityAPI(
      fetcher,
      new URL('availability/', baseURL),
    );
    this.status = new FetchBasedHotShotQueryServiceStatusAPI(
      fetcher,
      new URL('status/', baseURL),
    );
    this.explorer = new FetchBasedHotShotQueryServiceExplorerAPI(
      fetcher,
      new URL('explorer/', baseURL),
    );
    this.rewardState = new FetchBasedHotShotQueryServiceRewardStateAPI(
      fetcher,
      new URL('reward-state-v2/', baseURL),
    );
    this.node = new FetchBasedHotShotQueryServiceNodeAPI(
      fetcher,
      new URL('node/', baseURL),
    );
  }

  public async setURL(): Promise<boolean> {
    throw new UnimplementedError();
  }
}
