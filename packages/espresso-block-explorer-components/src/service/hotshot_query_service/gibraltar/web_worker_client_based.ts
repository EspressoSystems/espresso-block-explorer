import { Codec } from '../../../convert/codec/convert';
import { numberCodec } from '../../../convert/codec/number';
import {
  Completer,
  createCompleter,
} from '../../../data_structures/async/completer/Completer';
import { GibraltarHotShotQueryServiceAvailabilityAPI } from './availability/availability_api';
import {
  GibraltarAPIBlock,
  gibraltarAPIBlockCodec,
} from './availability/block';
import {
  GibraltarDerivedBlockSummary,
  listGibraltarDerivedBlockSummaryCodec,
} from './availability/derived_block_summary';
import {
  GibraltarDerivedTransactionSummary,
  listGibraltarDerivedTransactionSummaryCodec,
} from './availability/derived_transaction_summary';
import {
  GibraltarAPILeafResponse,
  gibraltarAPILeafResponseCodec,
} from './availability/leaf_response';
import {
  GibraltarAPITransactionResponse,
  gibraltarAPITransactionResponseCodec,
} from './availability/transaction_response';
import { GibraltarHotShotQueryService } from './hot_shot_query_service_api';
import { GibraltarHotShotQueryServiceStatusAPI } from './status/status_api';

type RequestID = unknown;
type AsyncMessageEvent<T = unknown> = MessageEvent<
  [RequestID, { response: T } | { error: unknown }]
>;

export class NoCompleterFoundForRequestID extends Error {
  readonly requestID: RequestID;
  constructor(
    requestID: RequestID,
    message: string = `no completer found for request id "${requestID}"`,
  ) {
    super(message);
    this.requestID = requestID;
  }

  toJSON() {
    return {
      name: NoCompleterFoundForRequestID.name,
      message: this.message,
      requestID: this.requestID,
    };
  }
}

export class WebWorkerErrorResponse extends Error {
  readonly error: unknown;
  constructor(error: unknown, message: string = 'error in web worker') {
    super(message);
    this.error = error;
  }

  toJSON() {
    return {
      name: WebWorkerErrorResponse.name,
      message: this.message,
      error: this.error,
    };
  }
}

class AsyncRequestHelper {
  private worker: Worker;
  private nextRequestID: number = 0;
  private requestCompleters: Map<RequestID, Completer<AsyncMessageEvent>> =
    new Map();

  constructor(worker: Worker) {
    this.worker = worker;
    worker.addEventListener('message', this.handleMessage.bind(this));
    worker.addEventListener('messageerror', this.handleMessageError.bind(this));
  }

  async submitRequest<T>(
    codec: Codec<T, unknown>,
    method: string[],
    ...args: unknown[]
  ): Promise<T> {
    const [id, completer] = this.nextRequest();
    try {
      this.worker.postMessage([id, method, ...args]);
      return await completer.promise.then((event) => {
        const [, result] = event.data;
        if ('error' in result) {
          throw new WebWorkerErrorResponse(result.error);
        }

        const { response } = result;
        return codec.decode(response);
      });
    } finally {
      this.requestCompleters.delete(id);
    }
  }

  private nextRequest(): [number, Completer<AsyncMessageEvent>] {
    const id = this.nextRequestID++;
    const completer = createCompleter<AsyncMessageEvent>();
    this.requestCompleters.set(id, completer);
    return [id, completer];
  }

  handleMessage(event: AsyncMessageEvent) {
    const [id] = event.data;
    const completer = this.requestCompleters.get(id);
    if (completer === undefined) {
      throw new NoCompleterFoundForRequestID(id);
    }

    completer.complete(event);
  }

  handleMessageError(event: AsyncMessageEvent) {
    const [id] = event.data;
    const completer = this.requestCompleters.get(id);
    if (completer === undefined) {
      throw new NoCompleterFoundForRequestID(id);
    }

    completer.completeError(event);
  }
}

export class WebWorkerClientBasedGibraltarHotShotQueryServiceAvailabilityAPI
  implements GibraltarHotShotQueryServiceAvailabilityAPI
{
  private helper: AsyncRequestHelper;
  constructor(helper: AsyncRequestHelper) {
    this.helper = helper;
  }

  private async sendRequest<T>(
    codec: Codec<T, unknown>,
    method: string,
    ...args: unknown[]
  ): Promise<T> {
    return this.helper.submitRequest<T>(
      codec,
      ['availability', method],
      ...args,
    );
  }

  async getLeafFromHeight(height: number): Promise<GibraltarAPILeafResponse> {
    return await this.sendRequest(
      gibraltarAPILeafResponseCodec,
      'getLeafFromHeight',
      height,
    );
  }

  async getTransactionFromHeightAndOffset(
    height: number,
    index: number,
  ): Promise<GibraltarAPITransactionResponse> {
    return await this.sendRequest(
      gibraltarAPITransactionResponseCodec,
      'getTransactionFromHeightAndOffset',
      height,
      index,
    );
  }

  async getBlockSummaries(
    from: number,
    until: number,
  ): Promise<GibraltarDerivedBlockSummary[]> {
    return await this.sendRequest(
      listGibraltarDerivedBlockSummaryCodec,
      'getBlockSummaries',
      from,
      until,
    );
  }

  async getBlockFromHeight(height: number): Promise<GibraltarAPIBlock> {
    return await this.sendRequest(
      gibraltarAPIBlockCodec,
      'getBlockFromHeight',
      height,
    );
  }

  async getTransactionSummaryRange(
    height: number,
    offset: number,
    limit: number,
  ): Promise<GibraltarDerivedTransactionSummary[]> {
    return await this.sendRequest(
      listGibraltarDerivedTransactionSummaryCodec,
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
  ): Promise<GibraltarDerivedTransactionSummary[]> {
    return await this.sendRequest(
      listGibraltarDerivedTransactionSummaryCodec,
      'getTransactionSummaryRangeForRollup',
      namespace,
      height,
      offset,
      limit,
    );
  }
}

export class WebWorkerClientBasedGibraltarHotShotQueryServiceStatusAPI
  implements GibraltarHotShotQueryServiceStatusAPI
{
  private helper: AsyncRequestHelper;
  constructor(helper: AsyncRequestHelper) {
    this.helper = helper;
  }

  private async sendRequest<T>(
    codec: Codec<T, unknown>,
    method: string,
    ...args: unknown[]
  ): Promise<T> {
    return this.helper.submitRequest(codec, ['status', method], ...args);
  }

  async blockHeight(): Promise<number> {
    return await this.sendRequest(numberCodec, 'blockHeight');
  }
}

export class WebWorkerClientBasedGibraltarHotShotQueryService
  implements GibraltarHotShotQueryService
{
  public readonly availability: GibraltarHotShotQueryServiceAvailabilityAPI &
    GibraltarHotShotQueryServiceAvailabilityAPI;
  public readonly status: GibraltarHotShotQueryServiceStatusAPI;

  constructor() {
    const worker = new Worker(new URL('./web_worker_api.js', import.meta.url), {
      type: 'module',
    });
    const helper = new AsyncRequestHelper(worker);
    this.availability =
      new WebWorkerClientBasedGibraltarHotShotQueryServiceAvailabilityAPI(
        helper,
      );
    this.status = new WebWorkerClientBasedGibraltarHotShotQueryServiceStatusAPI(
      helper,
    );
  }
}
