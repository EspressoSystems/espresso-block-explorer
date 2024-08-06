import React from 'react';
import './error_display.css';

export interface ErrorDescriptionProps {
  children: React.ReactNode | React.ReactNode[];
}

/**
 * ErrorDescription represents the string contents of an Error Display.  More
 * specifically, how the message of the error is conveyed to the end-user.
 */
export const ErrorDescription: React.FC<ErrorDescriptionProps> = (props) => {
  return <p className="error-display--description">{props.children}</p>;
};
