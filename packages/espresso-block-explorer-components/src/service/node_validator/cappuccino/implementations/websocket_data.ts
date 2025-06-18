import { Channel, createChannelToSink } from '@/async/channel';
import { createSinkWithConverter } from '@/async/sink/converted_sink';
import { Sink } from '@/async/sink/sink';
import { sleep } from '@/async/sleep';
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

/**
 * ProxyWebSocket is a wrapper around the WebSocket API that allows us to
 * handle the WebSocket lifecycle and message events in a more controlled
 * manner. It allows us to clean up event listeners and handle the WebSocket
 * lifecycle in a more predictable way.
 */
class ProxyWebSocket {
  private webSocket: null | WebSocket = null;
  constructor(
    url: URL,
    messageHandler: WebSocketMessageHandler,
    openHandler: WebSocketOpenHandler,
    closeHandler: WebSocketCloseHandler,
    errorHandler: WebSocketErrorHandler,
  ) {
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
      // Explicit reference drop
      this.webSocket = null;
    });
    this.webSocket = webSocket;
  }

  send(data: string | ArrayBufferLike | Blob | ArrayBufferView) {
    if (this.webSocket === null) {
      throw new Error('WebSocket is not connected');
    }

    this.webSocket.send(data);
  }

  async close(code: number = 1000, reason: string = 'done') {
    if (this.webSocket === null) {
      // We're not connected, so we're already closed.
      return;
    }

    // We want to disconnect from the webSocket
    const completer = createCompleter<void>();
    this.webSocket.addEventListener('close', () => {
      completer.complete();
    });

    this.webSocket.close(code, reason);

    return completer.promise;
  }
}

// RAPID_RECONNECT_THRESHOLD is the threshold in milliseconds that specifies
// the threshold within which we will consider a connection request as having
// been "rapid".
const RAPID_RECONNECT_THRESHOLD = 1000;

// RAPID_RECONNECT_PENALTY is the penalty in milliseconds that we will apply
// to the connection request if we have been connecting too rapidly.
const RAPID_RECONNECT_PENALTY = 250;

// RAPID_RECONNECT_PENALTY_MAX is the maximum penalty in milliseconds that we
// will apply to the connection request if we have been connecting too rapidly.
const RAPID_RECONNECT_PENALTY_MAX = 5000;

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

  private lastConnectTime: null | Date = null;
  private rapidConnectCount: number = 0;

  /**
   * rapidREconnectProtection is a function that will delay the connection
   * attempts if the last connection request was made too rapidly.
   */
  private async rapidReconnectProtection() {
    if (this.lastConnectTime === null) {
      this.lastConnectTime = new Date();
      return;
    }

    const now = new Date();
    const timeSinceLastConnect = now.getTime() - this.lastConnectTime.getTime();
    if (timeSinceLastConnect < RAPID_RECONNECT_THRESHOLD) {
      this.rapidConnectCount++;
    } else {
      // reset the rapid connect count
      this.rapidConnectCount = 0;
    }

    if (this.rapidConnectCount <= 0) {
      return;
    }

    // Compute the
    const penalty = 2 ** (this.rapidConnectCount - 1);
    const delay = Math.min(
      RAPID_RECONNECT_PENALTY * penalty,
      RAPID_RECONNECT_PENALTY_MAX,
    );
    console.info(
      'Delaying connection attempt due to rapid connects:',
      this.rapidConnectCount,
      penalty,
      delay,
    );
    await sleep(delay);
    this.lastConnectTime = new Date();
  }

  private webSocket: null | ProxyWebSocket = null;
  private async handleConnect() {
    if (this.webSocket !== null) {
      // We're already connected.
      // We'll ignore this case
      return;
    }

    const url = new URL('node-validator/details', this.serviceBaseURL);
    const webSocketCompleter = createCompleter<WebSocket>();

    try {
      const connecting = new WebSocketStatusConnectionConnecting();
      await this.lifecycleResponseSink.send(connecting);

      // Have we been connecting too rapidly?
      // We should delay our connection attempts if we have been.
      await this.rapidReconnectProtection();

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
        () => (this.webSocket = null),
      );
      const errorHandler = new WebSocketErrorHandler(
        webSocketCompleter,
        this.errorResponseSink,
      );
      this.webSocket = new ProxyWebSocket(
        url,
        messageHandler,
        openHandler,
        closeHandler,
        errorHandler,
      );
    } catch (error) {
      console.error('<<<< HERE failed to connect to web socket >>>>', error);
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
    await webSocket.close();
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
  private readonly onClose: () => void;

  constructor(
    completer: Completer<WebSocket>,
    lifecycleResponseSink: Sink<WebSocketStatus>,
    onClose: () => void,
  ) {
    this.completer = completer;
    this.lifecycleResponseSink = lifecycleResponseSink;
    this.onClose = onClose;
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

    this.onClose();
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
