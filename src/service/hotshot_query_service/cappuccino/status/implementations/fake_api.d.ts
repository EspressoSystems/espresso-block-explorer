import { CappuccinoHotShotQueryServiceStatusAPI } from '../status_api';

export declare class FakeDataCappuccinoHotShotQueryServiceStatusAPI implements CappuccinoHotShotQueryServiceStatusAPI {
    blockHeight(): Promise<number>;
}
