import UnimplementedError from '@/errors/unimplemented_error';
import { HotShotQueryServiceAvailabilityAPI } from '../availability_api';
import { AvailabilityAPIBlock } from '../block';
import { AvailabilityAPIHeader } from '../block_header';
import { AvailabilityDerivedBlockSummary } from '../derived_block_summary';
import { AvailabilityDerivedTransactionSummary } from '../derived_transaction_summary';
import { AvailabilityAPILeafResponse } from '../leaf_response';
import { AvailabilityAPITransactionResponse } from '../transaction_response';

/**
 * UnimplementedHotShotQueryServiceAvailabilityAPI is a class that
 * implements the HotShotQueryServiceAvailabilityAPI interface, but
 * throws an UnimplementedError for all methods. This class is meant to be used
 * as a placeholder for the Availability API, and should be replaced with a real
 * implementation.
 */
export class UnimplementedHotShotQueryServiceAvailabilityAPI implements HotShotQueryServiceAvailabilityAPI {
  async getLeafFromHeight(): Promise<AvailabilityAPILeafResponse> {
    throw new UnimplementedError();
  }

  async getTransactionFromHeightAndOffset(): Promise<AvailabilityAPITransactionResponse> {
    throw new UnimplementedError();
  }

  async getBlockFromHeight(): Promise<AvailabilityAPIBlock> {
    throw new UnimplementedError();
  }

  async getBlockSummaries(): Promise<AvailabilityDerivedBlockSummary[]> {
    throw new UnimplementedError();
  }

  async getTransactionSummaryRange(): Promise<
    AvailabilityDerivedTransactionSummary[]
  > {
    throw new UnimplementedError();
  }

  async getTransactionSummaryRangeForRollup(): Promise<
    AvailabilityDerivedTransactionSummary[]
  > {
    throw new UnimplementedError();
  }

  async getHeader(): Promise<AvailabilityAPIHeader> {
    throw new UnimplementedError();
  }
}
