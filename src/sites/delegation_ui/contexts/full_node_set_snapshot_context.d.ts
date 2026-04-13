import { FullNodeSetSnapshot } from '../../../../../../../../../../../src/service/espresso_staking_api_service/validators_all/full_node_set_snapshot';
import { default as React } from 'react';
/**
 * FullNodeSetSnapshotContext provides a React Context
 * for the current full validator set snapshot.
 */
export declare const FullNodeSetSnapshotContext: React.Context<FullNodeSetSnapshot | null>;
/**
 * RetrieveFullNodeSetSnapshot is a React Component that retrieves
 * the current full validator set and provides it
 * via the AllValidatorsContext to its children.
 */
export declare const RetrieveFullNodeSetSnapshot: React.FC<React.PropsWithChildren>;
