import { default as React } from 'react';
/**
 * EspressoRefreshTimestampContext defines a React Context for the current
 * Espresso refresh timestamp.
 *
 * This context governs when data retrieved from the Espresso network.
 */
export declare const EspressoRefreshTimestampContext: React.Context<Date>;
/**
 * SetEspressoRefreshTimestampContext defines a React Context for updating
 * the current Espresso refresh timestamp.
 */
export declare const SetEspressoRefreshTimestampContext: React.Context<React.Dispatch<React.SetStateAction<Date>>>;
/**
 * ProvideEspressoRefreshTimestampContext is a React Component that provides
 * the EspressoRefreshTimestampContext and SetEspressoRefreshTimestampContext
 * to its children.
 */
export declare const ProvideEspressoRefreshTimestampContext: React.FC<React.PropsWithChildren>;
