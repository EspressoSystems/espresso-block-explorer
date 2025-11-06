import { ESPTokenContract } from '../../../contracts/esp_token/esp_token_interface';
import { default as React } from 'react';
/**
 * ESPTokenContractContext provides a React Context
 * for the ESP token contract.
 */
export declare const ESPTokenContractContext: React.Context<ESPTokenContract | null>;
/**
 * ProvideESPTokenContract is a React component that provides
 * the ESP token contract via ESPTokenContractContext.
 */
export declare const ProvideESPTokenContract: React.FC<React.PropsWithChildren>;
