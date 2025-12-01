import { WebWorkerRequest } from '../../../../../../../../../../../../../src/service/espresso_l1_validator_service/web_worker_types';
import { CappuccinoHotShotQueryServiceExplorerAPI } from '../explorer_api';
import { CappuccinoExplorerGetBlockDetailRequest } from '../get_block_detail_request';
import { CappuccinoExplorerGetBlockSummariesRequest } from '../get_block_summaries_request';
import { CappuccinoExplorerGetSearchResultRequest } from '../get_search_result_request';
import { CappuccinoExplorerGetTransactionDetailRequest } from '../get_transaction_detail_request';
import { CappuccinoExplorerGetTransactionSummariesRequest } from '../get_transaction_summaries_request';
export type ExplorerRequest<Method extends keyof CappuccinoHotShotQueryServiceExplorerAPI = keyof CappuccinoHotShotQueryServiceExplorerAPI> = WebWorkerRequest<'explorer', Method, Parameters<CappuccinoHotShotQueryServiceExplorerAPI[Method]>>;
export declare class WebWorkerProxyExplorerAPI {
    private service;
    constructor(service: CappuccinoHotShotQueryServiceExplorerAPI);
    getBlockDetail(request: CappuccinoExplorerGetBlockDetailRequest): Promise<unknown>;
    getBlockSummaries(request: CappuccinoExplorerGetBlockSummariesRequest): Promise<unknown>;
    getTransactionDetail(request: CappuccinoExplorerGetTransactionDetailRequest): Promise<unknown>;
    getTransactionSummaries(request: CappuccinoExplorerGetTransactionSummariesRequest): Promise<unknown>;
    getExplorerOverview(): Promise<unknown>;
    getSearchResult(request: CappuccinoExplorerGetSearchResultRequest): Promise<unknown>;
    handleRequest(request: ExplorerRequest): Promise<unknown>;
}
