import { default as React } from 'react';
export interface ErrorContextGuardProps {
    children: React.ReactNode | React.ReactNode[];
}
/**
 * ErrorContextGuard is a component that guards the rendering of children based
 * on the presence of an error in the ErrorContext.
 *
 * If an error is present, the ErrorContextGuard will render an error message.
 */
declare const ErrorContextGuard: React.FC<ErrorContextGuardProps>;
export default ErrorContextGuard;
