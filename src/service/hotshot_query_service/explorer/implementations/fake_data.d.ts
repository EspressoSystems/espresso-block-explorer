import { HotShotQueryServiceExplorerAPI } from '../explorer_api';
import { ExplorerGetBlockDetailRequest } from '../get_block_detail_request';
import { ExplorerGetBlockDetailResponse } from '../get_block_detail_response';
import { ExplorerGetBlockSummariesRequest } from '../get_block_summaries_request';
import { ExplorerGetBlockSummariesResponse } from '../get_block_summaries_response';
import { ExplorerGetExplorerSummaryResponse } from '../get_explorer_summary_response';
import { ExplorerGetSearchResultRequest } from '../get_search_result_request';
import { ExplorerGetSearchResultResponse } from '../get_search_result_response';
import { ExplorerGetTransactionDetailRequest } from '../get_transaction_detail_request';
import { ExplorerGetTransactionDetailResponse } from '../get_transaction_detail_response';
import { ExplorerGetTransactionSummariesRequest } from '../get_transaction_summaries_request';
import { ExplorerGetTransactionSummariesResponse } from '../get_transaction_summaries_response';
export declare class FakeDataHotShotQueryServiceExplorerAPI implements HotShotQueryServiceExplorerAPI {
    getBlockDetail(request: ExplorerGetBlockDetailRequest): Promise<ExplorerGetBlockDetailResponse>;
    getBlockSummaries(request: ExplorerGetBlockSummariesRequest): Promise<ExplorerGetBlockSummariesResponse>;
    getTransactionDetail(request: ExplorerGetTransactionDetailRequest): Promise<ExplorerGetTransactionDetailResponse>;
    private applyFilter;
    getTransactionSummaries(request: ExplorerGetTransactionSummariesRequest): Promise<ExplorerGetTransactionSummariesResponse>;
    getExplorerOverview(): Promise<ExplorerGetExplorerSummaryResponse>;
    getSearchResult(request: ExplorerGetSearchResultRequest): Promise<ExplorerGetSearchResultResponse>;
}
