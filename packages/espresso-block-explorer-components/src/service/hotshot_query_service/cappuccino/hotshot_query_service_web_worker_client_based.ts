import { Codec } from '@/convert/codec/convert';
import { numberCodec } from '@/convert/codec/number';
import {
  Completer,
  createCompleter,
} from '@/data_structures/async/completer/Completer';
import InvalidTypeError from '@/errors/InvalidTypeError';
import NoCompleterFoundForRequestID from '@/errors/NoCompleterFoundForRequestID';
import WebWorkerErrorResponse from '@/errors/WebWorkerErrorResponse';
import {
  RequestID,
  WebWorkerRequest,
  WebWorkerResponse,
  WebWorkerResponseError,
  WebWorkerResponseSuccess,
  webWorkerRequestCodec,
  webWorkerResponseCodec,
} from '../web_worker_types';
import { CappuccinoHotShotQueryServiceAvailabilityAPI } from './availability/availability_api';
import {
  CappuccinoAPIBlock,
  cappuccinoAPIBlockCodec,
} from './availability/block';
import {
  CappuccinoDerivedBlockSummary,
  listCappuccinoDerivedBlockSummaryCodec,
} from './availability/derived_block_summary';
import {
  CappuccinoDerivedTransactionSummary,
  listCappuccinoDerivedTransactionSummaryCodec,
} from './availability/derived_transaction_summary';
import {
  CappuccinoAPILeafResponse,
  cappuccinoAPILeafResponseCodec,
} from './availability/leaf_response';
import {
  CappuccinoAPITransactionResponse,
  cappuccinoAPITransactionResponseCodec,
} from './availability/transaction_response';
import { CappuccinoHotShotQueryServiceExplorerAPI } from './explorer/explorer_api';
import {
  CappuccinoExplorerGetBlockDetailRequest,
  cappuccinoExplorerGetBlockDetailRequestCodec,
} from './explorer/get_block_detail_request';
import {
  CappuccinoExplorerGetBlockDetailResponse,
  cappuccinoExplorerGetBlockDetailResponseCodec,
} from './explorer/get_block_detail_response';
import {
  CappuccinoExplorerGetBlockSummariesRequest,
  cappuccinoExplorerGetBlockSummariesRequestCodec,
} from './explorer/get_block_summaries_request';
import {
  CappuccinoExplorerGetBlockSummariesResponse,
  cappuccinoExplorerGetBlockSummariesResponseCodec,
} from './explorer/get_block_summaries_response';
import {
  CappuccinoExplorerGetExplorerSummaryResponse,
  cappuccinoExplorerGetExplorerSummaryResponseCodec,
} from './explorer/get_explorer_summary_response';
import {
  CappuccinoExplorerGetSearchResultRequest,
  cappuccinoExplorerGetSearchResultRequestCodec,
} from './explorer/get_search_result_request';
import {
  CappuccinoExplorerGetSearchResultResponse,
  cappuccinoExplorerGetSearchResultResponseCodec,
} from './explorer/get_search_result_response';
import {
  CappuccinoExplorerGetTransactionDetailRequest,
  cappuccinoExplorerGetTransactionDetailRequestCodec,
} from './explorer/get_transaction_detail_request';
import {
  CappuccinoExplorerGetTransactionDetailResponse,
  cappuccinoExplorerGetTransactionDetailResponseCodec,
} from './explorer/get_transaction_detail_response';
import {
  CappuccinoExplorerGetTransactionSummariesRequest,
  cappuccinoExplorerGetTransactionSummariesRequestCodec,
} from './explorer/get_transaction_summaries_request';
import {
  CappuccinoExplorerGetTransactionSummariesResponse,
  cappuccinoExplorerGetTransactionSummariesResponseCodec,
} from './explorer/get_transaction_summaries_response';
import { CappuccinoHotShotQueryService } from './hot_shot_query_service_api';
import ProxyWorker from './hotshot_query_service_web_worker_api.js?worker';
import { CappuccinoHotShotQueryServiceStatusAPI } from './status/status_api';

class AsyncRequestHelper {
  private worker: Worker;
  private nextRequestID: RequestID = 0;
  private requestCompleters: Map<RequestID, Completer<WebWorkerResponse>> =
    new Map();

  constructor(worker: Worker) {
    this.worker = worker;
    worker.onmessageerror;
    worker.addEventListener('message', this.handleMessage.bind(this));
    worker.addEventListener('messageerror', this.handleMessageError.bind(this));
    worker.addEventListener('error', this.handleError.bind(this));
  }

  async submitRequest<
    T,
    API extends string = string,
    Method extends string = string,
    Param = unknown,
  >(
    codec: Codec<T, unknown>,
    api: API,
    method: Method,
    param: Param,
  ): Promise<T> {
    const [id, completer] = this.nextRequest();
    try {
      this.worker.postMessage(
        webWorkerRequestCodec.encode(
          new WebWorkerRequest(id, api, method, param),
        ),
      );

      return await completer.promise.then((result) => {
        if (result instanceof WebWorkerResponseError) {
          throw new WebWorkerErrorResponse(result.error);
        }

        if (result instanceof WebWorkerResponseSuccess) {
          const { response } = result;
          return codec.decode(response);
        }

        throw new InvalidTypeError(typeof result, 'WebWorkerResponse');
      });
    } finally {
      this.requestCompleters.delete(id);
    }
  }

  private nextRequest(): [number, Completer<WebWorkerResponse>] {
    const id = this.nextRequestID++;
    const completer = createCompleter<WebWorkerResponse>();
    this.requestCompleters.set(id, completer);
    return [id, completer];
  }

