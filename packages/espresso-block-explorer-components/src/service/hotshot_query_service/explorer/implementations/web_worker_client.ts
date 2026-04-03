import { Codec } from '@/convert/codec/convert';
import { AsyncRequestHelper } from '@/service/espresso_l1_validator_service/web_worker_types';
import { HotShotQueryServiceExplorerAPI } from '../explorer_api';
import {
  ExplorerGetBlockDetailRequest,
  explorerGetBlockDetailRequestCodec,
} from '../get_block_detail_request';
import {
  ExplorerGetBlockDetailResponse,
  explorerGetBlockDetailResponseCodec,
} from '../get_block_detail_response';
import {
  ExplorerGetBlockSummariesRequest,
  explorerGetBlockSummariesRequestCodec,
} from '../get_block_summaries_request';
import {
  ExplorerGetBlockSummariesResponse,
  explorerGetBlockSummariesResponseCodec,
} from '../get_block_summaries_response';
import {
  ExplorerGetExplorerSummaryResponse,
  explorerGetExplorerSummaryResponseCodec,
} from '../get_explorer_summary_response';
import {
  ExplorerGetSearchResultRequest,
  explorerGetSearchResultRequestCodec,
} from '../get_search_result_request';
import {
  ExplorerGetSearchResultResponse,
  explorerGetSearchResultResponseCodec,
} from '../get_search_result_response';
import {
  ExplorerGetTransactionDetailRequest,
  explorerGetTransactionDetailRequestCodec,
} from '../get_transaction_detail_request';
import {
  ExplorerGetTransactionDetailResponse,
  explorerGetTransactionDetailResponseCodec,
} from '../get_transaction_detail_response';
import {
  ExplorerGetTransactionSummariesRequest,
  explorerGetTransactionSummariesRequestCodec,
} from '../get_transaction_summaries_request';
import {
  ExplorerGetTransactionSummariesResponse,
  explorerGetTransactionSummariesResponseCodec,
} from '../get_transaction_summaries_response';

export class WebWorkerClientBasedHotShotQueryServiceExplorerAPI implements HotShotQueryServiceExplorerAPI {
  private helper: AsyncRequestHelper;
  constructor(helper: AsyncRequestHelper) {
    this.helper = helper;
  }

  private async sendRequest<
    T,
    Method extends keyof HotShotQueryServiceExplorerAPI =
      keyof HotShotQueryServiceExplorerAPI,
    Param = unknown,
  >(codec: Codec<T, unknown>, method: Method, ...param: Param[]): Promise<T> {
    return this.helper.submitRequest<T>(codec, 'explorer', method, param);
  }

  async getBlockDetail(
    request: ExplorerGetBlockDetailRequest,
  ): Promise<ExplorerGetBlockDetailResponse> {
    return await this.sendRequest(
      explorerGetBlockDetailResponseCodec,
      'getBlockDetail',
      explorerGetBlockDetailRequestCodec.encode(request),
    );
  }
  async getBlockSummaries(
    request: ExplorerGetBlockSummariesRequest,
  ): Promise<ExplorerGetBlockSummariesResponse> {
    return await this.sendRequest(
      explorerGetBlockSummariesResponseCodec,
      'getBlockSummaries',
      explorerGetBlockSummariesRequestCodec.encode(request),
    );
  }
  async getTransactionDetail(
    request: ExplorerGetTransactionDetailRequest,
  ): Promise<ExplorerGetTransactionDetailResponse> {
    return await this.sendRequest(
      explorerGetTransactionDetailResponseCodec,
      'getTransactionDetail',
      explorerGetTransactionDetailRequestCodec.encode(request),
    );
  }
  async getTransactionSummaries(
    request: ExplorerGetTransactionSummariesRequest,
  ): Promise<ExplorerGetTransactionSummariesResponse> {
    return await this.sendRequest(
      explorerGetTransactionSummariesResponseCodec,
      'getTransactionSummaries',
      explorerGetTransactionSummariesRequestCodec.encode(request),
    );
  }
  async getExplorerOverview(): Promise<ExplorerGetExplorerSummaryResponse> {
    return await this.sendRequest(
      explorerGetExplorerSummaryResponseCodec,
      'getExplorerOverview',
      null,
    );
  }
  async getSearchResult(
    request: ExplorerGetSearchResultRequest,
  ): Promise<ExplorerGetSearchResultResponse> {
    return await this.sendRequest(
      explorerGetSearchResultResponseCodec,
      'getSearchResult',
      explorerGetSearchResultRequestCodec.encode(request),
    );
  }
}
