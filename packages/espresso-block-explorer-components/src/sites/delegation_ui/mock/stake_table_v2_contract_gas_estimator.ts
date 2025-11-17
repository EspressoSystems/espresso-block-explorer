import { StakeTableV2ContractGasEstimator } from '@/contracts/stake_table_v2/stake_table_v2_interface';

export class MockStakeTableV2ContractGasEstimatorImpl
  implements StakeTableV2ContractGasEstimator
{
  async deregisterValidator(): Promise<bigint> {
    return 100001n;
  }

  async delegate(): Promise<bigint> {
    return 68501n;
  }

  async undelegate(): Promise<bigint> {
    return 88783n;
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