  handleMessage(event: MessageEvent) {
    const workerResponse = webWorkerResponseCodec.decode(event.data);
    const completer = this.requestCompleters.get(workerResponse.requestID);
    if (completer === undefined) {
      throw new NoCompleterFoundForRequestID(workerResponse.requestID);
    }

    completer.complete(workerResponse);
  }

  handleMessageError(event: MessageEvent) {
    const workerResponse = webWorkerResponseCodec.decode(event.data);
    const completer = this.requestCompleters.get(workerResponse.requestID);
    if (completer === undefined) {
      throw new NoCompleterFoundForRequestID(workerResponse.requestID);
    }

    completer.completeError(workerResponse);
  }

  handleError(event: ErrorEvent) {
    // eslint-disable-next-line no-debugger
    debugger;
    console.error('encountered error setting up Web worker', event);
  }
}

export class WebWorkerClientBasedCappuccinoHotShotQueryServiceAvailabilityAPI
  implements
    CappuccinoHotShotQueryServiceAvailabilityAPI,
    CappuccinoHotShotQueryServiceAvailabilityAPI
{
  private helper: AsyncRequestHelper;
  constructor(helper: AsyncRequestHelper) {
    this.helper = helper;
  }

  private async sendRequest<
    T,
    Method extends
      keyof CappuccinoHotShotQueryServiceAvailabilityAPI = keyof CappuccinoHotShotQueryServiceAvailabilityAPI,
    Param = unknown,
  >(codec: Codec<T, unknown>, method: Method, ...args: Param[]): Promise<T> {
    return this.helper.submitRequest(codec, 'availability', method, args);
  }

  async getLeafFromHeight(height: number): Promise<CappuccinoAPILeafResponse> {
    return await this.sendRequest(
      cappuccinoAPILeafResponseCodec,
      'getLeafFromHeight',
      height,
    );
  }

  async getTransactionFromHeightAndOffset(
    height: number,
    index: number,
  ): Promise<CappuccinoAPITransactionResponse> {
    return await this.sendRequest(
      cappuccinoAPITransactionResponseCodec,
      'getTransactionFromHeightAndOffset',
      height,
      index,
    );
  }

  async getBlockSummaries(
    from: number,
    until: number,
  ): Promise<CappuccinoDerivedBlockSummary[]> {
    return await this.sendRequest(
      listCappuccinoDerivedBlockSummaryCodec,
      'getBlockSummaries',
      from,
      until,
    );
  }

  async getBlockFromHeight(height: number): Promise<CappuccinoAPIBlock> {
    return await this.sendRequest(
      cappuccinoAPIBlockCodec,
      'getBlockFromHeight',
      height,
    );
  }

  async getTransactionSummaryRange(
    height: number,
    offset: number,
    limit: number,
  ): Promise<CappuccinoDerivedTransactionSummary[]> {
    return await this.sendRequest(
      listCappuccinoDerivedTransactionSummaryCodec,
      'getTransactionSummaryRange',
      height,
      offset,
      limit,
    );
  }

  async getTransactionSummaryRangeForRollup(
    namespace: number,
    height: number,
    offset: number,
    limit: number,
  ): Promise<CappuccinoDerivedTransactionSummary[]> {
    return await this.sendRequest(
      listCappuccinoDerivedTransactionSummaryCodec,
      'getTransactionSummaryRangeForRollup',
      namespace,
      height,
      offset,
      limit,
    );
  }
}

export class WebWorkerClientBasedCappuccinoHotShotQueryServiceStatusAPI
  implements CappuccinoHotShotQueryServiceStatusAPI
{
  private helper: AsyncRequestHelper;
  constructor(helper: AsyncRequestHelper) {
    this.helper = helper;
  }

  private async sendRequest<
    T,
    Method extends
      keyof WebWorkerClientBasedCappuccinoHotShotQueryServiceStatusAPI = keyof WebWorkerClientBasedCappuccinoHotShotQueryServiceStatusAPI,
    Param = unknown,
  >(codec: Codec<T, unknown>, method: Method, ...args: Param[]): Promise<T> {
    return this.helper.submitRequest(codec, 'status', method, args);
  }

  async blockHeight(): Promise<number> {
    return await this.sendRequest(numberCodec, 'blockHeight');
  }
}

export class WebWorkerClientBasedCappuccinoHotShotQueryServiceExplorerAPI
  implements CappuccinoHotShotQueryServiceExplorerAPI
{
  private helper: AsyncRequestHelper;
  constructor(helper: AsyncRequestHelper) {
    this.helper = helper;
  }

  private async sendRequest<
    T,
    Method extends
      keyof CappuccinoHotShotQueryServiceExplorerAPI = keyof CappuccinoHotShotQueryServiceExplorerAPI,
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

let singletonWorker: null | Worker = null;
function createWorker(): Worker {
  if (!singletonWorker) {
    singletonWorker = new ProxyWorker();
  }

  return singletonWorker;
}

export class WebWorkerClientBasedCappuccinoHotShotQueryService
  implements CappuccinoHotShotQueryService
{
  public readonly availability: CappuccinoHotShotQueryServiceAvailabilityAPI;
  public readonly status: CappuccinoHotShotQueryServiceStatusAPI;
  public readonly explorer: CappuccinoHotShotQueryServiceExplorerAPI;

  constructor() {
    const worker = createWorker();
    const helper = new AsyncRequestHelper(worker);
    this.availability =
      new WebWorkerClientBasedCappuccinoHotShotQueryServiceAvailabilityAPI(
        helper,
      );
    this.status =
      new WebWorkerClientBasedCappuccinoHotShotQueryServiceStatusAPI(helper);
    this.explorer =
      new WebWorkerClientBasedCappuccinoHotShotQueryServiceExplorerAPI(helper);
  }
}
