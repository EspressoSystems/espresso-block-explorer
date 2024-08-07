import { default as React } from '../../../../../node_modules/react';

export interface ErrorStreamConsumerProps {
    children: React.ReactNode | React.ReactNode[];
}
/**
 * ErrorStreamConsumer is a component that is used to consume errors off of
 * the ErrorStreamContext.  This component will resolve the error stream
 * and provide the resolved error to the children of this component.
 */
export declare const ErrorStreamConsumer: React.FC<ErrorStreamConsumerProps>;
export interface ErrorForwarderProps {
    children: React.ReactNode | React.ReactNode[];
}
