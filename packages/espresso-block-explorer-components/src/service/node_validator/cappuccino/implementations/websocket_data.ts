import { Channel, createChannelToSink } from '@/async/channel';
import { createSinkWithConverter } from '@/async/sink/converted_sink';
import { Sink } from '@/async/sink/sink';
import {
  Completer,
  createCompleter,
} from '@/data_structures/async/completer/Completer';
import WebSocketError from '@/errors/WebSocketError';
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
import {
  espressoErrorToWebWorkerProxyResponseConverter,
  webSocketStatusToWebWorkerProxyResponseConverter,
} from '@/models/web_worker/web_worker_proxy_response_codec';
import { inscriptionResponseToWebWorkerProxyResponseConverter } from '@/service/inscription/cappuccino/responses/inscription_service_response';
import CappuccinoNodeValidatorRequest from '../requests/node_validator_request';
import { cappuccinoNodeValidatorRequestCodec } from '../requests/node_validator_request_codec';
import { NodeValidatorServiceRequest } from '../requests/node_validator_service_request';
import CappuccinoNodeValidatorResponse from '../responses/node_validator_response';
import { cappuccinoNodeValidatorResponseCodec } from '../responses/node_validator_response_codec';
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

  readonly lifecycleResponseSink: Sink<WebSocketStatus>;
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
      webSocketStatusToWebWorkerProxyResponseConverter,
    );
    this.nodeValidatorResponseSink = createSinkWithConverter(
      createChannelToSink(responseStream),
      inscriptionResponseToWebWorkerProxyResponseConverter,
    );
    this.errorResponseSink = createSinkWithConverter(
      createChannelToSink(responseStream),
      espressoErrorToWebWorkerProxyResponseConverter,
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
    if (request instanceof WebSocketRequest) {
      try {
        await this.handleWebSocketCommand(request.command);
      } catch (err) {
        console.error('failed to handle life cycle request', request, err);
      }
      return;
    }

    if (request instanceof NodeValidatorServiceRequest) {
      try {
        await this.handleNodeValidatorRequest(request.request);
      } catch (err) {
        console.error('failed to handle node validator request', request, err);
      }
      return;
    }

    console.error('unrecognized request', request);
  }

  private async handleWebSocketCommand(command: WebSocketCommand) {
    if (command instanceof WebSocketCommandConnect) {
      await this.handleConnect();
      return;
    }

    if (command instanceof WebSocketCommandClose) {
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

    await this.lifecycleResponseSink.send(
      new WebSocketStatusConnectionConnecting(),
    );
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
  private readonly lifecycleResponseSink: Sink<WebSocketStatus>;
  constructor(
    completer: Completer<WebSocket>,
    lifecycleResponseSink: Sink<WebSocketStatus>,
  ) {
    this.completer = completer;
    this.lifecycleResponseSink = lifecycleResponseSink;
  }

  handleEvent(event: Event) {
    this.completer.complete(event.target as WebSocket);
    this.lifecycleResponseSink.send(new WebSocketStatusConnectionOpened());
  }
}

class WebSocketCloseHandler implements EventListenerObject {
  private readonly lifecycleResponseSink: Sink<WebSocketStatus>;

  constructor(lifecycleResponseSink: Sink<WebSocketStatus>) {
    this.lifecycleResponseSink = lifecycleResponseSink;
  }

  async handleEvent() {
    await this.lifecycleResponseSink.send(
      new WebSocketStatusConnectionClosed(),
    );
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
