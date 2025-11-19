import { TextEditingValue } from '../../../../../../../../../../../src/components/input/text/types';
import { default as React } from 'react';
/**
 * ProvideSearchFilter is a React context that provides the context
 * for filtering using a search term.
 */
export declare const SearchFilterContext: React.Context<TextEditingValue>;
/**
 * SetSearchFilterContext is a React context that provides the context
 * for setting the search filter.
 */
export declare const SetSearchFilterContext: React.Context<React.Dispatch<React.SetStateAction<TextEditingValue>>>;
/**
 * ProvideSearchFilter is a React context provider for the search filter input.
 */
export declare const ProvideSearchFilter: React.FC<React.PropsWithChildren>;
