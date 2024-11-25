import { WebSocketResponseContext } from '@/components/contexts/WebSocketResponseProvider';
import { addClassToClassName } from '@/components/higher_order';
import Text from '@/components/text/Text';
import { WebSocketStatusConnectionConnecting } from '@/models/web_worker/web_socket/status/connecting';
import { WebSocketStatusConnectionOpened } from '@/models/web_worker/web_socket/status/opened';
import { WebSocketResponse } from '@/models/web_worker/web_socket/web_socket_response';
import React from 'react';
import './web_socket_status.css';

export interface LifeCycleEventStatusProps {
  className?: string;
}

/**
 * WebSocketStatus is a component that renders the WebSocket status.
 */
export const WebSocketStatus: React.FC<LifeCycleEventStatusProps> = (props) => {
  const webSocketResponse = React.useContext(WebSocketResponseContext);

  const children = getTextComponentForLifeCycleResponse(webSocketResponse);
  const className = getClassNameForLifeCycleResponse(webSocketResponse);

  return (
    <div
      className={addClassToClassName(
        props.className,
        `web-socket-status ${className}`,
      )}
    >
      {children}
    </div>
  );
};

/**
 * getClassNameForLifeCycleResponse is a utility function that returns the
 * class name for the given LifeCycleResponse.
 */
function getClassNameForLifeCycleResponse(
  lifeCycleResponse: WebSocketResponse | null,
): string | undefined {
  if (!lifeCycleResponse) {
    return 'web-socket-status--disconnected';
  }

  if (lifeCycleResponse.status instanceof WebSocketStatusConnectionOpened) {
    return 'web-socket-status--connected';
  }

  if (lifeCycleResponse.status instanceof WebSocketStatusConnectionConnecting) {
    return 'web-socket-status--connecting';
  }

  return 'web-socket-status--disconnected';
}

/**
 * getTextComponentForLifeCycleResponse is a utility function that returns
 * the text component for the given LifeCycleResponse.
 */
function getTextComponentForLifeCycleResponse(
  webSocketResponse: WebSocketResponse | null,
): React.ReactNode {
  if (!webSocketResponse) {
    return <Text text="WebSocket Disconnected" />;
  }

  if (webSocketResponse.status instanceof WebSocketStatusConnectionOpened) {
    return <Text text="WebSocket Connected" />;
  }

  if (webSocketResponse.status instanceof WebSocketStatusConnectionConnecting) {
    return <Text text="WebSocket Connecting..." />;
  }

  return <Text text="WebSocket Disconnected" />;
}
