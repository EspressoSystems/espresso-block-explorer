import { NodeSetEntry } from '../../../../../../../../../../../src/service/espresso_staking_api_service/common/node_set_entry';
import { default as React } from 'react';
/**
 * ValidatorNodeContext provides a React Context
 * for a single validator node entry.
 */
export declare const ValidatorNodeContext: React.Context<NodeSetEntry>;
/**
 * ProvideValidatorNodeContext is a React Component that
 * provides the ValidatorNodeContext for its children
 * by looking up the node address in the AllValidatorsContext.
 */
export declare const ProvideValidatorNodeContext: React.FC<React.PropsWithChildren>;
