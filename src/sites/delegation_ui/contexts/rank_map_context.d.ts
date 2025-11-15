import { default as React } from 'react';
/**
 * RankMapContext provides a React Context
 * for the current mapping of validator addresses to their ranks.
 */
export declare const RankMapContext: React.Context<Map<`0x${string}`, number>>;
/**
 * DeriveRank is a React Component that
 * derives the current rank mapping from the all validators
 * and provides it via the RankMapContext to its children.
 */
export declare const DeriveRank: React.FC<React.PropsWithChildren>;
