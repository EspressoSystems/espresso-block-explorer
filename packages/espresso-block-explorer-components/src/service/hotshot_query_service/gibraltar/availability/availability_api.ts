import { HotShotQueryServiceAvailabilityAPI } from '../../types';
import { GibraltarAPIBlock } from './block';
import { GibraltarDerivedBlockSummary } from './derived_block_summary';
import { GibraltarDerivedTransactionSummary } from './derived_transaction_summary';
import { GibraltarAPILeafResponse } from './leaf_response';
import { GibraltarAPITransactionResponse } from './transaction_response';

export interface GibraltarHotShotQueryServiceAvailabilityAPI
  extends HotShotQueryServiceAvailabilityAPI<
    GibraltarAPILeafResponse,
    GibraltarAPIBlock,
    GibraltarAPITransactionResponse
  > {
  // begin extra methods for derived data

  getBlockSummaries(
    from: number,
    until: number,
  ): Promise<GibraltarDerivedBlockSummary[]>;

  getTransactionSummaryRange(
    height: number,
    offset: number,
    limit: number,
  ): Promise<GibraltarDerivedTransactionSummary[]>;

  getTransactionSummaryRangeForRollup(
    namespace: number,
    height: number,
    offset: number,
    limit: number,
  ): Promise<GibraltarDerivedTransactionSummary[]>;
}
