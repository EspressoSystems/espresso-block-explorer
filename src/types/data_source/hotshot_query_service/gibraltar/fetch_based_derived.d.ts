import { GibraltarAPIBlock, GibraltarAPILeafResponse, GibraltarAPITransactionResponse, GibraltarDerivedBlockSummary, GibraltarDerivedTransactionSummary, GibraltarExtendedHotShotQueryService, GibraltarExtendedHotShotQueryServiceAvailabilityAPI, GibraltarHotShotQueryService, GibraltarHotShotQueryServiceAvailabilityAPI, GibraltarHotShotQueryServiceStatusAPI } from './types';
export declare class FetchBasedGibraltarHotShotQueryServiceAvailabilityAPI implements GibraltarExtendedHotShotQueryServiceAvailabilityAPI, GibraltarHotShotQueryServiceAvailabilityAPI {
    private readonly fetcher;
    private readonly baseURL;
    constructor(fetcher: typeof fetch, url: URL);
    getLeafFromHeight(height: number): Promise<GibraltarAPILeafResponse>;
    getTransactionFromHeightAndOffset(height: number, index: number): Promise<GibraltarAPITransactionResponse>;
    getBlockSummaries(from: number, until: number): Promise<GibraltarDerivedBlockSummary[]>;
    getBlockFromHeight(height: number): Promise<GibraltarAPIBlock>;
    private streamBlocksFromHeightRange;
    getTransactionSummaryRange(height: number, offset: number, limit: number): Promise<GibraltarDerivedTransactionSummary[]>;
    getTransactionSummaryRangeForRollup(namespace: number, height: number, offset: number, limit: number): Promise<GibraltarDerivedTransactionSummary[]>;
}
export declare class FetchBasedGibraltarHotShotQueryServiceStatusAPI implements GibraltarHotShotQueryServiceStatusAPI {
    private readonly fetcher;
    private readonly baseURL;
    private readonly blockHeightURL;
    private readonly blockHeightResponseValidator;
    constructor(fetcher: typeof fetch, url: URL);
    blockHeight(): Promise<number>;
}
export declare class FetchBasedGibraltarHotShotQueryService implements GibraltarExtendedHotShotQueryService, GibraltarHotShotQueryService {
    readonly availability: GibraltarExtendedHotShotQueryServiceAvailabilityAPI & GibraltarHotShotQueryServiceAvailabilityAPI;
    readonly status: GibraltarHotShotQueryServiceStatusAPI;
    constructor(fetcher: typeof fetch, baseURL: URL);
}
