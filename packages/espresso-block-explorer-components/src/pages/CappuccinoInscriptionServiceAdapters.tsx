import { createBufferedChannel } from '@/async/channel/BufferedChannel';
import { createSinkWithConverter } from '@/async/sink/converted_sink';
import { Sink } from '@/async/sink/sink';
import { LatestInscriptionListStreamContext } from '@/components/page_sections/latest_inscriptions_summary/LatestInscriptionListLoader';
import { createCircularBuffer } from '@/data_structures/circular_buffer/CircularBuffer';
import InscriptionAndChainDetails from '@/service/inscription/cappuccino/inscription_and_chain_details';
import WebWorkerInscriptionLifeCycleRequest, {
  Close,
  Connect,
} from '@/service/inscription/cappuccino/requests/web_worker_life_cycle_request';
import {
  LifeCycleRequest,
  lifeCycleRequestToWebWorkerProxyRequestConverter,
} from '@/service/inscription/cappuccino/requests/web_worker_proxy_request';
import { CappuccinoInscriptionEntry } from '@/service/inscription/cappuccino/responses/inscription_entry';
import CappuccinoInscriptionResponse from '@/service/inscription/cappuccino/responses/inscription_response';
import {
  ErrorResponse,
  InscriptionResponse,
  LifeCycleResponse,
} from '@/service/inscription/cappuccino/responses/web_worker_proxy_response';
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
    if (event instanceof InscriptionResponse) {
      await bridgeInscriptionResponse(state, streams, event.response);
      // await streams.errors.publish(null);
    }

    if (event instanceof LifeCycleResponse) {
      await streams.lifecycle.publish(event);
    }

    if (event instanceof ErrorResponse) {
      await streams.errors.publish(event);
    }
  }
}

async function startInscriptionService(
  lifecycleRequestSink: Sink<WebWorkerInscriptionLifeCycleRequest>,
) {
  // We need to "connect" to the service.
  await lifecycleRequestSink.send(new Connect());
}

function createInscriptionSplitStreams() {
  return {
    latestInscriptions: createBufferedChannel<InscriptionAndChainDetails[]>(4),
    // Errors Stream
    errors: createBufferedChannel<null | ErrorResponse>(4),
    // LifeCycle Event Stream
    lifecycle: createBufferedChannel<LifeCycleResponse>(4),
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
      lifeCycleRequestToWebWorkerProxyRequestConverter,
    );
    bridgeStreamIntoIndividualStreams(streams, inscriptionService);
    startInscriptionService(lifeCycleRequestSink);

    return () => {
      // Tear Down
      // Tell the service to Close the connection.
      inscriptionService.send(new LifeCycleRequest(new Close()));
    };
  });

  return (
    <LatestInscriptionListStreamContext.Provider
      value={streams.latestInscriptions}
    >
      {props.children}
    </LatestInscriptionListStreamContext.Provider>
  );
};
