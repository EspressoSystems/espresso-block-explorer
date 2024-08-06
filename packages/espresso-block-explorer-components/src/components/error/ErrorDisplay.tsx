import Text from '@/components/text/Text';
import BaseError from '@/errors/BaseError';
import FetchError from '@/errors/FetchError';
import UnimplementedError from '@/errors/UnimplementedError';
import WebSocketError from '@/errors/WebSocketError';
import WebWorkerErrorResponse from '@/errors/WebWorkerErrorResponse';
import React from 'react';
import { ErrorContext } from '../contexts/ErrorProvider';
import { addClassToClassName } from '../higher_order';
import './error_display.css';
import { ErrorDescription } from './ErrorDescription';
import { ErrorTitle } from './ErrorTitle';

export interface ErrorDisplayProps {
  className?: string;
}

/**
 * ErrorDisplay is a component that attempts to display an error message to the
 * end-user. This components is meant for flexibility in that it handles the
 * specific error via some sub-component.  This component also guards against
 * non-existing errors retrieved from the ErrorContext.
 */
export const ErrorDisplay: React.FC<ErrorDisplayProps> = (props) => {
  const error = React.useContext(ErrorContext);
  if (!error) {
    return <></>;
  }

  // Let's look at the specific error.
  return (
    <ErrorDisplayWrapper {...props}>
      <SpecificErrorDisplay />
    </ErrorDisplayWrapper>
  );
};

interface ErrorDisplayWrapperProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * This component is meant to represent the outlining box for the display
 * of contents that have errored.  This component is meant to be displayed
 * in the middle of the page, and is meant to have space around it to work with.
 */
const ErrorDisplayWrapper: React.FC<ErrorDisplayWrapperProps> = ({
  className,
  children,
  ...props
}) => (
  <div
    className={addClassToClassName(className, 'error-display-wrapper')}
    {...props}
  >
    {children}
  </div>
);

const SpecificErrorDisplay: React.FC = () => {
  const error = React.useContext(ErrorContext);

  if (error instanceof WebWorkerErrorResponse) {
    // Alright, this is a wrapped error coming from the Web Worker.
    // Let's annotate, and recur.

    const subError = error.error;
    return (
      <ErrorContext.Provider value={subError}>
        <SpecificErrorDisplay />
      </ErrorContext.Provider>
    );
  }

  if (error instanceof BaseError) {
    return <SpecificBaseErrorDisplay />;
  }

  // The error at this point, is not a custom error from us that we have
  // accounted for.  This means that the error must be a native error type.
  // It also potentially means that we're in a bit of a pickle, as it's
  // essentially an unhandled error.

  return <NativeErrorDisplay />;
};

const SpecificBaseErrorDisplay: React.FC = () => {
  const error = React.useContext(ErrorContext) as BaseError;

  if (error instanceof FetchError) {
    return <FetchErrorDisplay />;
  }

  if (error instanceof WebSocketError) {
    return <WebSocketErrorDisplay />;
  }

  if (error instanceof UnimplementedError) {
    return <UnimplementedErrorDisplay />;
  }

  // BadResponseClientError
  // BadResponseError
  // BadResponseServerError
  // BufferFullError
  // ChannelClosedError
  // CompleterAlreadyCompletedError
  // CorruptBase64InputError
  // IncorrectBase64PaddingError
  // InvalidBase64LengthError
  // InvalidHexStringError
  // InvalidInputError
  // InvalidStringValueError
  // InvalidTaggedBase64EncodingError
  // InvalidTypeError
  // MissingElementError
  // NoCodecFoundError
  // NoCompleterFoundForRequestID
  // NotFoundError
  // NoURLProvidedError
  // ResponseContentTypeIsNotApplicationJSONError
  // UnimplementedError

  return <UnhandledErrorDisplay />;
};

/**
 * FetchErrorDisplay is an error widget that displays that the end-user had
 * trouble fetching data from the server.  This class of errors excludes
 * errors returned by the server itself, and as such is almost certainly
 * going to indicate an IO error of some kind.
 */
