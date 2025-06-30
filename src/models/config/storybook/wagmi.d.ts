import { Environment } from '../environment/environment';
import { WagmiConfig } from '../environment/wagmi';
export declare const mainnet: WagmiConfig;
export declare const decaf: WagmiConfig;
export declare const water: WagmiConfig;
export declare const milk: WagmiConfig;
/**
 * getWagmiConfigForEnvironment returns the appropriate WagmiConfig based on
 * the provided environment.
 * @param environment
 * @returns
 */
export declare function getWagmiConfigForEnvironment(environment: Environment): WagmiConfig;
