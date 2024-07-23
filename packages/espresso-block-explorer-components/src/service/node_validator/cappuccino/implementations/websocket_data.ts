import { Channel, createChannelToSink } from '@/async/channel';
import { createSinkWithConverter } from '@/async/sink/converted_sink';
import { Sink } from '@/async/sink/sink';
import {
  Completer,
  createCompleter,
} from '@/data_structures/async/completer/Completer';
import UnimplementedError from '@/errors/UnimplementedError';
import WebSocketError from '@/errors/WebSocketError';
import CappuccinoNodeValidatorRequest from '../requests/node_validator_request';
import { cappuccinoNodeValidatorRequestCodec } from '../requests/node_validator_request_codec';
import WebWorkerLifeCycleRequest, {
  Close,
  Connect,
} from '../requests/web_worker_life_cycle_request';
import {
  LifeCycleRequest,
  NodeValidatorRequest,
  WebWorkerProxyRequest,
} from '../requests/web_worker_proxy_request';
import { CappuccinoConnectionClosed } from '../responses/connection_closed';
import { CappuccinoConnectionConnecting } from '../responses/connection_connecting';
import { CappuccinoConnectionOpened } from '../responses/connection_opened';
import CappuccinoNodeValidatorResponse from '../responses/node_validator_response';
import { cappuccinoNodeValidatorResponseCodec } from '../responses/node_validator_response_codec';
import WebWorkerLifeCycleResponse from '../responses/web_worker_life_cycle_response';
import {
  espressoErrorResponseToWebWorkerProxyResponseConverter,
  lifeCycleResponseToWebWorkerProxyResponseConverter,
  nodeValidatorResponseToWebWorkerProxyResponseConverter,
  WebWorkerProxyResponse,
} from '../responses/web_worker_proxy_response';
import { WebWorkerNodeValidatorAPI } from '../web_worker_proxy_api';

// URL expected to be replay:<url>
// Examples:
//   wss://example.com/v0/
//   ws://localhost:9000/v0/

export default class WebSocketDataCappuccinoNodeValidatorAPI
  implements WebWorkerNodeValidatorAPI
{
  readonly responseStream: Channel<WebWorkerProxyResponse>;
  readonly requestStream: Channel<WebWorkerProxyRequest>;
  readonly serviceBaseURL: URL;

  readonly lifecycleResponseSink: Sink<WebWorkerLifeCycleResponse>;
  readonly nodeValidatorResponseSink: Sink<CappuccinoNodeValidatorResponse>;
  readonly errorResponseSink: Sink<unknown>;

  constructor(
    requestStream: Channel<WebWorkerProxyRequest>,
    responseStream: Channel<WebWorkerProxyResponse>,
    serviceBaseURL: URL,
  ) {
    this.requestStream = requestStream;
    this.responseStream = responseStream;
    this.serviceBaseURL = serviceBaseURL;

    this.lifecycleResponseSink = createSinkWithConverter(
      createChannelToSink(responseStream),
      lifeCycleResponseToWebWorkerProxyResponseConverter,
    );
    this.nodeValidatorResponseSink = createSinkWithConverter(
      createChannelToSink(responseStream),
      nodeValidatorResponseToWebWorkerProxyResponseConverter,
    );
    this.errorResponseSink = createSinkWithConverter(
      createChannelToSink(responseStream),
      espressoErrorResponseToWebWorkerProxyResponseConverter,
    );
  }

  get stream(): AsyncIterable<WebWorkerProxyResponse> {
    return this.responseStream;
  }

  async send(request: WebWorkerProxyRequest): Promise<void> {
    await this.requestStream.publish(request);
  }

  async startProcessing() {
    this.handleRequests();
  }

  async handleRequests() {
    for await (const request of this.requestStream) {
      await this.handleRequest(request);
    }
  }

  private async handleRequest(request: WebWorkerProxyRequest) {
    if (request instanceof LifeCycleRequest) {
      await this.handleLifeCycleRequest(request.request);
      return;
    }

    if (request instanceof NodeValidatorRequest) {
      await this.handleNodeValidatorRequest(request.request);
      return;
    }

    throw new UnimplementedError();
  }

  private async handleLifeCycleRequest(request: WebWorkerLifeCycleRequest) {
    if (request instanceof Connect) {
      await this.handleConnect();
      return;
    }

    if (request instanceof Close) {
      await this.handleClose();
      return;
    }
  }

  private async handleNodeValidatorRequest(
    request: CappuccinoNodeValidatorRequest,
  ) {
    this.assertConnected();
    await this.webSocketCompleter!.promise;
    const webSocket = this.webSocket!;

    // Every other message should be forwarded to the server.
    webSocket.send(
      JSON.stringify(cappuccinoNodeValidatorRequestCodec.encode(request)),
    );
  }

  private assertNotConnected() {
    if (this.webSocket !== null) {
      throw new Error('Already connected');
    }
  }

  private assertConnected() {
    if (this.webSocket === null) {
      throw new Error('Not connected');
    }
  }

  private webSocket: null | WebSocket = null;
  private webSocketCompleter: null | Completer<WebSocket> = null;
  private async handleConnect() {
    this.assertNotConnected();

    await this.lifecycleResponseSink.send(new CappuccinoConnectionConnecting());
    const url = new URL('node-validator/details', this.serviceBaseURL);

    const webSocketCompleter = createCompleter<WebSocket>();
    this.webSocketCompleter = webSocketCompleter;

    try {
      const messageHandler = new WebSocketMessageHandler(
        this.nodeValidatorResponseSink,
      );
      const openHandler = new WebSocketOpenHandler(
        webSocketCompleter,
        this.lifecycleResponseSink,
      );
      const closeHandler = new WebSocketCloseHandler(
        this.lifecycleResponseSink,
      );
      const errorHandler = new WebSocketErrorHandler(this.errorResponseSink);
      const webSocket = new WebSocket(url);

      webSocket.onerror;
      webSocket.addEventListener('open', openHandler);
      webSocket.addEventListener('message', messageHandler);
      webSocket.addEventListener('close', closeHandler);
      webSocket.addEventListener('error', errorHandler);

      webSocket.addEventListener('close', () => {
        // Let's clean up our handlers.

        webSocket.removeEventListener('open', openHandler);
        webSocket.removeEventListener('message', messageHandler);
        webSocket.removeEventListener('close', closeHandler);
        webSocket.removeEventListener('error', errorHandler);

        // Let's remove our reference to the web socket.
        this.webSocket = null;
      });

      this.webSocket = webSocket;
    } catch (error) {
      const err = new WebSocketError(error);
      this.errorResponseSink.send(err);
      webSocketCompleter.completeError(err);
    }
  }

  private async handleClose() {
    this.assertConnected();

    // We want to disconnect from the webSocket
    const webSocket = this.webSocket!;

    // Explicitly disconnect
    webSocket.close(1000, 'done');
  }
}

