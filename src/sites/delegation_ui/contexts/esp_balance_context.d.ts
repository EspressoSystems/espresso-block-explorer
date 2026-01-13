import { AsyncSnapshot } from '../../../../../../../../../../../src/components/data/async_data/async_snapshot';
import { default as React } from 'react';
export declare const ESPBalanceContext: React.Context<bigint>;
export declare const ESPBalanceAsyncSnapshotContext: React.Context<AsyncSnapshot<bigint>>;
/**
 * ProvideESPBalance is a React component that fetches the current wallet's
 * ESP balance and provides it via TotalSupplyContext.
 */
export declare const ProvideESPBalance: React.FC<React.PropsWithChildren>;
/**
 * ProvideESPBalanceFromAPICall is a React component that fetches
 * the current balance for the active wallet from the ESPTokenContract
 * and provides it via ESPBalanceContext.
 */
export declare const ProvideESPBalanceFromContractCall: React.FC<React.PropsWithChildren>;
