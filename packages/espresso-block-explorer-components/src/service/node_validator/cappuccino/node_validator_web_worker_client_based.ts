import { Channel, createBufferedChannel } from '@/async/channel';
import WebSocketError from '@/errors/WebSocketError';
import ProxyWorker from './node_validator_web_worker_api.js?worker';
import CappuccinoNodeValidatorRequest from './requests/node_validator_request';
import { WebWorkerProxyRequest } from './requests/web_worker_proxy_request';
import { webWorkerProxyRequestCodec } from './requests/web_worker_proxy_request_codec';
import CappuccinoNodeValidatorResponse from './responses/node_validator_response';
import { WebWorkerProxyResponse } from './responses/web_worker_proxy_response';
import { webWorkerProxyResponseCodec } from './responses/web_worker_proxy_response_codec';
import { WebWorkerNodeValidatorAPI } from './web_worker_proxy_api';

const _: unknown = null;

// We're performing this useless check to ensure that WebSocketError is imported
// for it's side-effect.
_ instanceof WebSocketError;

export class WebWorkerClientBasedNodeValidatorService
  implements WebWorkerNodeValidatorAPI
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

  get stream(): AsyncIterable<CappuccinoNodeValidatorResponse> {
    return this.responseChannel;
  }

  async send(request: CappuccinoNodeValidatorRequest) {
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
