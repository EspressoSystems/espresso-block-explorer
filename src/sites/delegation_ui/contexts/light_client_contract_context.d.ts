import { LightClientContract } from '../../../contracts/light_client/light_client_interface';
import { default as React } from 'react';
/**
 * LightClientContractContext is a React context that provides
 * the Light client contract instance.
 */
export declare const LightClientContractContext: React.Context<LightClientContract | null>;
/**
 * LightClientContractGasEstimatorContext is a React context that provides
 * the Light client contract gas estimator instance.
 */
export declare const LightClientContractGasEstimatorContext: React.Context<import('../../../contracts/l1/l1_interface').GasEstimatorForContract<import('../../../contracts/light_client/light_client_interface').LightClientContractWriteable> | null>;
/**
 * ProvideLightClientContract is a React component that provides
 * the Light client contract via LightClientContractContext.
 */
export declare const ProvideLightClientContract: React.FC<React.PropsWithChildren>;
