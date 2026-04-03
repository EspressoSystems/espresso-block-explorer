import { IHotShotQueryServiceAvailabilityAPI } from '../types';
import { AvailabilityAPIBlock } from './block';
import { AvailabilityAPIHeader } from './block_header';
import { AvailabilityDerivedBlockSummary } from './derived_block_summary';
import { AvailabilityDerivedTransactionSummary } from './derived_transaction_summary';
import { AvailabilityAPILeafResponse } from './leaf_response';
import { AvailabilityAPITransactionResponse } from './transaction_response';

/**
 * HotShotQueryServiceAvailabilityAPI is a type that represents the
 * Availability API for the Espresso HotShot Query Service. This interface
 * represents the idealized interactions for the Availability API.  This should
 * allow for easy interactions with the Availability API, while also allowing for
 * different implementations for testing purposes.
 */
export interface HotShotQueryServiceAvailabilityAPI extends IHotShotQueryServiceAvailabilityAPI<
  AvailabilityAPILeafResponse,
  AvailabilityAPIHeader,
  AvailabilityAPIBlock,
  AvailabilityAPITransactionResponse
> {
  // begin extra methods for derived data

  getBlockSummaries(
    from: number,
    until: number,
  ): Promise<AvailabilityDerivedBlockSummary[]>;

  getTransactionSummaryRange(
    height: number,
    offset: number,
    limit: number,
  ): Promise<AvailabilityDerivedTransactionSummary[]>;

  getTransactionSummaryRangeForRollup(
    namespace: number,
    height: number,
    offset: number,
    limit: number,
  ): Promise<AvailabilityDerivedTransactionSummary[]>;

  getHeader(height: number): Promise<AvailabilityAPIHeader>;
}
