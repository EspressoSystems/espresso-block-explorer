import { CappuccinoHotShotQueryServiceStatusAPI } from '../status/status_api';
import { CappuccinoHotShotQueryService } from '../hot_shot_query_service_api';
import { CappuccinoHotShotQueryServiceExplorerAPI } from '../explorer/explorer_api';
import { CappuccinoHotShotQueryServiceAvailabilityAPI } from '../availability/availability_api';

export declare class FetchBasedCappuccinoHotShotQueryService implements CappuccinoHotShotQueryService {
    readonly availability: CappuccinoHotShotQueryServiceAvailabilityAPI;
    readonly status: CappuccinoHotShotQueryServiceStatusAPI;
    readonly explorer: CappuccinoHotShotQueryServiceExplorerAPI;
    constructor(fetcher: typeof fetch, baseURL: URL);
}
