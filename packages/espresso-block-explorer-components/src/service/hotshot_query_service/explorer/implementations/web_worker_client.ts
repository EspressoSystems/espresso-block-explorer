import { Codec } from '@/convert/codec/convert';
import { AsyncRequestHelper } from '@/service/espresso_l1_validator_service/web_worker_types';
import { CappuccinoHotShotQueryServiceExplorerAPI } from '../explorer_api';
import {
  CappuccinoExplorerGetBlockDetailRequest,
  cappuccinoExplorerGetBlockDetailRequestCodec,
} from '../get_block_detail_request';
import {
  CappuccinoExplorerGetBlockDetailResponse,
  cappuccinoExplorerGetBlockDetailResponseCodec,
} from '../get_block_detail_response';
import {
  CappuccinoExplorerGetBlockSummariesRequest,
  cappuccinoExplorerGetBlockSummariesRequestCodec,
} from '../get_block_summaries_request';
import {
  CappuccinoExplorerGetBlockSummariesResponse,
  cappuccinoExplorerGetBlockSummariesResponseCodec,
} from '../get_block_summaries_response';
import {
  CappuccinoExplorerGetExplorerSummaryResponse,
  cappuccinoExplorerGetExplorerSummaryResponseCodec,
} from '../get_explorer_summary_response';
import {
  CappuccinoExplorerGetSearchResultRequest,
  cappuccinoExplorerGetSearchResultRequestCodec,
} from '../get_search_result_request';
import {
  CappuccinoExplorerGetSearchResultResponse,
  cappuccinoExplorerGetSearchResultResponseCodec,
} from '../get_search_result_response';
import {
  CappuccinoExplorerGetTransactionDetailRequest,
  cappuccinoExplorerGetTransactionDetailRequestCodec,
} from '../get_transaction_detail_request';
import {
  CappuccinoExplorerGetTransactionDetailResponse,
  cappuccinoExplorerGetTransactionDetailResponseCodec,
} from '../get_transaction_detail_response';
import {
  CappuccinoExplorerGetTransactionSummariesRequest,
  cappuccinoExplorerGetTransactionSummariesRequestCodec,
} from '../get_transaction_summaries_request';
import {
  CappuccinoExplorerGetTransactionSummariesResponse,
  cappuccinoExplorerGetTransactionSummariesResponseCodec,
} from '../get_transaction_summaries_response';

export class WebWorkerClientBasedCappuccinoHotShotQueryServiceExplorerAPI implements CappuccinoHotShotQueryServiceExplorerAPI {
  private helper: AsyncRequestHelper;
  constructor(helper: AsyncRequestHelper) {
    this.helper = helper;
  }

  private async sendRequest<
    T,
    Method extends keyof CappuccinoHotShotQueryServiceExplorerAPI =
      keyof CappuccinoHotShotQueryServiceExplorerAPI,
    Param = unknown,
  >(codec: Codec<T, unknown>, method: Method, ...param: Param[]): Promise<T> {
    return this.helper.submitRequest<T>(codec, 'explorer', method, param);
  }

  async getBlockDetail(
    request: CappuccinoExplorerGetBlockDetailRequest,
  ): Promise<CappuccinoExplorerGetBlockDetailResponse> {
    return await this.sendRequest(
      cappuccinoExplorerGetBlockDetailResponseCodec,
      'getBlockDetail',
      cappuccinoExplorerGetBlockDetailRequestCodec.encode(request),
    );
  }
  async getBlockSummaries(
    request: CappuccinoExplorerGetBlockSummariesRequest,
  ): Promise<CappuccinoExplorerGetBlockSummariesResponse> {
    return await this.sendRequest(
      cappuccinoExplorerGetBlockSummariesResponseCodec,
      'getBlockSummaries',
      cappuccinoExplorerGetBlockSummariesRequestCodec.encode(request),
    );
  }
  async getTransactionDetail(
    request: CappuccinoExplorerGetTransactionDetailRequest,
  ): Promise<CappuccinoExplorerGetTransactionDetailResponse> {
    return await this.sendRequest(
      cappuccinoExplorerGetTransactionDetailResponseCodec,
      'getTransactionDetail',
      cappuccinoExplorerGetTransactionDetailRequestCodec.encode(request),
    );
  }
  async getTransactionSummaries(
    request: CappuccinoExplorerGetTransactionSummariesRequest,
  ): Promise<CappuccinoExplorerGetTransactionSummariesResponse> {
    return await this.sendRequest(
      cappuccinoExplorerGetTransactionSummariesResponseCodec,
      'getTransactionSummaries',
      cappuccinoExplorerGetTransactionSummariesRequestCodec.encode(request),
    );
  }
  async getExplorerOverview(): Promise<CappuccinoExplorerGetExplorerSummaryResponse> {
    return await this.sendRequest(
      cappuccinoExplorerGetExplorerSummaryResponseCodec,
      'getExplorerOverview',
      null,
    );
  }
  async getSearchResult(
    request: CappuccinoExplorerGetSearchResultRequest,
  ): Promise<CappuccinoExplorerGetSearchResultResponse> {
    return await this.sendRequest(
      cappuccinoExplorerGetSearchResultResponseCodec,
      'getSearchResult',
      cappuccinoExplorerGetSearchResultRequestCodec.encode(request),
    );
  }
}
