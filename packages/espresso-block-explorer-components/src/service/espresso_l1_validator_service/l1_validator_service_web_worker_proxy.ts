import { Channel, createBufferedChannel } from '@/async/channel';
import { EspressoError } from '@/errors/EspressoError';
import FetchError from '@/errors/FetchError';
import UnimplementedError from '@/errors/UnimplementedError';
import { FakeDataL1ValidatorService } from './implementations/fake_data';
import { FetchBasedL1ValidatorService } from './implementations/fetch_based';
import {
  ProxyRequest,
  WebWorkerL1ValidatorService,
} from './implementations/web_worker_proxy';
import { L1BlockAPIRequest } from './l1_block/implementations/web_worker_proxy';
import { L1ValidatorService } from './l1_validator_service_api';
import { ValidatorsActiveAPIRequest } from './validators_active/implementations/web_worker_proxy';
import { ValidatorsActiveAllRequest } from './validators_all/implementations/web_worker_proxy';
import {
  WebWorkerResponseError,
  WebWorkerResponseSuccess,
  webWorkerRequestJSONCodec,
  webWorkerResponseErrorJSONCodec,
  webWorkerResponseSuccessJSONCodec,
} from './web_worker_types';

/**
 * Config represents the structure of an external configuration file that
 * will inform the Web Worker L1 Validation Service Proxy which implementation
 * of the L1 Validator Service to use.
 */
type Config = {
  l1_validators_service_url: undefined | null | string;
};

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

/**
 * PostMessageFunction is the type of the postMessage function.
 */
type PostMessageFunction = typeof postMessage;

/**
 * determineServiceImplementationFromConfigFile determines the
 * L1ValidatorService implementation to use based on an external
 * configuration file.
 */
async function determineServiceImplementationFromConfigFile(): Promise<L1ValidatorService> {
  try {
    const response = await fetch('/config.json');
    const config: Config = await response.json();
    if (config.l1_validators_service_url) {
      const url = new URL(config.l1_validators_service_url);
      return new FetchBasedL1ValidatorService(wrappedFetch, url);
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    // We ignore this error for now, and fallback to fake data.
  }

  return new FakeDataL1ValidatorService();
}

async function determineService() {
  return new WebWorkerL1ValidatorService(
    await determineServiceImplementationFromConfigFile(),
  );
}

/**
 * WebWorkerProxy is the main proxy class that handles incoming requests
 * from the main thread, forwards them to the appropriate service implementation,
 * and sends back the responses.
 */
export class WebWorkerProxy {
  // private config: Promise<Config>;
  private service: Promise<WebWorkerL1ValidatorService>;
  private postMessage: PostMessageFunction;

  private requestChannel: Channel<
    | L1BlockAPIRequest
    | ValidatorsActiveAPIRequest
    | ValidatorsActiveAllRequest
    | ProxyRequest
  >;

  constructor(postMessage: PostMessageFunction) {
    this.postMessage = postMessage;
    this.service = determineService();
    this.requestChannel = createBufferedChannel(10);

    // Kick off request processing promise
    this.processRequests();
  }

  /**
   * handleProxyRequest handles requests specific to the proxy itself.
   * This is specific to methods that are not part of the L1ValidatorService
   * API, and only serve to configure the proxy itself.
   */
  async handleProxyRequest(request: ProxyRequest): Promise<boolean> {
    if (request.method === 'set-url') {
      const url = request.param[0];
      if (!url || typeof url !== 'string') {
        throw new UnimplementedError('Invalid URL provided');
      }

      this.service = Promise.resolve(
        new WebWorkerL1ValidatorService(
          new FetchBasedL1ValidatorService(wrappedFetch, new URL(url)),
        ),
      );
      return true;
    } else {
      throw new UnimplementedError(`Unknown proxy method: ${request.method}`);
    }
  }

  /**
   * processRequests processes incoming requests from the request channel.
   * It forwards them to the appropriate service implementation, and sends back
   * the responses.
   */
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
          webWorkerResponseSuccessJSONCodec.encode(
            new WebWorkerResponseSuccess(request.requestID, response),
          ),
        );
      } catch (error) {
        this.postMessage(
          webWorkerResponseErrorJSONCodec.encode(
            new WebWorkerResponseError(
              request.requestID,
              error as EspressoError,
            ),
          ),
        );
      }
    }
  }

  /**
   * handleEvent handles incoming messages from the main thread.
   */
  async handleEvent(event: MessageEvent) {
    // This is our entry point, and where we will receive / process messages
    const request = webWorkerRequestJSONCodec.decode(event.data) as
      | L1BlockAPIRequest
      | ValidatorsActiveAPIRequest
      | ValidatorsActiveAllRequest
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
