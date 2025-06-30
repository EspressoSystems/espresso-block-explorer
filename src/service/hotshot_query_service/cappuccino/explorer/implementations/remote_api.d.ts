import { CappuccinoHotShotQueryServiceExplorerAPI } from '../explorer_api';
import { CappuccinoExplorerGetBlockDetailRequest } from '../get_block_detail_request';
import { CappuccinoExplorerGetBlockDetailResponse } from '../get_block_detail_response';
import { CappuccinoExplorerGetBlockSummariesRequest } from '../get_block_summaries_request';
import { CappuccinoExplorerGetBlockSummariesResponse } from '../get_block_summaries_response';
import { CappuccinoExplorerGetExplorerSummaryResponse } from '../get_explorer_summary_response';
import { CappuccinoExplorerGetSearchResultRequest } from '../get_search_result_request';
import { CappuccinoExplorerGetSearchResultResponse } from '../get_search_result_response';
import { CappuccinoExplorerGetTransactionDetailRequest } from '../get_transaction_detail_request';
import { CappuccinoExplorerGetTransactionDetailResponse } from '../get_transaction_detail_response';
import { CappuccinoExplorerGetTransactionSummariesRequest } from '../get_transaction_summaries_request';
import { CappuccinoExplorerGetTransactionSummariesResponse } from '../get_transaction_summaries_response';
export declare class FetchBasedCappuccinoHotShotQueryServiceExplorerAPI implements CappuccinoHotShotQueryServiceExplorerAPI {
    private readonly fetcher;
    private readonly baseURL;
    constructor(fetcher: typeof fetch, url: URL);
    getBlockDetail(request: CappuccinoExplorerGetBlockDetailRequest): Promise<CappuccinoExplorerGetBlockDetailResponse>;
    getBlockSummaries(request: CappuccinoExplorerGetBlockSummariesRequest): Promise<CappuccinoExplorerGetBlockSummariesResponse>;
    getTransactionDetail(request: CappuccinoExplorerGetTransactionDetailRequest): Promise<CappuccinoExplorerGetTransactionDetailResponse>;
    getTransactionSummaries(request: CappuccinoExplorerGetTransactionSummariesRequest): Promise<CappuccinoExplorerGetTransactionSummariesResponse>;
    getExplorerOverview(): Promise<CappuccinoExplorerGetExplorerSummaryResponse>;
    getSearchResult(request: CappuccinoExplorerGetSearchResultRequest): Promise<CappuccinoExplorerGetSearchResultResponse>;
}
