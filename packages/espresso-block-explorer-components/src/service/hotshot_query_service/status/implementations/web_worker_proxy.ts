import UnimplementedError from '@/errors/unimplemented_error';
import { WebWorkerRequest } from '@/service/espresso_staking_api_service/web_worker_types';
import { BlockHeightResponse } from '@/service/hotshot_query_service/types';
import { HotShotQueryServiceStatusAPI } from '../status_api';

export type StatusRequest<
  Method extends keyof HotShotQueryServiceStatusAPI =
    keyof HotShotQueryServiceStatusAPI,
> = WebWorkerRequest<
  'status',
  Method,
  Parameters<HotShotQueryServiceStatusAPI[Method]>
>;

export class WebWorkerProxyStatusAPI implements HotShotQueryServiceStatusAPI {
  private service: HotShotQueryServiceStatusAPI;
  constructor(service: HotShotQueryServiceStatusAPI) {
    this.service = service;
  }

  blockHeight(): Promise<BlockHeightResponse> {
    return this.service.blockHeight();
  }

  async handleRequest(request: StatusRequest) {
    switch (request.method) {
      case 'blockHeight':
        return this.blockHeight();
      default:
        throw new UnimplementedError();
    }
  }
}
