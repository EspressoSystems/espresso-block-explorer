import { Channel } from '@/async/channel';
import {
  Completer,
  createCompleter,
} from '@/data_structures/async/completer/Completer';
import { CappuccinoNodeValidatorAPI } from '../node_validator_api';
import CappuccinoNodeValidatorRequest, {
  Close,
  Connect,
} from '../requests/node_validator_request';
import { cappuccinoNodeValidatorRequestCodec } from '../requests/node_validator_request_codec';
import { CappuccinoConnectionClosed } from '../responses/connection_closed';
import { CappuccinoConnectionConnecting } from '../responses/connection_connecting';
import { CappuccinoConnectionOpened } from '../responses/connection_opened';
import CappuccinoNodeValidatorResponse from '../responses/node_validator_response';
import { cappuccinoNodeValidatorResponseCodec } from '../responses/node_validator_response_codec';

// URL expected to be replay:<url>
// Examples:
//   wss://example.com/v0/
//   ws://localhost:9000/v0/

export default class WebSocketDataCappuccinoNodeValidatorAPI
  implements CappuccinoNodeValidatorAPI
{
  readonly responseStream: Channel<CappuccinoNodeValidatorResponse>;
  readonly requestStream: Channel<CappuccinoNodeValidatorRequest>;
  readonly serviceBaseURL: URL;

  constructor(
    requestStream: Channel<CappuccinoNodeValidatorRequest>,
    responseStream: Channel<CappuccinoNodeValidatorResponse>,
    serviceBaseURL: URL,
  ) {
    this.requestStream = requestStream;
    this.responseStream = responseStream;
    this.serviceBaseURL = serviceBaseURL;
  }

  get stream(): AsyncIterable<CappuccinoNodeValidatorResponse> {
    return this.responseStream;
  }

  async send(request: CappuccinoNodeValidatorRequest): Promise<void> {
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

  private async handleRequest(request: CappuccinoNodeValidatorRequest) {
    if (request instanceof Connect) {
      await this.handleConnect();
      return;
    }

    if (request instanceof Close) {
      await this.handleClose();
      return;
    }

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

    await this.responseStream.publish(new CappuccinoConnectionConnecting());
    const url = new URL('node-validator/details', this.serviceBaseURL);

    const webSocketCompleter = createCompleter<WebSocket>();

    const messageHandler = new WebSocketMessageHandler(this.responseStream);
    const openHandler = new WebSocketOpenHandler(
      webSocketCompleter,
      this.responseStream,
    );
    const closeHandler = new WebSocketCloseHandler(this.responseStream);
    const errorHandler = new WebSocketErrorHandler(this.responseStream);

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
    this.webSocketCompleter = webSocketCompleter;
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
  private readonly responseStream: Channel<CappuccinoNodeValidatorResponse>;

  constructor(responseStream: Channel<CappuccinoNodeValidatorResponse>) {
    this.responseStream = responseStream;
  }

  private decodeMessage(event: MessageEvent) {
    return cappuccinoNodeValidatorResponseCodec.decode(
      JSON.parse(event.data as string),
    );
  }

  private async relayMessage(message: CappuccinoNodeValidatorResponse) {
    try {
      await this.responseStream.publish(message);
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
  private readonly responseStream: Channel<CappuccinoNodeValidatorResponse>;
  constructor(
    completer: Completer<WebSocket>,
    responseStream: Channel<CappuccinoNodeValidatorResponse>,
  ) {
    this.completer = completer;
    this.responseStream = responseStream;
  }

  handleEvent(event: Event) {
    console.info('websocket onopen', event);
    this.completer.complete(event.target as WebSocket);
    this.responseStream.publish(new CappuccinoConnectionOpened());
  }
}

class WebSocketCloseHandler implements EventListenerObject {
  private readonly responseStream: Channel<CappuccinoNodeValidatorResponse>;

  constructor(responseStream: Channel<CappuccinoNodeValidatorResponse>) {
    this.responseStream = responseStream;
  }

  async handleEvent() {
    await this.responseStream.publish(new CappuccinoConnectionClosed());
  }
}

class WebSocketErrorHandler implements EventListenerObject {
  private readonly responseStream: Channel<CappuccinoNodeValidatorResponse>;

  constructor(responseStream: Channel<CappuccinoNodeValidatorResponse>) {
    this.responseStream = responseStream;
  }
  handleEvent(event: Event) {
    console.info('websocket onerror', event);
  }
}
