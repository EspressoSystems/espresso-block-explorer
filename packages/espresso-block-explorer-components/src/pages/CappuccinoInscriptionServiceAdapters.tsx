import { createBufferedChannel } from '@/async/channel/BufferedChannel';
import { createSinkWithConverter } from '@/async/sink/converted_sink';
import { Sink } from '@/async/sink/sink';
import { ErrorStreamContext } from '@/components/contexts/ErrorProvider';
import { WebSocketResponseStreamContext } from '@/components/contexts/WebSocketResponseProvider';
import { LatestInscriptionListStreamContext } from '@/components/page_sections/latest_inscriptions_summary/LatestInscriptionListLoader';
import { createCircularBuffer } from '@/data_structures/circular_buffer/CircularBuffer';
import { mapAsyncIterable } from '@/functional/functional_async';
import { ErrorResponse } from '@/models/web_worker/error_response';
import { WebSocketCommandClose } from '@/models/web_worker/web_socket/request/close';
import { WebSocketCommandConnect } from '@/models/web_worker/web_socket/request/connect';
import WebSocketCommand from '@/models/web_worker/web_socket/request/web_socket_command';
import { WebSocketResponse } from '@/models/web_worker/web_socket/web_socket_response';
import { webSocketCommandToWebWorkerProxyRequestConverter } from '@/models/web_worker/web_worker_proxy_request_codec';
import InscriptionAndChainDetails from '@/service/inscription/cappuccino/inscription_and_chain_details';
import { CappuccinoInscriptionEntry } from '@/service/inscription/cappuccino/responses/inscription_entry';
import CappuccinoInscriptionResponse from '@/service/inscription/cappuccino/responses/inscription_response';
import { InscriptionServiceResponse } from '@/service/inscription/cappuccino/responses/inscription_service_response';
import { WebWorkerInscriptionAPI } from '@/service/inscription/cappuccino/web_worker_proxy_api';
import React from 'react';
import { CappuccinoInscriptionServiceAPIContext } from './CappuccinoInscriptionServiceAPIContext';

const kTrailingHistorySamples = 100;

function createBridgeState() {
  const latestInscriptions = createCircularBuffer<InscriptionAndChainDetails>(
    kTrailingHistorySamples + 1,
  );

  return {
    latestInscriptions,
  };
}

async function bridgeLatestInscription(
  state: ReturnType<typeof createBridgeState>,
  streams: ReturnType<typeof createInscriptionSplitStreams>,
  event: CappuccinoInscriptionEntry,
) {
  state.latestInscriptions.put(event.inscriptionAndChainDetails);
  streams.latestInscriptions.publish(
    Array.from(state.latestInscriptions.immutableIterable()),
  );
}

async function bridgeInscriptionResponse(
  state: ReturnType<typeof createBridgeState>,
  streams: ReturnType<typeof createInscriptionSplitStreams>,
  event: CappuccinoInscriptionResponse,
) {
  if (event instanceof CappuccinoInscriptionEntry) {
    return bridgeLatestInscription(state, streams, event);
  }
}

async function bridgeStreamIntoIndividualStreams(
  streams: ReturnType<typeof createInscriptionSplitStreams>,
  inscriptionService: WebWorkerInscriptionAPI,
) {
  const state = createBridgeState();

  for await (const event of inscriptionService.stream) {
    if (event instanceof InscriptionServiceResponse) {
      await bridgeInscriptionResponse(state, streams, event.response);
      await streams.errors.publish(null);
      continue;
    }

    if (event instanceof WebSocketResponse) {
      await streams.lifecycle.publish(event);
      continue;
    }

    if (event instanceof ErrorResponse) {
      await streams.errors.publish(event);
      continue;
    }
  }
}

async function startInscriptionService(
  webSocketCommandSink: Sink<WebSocketCommand>,
) {
  // We need to "connect" to the service.
  await webSocketCommandSink.send(new WebSocketCommandConnect());
}

function createInscriptionSplitStreams() {
  return {
    latestInscriptions: createBufferedChannel<InscriptionAndChainDetails[]>(4),
    // Errors Stream
    errors: createBufferedChannel<null | ErrorResponse>(4),
    // LifeCycle Event Stream
    lifecycle: createBufferedChannel<WebSocketResponse>(4),
  };
}

interface ProvideCappuccinoInscriptionStreamsProps {
  children: React.ReactNode | React.ReactNode[];
}

export const ProvideCappuccinoInscriptionStreams: React.FC<
  ProvideCappuccinoInscriptionStreamsProps
> = (props) => {
  const inscriptionService = React.useContext(
    CappuccinoInscriptionServiceAPIContext,
  );
  const streams = createInscriptionSplitStreams();

  React.useEffect(() => {
    // Bridge these streams

    const lifeCycleRequestSink = createSinkWithConverter(
      inscriptionService,
      webSocketCommandToWebWorkerProxyRequestConverter,
    );
    bridgeStreamIntoIndividualStreams(streams, inscriptionService);
    startInscriptionService(lifeCycleRequestSink);

    return () => {
      // Tear Down
      // Tell the service to Close the connection.
      lifeCycleRequestSink.send(new WebSocketCommandClose());
    };
  });

  return (
    <LatestInscriptionListStreamContext.Provider
      value={streams.latestInscriptions}
    >
      <WebSocketResponseStreamContext.Provider value={streams.lifecycle}>
        <ErrorStreamContext.Provider
          value={mapAsyncIterable(
            streams.errors,
            async (response) => response?.error ?? null,
          )}
        >
          {props.children}
        </ErrorStreamContext.Provider>
      </WebSocketResponseStreamContext.Provider>
    </LatestInscriptionListStreamContext.Provider>
  );
};
