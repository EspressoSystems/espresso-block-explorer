import { Channel, createBufferedChannel } from '@/async/channel';
import { EspressoError } from '@/errors/EspressoError';
import FetchError from '@/errors/FetchError';
import UnimplementedError from '@/errors/UnimplementedError';
import { WebWorkerRequest } from '@/service/espresso_l1_validator_service/web_worker_types';
import {
  webWorkerRequestCodec,
  WebWorkerResponseError,
  webWorkerResponseErrorCodec,
  WebWorkerResponseSuccess,
  webWorkerResponseSuccessCodec,
} from '../web_worker_types';
import { AvailabilityRequest } from './availability/implementations/web_worker_proxy';
import { ExplorerRequest } from './explorer/implementations/web_worker_proxy';
import { CappuccinoHotShotQueryService } from './hot_shot_query_service_api';
import { FakeDataCappuccinoHotShotQueryService } from './implementations/fake_data';
import { FetchBasedCappuccinoHotShotQueryService } from './implementations/remote_api';
import { WebWorkerProxyHotShotQueryService } from './implementations/web_worker_proxy';
import { RewardStateRequest } from './reward_state/implementations/web_worker_proxy';
import { StatusRequest } from './status/implementations/web_worker_proxy';

type Config = {
  hotshot_query_service_url: undefined | null | string;
};

type ProxyRequest = WebWorkerRequest<'proxy', 'set-url', [string]>;

/**
 * wrappedFetch is a wrapper around the fetch function that throws a FetchError
 * when the fetch operation fails.
 *
 * This is done so fetch doesn't have to suffer binding issues, and so that the
 * resulting error can be encodable.
 */
const wrappedFetch: typeof fetch = async (input: unknown, init?: unknown) => {
  try {
    return await fetch(input as RequestInfo | URL, init as RequestInit);
  } catch (error) {
    throw new FetchError(error);
  }
};

type PostMessageFunction = typeof postMessage;

async function determineServiceImplementationFromConfigFile(): Promise<CappuccinoHotShotQueryService> {
  try {
    const response = await fetch('/config.json');
    const config: Config = await response.json();
    if (config.hotshot_query_service_url) {
      const url = new URL(config.hotshot_query_service_url);
      return new FetchBasedCappuccinoHotShotQueryService(wrappedFetch, url);
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    // We ignore this error for now, and fallback to fake data.
  }

  return new FakeDataCappuccinoHotShotQueryService();
}

async function determineService() {
  return new WebWorkerProxyHotShotQueryService(
    await determineServiceImplementationFromConfigFile(),
  );
}

export class WebWorkerProxy {
  // private config: Promise<Config>;
  private service: Promise<WebWorkerProxyHotShotQueryService>;
  private postMessage: PostMessageFunction;

  private requestChannel: Channel<
    | AvailabilityRequest
    | StatusRequest
    | ExplorerRequest
    | RewardStateRequest
    | ProxyRequest
  >;

  constructor(postMessage: PostMessageFunction) {
    this.postMessage = postMessage;
    this.service = determineService();
    this.requestChannel = createBufferedChannel(10);

    // Kick off request processing promise
    this.processRequests();
  }

  async handleProxyRequest(request: ProxyRequest): Promise<boolean> {
    if (request.method === 'set-url') {
      const url = request.param[0];
      if (!url || typeof url !== 'string') {
        throw new UnimplementedError('Invalid URL provided');
      }

      this.service = Promise.resolve(
        new WebWorkerProxyHotShotQueryService(
          new FetchBasedCappuccinoHotShotQueryService(
            wrappedFetch,
            new URL(url),
          ),
        ),
      );
      return true;
    } else {
      throw new UnimplementedError(`Unknown proxy method: ${request.method}`);
    }
  }

  private async processRequests() {
    for await (const request of this.requestChannel) {
      try {
        const service = await this.service;
        let response: unknown;
        if (request.api === 'proxy') {
          response = await this.handleProxyRequest(request as ProxyRequest);
        } else {
          response = await service.handleRequest(request);
        }

        this.postMessage(
          webWorkerResponseSuccessCodec.encode(
            new WebWorkerResponseSuccess(request.requestID, response),
          ),
        );
      } catch (error) {
        this.postMessage(
          webWorkerResponseErrorCodec.encode(
            new WebWorkerResponseError(
              request.requestID,
              error as EspressoError,
            ),
          ),
        );
      }
    }
  }

  async handleEvent(event: MessageEvent) {
    // This is our entry point, and where we will receive / process messages
    const request = webWorkerRequestCodec.decode(event.data) as
      | AvailabilityRequest
      | StatusRequest
      | ExplorerRequest
      | RewardStateRequest
      | ProxyRequest;

    // Each page should only require a single request to an HTTP endpoint.
    // There is some special behavior when it comes to the Storybook itself,
    // specifically being able to overwrite the base URL opf the services
    // we're requesting from.  We needs these requests to be run serialized,'
    // otherwise we run into a data race with requesting the data at the same
    // time we're changing the base URL.
    // This shouldn't impact the deployed version, or even the performance of
    // the requests, as we should need, ideally, a single request per page.

    await this.requestChannel.publish(request);
  }
}
