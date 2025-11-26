import UnimplementedError from '@/errors/UnimplementedError';
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
