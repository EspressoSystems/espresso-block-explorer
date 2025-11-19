import { StakeTableV2ContractGasEstimator } from '../../../contracts/stake_table_v2/stake_table_v2_interface';
/**
 * MockStakeTableV2ContractGasEstimatorImpl is a mock implementation of
 * StakeTableV2ContractGasEstimator for testing purposes.
 */
export declare class MockStakeTableV2ContractGasEstimatorImpl implements StakeTableV2ContractGasEstimator {
    deregisterValidator(): Promise<bigint>;
    delegate(): Promise<bigint>;
    undelegate(): Promise<bigint>;
    claimWithdrawal(): Promise<bigint>;
    claimValidatorExit(): Promise<bigint>;
    updateConsensusKeysV2(): Promise<bigint>;
}
