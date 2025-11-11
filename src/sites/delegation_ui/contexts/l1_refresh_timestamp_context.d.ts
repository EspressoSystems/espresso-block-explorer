import { default as React } from 'react';
/**
 * L1RefreshTimestampContext defines a React Context for the current
 * L1 refresh timestamp.
 *
 * This context governs when data retrieved from the L1 and Smart Contracts
 * should be refreshed.
 */
export declare const L1RefreshTimestampContext: React.Context<Date>;
/**
 * SetL1RefreshTimestampContext defines a React Context for updating
 * the current L1 refresh timestamp.
 */
export declare const SetL1RefreshTimestampContext: React.Context<React.Dispatch<React.SetStateAction<Date>>>;
/**
 * ProvideL1RefreshTimestampContext is a React Component that provides
 * the L1RefreshTimestampContext and SetL1RefreshTimestampContext to its
 * children.
 */
export declare const ProvideL1RefreshTimestampContext: React.FC<React.PropsWithChildren>;
