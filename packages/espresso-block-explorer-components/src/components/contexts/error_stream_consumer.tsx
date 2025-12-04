import React from 'react';
import AsyncIterableResolver from '../data/async_data/AsyncIterableResolver';
import { DataContext } from './DataProvider';
import { ErrorContext, ErrorStreamContext } from './ErrorProvider';

export interface ErrorStreamConsumerProps {
  children: React.ReactNode | React.ReactNode[];
}

/**
 * ErrorStreamConsumer is a component that is used to consume errors off of
 * the ErrorStreamContext.  This component will resolve the error stream
 * and provide the resolved error to the children of this component.
 */
export const ErrorStreamConsumer: React.FC<ErrorStreamConsumerProps> = (
  props,
) => {
  const stream = React.useContext(ErrorStreamContext);

  return (
    <AsyncIterableResolver asyncIterable={stream}>
      <ErrorForwarder>{props.children}</ErrorForwarder>
    </AsyncIterableResolver>
  );
};

export interface ErrorForwarderProps {
  children: React.ReactNode | React.ReactNode[];
}

/**
 * ErrorForwarder is a component that is used to forward errors decoded from
 * the DataContext to the ErrorContext. This is only expected to be useful
 * when consuming an asynchronous snapshot whose value, and error are both
 * errors.
 */
const ErrorForwarder: React.FC<ErrorForwarderProps> = (props) => {
  const data = React.useContext(DataContext);
  const error = React.useContext(ErrorContext);

  return (
    <ErrorContext.Provider value={error ?? data}>
      {props.children}
    </ErrorContext.Provider>
  );
};
