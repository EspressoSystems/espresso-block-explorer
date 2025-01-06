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
import CappuccinoNodeValidatorRequest from '../requests/node_validator_request';
import { cappuccinoNodeValidatorRequestCodec } from '../requests/node_validator_request_codec';
import { NodeValidatorServiceRequest } from '../requests/node_validator_service_request';
import CappuccinoNodeValidatorResponse from '../responses/node_validator_response';
import { cappuccinoNodeValidatorResponseCodec } from '../responses/node_validator_response_codec';
import { nodeValidatorResponseToWebWorkerProxyResponseConverter } from '../responses/node_validator_service_response';
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
      nodeValidatorResponseToWebWorkerProxyResponseConverter,
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
    const webSocket = this.webSocket!;

    // Every other message should be forwarded to the server.
    webSocket.send(
      JSON.stringify(cappuccinoNodeValidatorRequestCodec.encode(request)),
    );
  }

  private assertConnected() {
    if (this.webSocket === null) {
      throw new Error('Not connected');
    }
  }

  private webSocket: null | WebSocket = null;
  private async handleConnect() {
    if (this.webSocket !== null) {
      // We're already connected.
      // We'll ignore this case
      return;
    }

    const url = new URL('node-validator/details', this.serviceBaseURL);

    const webSocketCompleter = createCompleter<WebSocket>();

    try {
      const messageHandler = new WebSocketMessageHandler(
        this.nodeValidatorResponseSink,
      );
      const openHandler = new WebSocketOpenHandler(
        webSocketCompleter,
        this.lifecycleResponseSink,
      );
      const closeHandler = new WebSocketCloseHandler(
        webSocketCompleter,
        this.lifecycleResponseSink,
      );
      const errorHandler = new WebSocketErrorHandler(
        webSocketCompleter,
        this.errorResponseSink,
      );
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
      const connecting = new WebSocketStatusConnectionConnecting();
      await this.lifecycleResponseSink.send(connecting);
    } catch (error) {
      const err = new WebSocketError(error);
      this.errorResponseSink.send(err);
      webSocketCompleter.completeError(err);
    }

    await webSocketCompleter.promise;
  }

  private async handleClose() {
    const webSocket = this.webSocket;
    // const webSocketCompleter = this.webSocketCompleter;
    if (webSocket === null) {
      // We're not connected, so we're already closed.
      this.lifecycleResponseSink.send(new WebSocketStatusConnectionClosed());
      return;
    }

    // We want to disconnect from the webSocket
    webSocket.close(1000, 'done');

    return new Promise<void>((resolve) => {
      webSocket.addEventListener('close', () => {
        resolve();
      });
    });
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
  private readonly completer: Completer<WebSocket>;
  private readonly lifecycleResponseSink: Sink<WebSocketStatus>;

  constructor(
    completer: Completer<WebSocket>,
    lifecycleResponseSink: Sink<WebSocketStatus>,
  ) {
    this.completer = completer;
    this.lifecycleResponseSink = lifecycleResponseSink;
  }

  async handleEvent() {
    await this.lifecycleResponseSink.send(
      new WebSocketStatusConnectionClosed(),
    );

    if (!this.completer.isCompleted) {
      this.completer.completeError(
        new WebSocketError(null, 'web socket error: unknown error'),
      );
    }
  }
}

class WebSocketErrorHandler implements EventListenerObject {
  private readonly completer: Completer<WebSocket>;
  private readonly errorResponseSink: Sink<unknown>;

  constructor(
    completer: Completer<WebSocket>,
    errorResponseSink: Sink<unknown>,
  ) {
    this.completer = completer;
    this.errorResponseSink = errorResponseSink;
  }

  private errorFromEvent(event: Event) {
    if ('error' in event) {
      return new WebSocketError(event.error);
    }

    return new WebSocketError(null, 'web socket error: unknown error');
  }

  handleEvent(event: Event) {
    const err = this.errorFromEvent(event);
    this.errorResponseSink.send(err);

    if (!this.completer.isCompleted) {
      this.completer.completeError(err);
    }
  }
}
