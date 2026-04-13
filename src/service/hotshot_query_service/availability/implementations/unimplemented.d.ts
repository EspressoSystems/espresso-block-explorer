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
export declare class UnimplementedHotShotQueryServiceAvailabilityAPI implements HotShotQueryServiceAvailabilityAPI {
    getLeafFromHeight(): Promise<AvailabilityAPILeafResponse>;
    getTransactionFromHeightAndOffset(): Promise<AvailabilityAPITransactionResponse>;
    getBlockFromHeight(): Promise<AvailabilityAPIBlock>;
    getBlockSummaries(): Promise<AvailabilityDerivedBlockSummary[]>;
    getTransactionSummaryRange(): Promise<AvailabilityDerivedTransactionSummary[]>;
    getTransactionSummaryRangeForRollup(): Promise<AvailabilityDerivedTransactionSummary[]>;
    getHeader(): Promise<AvailabilityAPIHeader>;
}
