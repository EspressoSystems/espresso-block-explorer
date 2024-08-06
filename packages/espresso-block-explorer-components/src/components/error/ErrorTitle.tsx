import React from 'react';
import './error_display.css';

export interface ErrorTitleProps {
  children: React.ReactNode | React.ReactNode[];
}

/**
 * ErrorTitle represents the title element of an error. This is provided in
 * order to have a consistent look and feel for error messages.
 */
export const ErrorTitle: React.FC<ErrorTitleProps> = (props) => {
  return <strong className="error-display--title">{props.children}</strong>;
};
