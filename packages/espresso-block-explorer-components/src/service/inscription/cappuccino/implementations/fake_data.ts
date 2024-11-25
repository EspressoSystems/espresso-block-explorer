import { Channel, createChannelToSink } from '@/async/channel';
import { createSinkWithConverter } from '@/async/sink';
import { Sink } from '@/async/sink/sink';
import { sleep } from '@/async/sleep';
import { PseudoRandomNumberGenerator } from '@/data_source/fake_data_source';
import { getStartingSeed } from '@/data_source/fake_data_source/generateFakeData';
import { createCircularBuffer } from '@/data_structures/circular_buffer';
import UnimplementedError from '@/errors/UnimplementedError';
import { lastIterable } from '@/functional/functional';
import { WebSocketCommandClose } from '@/models/web_worker/web_socket/request/close';
import { WebSocketCommandConnect } from '@/models/web_worker/web_socket/request/connect';
import WebSocketCommand from '@/models/web_worker/web_socket/request/web_socket_command';
import { WebSocketStatusConnectionClosed } from '@/models/web_worker/web_socket/status/closed';
import { WebSocketStatusConnectionConnecting } from '@/models/web_worker/web_socket/status/connecting';
import { WebSocketStatusConnectionOpened } from '@/models/web_worker/web_socket/status/opened';
import WebSocketStatus from '@/models/web_worker/web_socket/status/web_socket_status';
import { WebSocketRequest } from '@/models/web_worker/web_socket/web_socket_request';
import { WebWorkerProxyRequest } from '@/models/web_worker/web_worker_proxy_request';
import { WebWorkerProxyResponse } from '@/models/web_worker/web_worker_proxy_response';
import { webSocketStatusToWebWorkerProxyResponseConverter } from '@/models/web_worker/web_worker_proxy_response_codec';
import ChainDetails from '../chain_details';
import Inscription from '../inscription';
import InscriptionAndChainDetails from '../inscription_and_chain_details';
import CappuccinoInscriptionRequest from '../requests/inscription_request';
import { InscriptionServiceRequest } from '../requests/inscription_service_request';
import { PutInscription } from '../requests/put_inscription';
import { CappuccinoInscriptionEntry } from '../responses/inscription_entry';
import CappuccinoInscriptionResponse from '../responses/inscription_response';
import { inscriptionResponseToWebWorkerProxyResponseConverter } from '../responses/inscription_service_response';
import WalletAddress from '../wallet_address';
import {
  kInscriptionMessageToSign,
  WebWorkerInscriptionAPI,
} from '../web_worker_proxy_api';

function* generateAllInscriptions(prng: PseudoRandomNumberGenerator) {
  const now = new Date();
  const start = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  let lastDate = start;
  let lastBlock = 0;
  while (true) {
    const inscriptionAndBlockDetails = generateInscriptionAndChainDetails(
      lastDate,
      lastBlock,
      prng,
    );
    yield inscriptionAndBlockDetails;
    const inscription = inscriptionAndBlockDetails.inscription;
    lastDate = inscription.time;
    lastBlock = inscriptionAndBlockDetails.chainDetails.block;
  }
}

function* generateAllInscriptionsUntilNow(
  inscriptions: Iterable<InscriptionAndChainDetails>,
) {
  const now = new Date();
  const it = inscriptions[Symbol.iterator]();

  for (
    let inscriptionAndChainDetails = it.next();
    !inscriptionAndChainDetails.done &&
    inscriptionAndChainDetails.value.inscription.time.valueOf() < now.valueOf();
    inscriptionAndChainDetails = it.next()
  ) {
    yield inscriptionAndChainDetails.value;
  }
}

async function* generateStreamOfFutureInscriptions(
  inscriptions: Iterable<InscriptionAndChainDetails>,
) {
  for (const inscriptionAndChainDetails of inscriptions) {
    const now = new Date();
    const nextTime = inscriptionAndChainDetails.inscription.time;
    const millisecondsUntil = nextTime.valueOf() - now.valueOf();
    if (millisecondsUntil > 0) {
      await sleep(millisecondsUntil);
    }

    yield inscriptionAndChainDetails;
  }
}

function generateInscriptionAndChainDetails(
  ts: Date,
  lastBlock: number,
  prng: PseudoRandomNumberGenerator,
) {
  // Between 5 and 500 seconds
  const elapsed = prng.nextRange(5, 10) * 1000;
  const nextBlock = prng.nextRange(1, 20);
  const nextOffset = prng.nextRange(0, 5);

  const inscription = new Inscription(
    generateWalletAddress(prng),
    new Date(ts.valueOf() + elapsed),
    kInscriptionMessageToSign,
  );

  const chianDetails = new ChainDetails(lastBlock + nextBlock, nextOffset);

  const inscriptionAndChainDetails = new InscriptionAndChainDetails(
    inscription,
    chianDetails,
  );

  return inscriptionAndChainDetails;
}

