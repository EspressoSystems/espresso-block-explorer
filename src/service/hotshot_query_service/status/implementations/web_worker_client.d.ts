import { AsyncRequestHelper } from '../../../../../../../../../../../../src/service/espresso_staking_api_service/web_worker_types';
import { HotShotQueryServiceStatusAPI } from '../status_api';
export declare class WebWorkerClientBasedHotShotQueryServiceStatusAPI implements HotShotQueryServiceStatusAPI {
    private helper;
    constructor(helper: AsyncRequestHelper);
    private sendRequest;
    blockHeight(): Promise<number>;
}
