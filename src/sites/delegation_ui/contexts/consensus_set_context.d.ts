import { default as React } from 'react';
/**
 * ConsensusSetContext provides a React Context
 * for the current set of active validator addresses in base64 format.
 */
export declare const ConsensusSetContext: React.Context<Set<string>>;
/**
 * DeriveConsensusSet is a React Component that
 * derives the current consensus set from the active validators
 * and provides it via the ConsensusSetContext to its children.
 */
export declare const DeriveConsensusSet: React.FC<React.PropsWithChildren>;
