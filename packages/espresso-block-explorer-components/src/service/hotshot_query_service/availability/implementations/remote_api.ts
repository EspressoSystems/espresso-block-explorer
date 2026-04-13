import {
  checkErrorAndExpandResponse,
  validateAndExpandResponse,
} from '@/async/fetch/response_validators';
import {
  collectAsyncIterator,
  dropAsyncIterator,
  expandAsyncIterator,
  filterAsyncIterator,
  iotaAsync,
  mapAsyncIterator,
  reverseAsyncIterator,
  takeAsyncIterator,
} from '@/functional/functional_async';
import { HotShotQueryServiceAvailabilityAPI } from '../availability_api';
import { unwrappedAvailabilityErrorResponseDecoder } from '../availability_error_response';
import { AvailabilityAPIBlock, availabilityAPIBlockCodec } from '../block';
import {
  AvailabilityAPIHeader,
  availabilityAPIHeaderCodec,
} from '../block_header';
import { AvailabilityDerivedBlockSummary } from '../derived_block_summary';
import { AvailabilityDerivedTransactionSummary } from '../derived_transaction_summary';
import {
  AvailabilityAPILeafResponse,
  availabilityAPILeafResponseCodec,
} from '../leaf_response';
import {
  AvailabilityAPITransactionResponse,
  availabilityAPITransactionResponseCodec,
} from '../transaction_response';
import {
  convertBlockAndLeafToBlockSummary,
  convertLeafAndTransactionsToTransactionSummaries,
} from '../transformers';

export class FetchBasedHotShotQueryServiceAvailabilityAPI implements HotShotQueryServiceAvailabilityAPI {
  private readonly catchErrorHandler = checkErrorAndExpandResponse(
    unwrappedAvailabilityErrorResponseDecoder,
  );
  private readonly leafHandler = validateAndExpandResponse(
    availabilityAPILeafResponseCodec.decoder,
    unwrappedAvailabilityErrorResponseDecoder,
  );
  private readonly transactionHandler = validateAndExpandResponse(
    availabilityAPITransactionResponseCodec.decoder,
    unwrappedAvailabilityErrorResponseDecoder,
  );
  private readonly blockHandler = validateAndExpandResponse(
    availabilityAPIBlockCodec.decoder,
    unwrappedAvailabilityErrorResponseDecoder,
  );
  private readonly headerHandler = validateAndExpandResponse(
    availabilityAPIHeaderCodec.decoder,
    unwrappedAvailabilityErrorResponseDecoder,
  );

  constructor(
    private readonly fetcher: typeof fetch,
    private readonly baseURL: URL,
  ) {}

  getLeafFromHeight(height: number): Promise<AvailabilityAPILeafResponse> {
    const url = new URL(`leaf/${height}`, this.baseURL);
    return this.fetcher(url).then(this.leafHandler, this.catchErrorHandler);
  }

  getTransactionFromHeightAndOffset(
    height: number,
    index: number,
  ): Promise<AvailabilityAPITransactionResponse> {
    const url = new URL(`transaction/${height}/${index}`, this.baseURL);
    return this.fetcher(url).then(
      this.transactionHandler,
      this.catchErrorHandler,
    );
  }

  async getBlockSummaries(
    from: number,
    until: number,
  ): Promise<AvailabilityDerivedBlockSummary[]> {
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

  getBlockFromHeight(height: number): Promise<AvailabilityAPIBlock> {
    const url = new URL(`block/${height}`, this.baseURL);
    return this.fetcher(url).then(this.blockHandler, this.catchErrorHandler);
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
            iotaAsync(leaf.leaf.block_payload?.transaction_nmt?.length ?? 0),
            (index) =>
              this.getTransactionFromHeightAndOffset(
                leaf.leaf.block_header.fields.height,
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
  ): Promise<AvailabilityDerivedTransactionSummary[]> {
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
  ): Promise<AvailabilityDerivedTransactionSummary[]> {
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

  async getHeader(height: number): Promise<AvailabilityAPIHeader> {
    const url = new URL(`header/${height}`, this.baseURL);
    return this.fetcher(url).then(this.headerHandler, this.catchErrorHandler);
  }
}