class WebSocketMessageHandler implements EventListenerObject {
  private readonly nodeValidatorResponseSink: Sink<CappuccinoNodeValidatorResponse>;

  constructor(
    nodeValidatorResponseSink: Sink<CappuccinoNodeValidatorResponse>,
  ) {
    this.nodeValidatorResponseSink = nodeValidatorResponseSink;
  }

  private decodeMessage(event: MessageEvent) {
    return cappuccinoNodeValidatorResponseCodec.decode(
      JSON.parse(event.data as string),
    );
  }

  private async relayMessage(message: CappuccinoNodeValidatorResponse) {
    try {
      await this.nodeValidatorResponseSink.send(message);
    } catch (error) {
      console.error(
        'attempt to publish message to response stream failed',
        error,
      );
    }
  }

  async handleEvent(event: MessageEvent) {
    // This is assumed to be a Text type
    console.info('websocket onmessage', event);

    try {
      const message = this.decodeMessage(event);
      this.relayMessage(message);
    } catch (error) {
      console.error('Failed to decode server message from web socket', error);
      return;
    }
  }
}

class WebSocketOpenHandler implements EventListenerObject {
  private readonly completer: Completer<WebSocket>;
  private readonly lifecycleResponseSink: Sink<WebWorkerLifeCycleResponse>;
  constructor(
    completer: Completer<WebSocket>,
    lifecycleResponseSink: Sink<WebWorkerLifeCycleResponse>,
  ) {
    this.completer = completer;
    this.lifecycleResponseSink = lifecycleResponseSink;
  }

  handleEvent(event: Event) {
    console.info('websocket onopen', event);
    this.completer.complete(event.target as WebSocket);
    this.lifecycleResponseSink.send(new CappuccinoConnectionOpened());
  }
}

class WebSocketCloseHandler implements EventListenerObject {
  private readonly lifecycleResponseSink: Sink<WebWorkerLifeCycleResponse>;

  constructor(lifecycleResponseSink: Sink<WebWorkerLifeCycleResponse>) {
    this.lifecycleResponseSink = lifecycleResponseSink;
  }

  async handleEvent() {
    await this.lifecycleResponseSink.send(new CappuccinoConnectionClosed());
  }
}

class WebSocketErrorHandler implements EventListenerObject {
  private readonly errorResponseSink: Sink<unknown>;

  constructor(errorResponseSink: Sink<unknown>) {
    this.errorResponseSink = errorResponseSink;
  }

  private errorFromEvent(event: Event) {
    if ('error' in event) {
      return new WebSocketError(event.error);
    }

    return new WebSocketError(null, 'web socket error: unknown error');
  }

  handleEvent(event: Event) {
    this.errorResponseSink.send(this.errorFromEvent(event));
  }
}
