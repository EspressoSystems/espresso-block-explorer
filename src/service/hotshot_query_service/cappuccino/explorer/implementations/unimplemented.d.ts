import { CappuccinoHotShotQueryServiceExplorerAPI } from '../explorer_api';
import { CappuccinoExplorerGetBlockDetailResponse } from '../get_block_detail_response';
import { CappuccinoExplorerGetBlockSummariesResponse } from '../get_block_summaries_response';
import { CappuccinoExplorerGetExplorerSummaryResponse } from '../get_explorer_summary_response';
import { CappuccinoExplorerGetSearchResultResponse } from '../get_search_result_response';
import { CappuccinoExplorerGetTransactionDetailResponse } from '../get_transaction_detail_response';
import { CappuccinoExplorerGetTransactionSummariesResponse } from '../get_transaction_summaries_response';
/**
 * UnimplementedCappuccinoHotShotQueryServiceExplorerAPI is a class that
 * implements the CappuccinoHotShotQueryServiceExplorerAPI interface, but
 * throws an UnimplementedError for all methods. This class is meant to be used
 * as a placeholder for the Explorer API, and should be replaced with a real
 * implementation.
 */
export declare class UnimplementedCappuccinoHotShotQueryServiceExplorerAPI implements CappuccinoHotShotQueryServiceExplorerAPI {
    getBlockDetail(): Promise<CappuccinoExplorerGetBlockDetailResponse>;
    getBlockSummaries(): Promise<CappuccinoExplorerGetBlockSummariesResponse>;
    getTransactionDetail(): Promise<CappuccinoExplorerGetTransactionDetailResponse>;
    getTransactionSummaries(): Promise<CappuccinoExplorerGetTransactionSummariesResponse>;
    getExplorerOverview(): Promise<CappuccinoExplorerGetExplorerSummaryResponse>;
    getSearchResult(): Promise<CappuccinoExplorerGetSearchResultResponse>;
}
