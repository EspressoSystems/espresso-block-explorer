import { validateAndExpandResponse } from '../../../../../async/fetch/response_validators';
import {
  collectAsyncIterator,
  dropAsyncIterator,
  expandAsyncIterator,
  filterAsyncIterator,
  iotaAsync,
  mapAsyncIterator,
  reverseAsyncIterator,
  takeAsyncIterator,
} from '../../../../../functional/functional_async';
import { GibraltarHotShotQueryServiceAvailabilityAPI } from '../availability_api';
import { GibraltarAPIBlock, gibraltarAPIBlockCodec } from '../block';
import { GibraltarDerivedBlockSummary } from '../derived_block_summary';
import { GibraltarDerivedTransactionSummary } from '../derived_transaction_summary';
import {
  GibraltarAPILeafResponse,
  gibraltarAPILeafResponseCodec,
} from '../leaf_response';
import {
  GibraltarAPITransactionResponse,
  gibraltarAPITransactionResponseCodec,
} from '../transaction_response';
import {
  convertBlockAndLeafToBlockSummary,
  convertLeafAndTransactionsToTransactionSummaries,
} from '../transformers';

export class FetchBasedGibraltarHotShotQueryServiceAvailabilityAPI
  implements GibraltarHotShotQueryServiceAvailabilityAPI
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

  private async *streamBlocksFromHeightRange(
    height: number,
    maxBlocks?: number,
  ) {
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

    if (maxBlocks === undefined) {
      yield* step3;
      return;
    }

    yield* takeAsyncIterator(step3, maxBlocks);
  }

  async getTransactionSummaryRange(
    height: number,
    offset: number,
    limit: number,
  ): Promise<GibraltarDerivedTransactionSummary[]> {
    // We can currently retrieve the individual transactions from the blocks
    // themselves.

    const step3 = this.streamBlocksFromHeightRange(height, 50);
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

    const step3 = this.streamBlocksFromHeightRange(height, 50);
    const step4 = filterAsyncIterator(
      step3,
      (summary) => summary.transaction.vm === namespace,
    );
    const step5 = dropAsyncIterator(step4, offset);
    const step6 = takeAsyncIterator(step5, limit);
    return await collectAsyncIterator(step6);
  }
}
