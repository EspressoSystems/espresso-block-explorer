import UnimplementedError from '@/errors/UnimplementedError';
import { CappuccinoHotShotQueryServiceAvailabilityAPI } from '../availability/availability_api';
import { FetchBasedCappuccinoHotShotQueryServiceAvailabilityAPI } from '../availability/implementations/remote_api';
import { CappuccinoHotShotQueryServiceExplorerAPI } from '../explorer/explorer_api';
import { FetchBasedCappuccinoHotShotQueryServiceExplorerAPI } from '../explorer/implementations/remote_api';
import { CappuccinoHotShotQueryService } from '../hot_shot_query_service_api';
import { FetchBasedCappuccinoHotShotQueryServiceRewardStateAPI } from '../reward_state/implementations/remote_api';
import { CappuccinoHotShotQueryServiceRewardStateAPI } from '../reward_state/reward_start_api';
import { FetchBasedCappuccinoHotShotQueryServiceStatusAPI } from '../status/implementations/remote_api';
import { CappuccinoHotShotQueryServiceStatusAPI } from '../status/status_api';

export class FetchBasedCappuccinoHotShotQueryService
  implements CappuccinoHotShotQueryService
{
  public readonly availability: CappuccinoHotShotQueryServiceAvailabilityAPI;
  public readonly status: CappuccinoHotShotQueryServiceStatusAPI;
  public readonly explorer: CappuccinoHotShotQueryServiceExplorerAPI;
  public readonly rewardState: CappuccinoHotShotQueryServiceRewardStateAPI;

  constructor(fetcher: typeof fetch, baseURL: URL) {
    this.availability =
      new FetchBasedCappuccinoHotShotQueryServiceAvailabilityAPI(
        fetcher,
        new URL('availability/', baseURL),
      );
    this.status = new FetchBasedCappuccinoHotShotQueryServiceStatusAPI(
      fetcher,
      new URL('status/', baseURL),
    );
    this.explorer = new FetchBasedCappuccinoHotShotQueryServiceExplorerAPI(
      fetcher,
      new URL('explorer/', baseURL),
    );
    this.rewardState =
      new FetchBasedCappuccinoHotShotQueryServiceRewardStateAPI(
        fetcher,
        new URL('reward-state-v2/', baseURL),
      );
  }

  public async setURL(): Promise<boolean> {
    throw new UnimplementedError();
  }
}
