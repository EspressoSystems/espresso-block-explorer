import { StakeTableContract } from '../../../contracts/stake_table/stake_table_interface';
import { default as React } from 'react';
/**
 * StakeTableContractContext is a React context that provides
 * the Stake Table contract instance.
 */
export declare const StakeTableContractContext: React.Context<StakeTableContract | null>;
/**
 * StakeTableContractGasEstimatorContext is a React context that provides
 * the Stake Table contract gas estimator instance.
 */
export declare const StakeTableContractGasEstimatorContext: React.Context<import('../../../contracts/l1/l1_interface').GasEstimatorForContract<import('../../../contracts/stake_table/stake_table_interface').StakeTableContractWriteable> | null>;
/**
 * ProvideESPTokenContract is a React component that provides
 * the ESP token contract via ESPTokenContractContext.
 */
export declare const ProvideStakeTableContract: React.FC<React.PropsWithChildren>;
