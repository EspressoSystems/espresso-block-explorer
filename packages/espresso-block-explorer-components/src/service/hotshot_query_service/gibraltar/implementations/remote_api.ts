import { GibraltarHotShotQueryServiceAvailabilityAPI } from '../availability/availability_api';
import { FetchBasedGibraltarHotShotQueryServiceAvailabilityAPI } from '../availability/implementations/remote_api';
import { GibraltarHotShotQueryService } from '../hot_shot_query_service_api';
import { FetchBasedGibraltarHotShotQueryServiceStatusAPI } from '../status/implementations/remote_api';
import { GibraltarHotShotQueryServiceStatusAPI } from '../status/status_api';

export class FetchBasedGibraltarHotShotQueryService
  implements GibraltarHotShotQueryService
{
  public readonly availability: GibraltarHotShotQueryServiceAvailabilityAPI;
  public readonly status: GibraltarHotShotQueryServiceStatusAPI;

  constructor(fetcher: typeof fetch, baseURL: URL) {
    this.availability =
      new FetchBasedGibraltarHotShotQueryServiceAvailabilityAPI(
        fetcher,
        new URL('availability/', baseURL),
      );
    this.status = new FetchBasedGibraltarHotShotQueryServiceStatusAPI(
      fetcher,
      new URL('status/', baseURL),
    );
  }
}
