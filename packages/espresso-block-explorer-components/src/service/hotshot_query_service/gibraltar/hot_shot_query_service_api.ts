import { GibraltarHotShotQueryServiceAvailabilityAPI } from './availability/availability_api';
import { GibraltarHotShotQueryServiceStatusAPI } from './status/status_api';

export interface GibraltarHotShotQueryService {
  readonly availability: GibraltarHotShotQueryServiceAvailabilityAPI &
    GibraltarHotShotQueryServiceAvailabilityAPI;
  readonly status: GibraltarHotShotQueryServiceStatusAPI;
}
