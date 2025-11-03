import { FullNodeSetSnapshot } from '../../../../../../../../../../../src/service/espresso_l1_validator_service/validators_all/full_node_set_snapshot';
import { default as React } from 'react';
/**
 * AllValidatorsContext provides a React Context
 * for the current full validator set snapshot.
 */
export declare const AllValidatorsContext: React.Context<FullNodeSetSnapshot | null>;
/**
 * RetrieveAllValidators is a React Component that retrieves
 * the current full validator set and provides it
 * via the AllValidatorsContext to its children.
 */
export declare const RetrieveAllValidators: React.FC<React.PropsWithChildren>;
