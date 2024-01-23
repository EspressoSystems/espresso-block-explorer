import React from 'react';
declare const ErrorContext: React.Context<unknown>;
export { ErrorContext };
export interface SetErrorProps {
    error: unknown;
    children: React.ReactNode | React.ReactNode[];
}
export declare const SetError: React.FC<SetErrorProps>;
