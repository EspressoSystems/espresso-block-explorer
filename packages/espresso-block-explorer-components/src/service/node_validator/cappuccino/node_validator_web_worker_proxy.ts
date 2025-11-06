import { Channel, createBufferedChannel } from '@/async/channel';
import { Completer, createCompleter } from '@/data_structures/async';
import UnimplementedError from '@/errors/UnimplementedError';
import { WebSocketCommandSetURL } from '@/models/web_worker/web_socket/request/set_url';
import { WebSocketRequest } from '@/models/web_worker/web_socket/web_socket_request';
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
import FakeDataCappuccinoNodeValidatorAPI from './implementations/fake_data';
import ReplayDataCappuccinoNodeValidatorAPI, {
  HARFormat,
} from './implementations/replay_data';
import WebSocketDataCappuccinoNodeValidatorAPI from './implementations/websocket_data';
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

type Config = {
  node_validator_service_url: undefined | null | string;
};

type PostMessageFunction = typeof postMessage;

async function determineServiceImplementationFromReplayURL(
  url: URL,
): Promise<WebWorkerNodeValidatorAPI> {
  // The Path of the URL is the HAR file URL
  const fileURL = url.pathname;

  const response = await fetch(fileURL);

  if (!response.ok) {
    throw new UnimplementedError();
  }

  const capturedHAR: HARFormat = await response.json();
  const requestChannel = createBufferedChannel<WebWorkerProxyRequest>(1024);
  const responseChannel = createBufferedChannel<WebWorkerProxyResponse>(1024);

  const replayService = new ReplayDataCappuccinoNodeValidatorAPI(
    requestChannel,
    responseChannel,
    capturedHAR,
  );
  replayService.startProcessing();
  return replayService;
}

async function determineServiceImplementationFromServiceURL(
  serviceURL: string,
): Promise<null | WebWorkerNodeValidatorAPI> {
  const url = new URL(serviceURL);

  if (url.protocol === 'replay:') {
    return determineServiceImplementationFromReplayURL(url);
  }

  if (url.protocol === 'ws:' || url.protocol === 'wss:') {
    // Web Socket Implementation
    const requestChannel = createBufferedChannel<WebWorkerProxyRequest>(1024);
    const responseChannel = createBufferedChannel<WebWorkerProxyResponse>(1024);
    const service = new WebSocketDataCappuccinoNodeValidatorAPI(
      requestChannel,
      responseChannel,
      url,
    );

    service.startProcessing();
    return service;
  }

  return null;
}

async function determineServiceImplementationFromConfig(): Promise<WebWorkerNodeValidatorAPI> {
  try {
    const response = await fetch('/config.json');
    const config: Config = await response.json();

    if (config.node_validator_service_url) {
      const service = await determineServiceImplementationFromServiceURL(
        config.node_validator_service_url,
      );
      if (service !== null) {
        return service;
      }
    }
  } catch (error) {
    // We are unable to determine the service configuration from the config
    // file. But the specific reason may indicate some more details.

    // But the ultimate cause would indicate that it would only really fail
    // due to not having a live service to connect to.

    let isLocalTestEnvironmentError = false;
    if (error instanceof TypeError) {
      if (/failed to parse url/i.test(error.toString())) {
        isLocalTestEnvironmentError = true;
      }
    }

    if (!isLocalTestEnvironmentError) {
      console.warn(
        'error determining service implementation, from configuration file',
        error,
      );
    }
  }

  const requestChannel = createBufferedChannel<WebWorkerProxyRequest>(1024);
  const responseChannel = createBufferedChannel<WebWorkerProxyResponse>(1024);

  const fakeService = new FakeDataCappuccinoNodeValidatorAPI(
    requestChannel,
    responseChannel,
  );

  fakeService.startProcessing();

  return fakeService;
}

async function determineService() {
  return new WebWorkerProxyNodeValidatorService(
    await determineServiceImplementationFromConfig(),
  );
}

class WebWorkerProxyNodeValidatorService implements WebWorkerNodeValidatorAPI {
  private service: WebWorkerNodeValidatorAPI;
  constructor(Service: WebWorkerNodeValidatorAPI) {
    this.service = Service;
  }

  get stream() {
    return this.service.stream;
  }

  async send(request: WebWorkerProxyRequest) {
    return this.service.send(request);
  }
}

class Stop {}

