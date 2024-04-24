import { numberCodec } from '@/convert/codec/number';
import NoURLProvidedError from '@/errors/NoURLProvidedError';
import UnimplementedError from '@/errors/UnimplementedError';
import { BlockHeightResponse } from '../types';
import {
  WebWorkerRequest,
  WebWorkerResponseError,
  WebWorkerResponseSuccess,
  webWorkerRequestCodec,
  webWorkerResponseErrorCodec,
  webWorkerResponseSuccessCodec,
} from '../web_worker_types';
import { CappuccinoHotShotQueryServiceAvailabilityAPI } from './availability/availability_api';
import { cappuccinoAPIBlockCodec } from './availability/block';
import { listCappuccinoDerivedBlockSummaryCodec } from './availability/derived_block_summary';
import { listCappuccinoDerivedTransactionSummaryCodec } from './availability/derived_transaction_summary';
import { cappuccinoAPILeafResponseCodec } from './availability/leaf_response';
import { cappuccinoAPITransactionResponseCodec } from './availability/transaction_response';
import { CappuccinoHotShotQueryServiceExplorerAPI } from './explorer/explorer_api';
import {
  CappuccinoExplorerGetBlockDetailRequest,
  cappuccinoExplorerGetBlockDetailRequestCodec,
} from './explorer/get_block_detail_request';
import { cappuccinoExplorerGetBlockDetailResponseCodec } from './explorer/get_block_detail_response';
import {
  CappuccinoExplorerGetBlockSummariesRequest,
  cappuccinoExplorerGetBlockSummariesRequestCodec,
} from './explorer/get_block_summaries_request';
import { cappuccinoExplorerGetBlockSummariesResponseCodec } from './explorer/get_block_summaries_response';
import { cappuccinoExplorerGetExplorerSummaryResponseCodec } from './explorer/get_explorer_summary_response';
import {
  CappuccinoExplorerGetSearchResultRequest,
  cappuccinoExplorerGetSearchResultRequestCodec,
} from './explorer/get_search_result_request';
import { cappuccinoExplorerGetSearchResultResponseCodec } from './explorer/get_search_result_response';
import {
  CappuccinoExplorerGetTransactionDetailRequest,
  cappuccinoExplorerGetTransactionDetailRequestCodec,
} from './explorer/get_transaction_detail_request';
import { cappuccinoExplorerGetTransactionDetailResponseCodec } from './explorer/get_transaction_detail_response';
import {
  CappuccinoExplorerGetTransactionSummariesRequest,
  cappuccinoExplorerGetTransactionSummariesRequestCodec,
} from './explorer/get_transaction_summaries_request';
import { cappuccinoExplorerGetTransactionSummariesResponseCodec } from './explorer/get_transaction_summaries_response';
import { CappuccinoHotShotQueryService } from './hot_shot_query_service_api';
import { FakeDataCappuccinoHotShotQueryService } from './implementations/fake_data';
import { FetchBasedCappuccinoHotShotQueryService } from './implementations/remote_api';
import { CappuccinoHotShotQueryServiceStatusAPI } from './status/status_api';

type Config = {
  hotshot_query_service_url: undefined | null | string;
};

type StatusRequest<
  Method extends
    keyof CappuccinoHotShotQueryServiceStatusAPI = keyof CappuccinoHotShotQueryServiceStatusAPI,
> = WebWorkerRequest<
  'status',
  Method,
  Parameters<CappuccinoHotShotQueryServiceStatusAPI[Method]>
>;
type AvailabilityRequest<
  Method extends
    keyof CappuccinoHotShotQueryServiceAvailabilityAPI = keyof CappuccinoHotShotQueryServiceAvailabilityAPI,
> = WebWorkerRequest<
  'availability',
  Method,
  Parameters<CappuccinoHotShotQueryServiceAvailabilityAPI[Method]>
>;
type ExplorerRequest<
  Method extends
    keyof CappuccinoHotShotQueryServiceExplorerAPI = keyof CappuccinoHotShotQueryServiceExplorerAPI,
> = WebWorkerRequest<
  'explorer',
  Method,
  Parameters<CappuccinoHotShotQueryServiceExplorerAPI[Method]>
>;

class WebWorkerProxyStatusAPI
  implements CappuccinoHotShotQueryServiceStatusAPI
{
  private service: CappuccinoHotShotQueryServiceStatusAPI;
  constructor(service: CappuccinoHotShotQueryServiceStatusAPI) {
    this.service = service;
  }

  blockHeight(): Promise<BlockHeightResponse> {
    return this.service.blockHeight();
  }

  async handleRequest(
    request: WebWorkerRequest<
      'status',
      keyof CappuccinoHotShotQueryServiceStatusAPI,
      unknown[]
    >,
  ) {
    switch (request.method) {
      case 'blockHeight':
        return this.blockHeight();
      default:
        throw new UnimplementedError();
    }
  }
}

class WebWorkerProxyAvailabilityAPI {
  private service: CappuccinoHotShotQueryServiceAvailabilityAPI;
  constructor(service: CappuccinoHotShotQueryServiceAvailabilityAPI) {
    this.service = service;
  }

  async getLeafFromHeight(height: number) {
    return cappuccinoAPILeafResponseCodec.encode(
      await this.service.getLeafFromHeight(height),
    );
  }

