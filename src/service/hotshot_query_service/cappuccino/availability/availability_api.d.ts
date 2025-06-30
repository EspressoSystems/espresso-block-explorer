import { HotShotQueryServiceAvailabilityAPI } from '../../types';
import { CappuccinoAPIBlock } from './block';
import { CappuccinoDerivedBlockSummary } from './derived_block_summary';
import { CappuccinoDerivedTransactionSummary } from './derived_transaction_summary';
import { CappuccinoAPILeafResponse } from './leaf_response';
import { CappuccinoAPITransactionResponse } from './transaction_response';
/**
 * CappuccinoHotShotQueryServiceAvailabilityAPI is a type that represents the
 * Availability API for the Cappuccino HotShot Query Service. This interface
 * represents the idealized interactions for the Availability API.  This should
 * allow for easy interactions with the Availability API, while also allowing for
 * different implementations for testing purposes.
 */
export interface CappuccinoHotShotQueryServiceAvailabilityAPI extends HotShotQueryServiceAvailabilityAPI<CappuccinoAPILeafResponse, CappuccinoAPIBlock, CappuccinoAPITransactionResponse> {
    getBlockSummaries(from: number, until: number): Promise<CappuccinoDerivedBlockSummary[]>;
    getTransactionSummaryRange(height: number, offset: number, limit: number): Promise<CappuccinoDerivedTransactionSummary[]>;
    getTransactionSummaryRangeForRollup(namespace: number, height: number, offset: number, limit: number): Promise<CappuccinoDerivedTransactionSummary[]>;
}
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
