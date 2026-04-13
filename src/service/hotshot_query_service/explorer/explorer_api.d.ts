import { IHotShotQueryServiceExplorerAPI } from '../types';
import { ExplorerGetBlockDetailRequest } from './get_block_detail_request';
import { ExplorerGetBlockDetailResponse } from './get_block_detail_response';
import { ExplorerGetBlockSummariesRequest } from './get_block_summaries_request';
import { ExplorerGetBlockSummariesResponse } from './get_block_summaries_response';
import { ExplorerGetExplorerSummaryResponse } from './get_explorer_summary_response';
import { ExplorerGetSearchResultRequest } from './get_search_result_request';
import { ExplorerGetSearchResultResponse } from './get_search_result_response';
import { ExplorerGetTransactionDetailRequest } from './get_transaction_detail_request';
import { ExplorerGetTransactionDetailResponse } from './get_transaction_detail_response';
import { ExplorerGetTransactionSummariesRequest } from './get_transaction_summaries_request';
import { ExplorerGetTransactionSummariesResponse } from './get_transaction_summaries_response';
/**
 * HotShotQueryServiceExplorerAPI is a type that represents the
 * Explorer API for the HotShot Query Service. This interface
 * represents the idealized interactions for the Explorer API.  This should
 * allow for easy interactions with the Explorer API, while also allowing for
 * different implementations for testing purposes.
 */
export type HotShotQueryServiceExplorerAPI = IHotShotQueryServiceExplorerAPI<ExplorerGetBlockDetailRequest, ExplorerGetBlockDetailResponse, ExplorerGetBlockSummariesRequest, ExplorerGetBlockSummariesResponse, ExplorerGetTransactionDetailRequest, ExplorerGetTransactionDetailResponse, ExplorerGetTransactionSummariesRequest, ExplorerGetTransactionSummariesResponse, void, ExplorerGetExplorerSummaryResponse, ExplorerGetSearchResultRequest, ExplorerGetSearchResultResponse>;
