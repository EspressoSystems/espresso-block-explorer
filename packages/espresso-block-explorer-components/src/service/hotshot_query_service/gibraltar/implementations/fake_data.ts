import { GibraltarHotShotQueryServiceAvailabilityAPI } from '../availability/availability_api';
import { FakeDataGibraltarHotShotQueryServiceAvailabilityAPI } from '../availability/implementations/fake_data';
import { GibraltarHotShotQueryService } from '../hot_shot_query_service_api';
import { FakeDataGibraltarHotShotQueryServiceStatusAPI } from '../status/implementations/fake_api';
import { GibraltarHotShotQueryServiceStatusAPI } from '../status/status_api';

export class FakeDataGibraltarHotShotQueryService
  implements GibraltarHotShotQueryService
{
  public readonly availability: GibraltarHotShotQueryServiceAvailabilityAPI &
    GibraltarHotShotQueryServiceAvailabilityAPI =
    new FakeDataGibraltarHotShotQueryServiceAvailabilityAPI();
  public readonly status: GibraltarHotShotQueryServiceStatusAPI =
    new FakeDataGibraltarHotShotQueryServiceStatusAPI();
}
