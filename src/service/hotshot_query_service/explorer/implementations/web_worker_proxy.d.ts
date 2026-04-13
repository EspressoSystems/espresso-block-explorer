import { WebWorkerRequest } from '../../../../../../../../../../../../src/service/espresso_staking_api_service/web_worker_types';
import { HotShotQueryServiceExplorerAPI } from '../explorer_api';
import { ExplorerGetBlockDetailRequest } from '../get_block_detail_request';
import { ExplorerGetBlockSummariesRequest } from '../get_block_summaries_request';
import { ExplorerGetSearchResultRequest } from '../get_search_result_request';
import { ExplorerGetTransactionDetailRequest } from '../get_transaction_detail_request';
import { ExplorerGetTransactionSummariesRequest } from '../get_transaction_summaries_request';
export type ExplorerRequest<Method extends keyof HotShotQueryServiceExplorerAPI = keyof HotShotQueryServiceExplorerAPI> = WebWorkerRequest<'explorer', Method, Parameters<HotShotQueryServiceExplorerAPI[Method]>>;
export declare class WebWorkerProxyExplorerAPI {
    private service;
    constructor(service: HotShotQueryServiceExplorerAPI);
    getBlockDetail(request: ExplorerGetBlockDetailRequest): Promise<unknown>;
    getBlockSummaries(request: ExplorerGetBlockSummariesRequest): Promise<unknown>;
    getTransactionDetail(request: ExplorerGetTransactionDetailRequest): Promise<unknown>;
    getTransactionSummaries(request: ExplorerGetTransactionSummariesRequest): Promise<unknown>;
    getExplorerOverview(): Promise<unknown>;
    getSearchResult(request: ExplorerGetSearchResultRequest): Promise<unknown>;
    handleRequest(request: ExplorerRequest): Promise<unknown>;
}
