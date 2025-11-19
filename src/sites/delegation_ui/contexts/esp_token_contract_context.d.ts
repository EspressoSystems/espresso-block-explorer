import { ESPTokenContract } from '../../../contracts/esp_token/esp_token_interface';
import { default as React } from 'react';
/**
 * ESPTokenContractContext provides a React Context
 * for the ESP token contract.
 */
export declare const ESPTokenContractContext: React.Context<ESPTokenContract | null>;
/**
 * ESPTokenContractGasEstimatorContext provides a React Context
 * for the ESP token contract gas estimator.
 */
export declare const ESPTokenContractGasEstimatorContext: React.Context<import('../../../contracts/l1/l1_interface').GasEstimatorForContract<import('../../../contracts/erc20_upgradable/erc20_upgradable_interface').ERC20UpgradableWriteable> | null>;
/**
 * ProvideESPTokenContract is a React component that provides
 * the ESP token contract via ESPTokenContractContext.
 */
export declare const ProvideESPTokenContract: React.FC<React.PropsWithChildren>;
