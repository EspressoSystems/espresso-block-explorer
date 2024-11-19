import { createBufferedChannel } from '@/async/channel/BufferedChannel';
import { createSinkWithConverter } from '@/async/sink/converted_sink';
import { Sink } from '@/async/sink/sink';
import { sleep } from '@/async/sleep';
import { ErrorStreamContext } from '@/components/contexts/ErrorProvider';
import { WebSocketResponseStreamContext } from '@/components/contexts/WebSocketResponseProvider';
import { InscriptionsStatsStreamContext } from '@/components/page_sections/inscriptions_stats_summary/InscriptionsStatsLoader';
import { LatestInscriptionListStreamContext } from '@/components/page_sections/latest_inscriptions_summary/LatestInscriptionListLoader';
import { YourInscriptionsListStreamContext } from '@/components/page_sections/latest_inscriptions_summary/YourInscriptionListLoader';
import { createCircularBuffer } from '@/data_structures/circular_buffer/CircularBuffer';
import { mapAsyncIterable } from '@/functional/functional_async';
import { ErrorResponse } from '@/models/web_worker/error_response';
import { WebSocketCommandClose } from '@/models/web_worker/web_socket/request/close';
import { WebSocketCommandConnect } from '@/models/web_worker/web_socket/request/connect';
import WebSocketCommand from '@/models/web_worker/web_socket/request/web_socket_command';
import { WebSocketStatusConnectionClosed } from '@/models/web_worker/web_socket/status/closed';
import { WebSocketStatusConnectionOpened } from '@/models/web_worker/web_socket/status/opened';
import { WebSocketResponse } from '@/models/web_worker/web_socket/web_socket_response';
import { webSocketCommandToWebWorkerProxyRequestConverter } from '@/models/web_worker/web_worker_proxy_request_codec';
import ChainDetails from '@/service/inscription/cappuccino/chain_details';
import InscriptionAndChainDetails from '@/service/inscription/cappuccino/inscription_and_chain_details';
import { InscriptionStats } from '@/service/inscription/cappuccino/inscription_stats';
import { CappuccinoInscriptionEntry } from '@/service/inscription/cappuccino/responses/inscription_entry';
import CappuccinoInscriptionResponse from '@/service/inscription/cappuccino/responses/inscription_response';
import { InscriptionServiceResponse } from '@/service/inscription/cappuccino/responses/inscription_service_response';
import { CappuccinoRetrievedInscriptionsForWalletAddress } from '@/service/inscription/cappuccino/responses/retrieved_inscriptions';
import { CappuccinoInscriptionStats } from '@/service/inscription/cappuccino/responses/stats_entry';
import { WebWorkerInscriptionAPI } from '@/service/inscription/cappuccino/web_worker_proxy_api';
import React from 'react';
import { filterIterable, firstWhereIterable } from '../functional';
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

/**
 * compareChainDetails is a simple comparison function that compares two
 * ChainDetails objects.
 */
function compareChainDetails(a: ChainDetails, b: ChainDetails) {
  const blockCompare = a.block - b.block;
  if (blockCompare !== 0) {
    return blockCompare;
  }

  return a.offset - b.offset;
}

/**
 * compareInscriptionsAndChainDetails is a comparison function that compares
 * two InscriptionAndChainDetails objects.
 */
function compareInscriptionAndChainDetails(
  a: InscriptionAndChainDetails,
  b: InscriptionAndChainDetails,
) {
  const chainCompare = compareChainDetails(a.chainDetails, b.chainDetails);
  if (chainCompare !== 0) {
    return chainCompare;
  }

  return a.inscription.time.valueOf() - b.inscription.time.valueOf();
}

/**
 * invertCompare is a utility function that inverts the comparison function
 * provided to it.
 */
function invertCompare<T>(
  comparer: (a: T, b: T) => number,
): (A: T, B: T) => number {
  return (a, b) => -comparer(a, b);
}

/**
 * bridgeLatestInscription is a function that bridges the latest inscription
 * event into the latest inscriptions state.
 */
