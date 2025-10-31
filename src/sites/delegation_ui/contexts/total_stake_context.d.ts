import { default as React } from 'react';
/**
 * TotalStakeContext provides a React Context
 * for the total stake of all validators.
 */
export declare const TotalStakeContext: React.Context<bigint>;
/**
 * DeriveTotalStake is a component that Provides the TotalStakeContext
 * by calculating the total stake from the AllValidatorsContext.
 */
export declare const DeriveTotalStake: React.FC<React.PropsWithChildren>;
