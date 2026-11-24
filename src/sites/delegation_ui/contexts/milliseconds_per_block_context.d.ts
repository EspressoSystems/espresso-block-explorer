import { default as React } from 'react';
/**
 * MillisecondsPerBlockContext is a React Context that provides the average time
 * per block used for the Espresso Network.
 */
export declare const MillisecondsPerBlockContext: React.Context<number>;
/**
 * MillisecondsPerBlockMeasuredContext is true once MillisecondsPerBlockContext
 * holds a value measured from block headers rather than its default.
 */
export declare const MillisecondsPerBlockMeasuredContext: React.Context<boolean>;
export declare const ComputeMillisecondsPerBlock: React.FC<React.PropsWithChildren>;
