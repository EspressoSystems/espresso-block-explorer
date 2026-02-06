import { default as React } from 'react';
/**
 * CurrentTotalPendingUndelegationAmountContext provides a React Context for
 * the total sum amount of withdrawal amounts from pending undelegations (
 * undelegations that have yet to be withdrawan.
 * )
 */
export declare const CurrentTotalPendingUndelegationAmountContext: React.Context<bigint>;
/**
 * DeriveCurrentTotalStaked is a component that Provides the
 * CurrentTotalStakedContext by calculating the total mount Staked to all
 * current Validators from the Wallet SnapshotContext.
 */
export declare const DeriveCurrentTotalPendingUndelegationAmount: React.FC<React.PropsWithChildren>;
