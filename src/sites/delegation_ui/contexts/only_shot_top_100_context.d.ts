import { default as React } from 'react';
/**
 * OnlyShowTop100Context is a React context that holds a boolean value
 * indicating whether only the top 100 entries should be shown.
 */
export declare const OnlyShowTop100Context: React.Context<boolean>;
/**
 * SetOnlyShowTop100Context is a React context that holds a setter function
 * to update the boolean value indicating whether only the top 100 entries
 * should be shown.
 */
export declare const SetOnlyShowTop100Context: React.Context<React.Dispatch<React.SetStateAction<boolean>>>;
/**
 * ProvideShowTop100Filter is a React component that provides the context
 * for filtering to show only the top 100 entries.
 */
export declare const ProvideShowTop100Filter: React.FC<React.PropsWithChildren>;
