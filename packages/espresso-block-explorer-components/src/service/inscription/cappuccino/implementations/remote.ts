import { Channel, createChannelToSink } from '@/async/channel';
import { createSinkWithConverter } from '@/async/sink';
import { Sink } from '@/async/sink/sink';
import {
  Completer,
  createCompleter,
} from '@/data_structures/async/completer/Completer';
import BadResponseClientError from '@/errors/BadResponseClientError';
import BadResponseError from '@/errors/BadResponseError';
import BadResponseServerError from '@/errors/BadResponseServerError';
import BaseError from '@/errors/BaseError';
import FetchError from '@/errors/FetchError';
import ResponseContentTypeIsNotApplicationJSONError from '@/errors/ResponseContentTypeIsNotApplicationJSONError';
import UnimplementedError from '@/errors/UnimplementedError';
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
import CappuccinoInscriptionRequest from '../requests/inscription_request';
import { InscriptionServiceRequest } from '../requests/inscription_service_request';
import { PutInscription } from '../requests/put_inscription';
import CappuccinoInscriptionResponse from '../responses/inscription_response';
import { cappuccinoInscriptionResponseCodec } from '../responses/inscription_response_codec';
import { inscriptionResponseToWebWorkerProxyResponseConverter } from '../responses/inscription_service_response';
import { WebWorkerInscriptionAPI } from '../web_worker_proxy_api';

export default class RemoteInscriptionAPI implements WebWorkerInscriptionAPI {
  readonly responseStream: Channel<WebWorkerProxyResponse>;
  readonly requestStream: Channel<WebWorkerProxyRequest>;
  readonly serviceBaseWebSocketURL: URL;
  readonly serviceBaseURL: URL;

  readonly lifecycleResponseSink: Sink<WebSocketStatus>;
  readonly inscriptionResponseSink: Sink<CappuccinoInscriptionResponse>;
  readonly errorResponseSink: Sink<unknown>;

  constructor(
    requestStream: Channel<WebWorkerProxyRequest>,
    responseStream: Channel<WebWorkerProxyResponse>,
    serviceBaseWebsocketURL: URL,
    serviceBaseURL: URL,
  ) {
    this.requestStream = requestStream;
    this.responseStream = responseStream;
    this.serviceBaseWebSocketURL = serviceBaseWebsocketURL;
    this.serviceBaseURL = serviceBaseURL;

    this.lifecycleResponseSink = createSinkWithConverter(
      createChannelToSink(responseStream),
      webSocketStatusToWebWorkerProxyResponseConverter,
    );
    this.inscriptionResponseSink = createSinkWithConverter(
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
        await this.handleWebSocketRequest(request.command);
      } catch (err) {
        console.error('failed to handle life cycle request', request, err);
      }
      return;
    }

    if (request instanceof InscriptionServiceRequest) {
      try {
        await this.handleInscriptionsRequest(request.request);
      } catch (err) {
        if (!(err instanceof BaseError)) {
          console.error(
            'unhandled error from put inscription request',
            request,
            err,
          );
          return;
        }

        await this.errorResponseSink.send(err);
      }
      return;
    }

    console.error('unrecognized request type', request);
  }

  private async handleWebSocketRequest(request: WebSocketCommand) {
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
    await this.webSocketCompleter!.promise;

    if (request instanceof PutInscription) {
      await this.handlePutInscription(request);
      return;
    }

    throw new UnimplementedError();
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
    const url = new URL(
      'inscriptions/inscriptions',
      this.serviceBaseWebSocketURL,
    );

    const webSocketCompleter = createCompleter<WebSocket>();
    this.webSocketCompleter = webSocketCompleter;

    try {
      const messageHandler = new WebSocketMessageHandler(
        this.inscriptionResponseSink,
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

  private async handlePutInscriptionFetch(request: PutInscription) {
    try {
      const response = await fetch(
        new URL('inscriptions/put_inscription', this.serviceBaseURL),
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(request.inscriptionAndSignature),
        },
      );

      return response;
    } catch (err) {
      throw new FetchError(err);
    }
  }

  private async handlePutInscription(request: PutInscription) {
    const response = await this.handlePutInscriptionFetch(request);

    if (!response.ok) {
      if (response.status >= 400 && response.status < 500) {
        throw new BadResponseClientError(response.status, response);
      }

      if (response.status >= 500 && response.status < 600) {
        throw new BadResponseServerError(response.status, response);
      }

      throw new BadResponseError(response.status, response);
    }

    if (response.headers.get('content-type') !== 'application/json') {
      throw new ResponseContentTypeIsNotApplicationJSONError(
        response.headers.get('content-type') ?? 'undefined',
        response.status,
        response,
      );
    }

    // This doesn't return a response worth inspecting.
    // const body = await response.json();
    return null;
  }
}

class WebSocketMessageHandler implements EventListenerObject {
  private readonly inscriptionResponseSink: Sink<CappuccinoInscriptionResponse>;

  constructor(inscriptionResponseSink: Sink<CappuccinoInscriptionResponse>) {
    this.inscriptionResponseSink = inscriptionResponseSink;
  }

  private decodeMessage(event: MessageEvent) {
    return cappuccinoInscriptionResponseCodec.decode(
      JSON.parse(event.data as string),
    );
  }

  private async relayMessage(message: CappuccinoInscriptionResponse) {
    try {
      await this.inscriptionResponseSink.send(message);
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
