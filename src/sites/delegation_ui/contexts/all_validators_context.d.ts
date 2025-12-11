import { NodeSetEntry } from '../../../../../../../../../../../src/service/espresso_l1_validator_service/common/node_set_entry';
import { default as React } from 'react';
/**
 * AllValidatorsContext provides a React Context
 * for the current full validator set snapshot.
 */
export declare const AllValidatorsContext: React.Context<Map<`0x${string}`, NodeSetEntry>>;
/**
 * NodeAddressListContext provides a React Context for a list of validator
 * addresses.
 */
export declare const NodeAddressListContext: React.Context<`0x${string}`[]>;
/**
 * DeriveNodeSetFromFullNodeSetSnapshot is a React Component that
 * derives the NodeAddressListContext and AllValidatorsContext
 * from the FullNodeSetSnapshotContext and provides them to its descendants.
 */
export declare const DeriveNodeSetFromFullNodeSetSnapshot: React.FC<React.PropsWithChildren>;
