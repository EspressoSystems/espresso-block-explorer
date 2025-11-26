import { numberCodec } from '@/convert/codec/number';
import UnimplementedError from '@/errors/UnimplementedError';
import { WebWorkerRequest } from '@/service/hotshot_query_service/web_worker_types';
import { CappuccinoHotShotQueryServiceAvailabilityAPI } from '../availability_api';
import { cappuccinoAPIBlockCodec } from '../block';
import { listCappuccinoDerivedBlockSummaryCodec } from '../derived_block_summary';
import { listCappuccinoDerivedTransactionSummaryCodec } from '../derived_transaction_summary';
import { cappuccinoAPILeafResponseCodec } from '../leaf_response';
import { cappuccinoAPITransactionResponseCodec } from '../transaction_response';

export type AvailabilityRequest<
  Method extends
    keyof CappuccinoHotShotQueryServiceAvailabilityAPI = keyof CappuccinoHotShotQueryServiceAvailabilityAPI,
> = WebWorkerRequest<
  'availability',
  Method,
  Parameters<CappuccinoHotShotQueryServiceAvailabilityAPI[Method]>
>;

export class WebWorkerProxyAvailabilityAPI {
  private service: CappuccinoHotShotQueryServiceAvailabilityAPI;
  constructor(service: CappuccinoHotShotQueryServiceAvailabilityAPI) {
    this.service = service;
  }

  async getLeafFromHeight(height: number) {
    return cappuccinoAPILeafResponseCodec.encode(
      await this.service.getLeafFromHeight(height),
    );
  }

  async getTransactionFromHeightAndOffset(height: number, index: number) {
    return cappuccinoAPITransactionResponseCodec.encode(
      await this.service.getTransactionFromHeightAndOffset(height, index),
    );
  }

  async getBlockFromHeight(height: number) {
    return cappuccinoAPIBlockCodec.encode(
      await this.service.getBlockFromHeight(height),
    );
  }

  async getBlockSummaries(from: number, until: number) {
    return listCappuccinoDerivedBlockSummaryCodec.encode(
      await this.service.getBlockSummaries(from, until),
    );
  }

  async getTransactionSummaryRange(
    height: number,
    offset: number,
    limit: number,
  ) {
    return listCappuccinoDerivedTransactionSummaryCodec.encode(
      await this.service.getTransactionSummaryRange(height, offset, limit),
    );
  }

  async getTransactionSummaryRangeForRollup(
    namespace: number,
    height: number,
    offset: number,
    limit: number,
  ) {
    return listCappuccinoDerivedTransactionSummaryCodec.encode(
      await this.service.getTransactionSummaryRangeForRollup(
        namespace,
        height,
        offset,
        limit,
      ),
    );
  }

  async handleRequest(request: AvailabilityRequest) {
    switch (request.method) {
      case 'getLeafFromHeight': {
        return await this.getLeafFromHeight(
          numberCodec.decode(request.param[0]),
        );
      }
      case 'getTransactionFromHeightAndOffset': {
        return await this.getTransactionFromHeightAndOffset(
          numberCodec.decode(request.param[0]),
          numberCodec.decode(request.param[1]),
        );
      }
      case 'getBlockFromHeight': {
        return await this.getBlockFromHeight(
          numberCodec.decode(request.param[0]),
        );
      }
      case 'getBlockSummaries': {
        return await this.getBlockSummaries(
          numberCodec.decode(request.param[0]),
          numberCodec.decode(request.param[1]),
        );
      }
      case 'getTransactionSummaryRange': {
        return await this.getTransactionSummaryRange(
          numberCodec.decode(request.param[0]),
          numberCodec.decode(request.param[1]),
          numberCodec.decode(request.param[2]),
        );
      }
      case 'getTransactionSummaryRangeForRollup': {
        return await this.getTransactionSummaryRangeForRollup(
          numberCodec.decode(request.param[0]),
          numberCodec.decode(request.param[1]),
          numberCodec.decode(request.param[2]),
          numberCodec.decode(request.param[3]),
        );
      }
      default:
        throw new UnimplementedError();
    }
  }
}
