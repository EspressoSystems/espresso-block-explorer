import UnimplementedError from '@/errors/unimplemented_error';
import { WebWorkerRequest } from '@/service/espresso_l1_validator_service/web_worker_types';
import { BlockHeightResponse } from '@/service/hotshot_query_service/types';
import { CappuccinoHotShotQueryServiceStatusAPI } from '../status_api';

export type StatusRequest<
  Method extends keyof CappuccinoHotShotQueryServiceStatusAPI =
    keyof CappuccinoHotShotQueryServiceStatusAPI,
> = WebWorkerRequest<
  'status',
  Method,
  Parameters<CappuccinoHotShotQueryServiceStatusAPI[Method]>
>;

export class WebWorkerProxyStatusAPI implements CappuccinoHotShotQueryServiceStatusAPI {
  private service: CappuccinoHotShotQueryServiceStatusAPI;
  constructor(service: CappuccinoHotShotQueryServiceStatusAPI) {
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
