import { AsyncSnapshot } from '../../../../../../../../../../../src/components/data/async_data/AsyncSnapshot';
import { default as React } from 'react';
export declare const ESPBalanceContext: React.Context<bigint>;
export declare const ESPBalanceAsyncSnapshotContext: React.Context<AsyncSnapshot<bigint>>;
/**
 * ProvideTotalSupply is a React component that fetches
 * the total supply of the ESP token from the blockchain
 * and provides it via TotalSupplyContext.
 */
export declare const ProvideESPBalance: React.FC<React.PropsWithChildren>;
/**
 * ProvideTotalSupplyFromAPICall is a React component that fetches
 * the total supply of the ESP token from the local ESPTokenContract
 * and provides it via TotalSupplyContext.
 */
export declare const ProvideTotalSupplyFromContractCall: React.FC<React.PropsWithChildren>;
