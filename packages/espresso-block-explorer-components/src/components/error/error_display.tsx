import { isNotFoundError } from '@/async/fetch/auto_retry_fetch';
import { Text } from '@/components/text';
import { ErrorContext } from '@/contexts/error_provider';
import { BadResponseServerError } from '@/errors/bad_response_server_error';
import { FetchError } from '@/errors/fetch_error';
import { default as WebSocketError } from '@/errors/web_socket_error';
import { WebWorkerErrorResponse } from '@/errors/web_worker_error_response';
import { ErrorIconFilled } from '@/visual/icons';
import { default as React } from 'react';
import { addClassToClassName } from '../higher_order';
import './error_display.css';

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
    <ErrorIconFilled className="error-display-icon" />
    <div className="error-display-message">{children}</div>
  </div>
);

const TryAgain: React.FC = () => {
  // This intentionally uses the same "btn label type--ui--button" classes
  // a LabeledButton would render, rather than importing that component --
  // components/error is generic, site-agnostic infrastructure, and
  // importing a component from the block_explorer-specific site tree
  // here created a real circular-import / module-initialization-order
  // crash ("Cannot access 'x' before initialization") when bundled.
  return (
    <button
      type="button"
      className="btn label type--ui--button"
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        window.location.reload();
      }}
    >
      <Text text="Try again" />
    </button>
  );
};

/** The error itself, without the Web Worker's wrapping around it. */
function unwrapError(error: unknown): unknown {
  return error instanceof WebWorkerErrorResponse
    ? unwrapError(error.error)
    : error;
}

/** The message for a kind of failure we expect, or undefined for any other. */
function expectedErrorMessage(error: unknown): undefined | string {
  if (isNotFoundError(error)) {
    return "This doesn't exist.";
  }

  if (error instanceof BadResponseServerError) {
    return 'The Espresso query service is having trouble right now. Please try again in a moment.';
  }

  if (error instanceof FetchError || error instanceof WebSocketError) {
    return "Can't reach the Espresso query service. Check your connection and try again.";
  }

  return undefined;
}

const SpecificErrorDisplay: React.FC = () => {
  const error = unwrapError(React.useContext(ErrorContext));
  const message = expectedErrorMessage(error);

  React.useEffect(() => {
    if (message === undefined) {
      console.error('unexpected error in ErrorDisplay:', error);
    }
  }, [message, error]);

  return (
    <>
      <Text text={message ?? 'Something went wrong while loading this data.'} />
      {!isNotFoundError(error) && <TryAgain />}
    </>
  );
};
