import { StakeTableV2ContractGasEstimator } from '@/contracts/stake_table_v2/stake_table_v2_interface';

/**
 * MockStakeTableV2ContractGasEstimatorImpl is a mock implementation of
 * StakeTableV2ContractGasEstimator for testing purposes.
 */
export class MockStakeTableV2ContractGasEstimatorImpl implements StakeTableV2ContractGasEstimator {
  async deregisterValidator(): Promise<bigint> {
    return 100001n;
  }

  async delegate(): Promise<bigint> {
    return 69144n;
  }

  async undelegate(): Promise<bigint> {
    return 89736n;
  }

  async claimWithdrawal(): Promise<bigint> {
    return 100002n;
  }

  async claimValidatorExit(): Promise<bigint> {
    return 100003n;
  }

  async updateConsensusKeysV2(): Promise<bigint> {
    return 100004n;
  }
}
