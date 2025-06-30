import { HotShotQueryServiceStatusAPI } from '../../types';
/**
 * CappuccinoHotShotQueryServiceStatusAPI is a type that represents the
 * Status API for the Cappuccino HotShot Query Service. This interface
 * represents the idealized interactions for the Status API.  This should
 * allow for easy interactions with the Status API, while also allowing for
 * different implementations for testing purposes.
 */
export type CappuccinoHotShotQueryServiceStatusAPI = HotShotQueryServiceStatusAPI;
/**
 * UnimplementedCappuccinoHotShotQueryServiceStatusAPI is a class that
 * implements the CappuccinoHotShotQueryServiceStatusAPI interface, but
 * throws an UnimplementedError for all methods. This class is meant to be used
 * as a placeholder for the Status API, and should be replaced with a real
 * implementation.
 */
export declare class UnimplementedCappuccinoHotShotQueryServiceStatusAPI implements CappuccinoHotShotQueryServiceStatusAPI {
    blockHeight(): Promise<number>;
}
