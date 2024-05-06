import { CappuccinoHotShotQueryServiceStatusAPI } from './status/status_api';
import { CappuccinoHotShotQueryServiceExplorerAPI } from './explorer/explorer_api';
import { CappuccinoHotShotQueryServiceAvailabilityAPI } from './availability/availability_api';

export interface CappuccinoHotShotQueryService {
    readonly availability: CappuccinoHotShotQueryServiceAvailabilityAPI & CappuccinoHotShotQueryServiceAvailabilityAPI;
    readonly status: CappuccinoHotShotQueryServiceStatusAPI;
    readonly explorer: CappuccinoHotShotQueryServiceExplorerAPI;
}
