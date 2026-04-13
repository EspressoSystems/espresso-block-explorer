import { HotShotQueryServiceStatusAPI } from '../status_api';
export declare class FetchBasedHotShotQueryServiceStatusAPI implements HotShotQueryServiceStatusAPI {
    private readonly fetcher;
    private readonly baseURL;
    private readonly blockHeightURL;
    private readonly blockHeightResponseValidator;
    constructor(fetcher: typeof fetch, baseURL: URL);
    blockHeight(): Promise<number>;
}
