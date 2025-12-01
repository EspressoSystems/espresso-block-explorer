import UnimplementedError from '@/errors/UnimplementedError';
import { CappuccinoHotShotQueryServiceAvailabilityAPI } from '../availability_api';
import { CappuccinoAPIBlock } from '../block';
import { CappuccinoDerivedBlockSummary } from '../derived_block_summary';
import { CappuccinoDerivedTransactionSummary } from '../derived_transaction_summary';
import { CappuccinoAPILeafResponse } from '../leaf_response';
import { CappuccinoAPITransactionResponse } from '../transaction_response';

/**
 * UnimplementedCappuccinoHotShotQueryServiceAvailabilityAPI is a class that
 * implements the CappuccinoHotShotQueryServiceAvailabilityAPI interface, but
 * throws an UnimplementedError for all methods. This class is meant to be used
 * as a placeholder for the Availability API, and should be replaced with a real
 * implementation.
 */
export class UnimplementedCappuccinoHotShotQueryServiceAvailabilityAPI implements CappuccinoHotShotQueryServiceAvailabilityAPI {
  async getLeafFromHeight(): Promise<CappuccinoAPILeafResponse> {
    throw new UnimplementedError();
  }

  async getTransactionFromHeightAndOffset(): Promise<CappuccinoAPITransactionResponse> {
    throw new UnimplementedError();
  }

  async getBlockFromHeight(): Promise<CappuccinoAPIBlock> {
    throw new UnimplementedError();
  }

  async getBlockSummaries(): Promise<CappuccinoDerivedBlockSummary[]> {
    throw new UnimplementedError();
  }

  async getTransactionSummaryRange(): Promise<
    CappuccinoDerivedTransactionSummary[]
  > {
    throw new UnimplementedError();
  }

  async getTransactionSummaryRangeForRollup(): Promise<
    CappuccinoDerivedTransactionSummary[]
  > {
    throw new UnimplementedError();
  }
}
