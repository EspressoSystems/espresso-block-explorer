import { CappuccinoHotShotQueryServiceAvailabilityAPI } from './availability/availability_api';
import { CappuccinoHotShotQueryServiceExplorerAPI } from './explorer/explorer_api';
import { CappuccinoHotShotQueryServiceStatusAPI } from './status/status_api';

export interface CappuccinoHotShotQueryService {
  readonly availability: CappuccinoHotShotQueryServiceAvailabilityAPI &
    CappuccinoHotShotQueryServiceAvailabilityAPI;
  readonly status: CappuccinoHotShotQueryServiceStatusAPI;
  readonly explorer: CappuccinoHotShotQueryServiceExplorerAPI;
}
