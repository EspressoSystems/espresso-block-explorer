import { ErrorDisplay } from '@/components/error/ErrorDisplay';
import { ErrorContext } from '@/contexts/ErrorProvider';
import React from 'react';

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
    return <ErrorDisplay />;
  }

  return <>{props.children}</>;
};

export default ErrorContextGuard;
