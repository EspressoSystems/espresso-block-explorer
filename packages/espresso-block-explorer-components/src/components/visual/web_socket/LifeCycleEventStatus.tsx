import { LifeCycleResponseContext } from '@/components/contexts/WebSocketLifeCycleProvider';
import { addClassToClassName } from '@/components/higher_order';
import Text from '@/components/text/Text';
import { CappuccinoConnectionConnecting } from '@/service/node_validator/cappuccino/responses/connection_connecting';
import { CappuccinoConnectionOpened } from '@/service/node_validator/cappuccino/responses/connection_opened';
import { LifeCycleResponse } from '@/service/node_validator/cappuccino/responses/web_worker_proxy_response';
import React from 'react';
import './life_cycle_event_status.css';

export interface LifeCycleEventStatusProps {
  className?: string;
}

/**
 * LifeCycleEventStatus is a component that renders the LifeCycleEventStatus.
 */
export const LifeCycleEventStatus: React.FC<LifeCycleEventStatusProps> = (
  props,
) => {
  const lifeCycleResponse = React.useContext(LifeCycleResponseContext);

  const children = getTextComponentForLifeCycleResponse(lifeCycleResponse);
  const className = getClassNameForLifeCycleResponse(lifeCycleResponse);

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
  lifeCycleResponse: LifeCycleResponse | null,
): string | undefined {
  if (!lifeCycleResponse) {
    return 'web-socket-status--disconnected';
  }

  if (lifeCycleResponse.response instanceof CappuccinoConnectionOpened) {
    return 'web-socket-status--connected';
  }

  if (lifeCycleResponse.response instanceof CappuccinoConnectionConnecting) {
    return 'web-socket-status--connecting';
  }

  return 'web-socket-status--disconnected';
}

/**
 * getTextComponentForLifeCycleResponse is a utility function that returns
 * the text component for the given LifeCycleResponse.
 */
function getTextComponentForLifeCycleResponse(
  lifeCycleResponse: LifeCycleResponse | null,
): React.ReactNode {
  if (!lifeCycleResponse) {
    return <Text text="WebSocket Disconnected" />;
  }

  if (lifeCycleResponse.response instanceof CappuccinoConnectionOpened) {
    return <Text text="WebSocket Connected" />;
  }

  if (lifeCycleResponse.response instanceof CappuccinoConnectionConnecting) {
    return <Text text="WebSocket Connecting..." />;
  }

  return <Text text="WebSocket Disconnected" />;
}
