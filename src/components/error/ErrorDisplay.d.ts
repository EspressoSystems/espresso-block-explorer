import { default as React } from '../../../../../node_modules/react';

export interface ErrorDisplayProps {
    className?: string;
}
/**
 * ErrorDisplay is a component that attempts to display an error message to the
 * end-user. This components is meant for flexibility in that it handles the
 * specific error via some sub-component.  This component also guards against
 * non-existing errors retrieved from the ErrorContext.
 */
export declare const ErrorDisplay: React.FC<ErrorDisplayProps>;
