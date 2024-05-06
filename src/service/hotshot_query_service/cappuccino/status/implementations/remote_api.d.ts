import { CappuccinoHotShotQueryServiceStatusAPI } from '../status_api';

export declare class FetchBasedCappuccinoHotShotQueryServiceStatusAPI implements CappuccinoHotShotQueryServiceStatusAPI {
    private readonly fetcher;
    private readonly baseURL;
    private readonly blockHeightURL;
    private readonly blockHeightResponseValidator;
    constructor(fetcher: typeof fetch, url: URL);
    blockHeight(): Promise<number>;
}
