import { Converter } from '../../../convert';
import BadResponseClientError from '../../../errors/BadResponseClientError';
import BadResponseError from '../../../errors/BadResponseError';
import BadResponseServerError from '../../../errors/BadResponseServerError';
import InvalidTypeError from '../../../errors/InvalidTypeError';
import {
  collectAsyncIterator,
  dropAsyncIterator,
  expandAsyncIterator,
  filterAsyncIterator,
  iotaAsync,
  mapAsyncIterator,
  reverseAsyncIterator,
  takeAsyncIterator,
} from '../../../functional_async';
import {
  GibraltarAPIBlock,
  GibraltarAPILeafResponse,
  GibraltarAPITransactionResponse,
  GibraltarDerivedBlockSummary,
  GibraltarDerivedTransactionSummary,
  GibraltarExtendedHotShotQueryService,
  GibraltarExtendedHotShotQueryServiceAvailabilityAPI,
  GibraltarHotShotQueryService,
  GibraltarHotShotQueryServiceAvailabilityAPI,
  GibraltarHotShotQueryServiceStatusAPI,
  convertBlockAndLeafToBlockSummary,
  convertLeafAndTransactionsToTransactionSummaries,
  gibraltarAPIBlockCodec,
  gibraltarAPILeafResponseCodec,
  gibraltarAPITransactionResponseCodec,
} from './types';

export class FetchBasedGibraltarHotShotQueryServiceAvailabilityAPI
  implements
    GibraltarExtendedHotShotQueryServiceAvailabilityAPI,
    GibraltarHotShotQueryServiceAvailabilityAPI
{
  private readonly fetcher: typeof fetch;
  private readonly baseURL: URL;

  constructor(fetcher: typeof fetch, url: URL) {
    this.fetcher = fetcher;
    this.baseURL = url;
  }

  getLeafFromHeight(height: number): Promise<GibraltarAPILeafResponse> {
    const url = new URL(`leaf/${height}`, this.baseURL);
    return this.fetcher(url.toString()).then(
      validateAndExpandResponse(gibraltarAPILeafResponseCodec.decoder),
    );
  }

  getTransactionFromHeightAndOffset(
    height: number,
    index: number,
  ): Promise<GibraltarAPITransactionResponse> {
    const url = new URL(`transaction/${height}/${index}`, this.baseURL);
    return this.fetcher(url.toString()).then(
      validateAndExpandResponse(gibraltarAPITransactionResponseCodec.decoder),
    );
  }

  async getBlockSummaries(
    from: number,
    until: number,
  ): Promise<GibraltarDerivedBlockSummary[]> {
    // We do this the **slow** way because we need to deal with the difference
    // between APIs at the moment.
    //
    // We *could* speed this up by chunking these requests and attempting to
    // run them in parallel with Promise.all.
    const step1 = iotaAsync(until - from);
    const step2 = mapAsyncIterator(step1, (i) =>
      Promise.all([
        this.getBlockFromHeight(from + i),
        this.getLeafFromHeight(from + i),
      ]),
    );
    const step3 = mapAsyncIterator(step2, ([block, leaf]) =>
      convertBlockAndLeafToBlockSummary(block, leaf),
    );
    return await collectAsyncIterator(step3);
  }

  getBlockFromHeight(height: number): Promise<GibraltarAPIBlock> {
    const url = new URL(`block/${height}`, this.baseURL);
    return this.fetcher(url.toString()).then(
      validateAndExpandResponse(gibraltarAPIBlockCodec.decoder),
    );
  }

  private async *streamBlocksFromHeightRange(height: number) {
    const step1 = iotaAsync(height);
    const step2 = mapAsyncIterator(step1, (i) =>
      this.getLeafFromHeight(height - i),
    );
    const step3 = expandAsyncIterator(step2, (leaf) =>
      reverseAsyncIterator(
        convertLeafAndTransactionsToTransactionSummaries(
          leaf,

          mapAsyncIterator(
            iotaAsync(leaf.leaf.block_payload.transaction_nmt.length),
            (index) =>
              this.getTransactionFromHeightAndOffset(
                leaf.leaf.block_header.height,
                index,
              ),
          ),
        ),
      ),
    );

    yield* step3;
  }

  async getTransactionSummaryRange(
    height: number,
    offset: number,
    limit: number,
  ): Promise<GibraltarDerivedTransactionSummary[]> {
    // We can currently retrieve the individual transactions from the blocks
    // themselves.

    const step3 = this.streamBlocksFromHeightRange(height);
    const step4 = dropAsyncIterator(step3, offset);
    const step5 = takeAsyncIterator(step4, limit);
    return await collectAsyncIterator(step5);
  }

  async getTransactionSummaryRangeForRollup(
    namespace: number,
    height: number,
    offset: number,
    limit: number,
  ): Promise<GibraltarDerivedTransactionSummary[]> {
    // We can currently retrieve the individual transactions from the blocks
    // themselves.

    const step3 = this.streamBlocksFromHeightRange(height);
    const step4 = filterAsyncIterator(
      step3,
      (summary) => summary.transaction.vm === namespace,
    );
    const step5 = dropAsyncIterator(step4, offset);
    const step6 = takeAsyncIterator(step5, limit);
    return await collectAsyncIterator(step6);
  }
}

function validateAndExpandResponse<A>(converter: Converter<unknown, A>) {
  return async (response: Response): Promise<A> => {
    validateResponseIsOk(response);
    validateResponseIsJSON(response);
    return converter.convert(await response.json());
  };
}

function validateResponseIsOk(response: Response): void {
  if (!response.ok) {
    if (response.status >= 500) {
      throw new BadResponseServerError(response);
    }

    if (response.status >= 400) {
      throw new BadResponseClientError(response);
    }

    throw new BadResponseError(response);
  }
}

function validateResponseIsJSON(response: Response): void {
  const contentType = response.headers.get('content-type');

  if (!contentType || !contentType.startsWith('application/json')) {
    // Throw an Error here indicating that the server is not returning
    // json
  }
}

export class FetchBasedGibraltarHotShotQueryServiceStatusAPI
  implements GibraltarHotShotQueryServiceStatusAPI
{
  private readonly fetcher: typeof fetch;
  private readonly baseURL: URL;
  private readonly blockHeightURL: URL;
  private readonly blockHeightResponseValidator = validateAndExpandResponse({
    convert(a) {
      if (typeof a !== 'number') {
        throw new InvalidTypeError(typeof a, 'number');
      }

      return a;
    },
  });

  constructor(fetcher: typeof fetch, url: URL) {
    this.fetcher = fetcher;
    this.baseURL = url;
    this.blockHeightURL = new URL('latest_block_height', this.baseURL);
  }

  blockHeight(): Promise<number> {
    return this.fetcher(this.blockHeightURL).then(
      this.blockHeightResponseValidator,
    );
  }
}

export class FetchBasedGibraltarHotShotQueryService
  implements GibraltarExtendedHotShotQueryService, GibraltarHotShotQueryService
{
  public readonly availability: GibraltarExtendedHotShotQueryServiceAvailabilityAPI &
    GibraltarHotShotQueryServiceAvailabilityAPI;
  public readonly status: GibraltarHotShotQueryServiceStatusAPI;

  constructor(fetcher: typeof fetch, baseURL: URL) {
    this.availability =
      new FetchBasedGibraltarHotShotQueryServiceAvailabilityAPI(
        fetcher,
        new URL('availability/', baseURL),
      );
    this.status = new FetchBasedGibraltarHotShotQueryServiceStatusAPI(
      fetcher,
      new URL('status/', baseURL),
    );
  }
}
