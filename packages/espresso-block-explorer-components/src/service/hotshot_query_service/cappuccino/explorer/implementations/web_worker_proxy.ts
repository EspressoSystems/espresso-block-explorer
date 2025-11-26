import { WebWorkerRequest } from '@/service/espresso_l1_validator_service/web_worker_types';
import { CappuccinoHotShotQueryServiceExplorerAPI } from '../explorer_api';
import {
  CappuccinoExplorerGetBlockDetailRequest,
  cappuccinoExplorerGetBlockDetailRequestCodec,
} from '../get_block_detail_request';
import { cappuccinoExplorerGetBlockDetailResponseCodec } from '../get_block_detail_response';
import {
  CappuccinoExplorerGetBlockSummariesRequest,
  cappuccinoExplorerGetBlockSummariesRequestCodec,
} from '../get_block_summaries_request';
import { cappuccinoExplorerGetBlockSummariesResponseCodec } from '../get_block_summaries_response';
import { cappuccinoExplorerGetExplorerSummaryResponseCodec } from '../get_explorer_summary_response';
import {
  CappuccinoExplorerGetSearchResultRequest,
  cappuccinoExplorerGetSearchResultRequestCodec,
} from '../get_search_result_request';
import { cappuccinoExplorerGetSearchResultResponseCodec } from '../get_search_result_response';
import {
  CappuccinoExplorerGetTransactionDetailRequest,
  cappuccinoExplorerGetTransactionDetailRequestCodec,
} from '../get_transaction_detail_request';
import { cappuccinoExplorerGetTransactionDetailResponseCodec } from '../get_transaction_detail_response';
import {
  CappuccinoExplorerGetTransactionSummariesRequest,
  cappuccinoExplorerGetTransactionSummariesRequestCodec,
} from '../get_transaction_summaries_request';
import { cappuccinoExplorerGetTransactionSummariesResponseCodec } from '../get_transaction_summaries_response';

export type ExplorerRequest<
  Method extends
    keyof CappuccinoHotShotQueryServiceExplorerAPI = keyof CappuccinoHotShotQueryServiceExplorerAPI,
> = WebWorkerRequest<
  'explorer',
  Method,
  Parameters<CappuccinoHotShotQueryServiceExplorerAPI[Method]>
>;

export class WebWorkerProxyExplorerAPI {
  private service: CappuccinoHotShotQueryServiceExplorerAPI;
  constructor(service: CappuccinoHotShotQueryServiceExplorerAPI) {
    this.service = service;
  }

  async getBlockDetail(request: CappuccinoExplorerGetBlockDetailRequest) {
    return cappuccinoExplorerGetBlockDetailResponseCodec.encode(
      await this.service.getBlockDetail(request),
    );
  }

  async getBlockSummaries(request: CappuccinoExplorerGetBlockSummariesRequest) {
    return cappuccinoExplorerGetBlockSummariesResponseCodec.encode(
      await this.service.getBlockSummaries(request),
    );
  }

  async getTransactionDetail(
    request: CappuccinoExplorerGetTransactionDetailRequest,
  ) {
    return cappuccinoExplorerGetTransactionDetailResponseCodec.encode(
      await this.service.getTransactionDetail(request),
    );
  }

  async getTransactionSummaries(
    request: CappuccinoExplorerGetTransactionSummariesRequest,
  ) {
    return cappuccinoExplorerGetTransactionSummariesResponseCodec.encode(
      await this.service.getTransactionSummaries(request),
    );
  }

  async getExplorerOverview() {
    return cappuccinoExplorerGetExplorerSummaryResponseCodec.encode(
      await this.service.getExplorerOverview(),
    );
  }

  async getSearchResult(request: CappuccinoExplorerGetSearchResultRequest) {
    return cappuccinoExplorerGetSearchResultResponseCodec.encode(
      await this.service.getSearchResult(request),
    );
  }

  async handleRequest(request: ExplorerRequest) {
    switch (request.method) {
      case 'getBlockDetail':
        return await this.getBlockDetail(
          cappuccinoExplorerGetBlockDetailRequestCodec.decode(request.param[0]),
        );
      case 'getBlockSummaries':
        return await this.getBlockSummaries(
          cappuccinoExplorerGetBlockSummariesRequestCodec.decode(
            request.param[0],
          ),
        );
      case 'getTransactionDetail':
        return this.getTransactionDetail(
          cappuccinoExplorerGetTransactionDetailRequestCodec.decode(
            request.param[0],
          ),
        );
      case 'getTransactionSummaries':
        return this.getTransactionSummaries(
          cappuccinoExplorerGetTransactionSummariesRequestCodec.decode(
            request.param[0],
          ),
        );
      case 'getExplorerOverview':
        return this.getExplorerOverview();
      case 'getSearchResult':
        return this.getSearchResult(
          cappuccinoExplorerGetSearchResultRequestCodec.decode(
            request.param[0],
          ),
        );
    }
  }
}
