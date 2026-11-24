import { default as React } from 'react';
/**
 * DelegateAfterConnectContext asks the user to connect a wallet and, once
 * they do, opens the staking modal on the delegate step for the given
 * validator. Without a wallet connected, this lets Delegate continue where
 * it left off instead of making the user find the validator again.
 */
export declare const DelegateAfterConnectContext: React.Context<(validator: `0x${string}`) => void>;
/**
 * ProvideDelegateAfterConnect provides the DelegateAfterConnectContext. It
 * must be rendered inside of the staking modal's ProvideDialogModalControls.
 */
export declare const ProvideDelegateAfterConnect: React.FC<React.PropsWithChildren>;
