import { LightClientV2Contract } from '../../../contracts/light_client_v2/light_client_v2_interface';
import { default as React } from 'react';
/**
 * LightClientV2ContractContext is a React context that provides
 * the Light client V2 contract instance.
 */
export declare const LightClientV2ContractContext: React.Context<LightClientV2Contract | null>;
/**
 * LightClientV2ContractGasEstimatorContext is a React context that provides
 * the Light client V2 contract gas estimator instance.
 */
export declare const LightClientV2ContractGasEstimatorContext: React.Context<import('../../../contracts/l1/l1_interface').GasEstimatorForContract<import('../../../contracts/light_client_v2/light_client_v2_interface').LightClientV2ContractWriteable> | null>;
/**
 * ProvideLightClientV2Contract is a React component that provides
 * the Light client V2 contract via LightClientV2ContractContext.
 */
export declare const ProvideLightClientV2Contract: React.FC<React.PropsWithChildren>;
