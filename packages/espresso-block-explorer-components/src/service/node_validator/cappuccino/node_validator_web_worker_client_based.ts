import { Channel, createBufferedChannel } from '@/async/channel';
import { CappuccinoNodeValidatorService } from './node_validator_service_api';
import ProxyWorker from './node_validator_web_worker_api.js?worker';
import CappuccinoNodeValidatorRequest from './requests/node_validator_request';
import { cappuccinoNodeValidatorRequestCodec } from './requests/node_validator_request_codec';
import CappuccinoNodeValidatorResponse from './responses/node_validator_response';
import { cappuccinoNodeValidatorResponseCodec } from './responses/node_validator_response_codec';

export class WebWorkerClientBasedNodeValidatorService
  implements CappuccinoNodeValidatorService
{
  private requestChannel: Channel<CappuccinoNodeValidatorRequest>;
  private responseChannel: Channel<CappuccinoNodeValidatorResponse>;

  constructor(
    requestChannel: Channel<CappuccinoNodeValidatorRequest> = createBufferedChannel(
      1024,
    ),
    responseChannel: Channel<CappuccinoNodeValidatorResponse> = createBufferedChannel(
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
    const response = cappuccinoNodeValidatorResponseCodec.decode(event.data);
    console.info('<<< HERE handleMessage', response);
    this.responseChannel.publish(response);
  }

  private handleMessageError() {
    // Figure out what to do here
  }

  private handleError() {
    // Figure out what to do here.
  }
}

/**
 * bridgeRequestsToWebWorker bridges requests from the request channel to the
 * web worker via the postMessage method.
 */
async function bridgeRequestsToWebWorker(
  worker: Worker,
  requestChannel: Channel<CappuccinoNodeValidatorRequest>,
) {
  for await (const request of requestChannel) {
    worker.postMessage(cappuccinoNodeValidatorRequestCodec.encode(request));
  }
}
