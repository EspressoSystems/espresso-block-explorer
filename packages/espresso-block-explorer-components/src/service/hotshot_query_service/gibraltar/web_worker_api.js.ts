import { numberCodec } from '../../../convert/codec/number';
import UnimplementedError from '../../../errors/UnimplementedError';
import { GibraltarHotShotQueryServiceAvailabilityAPI } from './availability/availability_api';
import { GibraltarHotShotQueryService } from './hot_shot_query_service_api';
import { FakeDataGibraltarHotShotQueryService } from './implementations/fake_data';
import { FetchBasedGibraltarHotShotQueryService } from './implementations/remote_api';
import { GibraltarHotShotQueryServiceStatusAPI } from './status/status_api';

type Config = {
  hotshot_query_service_url: undefined | null | string;
};

class WebWorkerProxyStatusAPI {
  private service: GibraltarHotShotQueryServiceStatusAPI;

  constructor(service: GibraltarHotShotQueryServiceStatusAPI) {
    this.service = service;
  }

  blockHeight() {
    return this.service.blockHeight();
  }

  async handleEvent(event: MessageEvent) {
    const [, [, method]] = event.data as [
      number,
      ['status', keyof GibraltarHotShotQueryServiceStatusAPI],
    ];

    switch (method) {
      case 'blockHeight':
        return this.blockHeight();
      default:
        throw new UnimplementedError();
    }
  }
}

class WebWorkerProxyAvailabilityAPI {
  private service: GibraltarHotShotQueryServiceAvailabilityAPI;

  constructor(service: GibraltarHotShotQueryServiceAvailabilityAPI) {
    this.service = service;
  }

  getLeafFromHeight(height: number) {
    return this.service.getLeafFromHeight(height);
  }

  getTransactionFromHeightAndOffset(height: number, index: number) {
    return this.service.getTransactionFromHeightAndOffset(height, index);
  }

  getBlockFromHeight(height: number) {
    return this.service.getBlockFromHeight(height);
  }

  getBlockSummaries(from: number, until: number) {
    return this.service.getBlockSummaries(from, until);
  }

  getTransactionSummaryRange(height: number, offset: number, limit: number) {
    return this.service.getTransactionSummaryRange(height, offset, limit);
  }

  getTransactionSummaryRangeForRollup(
    namespace: number,
    height: number,
    offset: number,
    limit: number,
  ) {
    return this.service.getTransactionSummaryRangeForRollup(
      namespace,
      height,
      offset,
      limit,
    );
  }

  async handleEvent(event: MessageEvent) {
    const [, [, method]] = event.data as [
      number,
      ['availability', keyof GibraltarHotShotQueryServiceAvailabilityAPI],
    ];
    const args: unknown[] = event.data.slice(2);

    switch (method) {
      case 'getLeafFromHeight':
        return this.getLeafFromHeight(numberCodec.decode(args[0]));
      case 'getTransactionFromHeightAndOffset':
        return this.getTransactionFromHeightAndOffset(
          numberCodec.decode(args[0]),
          numberCodec.decode(args[1]),
        );
      case 'getBlockFromHeight':
        return this.getBlockFromHeight(numberCodec.decode(args[0]));
      case 'getBlockSummaries':
        return this.getBlockSummaries(
          numberCodec.decode(args[0]),
          numberCodec.decode(args[1]),
        );
      case 'getTransactionSummaryRange':
        return this.getTransactionSummaryRange(
          numberCodec.decode(args[0]),
          numberCodec.decode(args[1]),
          numberCodec.decode(args[2]),
        );
      case 'getTransactionSummaryRangeForRollup':
        return this.getTransactionSummaryRangeForRollup(
          numberCodec.decode(args[0]),
          numberCodec.decode(args[1]),
          numberCodec.decode(args[2]),
          numberCodec.decode(args[3]),
        );
      default:
        throw new UnimplementedError();
    }
  }
}

class WebWorkerProxyHotshotQueryService {
  private availabilityAPI: WebWorkerProxyAvailabilityAPI;
  private statusAPI: WebWorkerProxyStatusAPI;

  constructor(service: GibraltarHotShotQueryService) {
    this.availabilityAPI = new WebWorkerProxyAvailabilityAPI(
      service.availability,
    );
    this.statusAPI = new WebWorkerProxyStatusAPI(service.status);
  }

  async handleEvent(event: MessageEvent) {
    const [, [api]] = event.data as [
      number,
      (
        | ['availability', keyof GibraltarHotShotQueryServiceAvailabilityAPI]
        | ['status', keyof GibraltarHotShotQueryServiceStatusAPI]
      ),
    ];

    switch (api) {
      case 'availability':
        return this.availabilityAPI.handleEvent(event);
      case 'status':
        return this.statusAPI.handleEvent(event);
      default:
        throw new UnimplementedError();
    }
  }
}

class WebWorkerProxy {
  // private config: Promise<Config>;
  private service: Promise<WebWorkerProxyHotshotQueryService>;

  constructor() {
    this.service = fetch('/config.json')
      .then((response) => response.json())
      .then((config: Config) => {
        if (config.hotshot_query_service_url) {
          const url = new URL(config.hotshot_query_service_url);
          return new FetchBasedGibraltarHotShotQueryService(
            fetch.bind(self),
            url,
          );
        }

        throw new Error('no url provided');
      })
      .catch(() => new FakeDataGibraltarHotShotQueryService())
      .then((service) => new WebWorkerProxyHotshotQueryService(service));
  }

  async handleEvent(event: MessageEvent) {
    const [requestID] = event.data as [number];
    try {
      const service = await this.service;
      const response = await service.handleEvent(event);

      postMessage([
        requestID,
        { response: JSON.parse(JSON.stringify(response)) },
      ]);
    } catch (error) {
      postMessage([requestID, { error: JSON.parse(JSON.stringify(error)) }]);
    }
  }
}

self.addEventListener('message', new WebWorkerProxy());
