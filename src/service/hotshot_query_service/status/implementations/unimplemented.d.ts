import { HotShotQueryServiceStatusAPI } from '../status_api';
/**
 * UnimplementedHotShotQueryServiceStatusAPI is a class that
 * implements the HotShotQueryServiceStatusAPI interface, but
 * throws an UnimplementedError for all methods. This class is meant to be used
 * as a placeholder for the Status API, and should be replaced with a real
 * implementation.
 */
export declare class UnimplementedHotShotQueryServiceStatusAPI implements HotShotQueryServiceStatusAPI {
    blockHeight(): Promise<number>;
}
