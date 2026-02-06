import { default as React } from 'react';
/**
 * TotalStakedContext provides a React Context for the total amount of
 * allocated stake the current wallet has for its validators.
 */
export declare const CurrentTotalStakedContext: React.Context<bigint>;
/**
 * DeriveCurrentTotalStaked is a component that Provides the
 * CurrentTotalStakedContext by calculating the total mount Staked to all
 * current Validators from the Wallet SnapshotContext.
 */
export declare const DeriveCurrentTotalStaked: React.FC<React.PropsWithChildren>;
