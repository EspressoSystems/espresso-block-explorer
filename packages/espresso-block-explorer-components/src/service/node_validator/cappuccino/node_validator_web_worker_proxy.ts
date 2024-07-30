import { createBufferedChannel } from '@/async/channel';
import UnimplementedError from '@/errors/UnimplementedError';
import FakeDataCappuccinoNodeValidatorAPI from './implementations/fake_data';
import ReplayDataCappuccinoNodeValidatorAPI, {
  HARFormat,
} from './implementations/replay_data';
import WebSocketDataCappuccinoNodeValidatorAPI from './implementations/websocket_data';
import { WebWorkerProxyRequest } from './requests/web_worker_proxy_request';
import { webWorkerProxyRequestCodec } from './requests/web_worker_proxy_request_codec';
import { WebWorkerProxyResponse } from './responses/web_worker_proxy_response';
import { webWorkerProxyResponseCodec } from './responses/web_worker_proxy_response_codec';
import { WebWorkerNodeValidatorAPI } from './web_worker_proxy_api';

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

async function determineServiceImplementation(): Promise<WebWorkerNodeValidatorAPI> {
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
    console.warn(
      'error determining service implementation, from configuration file',
      error,
    );
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
    await determineServiceImplementation(),
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

async function handleResponses(
  service: Promise<WebWorkerNodeValidatorAPI>,
  postMessage: PostMessageFunction,
) {
  const resolvedService = await service;
  for await (const response of resolvedService.stream) {
    postMessage(webWorkerProxyResponseCodec.encode(response));
  }
}

export class WebWorkerProxy {
  private service: Promise<WebWorkerNodeValidatorAPI>;

  constructor(postMessage: PostMessageFunction) {
    const service = determineService();
    this.service = service;
    handleResponses(service, postMessage);
  }

  async handleEvent(event: MessageEvent) {
    // This is our entry point, and where we will receive / process messages
    const request = webWorkerProxyRequestCodec.decode(event.data);

    try {
      const service = await this.service;
      service.send(request);
    } catch (error) {
      console.warn('error processing message from event', error);
    }
  }
}
