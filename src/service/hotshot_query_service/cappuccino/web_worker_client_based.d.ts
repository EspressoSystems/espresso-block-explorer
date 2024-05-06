import { CappuccinoHotShotQueryServiceStatusAPI } from './status/status_api';
import { CappuccinoHotShotQueryService } from './hot_shot_query_service_api';
import { CappuccinoExplorerGetTransactionSummariesResponse } from './explorer/get_transaction_summaries_response';
import { CappuccinoExplorerGetTransactionSummariesRequest } from './explorer/get_transaction_summaries_request';
import { CappuccinoExplorerGetTransactionDetailResponse } from './explorer/get_transaction_detail_response';
import { CappuccinoExplorerGetTransactionDetailRequest } from './explorer/get_transaction_detail_request';
import { CappuccinoExplorerGetSearchResultResponse } from './explorer/get_search_result_response';
import { CappuccinoExplorerGetSearchResultRequest } from './explorer/get_search_result_request';
import { CappuccinoExplorerGetExplorerSummaryResponse } from './explorer/get_explorer_summary_response';
import { CappuccinoExplorerGetBlockSummariesResponse } from './explorer/get_block_summaries_response';
import { CappuccinoExplorerGetBlockSummariesRequest } from './explorer/get_block_summaries_request';
import { CappuccinoExplorerGetBlockDetailResponse } from './explorer/get_block_detail_response';
import { CappuccinoExplorerGetBlockDetailRequest } from './explorer/get_block_detail_request';
import { CappuccinoHotShotQueryServiceExplorerAPI } from './explorer/explorer_api';
import { CappuccinoAPITransactionResponse } from './availability/transaction_response';
import { CappuccinoAPILeafResponse } from './availability/leaf_response';
import { CappuccinoDerivedTransactionSummary } from './availability/derived_transaction_summary';
import { CappuccinoDerivedBlockSummary } from './availability/derived_block_summary';
import { CappuccinoAPIBlock } from './availability/block';
import { CappuccinoHotShotQueryServiceAvailabilityAPI } from './availability/availability_api';
import { Codec } from '../../../../../../../../../../../src/convert/codec/convert';

declare class AsyncRequestHelper {
    private worker;
    private nextRequestID;
    private requestCompleters;
    constructor(worker: Worker);
    submitRequest<T, API extends string = string, Method extends string = string, Param = unknown>(codec: Codec<T, unknown>, api: API, method: Method, param: Param): Promise<T>;
    private nextRequest;
    handleMessage(event: MessageEvent): void;
    handleMessageError(event: MessageEvent): void;
    handleError(event: ErrorEvent): void;
}
export declare class WebWorkerClientBasedCappuccinoHotShotQueryServiceAvailabilityAPI implements CappuccinoHotShotQueryServiceAvailabilityAPI, CappuccinoHotShotQueryServiceAvailabilityAPI {
    private helper;
    constructor(helper: AsyncRequestHelper);
    private sendRequest;
    getLeafFromHeight(height: number): Promise<CappuccinoAPILeafResponse>;
    getTransactionFromHeightAndOffset(height: number, index: number): Promise<CappuccinoAPITransactionResponse>;
    getBlockSummaries(from: number, until: number): Promise<CappuccinoDerivedBlockSummary[]>;
    getBlockFromHeight(height: number): Promise<CappuccinoAPIBlock>;
    getTransactionSummaryRange(height: number, offset: number, limit: number): Promise<CappuccinoDerivedTransactionSummary[]>;
    getTransactionSummaryRangeForRollup(namespace: number, height: number, offset: number, limit: number): Promise<CappuccinoDerivedTransactionSummary[]>;
}
export declare class WebWorkerClientBasedCappuccinoHotShotQueryServiceStatusAPI implements CappuccinoHotShotQueryServiceStatusAPI {
    private helper;
    constructor(helper: AsyncRequestHelper);
    private sendRequest;
    blockHeight(): Promise<number>;
}
export declare class WebWorkerClientBasedCappuccinoHotShotQueryServiceExplorerAPI implements CappuccinoHotShotQueryServiceExplorerAPI {
    private helper;
    constructor(helper: AsyncRequestHelper);
    private sendRequest;
    getBlockDetail(request: CappuccinoExplorerGetBlockDetailRequest): Promise<CappuccinoExplorerGetBlockDetailResponse>;
    getBlockSummaries(request: CappuccinoExplorerGetBlockSummariesRequest): Promise<CappuccinoExplorerGetBlockSummariesResponse>;
    getTransactionDetail(request: CappuccinoExplorerGetTransactionDetailRequest): Promise<CappuccinoExplorerGetTransactionDetailResponse>;
    getTransactionSummaries(request: CappuccinoExplorerGetTransactionSummariesRequest): Promise<CappuccinoExplorerGetTransactionSummariesResponse>;
    getExplorerOverview(): Promise<CappuccinoExplorerGetExplorerSummaryResponse>;
    getSearchResult(request: CappuccinoExplorerGetSearchResultRequest): Promise<CappuccinoExplorerGetSearchResultResponse>;
}
export declare class WebWorkerClientBasedCappuccinoHotShotQueryService implements CappuccinoHotShotQueryService {
    readonly availability: CappuccinoHotShotQueryServiceAvailabilityAPI;
    readonly status: CappuccinoHotShotQueryServiceStatusAPI;
    readonly explorer: CappuccinoHotShotQueryServiceExplorerAPI;
    constructor();
}
export {};