function generateWalletAddress(prng: PseudoRandomNumberGenerator) {
  return new WalletAddress(prng.fillBytes(20));
}

export default class FakeDataInscriptionAPI implements WebWorkerInscriptionAPI {
  readonly responseStream: Channel<WebWorkerProxyResponse>;
  readonly requestStream: Channel<WebWorkerProxyRequest>;

  readonly webSocketStatusSink: Sink<WebSocketStatus>;
  readonly inscriptionResponseSink: Sink<CappuccinoInscriptionResponse>;

  constructor(
    requestStream: Channel<WebWorkerProxyRequest>,
    responseStream: Channel<WebWorkerProxyResponse>,
  ) {
    this.requestStream = requestStream;
    this.responseStream = responseStream;

    this.webSocketStatusSink = createSinkWithConverter(
      createChannelToSink(responseStream),
      webSocketStatusToWebWorkerProxyResponseConverter,
    );
    this.inscriptionResponseSink = createSinkWithConverter(
      createChannelToSink(responseStream),
      inscriptionResponseToWebWorkerProxyResponseConverter,
    );
  }

  get stream(): AsyncIterable<WebWorkerProxyResponse> {
    return this.responseStream;
  }

  async send(request: WebWorkerProxyRequest): Promise<void> {
    await this.requestStream.publish(request);
  }

  private prng: PseudoRandomNumberGenerator = new PseudoRandomNumberGenerator(
    getStartingSeed(),
  );
  private latestInscriptions =
    createCircularBuffer<InscriptionAndChainDetails>(100);
  private allInscriptions = generateAllInscriptions(this.prng);

  async initializeState() {
    // Compute the current histogram for the network
    // Store the latest block

    for (const inscription of generateAllInscriptionsUntilNow(
      this.allInscriptions,
    )) {
      this.latestInscriptions.put(inscription);
    }
  }

  async startProcessing() {
    await this.initializeState();
    this.handleRequests();
    this.streamInscriptions();
  }

  async handleRequests() {
    for await (const request of this.requestStream) {
      await this.handleRequest(request);
    }
  }

  async streamInscriptions() {
    for await (const inscriptionAndBlockDetails of generateStreamOfFutureInscriptions(
      this.allInscriptions,
    )) {
      this.latestInscriptions.put(inscriptionAndBlockDetails);

      if (this.isConnected) {
        this.inscriptionResponseSink.send(
          new CappuccinoInscriptionEntry(inscriptionAndBlockDetails),
        );
      }
    }
  }

  private async handleRequest(request: WebWorkerProxyRequest) {
    if (request instanceof WebSocketRequest) {
      try {
        await this.handleWebSocketCommand(request.command);
      } catch (err) {
        console.error('failed to handle life cycle request', request, err);
      }
      return;
    }

    if (request instanceof InscriptionServiceRequest) {
      try {
        await this.handleInscriptionsRequest(request.request);
      } catch (err) {
        console.error('failed to handle node validator request', request, err);
      }
      return;
    }

    console.error('unrecognized request type', request);
  }

  private async handleWebSocketCommand(request: WebSocketCommand) {
    if (request instanceof WebSocketCommandConnect) {
      await this.handleConnect();
      return;
    }

    if (request instanceof WebSocketCommandClose) {
      await this.handleClose();
      return;
    }
  }

  private async handleInscriptionsRequest(
    request: CappuccinoInscriptionRequest,
  ) {
    if (request instanceof PutInscription) {
      await this.handlePutInscription(request);
      return;
    }

    throw new UnimplementedError();
  }

  private isConnected: boolean = false;
  private async handleConnect() {
    if (this.isConnected) {
      throw new Error('already connected to WebSocket');
    }

    this.isConnected = true;

    await this.webSocketStatusSink.send(
      new WebSocketStatusConnectionConnecting(),
    );
    await this.webSocketStatusSink.send(new WebSocketStatusConnectionOpened());

    for (const inscription of this.latestInscriptions.immutableIterable()) {
      this.inscriptionResponseSink.send(
        new CappuccinoInscriptionEntry(inscription),
      );
    }
  }

  private async handleClose() {
    if (!this.isConnected) {
      throw new Error('not connected to WebSocket');
    }

    this.isConnected = false;
    await this.webSocketStatusSink.send(new WebSocketStatusConnectionClosed());
  }

  private async handlePutInscription(request: PutInscription) {
    // We want the last entry of the latest inscriptions.
    const last = lastIterable(this.latestInscriptions.immutableIterable());

    const blockDetails = new ChainDetails(last.chainDetails.block + 1, 0);

    const inscriptionAndChainDetails = new InscriptionAndChainDetails(
      request.inscriptionAndSignature.inscription,
      blockDetails,
    );

    this.latestInscriptions.put(inscriptionAndChainDetails);

    await sleep(1000 * 20);

    await this.inscriptionResponseSink.send(
      new CappuccinoInscriptionEntry(inscriptionAndChainDetails),
    );
  }
}
