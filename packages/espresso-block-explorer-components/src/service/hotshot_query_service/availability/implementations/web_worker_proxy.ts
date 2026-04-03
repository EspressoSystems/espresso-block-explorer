import { numberCodec } from '@/convert/codec/number';
import UnimplementedError from '@/errors/unimplemented_error';
import { WebWorkerRequest } from '@/service/hotshot_query_service/web_worker_types';
import { HotShotQueryServiceAvailabilityAPI } from '../availability_api';
import { availabilityAPIBlockCodec } from '../block';
import { availabilityAPIHeaderCodec } from '../block_header';
import { listAvailabilityDerivedBlockSummaryCodec } from '../derived_block_summary';
import { listAvailabilityDerivedTransactionSummaryCodec } from '../derived_transaction_summary';
import { availabilityAPILeafResponseCodec } from '../leaf_response';
import { availabilityAPITransactionResponseCodec } from '../transaction_response';

export type AvailabilityRequest<
  Method extends keyof HotShotQueryServiceAvailabilityAPI =
    keyof HotShotQueryServiceAvailabilityAPI,
> = WebWorkerRequest<
  'availability',
  Method,
  Parameters<HotShotQueryServiceAvailabilityAPI[Method]>
>;

export class WebWorkerProxyAvailabilityAPI {
  private service: HotShotQueryServiceAvailabilityAPI;
  constructor(service: HotShotQueryServiceAvailabilityAPI) {
    this.service = service;
  }

  async getLeafFromHeight(height: number) {
    return availabilityAPILeafResponseCodec.encode(
      await this.service.getLeafFromHeight(height),
    );
  }

  async getTransactionFromHeightAndOffset(height: number, index: number) {
    return availabilityAPITransactionResponseCodec.encode(
      await this.service.getTransactionFromHeightAndOffset(height, index),
    );
  }

  async getBlockFromHeight(height: number) {
    return availabilityAPIBlockCodec.encode(
      await this.service.getBlockFromHeight(height),
    );
  }

  async getBlockSummaries(from: number, until: number) {
    return listAvailabilityDerivedBlockSummaryCodec.encode(
      await this.service.getBlockSummaries(from, until),
    );
  }

  async getTransactionSummaryRange(
    height: number,
    offset: number,
    limit: number,
  ) {
    return listAvailabilityDerivedTransactionSummaryCodec.encode(
      await this.service.getTransactionSummaryRange(height, offset, limit),
    );
  }

  async getTransactionSummaryRangeForRollup(
    namespace: number,
    height: number,
    offset: number,
    limit: number,
  ) {
    return listAvailabilityDerivedTransactionSummaryCodec.encode(
      await this.service.getTransactionSummaryRangeForRollup(
        namespace,
        height,
        offset,
        limit,
      ),
    );
  }

  async getHeader(height: number) {
    return availabilityAPIHeaderCodec.encode(
      await this.service.getHeader(height),
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
      case 'getHeader': {
        return await this.getHeader(numberCodec.decode(request.param[0]));
      }
      default:
        throw new UnimplementedError();
    }
  }
}
