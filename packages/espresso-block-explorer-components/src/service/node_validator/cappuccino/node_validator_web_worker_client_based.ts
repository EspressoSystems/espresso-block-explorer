import { Channel, createBufferedChannel } from '@/async/channel';
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
import ProxyWorker from './node_validator_web_worker_api.js?worker';
import {
  kNodeValidatorRequestType,
  nodeValidatorServiceRequestCodec,
} from './requests/node_validator_service_request';
import {
  kNodeValidatorServiceResponseType,
  nodeValidatorServiceResponseCodec,
} from './responses/node_validator_service_response';
import { WebWorkerNodeValidatorAPI } from './web_worker_proxy_api';

registerWebWorkerProxyRequestCodec(
  kNodeValidatorRequestType,
  nodeValidatorServiceRequestCodec,
);
registerWebWorkerProxyResponseCodec(
  kNodeValidatorServiceResponseType,
  nodeValidatorServiceResponseCodec,
);

const _: unknown = null;

// We're performing this useless check to ensure that WebSocketError is imported
// for it's side-effect.
// eslint-disable-next-line @typescript-eslint/no-unused-expressions
_ instanceof WebSocketError;

let singletonWorker: null | Worker = null;
function createWorker(): Worker {
  if (!singletonWorker) {
    singletonWorker = new ProxyWorker();
  }

  return singletonWorker;
}

export class WebWorkerClientBasedNodeValidatorService implements WebWorkerNodeValidatorAPI {
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
    const worker = createWorker();

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
