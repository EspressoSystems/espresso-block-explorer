import { default as React } from 'react';
import { type RollUpEntry } from './types';

/**
 * NamespaceContext is a React Context that holds a reference to the
 * current Namespace
 */
export const NamespaceContext = React.createContext<number>(0);

/**
 * RollUpEntryContext is a React Context that holds a reference to the
 * populated `RollUpEntry` object.
 */
export const RollUpEntryContext = React.createContext<null | RollUpEntry>(null);
