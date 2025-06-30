import { CappuccinoHotShotQueryServiceAvailabilityAPI } from '../availability_api';
import { CappuccinoAPIBlock } from '../block';
import { CappuccinoDerivedBlockSummary } from '../derived_block_summary';
import { CappuccinoDerivedTransactionSummary } from '../derived_transaction_summary';
import { CappuccinoAPILeafResponse } from '../leaf_response';
import { CappuccinoAPITransactionResponse } from '../transaction_response';
export declare class FakeDataCappuccinoHotShotQueryServiceAvailabilityAPI implements CappuccinoHotShotQueryServiceAvailabilityAPI {
    getLeafFromHeight(height: number): Promise<CappuccinoAPILeafResponse>;
    getTransactionFromHeightAndOffset(height: number, offset: number): Promise<CappuccinoAPITransactionResponse>;
    getBlockSummaries(from: number, until: number): Promise<CappuccinoDerivedBlockSummary[]>;
    getBlockFromHeight(height: number): Promise<CappuccinoAPIBlock>;
    private streamTransactionSummaries;
    getTransactionSummaryRange(height: number, offset: number, limit: number): Promise<CappuccinoDerivedTransactionSummary[]>;
    getTransactionSummaryRangeForRollup(namespace: number, height: number, offset: number, limit: number): Promise<CappuccinoDerivedTransactionSummary[]>;
}
