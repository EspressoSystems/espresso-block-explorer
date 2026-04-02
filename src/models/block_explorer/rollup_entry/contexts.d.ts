import { default as React } from 'react';
import { RollUpEntry } from './types';
/**
 * NamespaceContext is a React Context that holds a reference to the
 * current Namespace
 */
export declare const NamespaceContext: React.Context<number>;
/**
 * RollUpEntryContext is a React Context that holds a reference to the
 * populated `RollUpEntry` object.
 */
export declare const RollUpEntryContext: React.Context<RollUpEntry | null>;
