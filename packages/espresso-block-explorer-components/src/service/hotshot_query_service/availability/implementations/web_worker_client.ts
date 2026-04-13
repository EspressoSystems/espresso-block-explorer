import { Codec } from '@/convert/codec/convert';
import { AsyncRequestHelper } from '@/service/espresso_staking_api_service/web_worker_types';
import { HotShotQueryServiceAvailabilityAPI } from '../availability_api';
import { AvailabilityAPIBlock, availabilityAPIBlockCodec } from '../block';
import {
  AvailabilityAPIHeader,
  availabilityAPIHeaderCodec,
} from '../block_header';
import {
  AvailabilityDerivedBlockSummary,
  listAvailabilityDerivedBlockSummaryCodec,
} from '../derived_block_summary';
import {
  AvailabilityDerivedTransactionSummary,
  listAvailabilityDerivedTransactionSummaryCodec,
} from '../derived_transaction_summary';
import {
  AvailabilityAPILeafResponse,
  availabilityAPILeafResponseCodec,
} from '../leaf_response';
import {
  AvailabilityAPITransactionResponse,
  availabilityAPITransactionResponseCodec,
} from '../transaction_response';

export class WebWorkerClientBasedHotShotQueryServiceAvailabilityAPI
  implements
    HotShotQueryServiceAvailabilityAPI,
    HotShotQueryServiceAvailabilityAPI
{
  private helper: AsyncRequestHelper;
  constructor(helper: AsyncRequestHelper) {
    this.helper = helper;
  }

  private async sendRequest<
    T,
    Method extends keyof HotShotQueryServiceAvailabilityAPI =
      keyof HotShotQueryServiceAvailabilityAPI,
    Param = unknown,
  >(codec: Codec<T, unknown>, method: Method, ...args: Param[]): Promise<T> {
    return this.helper.submitRequest(codec, 'availability', method, args);
  }

  async getLeafFromHeight(
    height: number,
  ): Promise<AvailabilityAPILeafResponse> {
    return await this.sendRequest(
      availabilityAPILeafResponseCodec,
      'getLeafFromHeight',
      height,
    );
  }

  async getTransactionFromHeightAndOffset(
    height: number,
    index: number,
  ): Promise<AvailabilityAPITransactionResponse> {
    return await this.sendRequest(
      availabilityAPITransactionResponseCodec,
      'getTransactionFromHeightAndOffset',
      height,
      index,
    );
  }

  async getBlockSummaries(
    from: number,
    until: number,
  ): Promise<AvailabilityDerivedBlockSummary[]> {
    return await this.sendRequest(
      listAvailabilityDerivedBlockSummaryCodec,
      'getBlockSummaries',
      from,
      until,
    );
  }

  async getBlockFromHeight(height: number): Promise<AvailabilityAPIBlock> {
    return await this.sendRequest(
      availabilityAPIBlockCodec,
      'getBlockFromHeight',
      height,
    );
  }

  async getTransactionSummaryRange(
    height: number,
    offset: number,
    limit: number,
  ): Promise<AvailabilityDerivedTransactionSummary[]> {
    return await this.sendRequest(
      listAvailabilityDerivedTransactionSummaryCodec,
      'getTransactionSummaryRange',
      height,
      offset,
      limit,
    );
  }

  async getTransactionSummaryRangeForRollup(
    namespace: number,
    height: number,
    offset: number,
    limit: number,
  ): Promise<AvailabilityDerivedTransactionSummary[]> {
    return await this.sendRequest(
      listAvailabilityDerivedTransactionSummaryCodec,
      'getTransactionSummaryRangeForRollup',
      namespace,
      height,
      offset,
      limit,
    );
  }

  async getHeader(height: number): Promise<AvailabilityAPIHeader> {
    return await this.sendRequest(
      availabilityAPIHeaderCodec,
      'getHeader',
      height,
    );
  }
}
