import { HotShotQueryServiceAvailabilityAPI } from '../../types';
import { CappuccinoAPIBlock } from './block';
import { CappuccinoDerivedBlockSummary } from './derived_block_summary';
import { CappuccinoDerivedTransactionSummary } from './derived_transaction_summary';
import { CappuccinoAPILeafResponse } from './leaf_response';
import { CappuccinoAPITransactionResponse } from './transaction_response';

export interface CappuccinoHotShotQueryServiceAvailabilityAPI extends HotShotQueryServiceAvailabilityAPI<CappuccinoAPILeafResponse, CappuccinoAPIBlock, CappuccinoAPITransactionResponse> {
    getBlockSummaries(from: number, until: number): Promise<CappuccinoDerivedBlockSummary[]>;
    getTransactionSummaryRange(height: number, offset: number, limit: number): Promise<CappuccinoDerivedTransactionSummary[]>;
    getTransactionSummaryRangeForRollup(namespace: number, height: number, offset: number, limit: number): Promise<CappuccinoDerivedTransactionSummary[]>;
}
