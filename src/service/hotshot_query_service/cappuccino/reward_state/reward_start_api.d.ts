import { HotShotQueryServiceRewardStateAPI } from '../../types';
/**
 * CappuccinoHotShotQueryServiceRewardStateAPI is a type that represents the
 * Reward State API for the Cappuccino HotShot Query Service. This interface
 * represents the idealized interactions for the Reward StateAPI.  This should
 * allow for easy interactions with the Reward State API, while also allowing for
 * different implementations for testing purposes.
 */
export type CappuccinoHotShotQueryServiceRewardStateAPI = HotShotQueryServiceRewardStateAPI;
/**
 * UnimplementedCappuccinoHotShotQueryServiceRewardStateAPI is a class that
 * implements the CappuccinoHotShotQueryServiceRewardStateAPI interface, but
 * throws an UnimplementedError for all methods. This class is meant to be used
 * as a placeholder for the Reward State API, and should be replaced with a real
 * implementation.
 */
export declare class UnimplementedCappuccinoHotShotQueryServiceRewardStateAPI implements CappuccinoHotShotQueryServiceRewardStateAPI {
    getLatestRewardBalance(): Promise<bigint>;
}
