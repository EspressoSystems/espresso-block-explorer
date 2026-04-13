import { WebWorkerRequest } from '@/service/espresso_staking_api_service/web_worker_types';
import { HotShotQueryServiceExplorerAPI } from '../explorer_api';
import {
  ExplorerGetBlockDetailRequest,
  explorerGetBlockDetailRequestCodec,
} from '../get_block_detail_request';
import { explorerGetBlockDetailResponseCodec } from '../get_block_detail_response';
import {
  ExplorerGetBlockSummariesRequest,
  explorerGetBlockSummariesRequestCodec,
} from '../get_block_summaries_request';
import { explorerGetBlockSummariesResponseCodec } from '../get_block_summaries_response';
import { explorerGetExplorerSummaryResponseCodec } from '../get_explorer_summary_response';
import {
  ExplorerGetSearchResultRequest,
  explorerGetSearchResultRequestCodec,
} from '../get_search_result_request';
import { explorerGetSearchResultResponseCodec } from '../get_search_result_response';
import {
  ExplorerGetTransactionDetailRequest,
  explorerGetTransactionDetailRequestCodec,
} from '../get_transaction_detail_request';
import { explorerGetTransactionDetailResponseCodec } from '../get_transaction_detail_response';
import {
  ExplorerGetTransactionSummariesRequest,
  explorerGetTransactionSummariesRequestCodec,
} from '../get_transaction_summaries_request';
import { explorerGetTransactionSummariesResponseCodec } from '../get_transaction_summaries_response';

export type ExplorerRequest<
  Method extends keyof HotShotQueryServiceExplorerAPI =
    keyof HotShotQueryServiceExplorerAPI,
> = WebWorkerRequest<
  'explorer',
  Method,
  Parameters<HotShotQueryServiceExplorerAPI[Method]>
>;

export class WebWorkerProxyExplorerAPI {
  private service: HotShotQueryServiceExplorerAPI;
  constructor(service: HotShotQueryServiceExplorerAPI) {
    this.service = service;
  }

  async getBlockDetail(request: ExplorerGetBlockDetailRequest) {
    return explorerGetBlockDetailResponseCodec.encode(
      await this.service.getBlockDetail(request),
    );
  }

  async getBlockSummaries(request: ExplorerGetBlockSummariesRequest) {
    return explorerGetBlockSummariesResponseCodec.encode(
      await this.service.getBlockSummaries(request),
    );
  }

  async getTransactionDetail(request: ExplorerGetTransactionDetailRequest) {
    return explorerGetTransactionDetailResponseCodec.encode(
      await this.service.getTransactionDetail(request),
    );
  }

  async getTransactionSummaries(
    request: ExplorerGetTransactionSummariesRequest,
  ) {
    return explorerGetTransactionSummariesResponseCodec.encode(
      await this.service.getTransactionSummaries(request),
    );
  }

  async getExplorerOverview() {
    return explorerGetExplorerSummaryResponseCodec.encode(
      await this.service.getExplorerOverview(),
    );
  }

  async getSearchResult(request: ExplorerGetSearchResultRequest) {
    return explorerGetSearchResultResponseCodec.encode(
      await this.service.getSearchResult(request),
    );
  }

  async handleRequest(request: ExplorerRequest) {
    switch (request.method) {
      case 'getBlockDetail':
        return await this.getBlockDetail(
          explorerGetBlockDetailRequestCodec.decode(request.param[0]),
        );
      case 'getBlockSummaries':
        return await this.getBlockSummaries(
          explorerGetBlockSummariesRequestCodec.decode(request.param[0]),
        );
      case 'getTransactionDetail':
        return this.getTransactionDetail(
          explorerGetTransactionDetailRequestCodec.decode(request.param[0]),
        );
      case 'getTransactionSummaries':
        return this.getTransactionSummaries(
          explorerGetTransactionSummariesRequestCodec.decode(request.param[0]),
        );
      case 'getExplorerOverview':
        return this.getExplorerOverview();
      case 'getSearchResult':
        return this.getSearchResult(
          explorerGetSearchResultRequestCodec.decode(request.param[0]),
        );
    }
  }
}
