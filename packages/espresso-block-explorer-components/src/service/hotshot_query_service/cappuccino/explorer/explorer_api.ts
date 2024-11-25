import UnimplementedError from '@/errors/UnimplementedError';
import { HotShotQueryServiceExplorerAPI } from '../../types';
import { CappuccinoExplorerGetBlockDetailRequest } from './get_block_detail_request';
import { CappuccinoExplorerGetBlockDetailResponse } from './get_block_detail_response';
import { CappuccinoExplorerGetBlockSummariesRequest } from './get_block_summaries_request';
import { CappuccinoExplorerGetBlockSummariesResponse } from './get_block_summaries_response';
import { CappuccinoExplorerGetExplorerSummaryResponse } from './get_explorer_summary_response';
import { CappuccinoExplorerGetSearchResultRequest } from './get_search_result_request';
import { CappuccinoExplorerGetSearchResultResponse } from './get_search_result_response';
import { CappuccinoExplorerGetTransactionDetailRequest } from './get_transaction_detail_request';
import { CappuccinoExplorerGetTransactionDetailResponse } from './get_transaction_detail_response';
import { CappuccinoExplorerGetTransactionSummariesRequest } from './get_transaction_summaries_request';
import { CappuccinoExplorerGetTransactionSummariesResponse } from './get_transaction_summaries_response';

/**
 * CappuccinoHotShotQueryServiceExplorerAPI is a type that represents the
 * Explorer API for the Cappuccino HotShot Query Service. This interface
 * represents the idealized interactions for the Explorer API.  This should
 * allow for easy interactions with the Explorer API, while also allowing for
 * different implementations for testing purposes.
 */
export type CappuccinoHotShotQueryServiceExplorerAPI =
  HotShotQueryServiceExplorerAPI<
    CappuccinoExplorerGetBlockDetailRequest,
    CappuccinoExplorerGetBlockDetailResponse,
    CappuccinoExplorerGetBlockSummariesRequest,
    CappuccinoExplorerGetBlockSummariesResponse,
    CappuccinoExplorerGetTransactionDetailRequest,
    CappuccinoExplorerGetTransactionDetailResponse,
    CappuccinoExplorerGetTransactionSummariesRequest,
    CappuccinoExplorerGetTransactionSummariesResponse,
    void,
    CappuccinoExplorerGetExplorerSummaryResponse,
    CappuccinoExplorerGetSearchResultRequest,
    CappuccinoExplorerGetSearchResultResponse
  >;

/**
 * UnimplementedCappuccinoHotShotQueryServiceExplorerAPI is a class that
 * implements the CappuccinoHotShotQueryServiceExplorerAPI interface, but
 * throws an UnimplementedError for all methods. This class is meant to be used
 * as a placeholder for the Explorer API, and should be replaced with a real
 * implementation.
 */
export class UnimplementedCappuccinoHotShotQueryServiceExplorerAPI
  implements CappuccinoHotShotQueryServiceExplorerAPI
{
  async getBlockDetail(): Promise<CappuccinoExplorerGetBlockDetailResponse> {
    throw new UnimplementedError();
  }
  async getBlockSummaries(): Promise<CappuccinoExplorerGetBlockSummariesResponse> {
    throw new UnimplementedError();
  }
  async getTransactionDetail(): Promise<CappuccinoExplorerGetTransactionDetailResponse> {
    throw new UnimplementedError();
  }
  async getTransactionSummaries(): Promise<CappuccinoExplorerGetTransactionSummariesResponse> {
    throw new UnimplementedError();
  }
  async getExplorerOverview(): Promise<CappuccinoExplorerGetExplorerSummaryResponse> {
    throw new UnimplementedError();
  }
  async getSearchResult(): Promise<CappuccinoExplorerGetSearchResultResponse> {
    throw new UnimplementedError();
  }
}
