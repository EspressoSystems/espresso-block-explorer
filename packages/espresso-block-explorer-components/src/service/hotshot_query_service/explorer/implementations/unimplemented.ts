import UnimplementedError from '@/errors/unimplemented_error';
import { HotShotQueryServiceExplorerAPI } from '../explorer_api';
import { ExplorerGetBlockDetailResponse } from '../get_block_detail_response';
import { ExplorerGetBlockSummariesResponse } from '../get_block_summaries_response';
import { ExplorerGetExplorerSummaryResponse } from '../get_explorer_summary_response';
import { ExplorerGetSearchResultResponse } from '../get_search_result_response';
import { ExplorerGetTransactionDetailResponse } from '../get_transaction_detail_response';
import { ExplorerGetTransactionSummariesResponse } from '../get_transaction_summaries_response';

/**
 * UnimplementedHotShotQueryServiceExplorerAPI is a class that
 * implements the HotShotQueryServiceExplorerAPI interface, but
 * throws an UnimplementedError for all methods. This class is meant to be used
 * as a placeholder for the Explorer API, and should be replaced with a real
 * implementation.
 */
export class UnimplementedHotShotQueryServiceExplorerAPI implements HotShotQueryServiceExplorerAPI {
  async getBlockDetail(): Promise<ExplorerGetBlockDetailResponse> {
    throw new UnimplementedError();
  }
  async getBlockSummaries(): Promise<ExplorerGetBlockSummariesResponse> {
    throw new UnimplementedError();
  }
  async getTransactionDetail(): Promise<ExplorerGetTransactionDetailResponse> {
    throw new UnimplementedError();
  }
  async getTransactionSummaries(): Promise<ExplorerGetTransactionSummariesResponse> {
    throw new UnimplementedError();
  }
  async getExplorerOverview(): Promise<ExplorerGetExplorerSummaryResponse> {
    throw new UnimplementedError();
  }
  async getSearchResult(): Promise<ExplorerGetSearchResultResponse> {
    throw new UnimplementedError();
  }
}
