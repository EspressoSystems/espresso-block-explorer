import { AsyncRequestHelper } from '../../../../../../../../../../../../../src/service/espresso_l1_validator_service/web_worker_types';
import { CappuccinoHotShotQueryServiceStatusAPI } from '../status_api';
export declare class WebWorkerClientBasedCappuccinoHotShotQueryServiceStatusAPI implements CappuccinoHotShotQueryServiceStatusAPI {
    private helper;
    constructor(helper: AsyncRequestHelper);
    private sendRequest;
    blockHeight(): Promise<number>;
}
