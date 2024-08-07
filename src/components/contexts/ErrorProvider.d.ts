import { default as React } from '../../../../../node_modules/react';

/**
 * ErrorContext is a React Context that is used to store and make available
 * any error present in the component tree.
 */
export declare const ErrorContext: React.Context<unknown>;
/**
 * ErrorStreamContext is similar to ErrorContext, however it is potentially
 * updatable.
 */
export declare const ErrorStreamContext: React.Context<AsyncIterable<unknown>>;
export interface SetErrorProps {
    error: unknown;
    children: React.ReactNode | React.ReactNode[];
}
export declare const SetError: React.FC<SetErrorProps>;
export interface ErrorCarryProps {
    children: React.ReactNode | React.ReactNode[];
}
/**
 * ErrorCarry is a helper component that is provided in order to carry an
 * error from the error context, and assign it to a new context.  This is
 * helpful since ErrorContext is overwritten by any downstream error that
 * is encountered.
 *
 * This can be used in conjunction with ErrorJoiner to combine errors from
 * different contexts.
 */
export declare const ErrorCarry: React.FC<ErrorCarryProps>;
export interface ErrorJoinerProps {
    children: React.ReactNode | React.ReactNode[];
}
/**
 * ErrorJoiner is a helper component that is able to combine errors from
 * teh ErrorCarry component, and the original ErrorContext that is encountered.
 * This will prioritize the error from the ErrorContext, and then fall back
 * to the error provided by the ErrorCarry component.
 */
export declare const ErrorJoiner: React.FC<ErrorJoinerProps>;
