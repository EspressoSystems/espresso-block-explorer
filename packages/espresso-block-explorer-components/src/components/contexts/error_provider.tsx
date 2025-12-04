import { emptyAsyncIterable } from '@/functional/functional_async';
import React, { createContext } from 'react';

/**
 * ErrorContext is a React Context that is used to store and make available
 * any error present in the component tree.
 */
export const ErrorContext = createContext<unknown>(null);

/**
 * ErrorStreamContext is similar to ErrorContext, however it is potentially
 * updatable.
 */
export const ErrorStreamContext =
  createContext<AsyncIterable<null | unknown>>(emptyAsyncIterable());

export interface SetErrorProps {
  error: unknown;
  children: React.ReactNode | React.ReactNode[];
}

export const SetError: React.FC<SetErrorProps> = (props) => (
  <ErrorContext.Provider value={props.error}>
    {props.children}
  </ErrorContext.Provider>
);

const ErrorCarryContext = createContext<unknown>(null);

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
export const ErrorCarry: React.FC<ErrorCarryProps> = (props) => {
  const error = React.useContext(ErrorContext);

  return (
    <ErrorCarryContext.Provider value={error}>
      {props.children}
    </ErrorCarryContext.Provider>
  );
};

export interface ErrorJoinerProps {
  children: React.ReactNode | React.ReactNode[];
}

/**
 * ErrorJoiner is a helper component that is able to combine errors from
 * teh ErrorCarry component, and the original ErrorContext that is encountered.
 * This will prioritize the error from the ErrorContext, and then fall back
 * to the error provided by the ErrorCarry component.
 */
export const ErrorJoiner: React.FC<ErrorJoinerProps> = (props) => {
  const error = React.useContext(ErrorContext);
  const carriedError = React.useContext(ErrorCarryContext);

  return (
    <ErrorContext.Provider value={error ?? carriedError}>
      {props.children}
    </ErrorContext.Provider>
  );
};
