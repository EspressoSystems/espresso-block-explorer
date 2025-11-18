import { ESPTokenContractGasEstimator } from '@/contracts/esp_token/esp_token_interface';

/**
 * MockESPTokenContractGasEstimatorImpl is a mock implementation of
 * ESPTokenContractGasEstimator for testing purposes.
 */
export class MockESPTokenContractGasEstimatorImpl
  implements ESPTokenContractGasEstimator
{
  async transfer() {
    return 12345n;
  }
  async approve() {
    return 12345n;
  }
  async transferFrom() {
    return 12345n;
  }
}