async function bridgeLatestInscription(
  state: ReturnType<typeof createBridgeState>,
  streams: ReturnType<typeof createInscriptionSplitStreams>,
  event: CappuccinoInscriptionEntry,
) {
  // We'll want to clean this up if we see that there's a duplicate.

  const existing = firstWhereIterable(
    state.latestInscriptions.immutableIterable(),
    (inscription) =>
      compareChainDetails(
        inscription.chainDetails,
        event.inscriptionAndChainDetails.chainDetails,
      ) === 0,
  );

  if (!existing) {
    state.latestInscriptions.put(event.inscriptionAndChainDetails);
    streams.latestInscriptions.publish(
      Array.from(state.latestInscriptions.immutableIterable()),
    );
    return;
  }

  // We already have this inscription, we'll need to reconstruct the list.
  const filtered = Array.from(
    filterIterable(
      state.latestInscriptions,
      (inscriptionAndDetail) => inscriptionAndDetail !== existing,
    ),
  );

  filtered.push(event.inscriptionAndChainDetails);

  filtered.sort(invertCompare(compareInscriptionAndChainDetails));

  for (const inscription of filtered) {
    state.latestInscriptions.put(inscription);
  }

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

  if (event instanceof CappuccinoRetrievedInscriptionsForWalletAddress) {
    streams.yourInscriptions.publish(event.inscriptionAndChainDetails);
  }

  if (event instanceof CappuccinoInscriptionStats) {
    await streams.stats.publish(event.stats);
  }
}

async function handleAutoReconnects(
  event: WebSocketResponse,
  streams: ReturnType<typeof createInscriptionSplitStreams>,
  webSocketCommandSink: Sink<WebSocketCommand>,
) {
  const status = event.status;
  if (status instanceof WebSocketStatusConnectionOpened) {
    streams.reconnectAttempt = 0;
    streams.errors.publish(null);
    return;
  }

  if (!(status instanceof WebSocketStatusConnectionClosed)) {
    // We don't care about non-closed events.
    return;
  }

  if (!streams.mounted) {
    // The component has been unmounted, we do not need to reconnect.
    return;
  }

  // Alright, we want to try to reconnect.  We want to perform exponential
  // backoff as well, so we don't overwhelm the server.

  streams.reconnectAttempt += 1;

  const reconnectDelay =
    Math.min(4 ** streams.reconnectAttempt, 4000) * (Math.random() + 1);
  console.info(
    'disconnected from inscriptions web socket, attempting to reconnect',
    'attempting reconnect, attempt',
    streams.reconnectAttempt,
    'sleeping for',
    reconnectDelay,
  );

  await sleep(reconnectDelay);

  // Try to reconnect
  webSocketCommandSink.send(new WebSocketCommandConnect());
}

async function bridgeStreamIntoIndividualStreams(
  streams: ReturnType<typeof createInscriptionSplitStreams>,
  inscriptionService: WebWorkerInscriptionAPI,
  webSocketCommandSink: Sink<WebSocketCommand>,
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
      handleAutoReconnects(event, streams, webSocketCommandSink);
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
    yourInscriptions: createBufferedChannel<InscriptionAndChainDetails[]>(4),
    stats: createBufferedChannel<InscriptionStats>(4),
    // Errors Stream
    errors: createBufferedChannel<null | ErrorResponse>(4),
    // LifeCycle Event Stream
    lifecycle: createBufferedChannel<WebSocketResponse>(4),

    // These are extra pieces of state that we want to keep track of.
    mounted: true,
    reconnectAttempt: 0,
  };
}

interface ProvideCappuccinoInscriptionStreamsProps {
  children: React.ReactNode | React.ReactNode[];
  connectToWebSocket?: boolean;
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
    bridgeStreamIntoIndividualStreams(
      streams,
      inscriptionService,
      lifeCycleRequestSink,
    );

    const connectToWebSocket = props.connectToWebSocket ?? true;

    if (connectToWebSocket) {
      startInscriptionService(lifeCycleRequestSink);
    }

    return () => {
      // Tear Down
      // Tell the service to Close the connection.
      lifeCycleRequestSink.send(new WebSocketCommandClose());
      streams.mounted = false;
    };
  });

  return (
    <LatestInscriptionListStreamContext.Provider
      value={streams.latestInscriptions}
    >
      <YourInscriptionsListStreamContext.Provider
        value={streams.yourInscriptions}
      >
        <InscriptionsStatsStreamContext.Provider value={streams.stats}>
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
        </InscriptionsStatsStreamContext.Provider>
      </YourInscriptionsListStreamContext.Provider>
    </LatestInscriptionListStreamContext.Provider>
  );
};
