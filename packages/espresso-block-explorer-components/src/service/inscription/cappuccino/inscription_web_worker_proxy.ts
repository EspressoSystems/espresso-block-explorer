import { createBufferedChannel } from '@/async/channel';
import FakeDataCappuccinoInscriptionAPI from './implementations/fake_data';
import { WebWorkerProxyRequest } from './requests/web_worker_proxy_request';
import { webWorkerProxyRequestCodec } from './requests/web_worker_proxy_request_codec';
import { WebWorkerProxyResponse } from './responses/web_worker_proxy_response';
import { webWorkerProxyResponseCodec } from './responses/web_worker_proxy_response_codec';
import { WebWorkerInscriptionAPI } from './web_worker_proxy_api';

type Config = {
  inscription_service_url: undefined | null | string;
};

type PostMessageFunction = typeof postMessage;

async function determineServiceImplementationFromServiceURL(/*serviceURL: string,*/): Promise<null | WebWorkerInscriptionAPI> {
  return null;
}

async function determineServiceImplementation(): Promise<WebWorkerInscriptionAPI> {
  try {
    const response = await fetch('/config.json');
    const config: Config = await response.json();

    if (config.inscription_service_url) {
      const service =
        await determineServiceImplementationFromServiceURL(/* config.inscription_service_url, */);
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

  const fakeService = new FakeDataCappuccinoInscriptionAPI(
    requestChannel,
    responseChannel,
  );

  fakeService.startProcessing();

  return fakeService;
}

async function determineService() {
  return new WebWorkerProxyInscriptionService(
    await determineServiceImplementation(),
  );
}

class WebWorkerProxyInscriptionService implements WebWorkerInscriptionAPI {
  private service: WebWorkerInscriptionAPI;
  constructor(Service: WebWorkerInscriptionAPI) {
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
  service: Promise<WebWorkerInscriptionAPI>,
  postMessage: PostMessageFunction,
) {
  const resolvedService = await service;
  for await (const response of resolvedService.stream) {
    postMessage(webWorkerProxyResponseCodec.encode(response));
  }
}

export class WebWorkerProxy {
  private service: Promise<WebWorkerInscriptionAPI>;

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
