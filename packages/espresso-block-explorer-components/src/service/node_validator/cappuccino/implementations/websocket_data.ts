import { Channel, createChannelToSink } from '@/async/channel';
import { createSinkWithConverter } from '@/async/sink/converted_sink';
import { Sink } from '@/async/sink/sink';
import { sleep } from '@/async/sleep';
import { createCompleter } from '@/data_structures/async/completer/Completer';
import WebSocketError from '@/errors/WebSocketError';
import { WebSocketCommandClose } from '@/models/web_worker/web_socket/request/close';
import { WebSocketCommandConnect } from '@/models/web_worker/web_socket/request/connect';
import WebSocketCommand from '@/models/web_worker/web_socket/request/web_socket_command';
import { WebSocketStatusConnectionClosed } from '@/models/web_worker/web_socket/status/closed';
import { WebSocketStatusConnectionConnecting } from '@/models/web_worker/web_socket/status/connecting';
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
import { nodeValidatorResponseToWebWorkerProxyResponseConverter } from '../responses/node_validator_service_response';
import { WebWorkerNodeValidatorAPI } from '../web_worker_proxy_api';
import { WebSocketCloseHandler } from '../websocket/websocket_close_handler';
import { WebSocketErrorHandler } from '../websocket/websocket_error_handler';
import { WebSocketInterface } from '../websocket/websocket_interface';
import { WebSocketMessageHandler } from '../websocket/websocket_message_handler';
import { WebSocketOpenHandler } from '../websocket/websocket_open_handler';
import {
  createProxyWebSocket,
  ProxyWebSocket,
} from '../websocket/websocket_proxy';

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

export default class WebSocketDataCappuccinoNodeValidatorAPI implements WebWorkerNodeValidatorAPI {
  readonly responseStream: Channel<WebWorkerProxyResponse>;
  readonly requestStream: Channel<WebWorkerProxyRequest>;
  readonly serviceBaseURL: URL;
  readonly webSocketCreator: (url: URL) => WebSocketInterface;

  readonly lifecycleResponseSink: Sink<WebSocketStatus>;
  readonly nodeValidatorResponseSink: Sink<CappuccinoNodeValidatorResponse>;
  readonly errorResponseSink: Sink<unknown>;
  constructor(
    requestStream: Channel<WebWorkerProxyRequest>,
    responseStream: Channel<WebWorkerProxyResponse>,
    serviceBaseURL: URL,
    webSocketCreator: (url: URL) => WebSocketInterface = (url: URL) =>
      new WebSocket(url),
  ) {
    this.requestStream = requestStream;
    this.responseStream = responseStream;
    this.serviceBaseURL = serviceBaseURL;
    this.webSocketCreator = webSocketCreator;

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
      this.webSocket = createProxyWebSocket(
        url,
        messageHandler,
        openHandler,
        closeHandler,
        errorHandler,
        this.webSocketCreator,
      );
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
    await webSocket.close();
  }
}
