import { WebWorkerRequest } from '../../../../../../../../../../../../src/service/espresso_staking_api_service/web_worker_types';
import { BlockHeightResponse } from '../../../../../../../../../../../../src/service/hotshot_query_service/types';
import { HotShotQueryServiceStatusAPI } from '../status_api';
export type StatusRequest<Method extends keyof HotShotQueryServiceStatusAPI = keyof HotShotQueryServiceStatusAPI> = WebWorkerRequest<'status', Method, Parameters<HotShotQueryServiceStatusAPI[Method]>>;
export declare class WebWorkerProxyStatusAPI implements HotShotQueryServiceStatusAPI {
    private service;
    constructor(service: HotShotQueryServiceStatusAPI);
    blockHeight(): Promise<BlockHeightResponse>;
    handleRequest(request: StatusRequest): Promise<number>;
}
