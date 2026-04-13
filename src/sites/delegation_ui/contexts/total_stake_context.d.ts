import { default as React } from 'react';
/**
 * TotalStakeContext provides a React Context
 * for the total stake of all validators.
 */
export declare const TotalStakeContext: React.Context<bigint>;
/**
 * LargestNodeStakeContext provides a React Context for the largest stake among
 * all of the full node set.
 */
export declare const LargestNodeStakeContext: React.Context<bigint>;
/**
 * LargestNodeHasOver10PercentageContext is a context that is used as a quickly
 * referencable flag, that indicates whether a single validator node controls
 * at least 10% of the stake.
 *
 * This is utilized for formatting alignment purposes at the monent.
 */
export declare const LargestNodeHasOver10PercentageContext: React.Context<boolean>;
/**
 * DeriveTotalStake is a component that Provides the TotalStakeContext
 * by calculating the total stake from the AllValidatorsContext.
 */
export declare const DeriveTotalStake: React.FC<React.PropsWithChildren>;
