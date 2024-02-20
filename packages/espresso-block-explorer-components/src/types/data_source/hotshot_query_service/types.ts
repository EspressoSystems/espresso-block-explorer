/**
 * HotShotQueryService is an interface that defines an interface for the
 * actual HotShot Query Service as a DataSource.
 *
 * Its methods are meant to reflect the actual endpoints of the HotShot Query
 * Service API.  However, the intention is that practically anything *could*
 * implement this interface and be used as a DataSource for the live
 * Block Explorer.
 *
 * It should be noted that the HotShot Query Service is a volatile API that
 * will change often without warning, so by itself, it's likely not the best
 * thing to utilize. However, for demo purposes, it's what we have, and it's
 * what we shall utilize.
 *
 * Please bear in mind that this interface is meant to reflect the HotShot
 * Query Service that is deployed via a Sequencer.
 */

export interface Leaf {}

// Let's just focus on what we need for now, instead of the entirety of the
// HotShot Query Service API.
//
// That being said, what we **need* might change over time.

export interface HotShotQueryServiceAvailabilityAPI<Leaf, Block, Transaction> {
  getLeafFromHeight(height: number): Promise<Leaf>;

  getTransactionFromHeightAndOffset(
    height: number,
    index: number,
  ): Promise<Transaction>;
  // getTransaction(hash: TaggedBase64): Promise<Transaction>;
  getBlockFromHeight(height: number): Promise<Block>;
  // getBlockFromHash(hash: TaggedBase64): Promise<Block>;

  // getBlockSummaries(from: number, until: number): Promise<BlockSummary[]>;

  // getHeader(height: number): Promise<Header>;
  // getHeader(hash: TaggedBase64): Promise<Header>;
}

export type BlockHeightResponse = number;

export interface HotShotQueryServiceStatusAPI {
  blockHeight(): Promise<BlockHeightResponse>;
}

export interface HotShotQueryServiceAvailabilityStreamsAPI<
  Leaf,
  Block,
  Header,
> {
  streamLeaves(height: number): AsyncIterator<Leaf>;
  streamBlocks(height: number): AsyncIterator<Block>;
  streamHeaders(height: number): AsyncIterator<Header>;
}

export interface HotShotQueryService<Leaf, Block, Transaction> {
  readonly availability: HotShotQueryServiceAvailabilityAPI<
    Leaf,
    Block,
    Transaction
  >;
  readonly status: HotShotQueryServiceStatusAPI;
}

export interface ExtendedHotShotQueryServiceAvailabilityAPI<
  BlockSummary,
  TransactionSummary,
> {
  getBlockSummaries(from: number, until: number): Promise<BlockSummary[]>;
  getTransactionSummaryRange(
    height: number,
    offset: number,
    limit: number,
  ): Promise<TransactionSummary[]>;
  getTransactionSummaryRangeForRollup(
    namespace: number,
    height: number,
    offset: number,
    limit: number,
  ): Promise<TransactionSummary[]>;
}

export interface ExtendedHotShotQueryService<BlockSummary, TransactionSummary> {
  readonly availability: ExtendedHotShotQueryServiceAvailabilityAPI<
    BlockSummary,
    TransactionSummary
  >;
}
