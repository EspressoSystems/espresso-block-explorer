import { AsyncRequestHelper } from '../../../../../../../../../../../../src/service/espresso_staking_api_service/web_worker_types';
import { HotShotQueryServiceAvailabilityAPI } from '../availability_api';
import { AvailabilityAPIBlock } from '../block';
import { AvailabilityAPIHeader } from '../block_header';
import { AvailabilityDerivedBlockSummary } from '../derived_block_summary';
import { AvailabilityDerivedTransactionSummary } from '../derived_transaction_summary';
import { AvailabilityAPILeafResponse } from '../leaf_response';
import { AvailabilityAPITransactionResponse } from '../transaction_response';
export declare class WebWorkerClientBasedHotShotQueryServiceAvailabilityAPI implements HotShotQueryServiceAvailabilityAPI, HotShotQueryServiceAvailabilityAPI {
    private helper;
    constructor(helper: AsyncRequestHelper);
    private sendRequest;
    getLeafFromHeight(height: number): Promise<AvailabilityAPILeafResponse>;
    getTransactionFromHeightAndOffset(height: number, index: number): Promise<AvailabilityAPITransactionResponse>;
    getBlockSummaries(from: number, until: number): Promise<AvailabilityDerivedBlockSummary[]>;
    getBlockFromHeight(height: number): Promise<AvailabilityAPIBlock>;
    getTransactionSummaryRange(height: number, offset: number, limit: number): Promise<AvailabilityDerivedTransactionSummary[]>;
    getTransactionSummaryRangeForRollup(namespace: number, height: number, offset: number, limit: number): Promise<AvailabilityDerivedTransactionSummary[]>;
    getHeader(height: number): Promise<AvailabilityAPIHeader>;
}
