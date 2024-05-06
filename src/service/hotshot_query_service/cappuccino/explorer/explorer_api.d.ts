import { CappuccinoExplorerGetTransactionSummariesResponse } from './get_transaction_summaries_response';
import { CappuccinoExplorerGetTransactionSummariesRequest } from './get_transaction_summaries_request';
import { CappuccinoExplorerGetTransactionDetailResponse } from './get_transaction_detail_response';
import { CappuccinoExplorerGetTransactionDetailRequest } from './get_transaction_detail_request';
import { CappuccinoExplorerGetSearchResultResponse } from './get_search_result_response';
import { CappuccinoExplorerGetSearchResultRequest } from './get_search_result_request';
import { CappuccinoExplorerGetExplorerSummaryResponse } from './get_explorer_summary_response';
import { CappuccinoExplorerGetBlockSummariesResponse } from './get_block_summaries_response';
import { CappuccinoExplorerGetBlockSummariesRequest } from './get_block_summaries_request';
import { CappuccinoExplorerGetBlockDetailResponse } from './get_block_detail_response';
import { CappuccinoExplorerGetBlockDetailRequest } from './get_block_detail_request';
import { HotShotQueryServiceExplorerAPI } from '../../types';

export type CappuccinoHotShotQueryServiceExplorerAPI = HotShotQueryServiceExplorerAPI<CappuccinoExplorerGetBlockDetailRequest, CappuccinoExplorerGetBlockDetailResponse, CappuccinoExplorerGetBlockSummariesRequest, CappuccinoExplorerGetBlockSummariesResponse, CappuccinoExplorerGetTransactionDetailRequest, CappuccinoExplorerGetTransactionDetailResponse, CappuccinoExplorerGetTransactionSummariesRequest, CappuccinoExplorerGetTransactionSummariesResponse, void, CappuccinoExplorerGetExplorerSummaryResponse, CappuccinoExplorerGetSearchResultRequest, CappuccinoExplorerGetSearchResultResponse>;
