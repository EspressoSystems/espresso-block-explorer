import { default as React } from 'react';
/**
 * BlocksPerEpochContext is a React Context that provides the number of
 * blocks per epoch used for the Espresso Network.
 */
export declare const BlocksPerEpochContext: React.Context<bigint>;
/**
 * RetrieveBlocksPerEpoch is a React Component that retrieves the number
 * of blocks per epoch from the Light Client V2 Contract and provides it
 * via the BlocksPerEpochContext.
 */
export declare const RetrieveBlocksPerEpoch: React.FC<React.PropsWithChildren>;
