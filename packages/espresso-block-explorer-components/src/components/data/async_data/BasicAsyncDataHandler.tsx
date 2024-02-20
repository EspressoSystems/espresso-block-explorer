import React from 'react';
import { ErrorContext } from '../../contexts/ErrorProvider';
import { LoadingContext } from '../../contexts/LoadingProvider';
import { CircularProgressIndicator } from '../../loading/Loading';
import Text from '../../text/Text';

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
export const BasicAsyncDataHandler: React.FC<BasicAsyncDataHandlerProps> = (
  props,
) => {
  const loading = React.useContext(LoadingContext);
  const error = React.useContext(ErrorContext);

  if (loading) {
    return <CircularProgressIndicator />;
  }

  if (error) {
    return (
      <>
        <Text text="Encountered Error" />
        <br />
        <Text text={error.toString()} />
      </>
    );
  }

  return <>{props.children}</>;
};
