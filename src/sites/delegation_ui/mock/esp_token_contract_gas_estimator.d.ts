import { ESPTokenContractGasEstimator } from '../../../contracts/esp_token/esp_token_interface';
/**
 * MockESPTokenContractGasEstimatorImpl is a mock implementation of
 * ESPTokenContractGasEstimator for testing purposes.
 */
export declare class MockESPTokenContractGasEstimatorImpl implements ESPTokenContractGasEstimator {
    transfer(): Promise<bigint>;
    approve(): Promise<bigint>;
    transferFrom(): Promise<bigint>;
}
