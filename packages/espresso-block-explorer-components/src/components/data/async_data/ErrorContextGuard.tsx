import React from 'react';
import { ErrorContext } from '../../contexts/ErrorProvider';
import Text from '../../text/Text';

export interface ErrorContextGuardProps {
  children: React.ReactNode | React.ReactNode[];
}

/**
 * ErrorContextGuard is a component that guards the rendering of children based
 * on the presence of an error in the ErrorContext.
 *
 * If an error is present, the ErrorContextGuard will render an error message.
 */
const ErrorContextGuard: React.FC<ErrorContextGuardProps> = (props) => {
  const error = React.useContext(ErrorContext);

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

export default ErrorContextGuard;