async function handleResponses(
  service: Promise<WebWorkerNodeValidatorAPI>,
  stop: Promise<Stop>,
  postMessage: PostMessageFunction,
) {
  const resolvedService = await service;
  const it = resolvedService.stream[Symbol.asyncIterator]();
  while (true) {
    const result = await Promise.race([stop, it.next()]);
    if (result instanceof Stop) {
      // We're being told to stop sending responses
      return;
    }

    if (result.done) {
      // Our stream has ended, we can stop processing
      return;
    }

    const response = result.value;
    postMessage(webWorkerProxyResponseCodec.encode(response));
  }
}

export class WebWorkerProxy {
  private service: Promise<WebWorkerNodeValidatorAPI>;
  private stopPublishingResponses: Completer<Stop>;
  private postMessage: PostMessageFunction;
  private readonly requestChannel: Channel<WebWorkerProxyRequest>;

  constructor(postMessage: PostMessageFunction) {
    const service = determineService();
    this.service = service;
    const completer = createCompleter<Stop>();
    this.stopPublishingResponses = completer;
    this.requestChannel = createBufferedChannel<WebWorkerProxyRequest>(1024);
    this.postMessage = postMessage;
    this.processRequests();
    handleResponses(service, completer.promise, this.postMessage);
  }

  async setURL(url: string): Promise<boolean> {
    // This method is used to set the URL for the service, if applicable.
    // It will return true if the URL was set successfully, false otherwise.
    try {
      const parsedURL = new URL(url);
      switch (parsedURL.protocol) {
        case 'replay:':
        /* falls through */
        case 'ws:':
        /* falls through */
        case 'wss:':
          // Valid protocols for node validator URLs
          break;
        default:
          console.warn('Invalid protocol for node validator URL:', url);
          return false;
      }

      // Is our URL the same?
      const currentService = await this.service;
      // Out with the old
      this.stopPublishingResponses.complete(new Stop());

      if (currentService instanceof FakeDataCappuccinoNodeValidatorAPI) {
        currentService.responseStream.close();
      } else if (
        currentService instanceof ReplayDataCappuccinoNodeValidatorAPI
      ) {
        // If the current service is a replay service, we need to stop it
        // We don't know if it is currently processing or not.
        currentService.responseStream.close();
      } else if (
        currentService instanceof WebSocketDataCappuccinoNodeValidatorAPI
      ) {
        // If the current service is a WebSocket service, we need to close it
        // We don't know if it is currently connected or not.
        currentService.responseStream.close();
      }
      // currentService.send(new WebSocketRequest(new WebSocketCommandClose()));

      if (currentService instanceof FakeDataCappuccinoNodeValidatorAPI) {
        currentService.requestStream.close();
      } else if (
        currentService instanceof ReplayDataCappuccinoNodeValidatorAPI
      ) {
        // If the current service is a replay service, we need to stop it
        // We don't know if it is currently processing or not.
        currentService.requestStream.close();
      } else if (
        currentService instanceof WebSocketDataCappuccinoNodeValidatorAPI
      ) {
        // If the current service is a WebSocket service, we need to close it
        // We don't know if it is currently connected or not.
        currentService.requestStream.close();
      }

      const nextService =
        await determineServiceImplementationFromServiceURL(url);
      if (nextService === null) {
        console.warn(
          'Unable to determine service implementation from URL:',
          url,
        );
        return false;
      }

      const resolvedService = new WebWorkerProxyNodeValidatorService(
        nextService,
      );

      // In with the new
      const completer = createCompleter<Stop>();
      this.service = Promise.resolve(resolvedService);
      this.stopPublishingResponses = completer;
      // We need to setup the next response handler for the new service
      handleResponses(
        Promise.resolve(resolvedService),
        completer.promise,
        this.postMessage,
      );
      return true;
    } catch (error) {
      console.warn('error setting URL for node validator', url, error);
      return false;
    }
  }

  async processRequests() {
    for await (const request of this.requestChannel) {
      try {
        const service = await this.service;
        if (request instanceof WebSocketRequest) {
          if (request.command instanceof WebSocketCommandSetURL) {
            // If the request is a WebSocketCommandSetURL, we will set the URL for
            // the service and return.
            await this.setURL(request.command.url);
            continue;
          }
        }

        service.send(request);
      } catch (error) {
        console.warn('error processing message from event', error);
      }
    }
  }

  async handleEvent(event: MessageEvent) {
    // This is our entry point, and where we will receive / process messages
    const request = webWorkerProxyRequestCodec.decode(event.data);
    await this.requestChannel.publish(request);
  }
}
