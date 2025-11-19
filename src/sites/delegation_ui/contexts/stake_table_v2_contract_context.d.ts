import { StakeTableV2Contract } from '../../../contracts/stake_table_v2/stake_table_v2_interface';
import { default as React } from 'react';
/**
 * StakeTableV2ContractContext is a React context that provides
 * the Stake Table V2 contract instance.
 */
export declare const StakeTableV2ContractContext: React.Context<StakeTableV2Contract | null>;
/**
 * StakeTableV2ContractGasEstimatorContext is a React context that provides
 * the Stake Table V2 contract gas estimator instance.
 */
export declare const StakeTableV2ContractGasEstimatorContext: React.Context<import('../../../contracts/l1/l1_interface').GasEstimatorForContract<import('../../../contracts/stake_table_v2/stake_table_v2_interface').StakeTableV2ContractWriteable> | null>;
/**
 * ProvideStakeTableV2Contract is a React component that provides
 * the Stake Table V2 contract via StakeTableV2ContractContext.
 */
export declare const ProvideStakeTableV2Contract: React.FC<React.PropsWithChildren>;
