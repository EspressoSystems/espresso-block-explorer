import { ESPTokenContractGasEstimator } from '@/contracts/esp_token/esp_token_interface';

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
