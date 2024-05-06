import { CappuccinoAPITransactionResponse } from '../transaction_response';
import { CappuccinoAPILeafResponse } from '../leaf_response';
import { CappuccinoDerivedTransactionSummary } from '../derived_transaction_summary';
import { CappuccinoDerivedBlockSummary } from '../derived_block_summary';
import { CappuccinoAPIBlock } from '../block';
import { CappuccinoHotShotQueryServiceAvailabilityAPI } from '../availability_api';

export declare class FetchBasedCappuccinoHotShotQueryServiceAvailabilityAPI implements CappuccinoHotShotQueryServiceAvailabilityAPI {
    private readonly fetcher;
    private readonly baseURL;
    constructor(fetcher: typeof fetch, url: URL);
    getLeafFromHeight(height: number): Promise<CappuccinoAPILeafResponse>;
    getTransactionFromHeightAndOffset(height: number, index: number): Promise<CappuccinoAPITransactionResponse>;
    getBlockSummaries(from: number, until: number): Promise<CappuccinoDerivedBlockSummary[]>;
    getBlockFromHeight(height: number): Promise<CappuccinoAPIBlock>;
    private streamBlocksFromHeightRange;
    getTransactionSummaryRange(height: number, offset: number, limit: number): Promise<CappuccinoDerivedTransactionSummary[]>;
    getTransactionSummaryRangeForRollup(namespace: number, height: number, offset: number, limit: number): Promise<CappuccinoDerivedTransactionSummary[]>;
}