  async getTransactionFromHeightAndOffset(height: number, index: number) {
    return cappuccinoAPITransactionResponseCodec.encode(
      await this.service.getTransactionFromHeightAndOffset(height, index),
    );
  }

  async getBlockFromHeight(height: number) {
    return cappuccinoAPIBlockCodec.encode(
      await this.service.getBlockFromHeight(height),
    );
  }

  async getBlockSummaries(from: number, until: number) {
    return listCappuccinoDerivedBlockSummaryCodec.encode(
      await this.service.getBlockSummaries(from, until),
    );
  }

  async getTransactionSummaryRange(
    height: number,
    offset: number,
    limit: number,
  ) {
    return listCappuccinoDerivedTransactionSummaryCodec.encode(
      await this.service.getTransactionSummaryRange(height, offset, limit),
    );
  }

  async getTransactionSummaryRangeForRollup(
    namespace: number,
    height: number,
    offset: number,
    limit: number,
  ) {
    return listCappuccinoDerivedTransactionSummaryCodec.encode(
      await this.service.getTransactionSummaryRangeForRollup(
        namespace,
        height,
        offset,
        limit,
      ),
    );
  }

  async handleRequest(request: AvailabilityRequest) {
    switch (request.method) {
      case 'getLeafFromHeight': {
        return await this.getLeafFromHeight(
          numberCodec.decode(request.param[0]),
        );
      }
      case 'getTransactionFromHeightAndOffset': {
        return await this.getTransactionFromHeightAndOffset(
          numberCodec.decode(request.param[0]),
          numberCodec.decode(request.param[1]),
        );
      }
      case 'getBlockFromHeight': {
        return await this.getBlockFromHeight(
          numberCodec.decode(request.param[0]),
        );
      }
      case 'getBlockSummaries': {
        return await this.getBlockSummaries(
          numberCodec.decode(request.param[0]),
          numberCodec.decode(request.param[1]),
        );
      }
      case 'getTransactionSummaryRange': {
        return await this.getTransactionSummaryRange(
          numberCodec.decode(request.param[0]),
          numberCodec.decode(request.param[1]),
          numberCodec.decode(request.param[2]),
        );
      }
      case 'getTransactionSummaryRangeForRollup': {
        return await this.getTransactionSummaryRangeForRollup(
          numberCodec.decode(request.param[0]),
          numberCodec.decode(request.param[1]),
          numberCodec.decode(request.param[2]),
          numberCodec.decode(request.param[3]),
        );
      }
      default:
        throw new UnimplementedError();
    }
  }
}

class WebWorkerProxyExplorerAPI {
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

class WebWorkerProxyHotShotQueryService {
  public readonly availability: WebWorkerProxyAvailabilityAPI;
  public readonly status: WebWorkerProxyStatusAPI;
  public readonly explorer: WebWorkerProxyExplorerAPI;

  constructor(service: CappuccinoHotShotQueryService) {
    this.availability = new WebWorkerProxyAvailabilityAPI(service.availability);
    this.status = new WebWorkerProxyStatusAPI(service.status);
    this.explorer = new WebWorkerProxyExplorerAPI(service.explorer);
  }

  async handleRequest(
    request: AvailabilityRequest | StatusRequest | ExplorerRequest,
  ) {
    // This is our entry point, and where we will receive / process messages
    switch (request.api) {
      case 'availability':
        return this.availability.handleRequest(request);
      case 'status':
        return this.status.handleRequest(request);
      case 'explorer':
        return this.explorer.handleRequest(request);
      default:
        throw new UnimplementedError();
    }
  }
}

type PostMessageFunction = typeof postMessage;

export class WebWorkerProxy {
  // private config: Promise<Config>;
  private service: Promise<WebWorkerProxyHotShotQueryService>;
  private postMessage: PostMessageFunction;

  constructor(postMessage: PostMessageFunction) {
    this.postMessage = postMessage;
    this.service = fetch('/config.json')
      .then((response) => response.json())
      .then((config: Config) => {
        if (config.hotshot_query_service_url) {
          const url = new URL(config.hotshot_query_service_url);
          return new FetchBasedCappuccinoHotShotQueryService(
            fetch.bind(self),
            url,
          );
        }

        throw new NoURLProvidedError();
      })
      .catch(() => new FakeDataCappuccinoHotShotQueryService())
      .then((service) => new WebWorkerProxyHotShotQueryService(service));
  }

  async handleEvent(event: MessageEvent) {
    // This is our entry point, and where we will receive / process messages
    const request = webWorkerRequestCodec.decode(event.data) as
      | AvailabilityRequest
      | StatusRequest
      | ExplorerRequest;

    try {
      const service = await this.service;
      const response = await service.handleRequest(request);

      this.postMessage(
        webWorkerResponseSuccessCodec.encode(
          new WebWorkerResponseSuccess(request.requestID, response),
        ),
      );
    } catch (error) {
      this.postMessage(
        webWorkerResponseErrorCodec.encode(
          new WebWorkerResponseError(
            request.requestID,
            typeof error === 'object' &&
            error !== null &&
            'toJSON' in error &&
            typeof error.toJSON === 'function'
              ? error.toJSON()
              : error,
          ),
        ),
      );
    }
  }
}
