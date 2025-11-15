import { ActiveNodeSetEntry } from '../../../../../../../../../../../src/service/espresso_l1_validator_service/common/active_node_set_entry';
import { default as React } from 'react';
/**
 * ConsensusMapContext provides a React Context
 * for the current set of active validator addresses in base64 format.
 */
export declare const ConsensusMapContext: React.Context<Map<`0x${string}`, ActiveNodeSetEntry>>;
/**
 * DeriveConsensusSet is a React Component that
 * derives the current consensus set from the active validators
 * and provides it via the ConsensusSetContext to its children.
 */
export declare const DeriveConsensusSet: React.FC<React.PropsWithChildren>;
