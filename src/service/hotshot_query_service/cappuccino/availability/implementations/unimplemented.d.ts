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
export declare class UnimplementedCappuccinoHotShotQueryServiceAvailabilityAPI implements CappuccinoHotShotQueryServiceAvailabilityAPI {
    getLeafFromHeight(): Promise<CappuccinoAPILeafResponse>;
    getTransactionFromHeightAndOffset(): Promise<CappuccinoAPITransactionResponse>;
    getBlockFromHeight(): Promise<CappuccinoAPIBlock>;
    getBlockSummaries(): Promise<CappuccinoDerivedBlockSummary[]>;
    getTransactionSummaryRange(): Promise<CappuccinoDerivedTransactionSummary[]>;
    getTransactionSummaryRangeForRollup(): Promise<CappuccinoDerivedTransactionSummary[]>;
}
