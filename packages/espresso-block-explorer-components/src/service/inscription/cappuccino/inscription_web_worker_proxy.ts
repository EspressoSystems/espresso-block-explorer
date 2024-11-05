import { createBufferedChannel } from '@/async/channel';
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
import FakeDataCappuccinoInscriptionAPI from './implementations/fake_data';
import RemoteInscriptionAPI from './implementations/remote';
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

type Config = {
  inscription_service_url: undefined | null | string;
};

type PostMessageFunction = typeof postMessage;

async function determineServiceImplementationFromServiceURL(
  baseServiceURL: string,
): Promise<WebWorkerInscriptionAPI> {
  const baseURL = new URL(baseServiceURL);
  const baseWebSocketURL = new URL(
    `${baseURL.protocol.replace(/^http?/, 'ws')}//${baseURL.host}${baseURL.pathname}`,
  );

  console.info(
    '<<<< HERE determineServiceImplementationFromServiceURL',
    baseURL,
    baseWebSocketURL,
  );

  const requestChannel = createBufferedChannel<WebWorkerProxyRequest>(1024);
  const responseChannel = createBufferedChannel<WebWorkerProxyResponse>(1024);
  const service = new RemoteInscriptionAPI(
    requestChannel,
    responseChannel,
    baseWebSocketURL,
    baseURL,
  );

  service.startProcessing();

  return service;
}

async function determineServiceImplementation(): Promise<WebWorkerInscriptionAPI> {
  try {
    const response = await fetch('/config.json');
    const config: Config = await response.json();

    if (config.inscription_service_url) {
      const service = await determineServiceImplementationFromServiceURL(
        config.inscription_service_url,
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
