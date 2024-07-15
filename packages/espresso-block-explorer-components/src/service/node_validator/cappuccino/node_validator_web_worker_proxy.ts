import { createBufferedChannel } from '@/async/channel';
import FakeDataCappuccinoNodeValidatorAPI from './implementations/fake_data';
import { CappuccinoNodeValidatorService } from './node_validator_service_api';
import CappuccinoNodeValidatorRequest from './requests/node_validator_request';
import { cappuccinoNodeValidatorRequestCodec } from './requests/node_validator_request_codec';
import CappuccinoNodeValidatorResponse from './responses/node_validator_response';
import { cappuccinoNodeValidatorResponseCodec } from './responses/node_validator_response_codec';

type Config = {
  node_validator_service_url: undefined | null | string;
};

type PostMessageFunction = typeof postMessage;

async function determineServiceImplementation(): Promise<CappuccinoNodeValidatorService> {
  try {
    const response = await fetch('/config.json');
    const config: Config = await response.json();
    if (config.node_validator_service_url) {
      // const url = new URL(config.node_validator_service_url);
      // return new FetchBasedCappuccinoHotShotQueryService(fetch.bind(self), url);
    }
  } catch (err) {
    // We ignore this error for now, and fallback to fake data.
  }

  const requestChannel =
    createBufferedChannel<CappuccinoNodeValidatorRequest>(1024);
  const responseChannel =
    createBufferedChannel<CappuccinoNodeValidatorResponse>(1024);

  const service = new FakeDataCappuccinoNodeValidatorAPI(
    requestChannel,
    responseChannel,
  );

  service.startProcessing();

  return service;
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
      //
    }
  }
}
