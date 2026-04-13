import { HotShotQueryServiceStatusAPI } from '../status_api';
export declare class FakeDataHotShotQueryServiceStatusAPI implements HotShotQueryServiceStatusAPI {
    blockHeight(): Promise<number>;
}
