import { ActiveNodeSetSnapshot } from '../../../../../../../../../../../src/service/espresso_l1_validator_service/validators_active/active_node_set_snapshot';
import { default as React } from 'react';
/**
 * ActiveValidatorsContext provides a React Context
 * for the current active validator set snapshot.
 */
export declare const ActiveValidatorsContext: React.Context<ActiveNodeSetSnapshot | null>;
/**
 * RetrieveActiveValidators is a React Component that retrieves
 * the current active validator set and provides it
 * via the ActiveValidatorsContext to its children.
 */
export declare const RetrieveActiveValidators: React.FC<React.PropsWithChildren>;
