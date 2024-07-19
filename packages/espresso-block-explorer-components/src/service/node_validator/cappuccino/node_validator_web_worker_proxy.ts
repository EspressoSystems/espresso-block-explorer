import { createBufferedChannel } from '@/async/channel';
import UnimplementedError from '@/errors/UnimplementedError';
import FakeDataCappuccinoNodeValidatorAPI from './implementations/fake_data';
import ReplayDataCappuccinoNodeValidatorAPI, {
  HARFormat,
} from './implementations/replay_data';
import WebSocketDataCappuccinoNodeValidatorAPI from './implementations/websocket_data';
import { CappuccinoNodeValidatorService } from './node_validator_service_api';
import CappuccinoNodeValidatorRequest from './requests/node_validator_request';
import { cappuccinoNodeValidatorRequestCodec } from './requests/node_validator_request_codec';
import CappuccinoNodeValidatorResponse from './responses/node_validator_response';
import { cappuccinoNodeValidatorResponseCodec } from './responses/node_validator_response_codec';

type Config = {
  node_validator_service_url: undefined | null | string;
};

type PostMessageFunction = typeof postMessage;

async function determineServiceImplementationFromReplayURL(
  url: URL,
): Promise<CappuccinoNodeValidatorService> {
  // The Path of the URL is the HAR file URL
  const fileURL = url.pathname;

  const response = await fetch(fileURL);

  if (!response.ok) {
    throw new UnimplementedError();
  }

  const capturedHAR: HARFormat = await response.json();
  const requestChannel =
    createBufferedChannel<CappuccinoNodeValidatorRequest>(1024);
  const responseChannel =
    createBufferedChannel<CappuccinoNodeValidatorResponse>(1024);

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
): Promise<null | CappuccinoNodeValidatorService> {
  const url = new URL(serviceURL);

  if (url.protocol === 'replay:') {
    return determineServiceImplementationFromReplayURL(url);
  }

  if (url.protocol === 'ws:' || url.protocol === 'wss:') {
    // Web Socket Implementation
    const requestChannel =
      createBufferedChannel<CappuccinoNodeValidatorRequest>(1024);
    const responseChannel =
      createBufferedChannel<CappuccinoNodeValidatorResponse>(1024);
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

async function determineServiceImplementation(): Promise<CappuccinoNodeValidatorService> {
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

  const requestChannel =
    createBufferedChannel<CappuccinoNodeValidatorRequest>(1024);
  const responseChannel =
    createBufferedChannel<CappuccinoNodeValidatorResponse>(1024);

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

class WebWorkerProxyNodeValidatorService
  implements CappuccinoNodeValidatorService
{
  private service: CappuccinoNodeValidatorService;
  constructor(Service: CappuccinoNodeValidatorService) {
    this.service = Service;
  }

  get stream() {
    return this.service.stream;
  }

  async send(request: CappuccinoNodeValidatorRequest) {
    return this.service.send(request);
  }
}

async function handleResponses(
  service: Promise<CappuccinoNodeValidatorService>,
  postMessage: PostMessageFunction,
) {
  const resolvedService = await service;
  for await (const response of resolvedService.stream) {
    postMessage(cappuccinoNodeValidatorResponseCodec.encode(response));
  }
}

export class WebWorkerProxy {
  private service: Promise<WebWorkerProxyNodeValidatorService>;

  constructor(postMessage: PostMessageFunction) {
    const service = determineService();
    this.service = service;
    handleResponses(service, postMessage);
  }

  async handleEvent(event: MessageEvent) {
    // This is our entry point, and where we will receive / process messages
    const request = cappuccinoNodeValidatorRequestCodec.decode(event.data);

    try {
      const service = await this.service;
      service.send(request);
    } catch (error) {
      console.warn('error processing message from event', error);
    }
  }
}
