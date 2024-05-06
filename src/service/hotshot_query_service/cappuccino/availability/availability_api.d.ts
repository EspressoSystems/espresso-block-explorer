import { CappuccinoAPITransactionResponse } from './transaction_response';
import { CappuccinoAPILeafResponse } from './leaf_response';
import { CappuccinoDerivedTransactionSummary } from './derived_transaction_summary';
import { CappuccinoDerivedBlockSummary } from './derived_block_summary';
import { CappuccinoAPIBlock } from './block';
import { HotShotQueryServiceAvailabilityAPI } from '../../types';

export interface CappuccinoHotShotQueryServiceAvailabilityAPI extends HotShotQueryServiceAvailabilityAPI<CappuccinoAPILeafResponse, CappuccinoAPIBlock, CappuccinoAPITransactionResponse> {
    getBlockSummaries(from: number, until: number): Promise<CappuccinoDerivedBlockSummary[]>;
    getTransactionSummaryRange(height: number, offset: number, limit: number): Promise<CappuccinoDerivedTransactionSummary[]>;
    getTransactionSummaryRangeForRollup(namespace: number, height: number, offset: number, limit: number): Promise<CappuccinoDerivedTransactionSummary[]>;
}
