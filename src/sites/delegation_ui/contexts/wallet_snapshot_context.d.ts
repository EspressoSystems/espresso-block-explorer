import { WalletSnapshot } from '../../../../../../../../../../../src/service/espresso_l1_validator_service/wallet/wallet_snapshot';
import { default as React } from 'react';
/**
 * WalletSnapshotContext provides a React Context
 * for the current wallet snapshot.
 */
export declare const WalletSnapshotContext: React.Context<WalletSnapshot | null>;
/**
 * RetrieveWalletSnapshot is a React Component that retrieves
 * a Wallet Snapshot from the L1 Validator API Service.
 */
export declare const RetrieveWalletSnapshot: React.FC<React.PropsWithChildren>;
