import {
  createAutoRetryFetch,
  isARetryableError,
  isNotFoundError,
} from '@/async/fetch/auto_retry_fetch';
import { extendedFetch } from '@/async/fetch/extended_fetch';
import UnimplementedError from '@/errors/unimplemented_error';
import { CappuccinoHotShotQueryServiceAvailabilityAPI } from '../availability/availability_api';
import { FetchBasedCappuccinoHotShotQueryServiceAvailabilityAPI } from '../availability/implementations/remote_api';
import { CappuccinoHotShotQueryServiceExplorerAPI } from '../explorer/explorer_api';
import { FetchBasedCappuccinoHotShotQueryServiceExplorerAPI } from '../explorer/implementations/remote_api';
import { CappuccinoHotShotQueryService } from '../hot_shot_query_service_api';
import { FetchBasedCappuccinoHotShotQueryServiceNodeAPI } from '../node/implementations/remote_api';
import { CappuccinoHotShotQueryServiceNodeAPI } from '../node/node_api';
import { FetchBasedCappuccinoHotShotQueryServiceRewardStateAPI } from '../reward_state/implementations/remote_api';
import { CappuccinoHotShotQueryServiceRewardStateAPI } from '../reward_state/reward_start_api';
import { FetchBasedCappuccinoHotShotQueryServiceStatusAPI } from '../status/implementations/remote_api';
import { CappuccinoHotShotQueryServiceStatusAPI } from '../status/status_api';

export class FetchBasedCappuccinoHotShotQueryService implements CappuccinoHotShotQueryService {
  public readonly availability: CappuccinoHotShotQueryServiceAvailabilityAPI;
  public readonly status: CappuccinoHotShotQueryServiceStatusAPI;
  public readonly explorer: CappuccinoHotShotQueryServiceExplorerAPI;
  public readonly rewardState: CappuccinoHotShotQueryServiceRewardStateAPI;
  public readonly node: CappuccinoHotShotQueryServiceNodeAPI;

  constructor(fetcher: typeof fetch, baseURL: URL) {
    this.availability =
      new FetchBasedCappuccinoHotShotQueryServiceAvailabilityAPI(
        createAutoRetryFetch(
          {
            // We overwrite this fetcher for `availability`, as the
            // `availability` API has specific behavior called "catch up"
            // which will return a `404` for information not currently present,
            // but will also kick-off a process to retrieve the missing
            // information if it seems to be within reason.
            isRetryableFetchErrror: (err) => {
              return isARetryableError(err) || isNotFoundError(err);
            },
          },
          extendedFetch,
        ),
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
    this.node = new FetchBasedCappuccinoHotShotQueryServiceNodeAPI(
      fetcher,
      new URL('node/', baseURL),
    );
  }

  public async setURL(): Promise<boolean> {
    throw new UnimplementedError();
  }
}
