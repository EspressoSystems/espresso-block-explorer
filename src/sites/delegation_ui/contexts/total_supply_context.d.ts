import { AsyncSnapshot } from '../../../../../../../../../../../src/components/data/async_data/AsyncSnapshot';
import { default as React } from 'react';
/**
 * TotalSupplyContext provides a React Context
 * for the total supply of the ESP token.
 */
export declare const TotalSupplyContext: React.Context<bigint | null>;
export declare const TotalSupplyAsyncSnapshotContext: React.Context<AsyncSnapshot<bigint>>;
/**
 * ProvideTotalSupply is a React component that fetches
 * the total supply of the ESP token from the blockchain
 * and provides it via TotalSupplyContext.
 */
export declare const ProvideTotalSupply: React.FC<React.PropsWithChildren>;
/**
 * ProvideTotalSupplyFromAPICall is a React component that fetches
 * the total supply of the ESP token from the local ESPTokenContract
 * and provides it via TotalSupplyContext.
 */
export declare const ProvideTotalSupplyFromContractCall: React.FC<React.PropsWithChildren>;
/**
 * ProvideTotalSupplyFromContractRead is a React component that fetches
 * the total supply of the ESP token from the blockchain
 * and provides it via TotalSupplyContext.
 */
export declare const ProvideTotalSupplyFromContractRead: React.FC<React.PropsWithChildren>;
