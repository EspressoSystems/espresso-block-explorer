import { Channel, createBufferedChannel } from '@/async/channel';
import BadResponseServerError from '@/errors/BadResponseServerError';
import FetchError from '@/errors/FetchError';
import ResponseContentTypeIsNotApplicationJSONError from '@/errors/ResponseContentTypeIsNotApplicationJSONError';
import UnimplementedError from '@/errors/UnimplementedError';
import WebSocketError from '@/errors/WebSocketError';
import { WebWorkerProxyRequest } from '@/models/web_worker/web_worker_proxy_request';
import {
  registerWebWorkerProxyRequestCodec,
  webWorkerProxyRequestCodec,
} from '@/models/web_worker/web_worker_proxy_request_codec';
import { WebWorkerProxyResponse } from '@/models/web_worker/web_worker_proxy_response';
import {
  registerWebWorkerProxyResponseCodec,
  webWorkerProxyResponseCodec,
} from '@/models/web_worker/web_worker_proxy_response_codec';
import ProxyWorker from './inscription_web_worker_api.js?worker';
import {
  inscriptionServiceRequestCodec,
  kInscriptionRequestType,
} from './requests/inscription_service_request';
import {
  inscriptionServiceResponseCodec,
  kInscriptionResponseType,
} from './responses/inscription_service_response';
import { WebWorkerInscriptionAPI } from './web_worker_proxy_api';

registerWebWorkerProxyResponseCodec(
  kInscriptionResponseType,
  inscriptionServiceResponseCodec,
);
registerWebWorkerProxyRequestCodec(
  kInscriptionRequestType,
  inscriptionServiceRequestCodec,
);

// This block of code exists just to ensure that we are referencing these errors
// correctly, and that they are not being excluded via tree-shaking.  We want
// this code to register the error's codecs.
{
  const checks = [
    FetchError,
    UnimplementedError,
    BadResponseServerError,
    ResponseContentTypeIsNotApplicationJSONError,
    WebSocketError,
  ];

  const _: unknown = null;

  for (const check of checks) {
    if (_ instanceof check) {
      break;
    }
  }
}

export class WebWorkerClientBasedInscriptionService
  implements WebWorkerInscriptionAPI
{
  private requestChannel: Channel<WebWorkerProxyRequest>;
  private responseChannel: Channel<WebWorkerProxyResponse>;

  constructor(
    requestChannel: Channel<WebWorkerProxyRequest> = createBufferedChannel(
      1024,
    ),
    responseChannel: Channel<WebWorkerProxyResponse> = createBufferedChannel(
      1024,
    ),
  ) {
    const worker = new ProxyWorker();

    this.requestChannel = requestChannel;
    this.responseChannel = responseChannel;

    worker.addEventListener('message', this.handleMessage.bind(this));
    worker.addEventListener('messageerror', this.handleMessageError.bind(this));
    worker.addEventListener('error', this.handleError.bind(this));

    // Send the channels to the web worker
    bridgeRequestsToWebWorker(worker, requestChannel);
  }

  get stream(): AsyncIterable<WebWorkerProxyResponse> {
    return this.responseChannel;
  }

  async send(request: WebWorkerProxyRequest) {
    this.requestChannel.publish(request);
  }

  private handleMessage(event: MessageEvent) {
    // This should be a response message
    const response = webWorkerProxyResponseCodec.decode(event.data);
    this.responseChannel.publish(response);
  }

  private handleMessageError() {
    // TODO @Ayiga: figure out how to handle this message error for the WebWorker
  }

  private handleError() {
    // TODO @Ayiga: figure out how to handle this error for the WebWorker
  }
}

/**
 * bridgeRequestsToWebWorker bridges requests from the request channel to the
 * web worker via the postMessage method.
 */
async function bridgeRequestsToWebWorker(
  worker: Worker,
  requestChannel: Channel<WebWorkerProxyRequest>,
) {
  for await (const request of requestChannel) {
    worker.postMessage(webWorkerProxyRequestCodec.encode(request));
  }
}