const FetchErrorDisplay: React.FC = () => {
  return (
    <>
      <ErrorTitle>
        <Text text="Fetch Error" />
      </ErrorTitle>
      <ErrorDescription>
        <Text text="This is a class of error that indicates that the attempt to communicate with the remote server has failed.  More specifically, something is preventing us from reaching the server.  This may be due a faulty inconsistent connection, bad or outdated DNS results, a bad URL, or even the addressed server not being reachable." />
      </ErrorDescription>
    </>
  );
};

/**
 * WebSocketErrorDisplay is an error widget that displays that the end-user had
 * trouble establishing a WebSocket connection with the server. This class of
 * errors excludes errors returned by the server itself, and as such is almost
 * certainly going to indicate an IO error of some kind.
 *
 * Frustratingly this error itself doesn't have an underlying cause that
 * can be inspected for the specific failure.
 */
const WebSocketErrorDisplay: React.FC = () => {
  return (
    <>
      <ErrorTitle>
        <Text text="WebSocket Error" />
      </ErrorTitle>
      <ErrorDescription>
        <Text text="This is a class of error that indicates that the attempt to communicate with the remote server with the intent to setup a WebSocket has failed.  More specifically, something is preventing us from reaching the server.  This may be due a faulty inconsistent connection, bad or outdated DNS results, a bad URL, or even the addressed server not being reachable." />
      </ErrorDescription>
    </>
  );
};

/**
 * UnimplementedErrorDisplay is an error widget that displays that the end-user
 * has encountered an error that is unimplemented. Ideally this error should
 * never be seen outside of a Developer or in Development
 */
const UnimplementedErrorDisplay: React.FC = () => {
  return (
    <>
      <ErrorTitle>
        <Text text="Unimplemented Error" />
      </ErrorTitle>
      <ErrorDescription>
        <Text text="This error indicates that there is a case in the logic that we didn't handle, or have intentionally ignored.  In either case, this should not make it to the end user, and as such should be reported" />
      </ErrorDescription>
    </>
  );
};

/**
 * NativeErrorDisplay is a component that represents an unhandled error that
 * is a native JavaScript error. This component logs the error to the console,
 * and displays a message indicating that the error is unhandled.
 */
const NativeErrorDisplay: React.FC = () => {
  const error = React.useContext(ErrorContext);

  React.useEffect(() => {
    // We wrap these side-effects in a React.useEffect call to ensure that
    // they don't affect the rendered component.
    console.error(
      'encountered an unhandled native error in ErrorDisplay:',
      error,
    );

    return () => {};
  });

  return (
    <>
      <ErrorTitle>
        <Text text="Native JavaScript Error" />
      </ErrorTitle>
      <ErrorDescription>
        <Text text="This error should only be displayed if we haven't caught an error.  This also indicates that this is going to be an unhandled error on the Developer's side" />
      </ErrorDescription>
    </>
  );
};

/**
 * UnhandledErrorDisplay is a component that isn't aware of a more specific
 * error display representation to return, and as such it acts as a catch-all.
 *
 * This components logs the wrapped error to console.error, and displays a
 * message indicating that the error cannot be handled more specifically.
 */
const UnhandledErrorDisplay: React.FC = () => {
  const error = React.useContext(ErrorContext);

  React.useEffect(() => {
    // We wrap these side-effects in a React.useEffect call to ensure that
    // they don't affect the rendered component.
    console.error(
      'encountered unhandled error in component ErrorDisplay:',
      error,
    );

    return () => {};
  });

  return (
    <>
      <ErrorTitle>
        <Text text="Unhandled Error" />
      </ErrorTitle>
      <ErrorDescription>
        <Text text="An unhandled error has been thrown that prevents progress.  There is no dedicated error message for this error, so please check the developer console for the specific details." />
      </ErrorDescription>
    </>
  );
};
