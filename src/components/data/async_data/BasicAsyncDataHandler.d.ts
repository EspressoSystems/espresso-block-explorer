import { default as React } from 'react';

export interface BasicAsyncDataHandlerProps {
    children: React.ReactNode | React.ReactNode[];
}
/**
 * BasicAsyncDataHandler is a basic behavior handler for Async data provided
 * via the LoadingContext and ErrorContext.
 *
 * This component acts as a guard for the actual children who will be expected
 * to consume a DataContext element.  However, if there is an error, or if the
 * async data is still loading, this component will display contents somewhat
 * appropriate to indicate each state.
 */
export declare const BasicAsyncDataHandler: React.FC<BasicAsyncDataHandlerProps>;
