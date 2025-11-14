import { default as React } from 'react';
/**
 * EspressoBlockHeightContext provides a React Context
 * for the last queried block height of the Espresso Chain
 */
export declare const EspressoBlockHeightContext: React.Context<bigint | null>;
/**
 * RetrieveActiveValidators is a React Component that retrieves
 * the current Espresso Block Height set and provides it
 * via the EspressoBlockHeightContext to its children.
 */
export declare const RetrieveEspressoBlockHeight: React.FC<React.PropsWithChildren>;
