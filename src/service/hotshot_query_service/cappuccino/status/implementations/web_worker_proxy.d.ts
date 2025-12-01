import { WebWorkerRequest } from '../../../../../../../../../../../../../src/service/espresso_l1_validator_service/web_worker_types';
import { BlockHeightResponse } from '../../../../../../../../../../../../../src/service/hotshot_query_service/types';
import { CappuccinoHotShotQueryServiceStatusAPI } from '../status_api';
export type StatusRequest<Method extends keyof CappuccinoHotShotQueryServiceStatusAPI = keyof CappuccinoHotShotQueryServiceStatusAPI> = WebWorkerRequest<'status', Method, Parameters<CappuccinoHotShotQueryServiceStatusAPI[Method]>>;
export declare class WebWorkerProxyStatusAPI implements CappuccinoHotShotQueryServiceStatusAPI {
    private service;
    constructor(service: CappuccinoHotShotQueryServiceStatusAPI);
    blockHeight(): Promise<BlockHeightResponse>;
    handleRequest(request: StatusRequest): Promise<number>;
}
