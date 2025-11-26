import { Codec } from '@/convert/codec/convert';
import { AsyncRequestHelper } from '@/service/espresso_l1_validator_service/web_worker_types';
import { CappuccinoHotShotQueryServiceAvailabilityAPI } from '../availability_api';
import { CappuccinoAPIBlock, cappuccinoAPIBlockCodec } from '../block';
import {
  CappuccinoDerivedBlockSummary,
  listCappuccinoDerivedBlockSummaryCodec,
} from '../derived_block_summary';
import {
  CappuccinoDerivedTransactionSummary,
  listCappuccinoDerivedTransactionSummaryCodec,
} from '../derived_transaction_summary';
import {
  CappuccinoAPILeafResponse,
  cappuccinoAPILeafResponseCodec,
} from '../leaf_response';
import {
  CappuccinoAPITransactionResponse,
  cappuccinoAPITransactionResponseCodec,
} from '../transaction_response';

export class WebWorkerClientBasedCappuccinoHotShotQueryServiceAvailabilityAPI
  implements
    CappuccinoHotShotQueryServiceAvailabilityAPI,
    CappuccinoHotShotQueryServiceAvailabilityAPI
{
  private helper: AsyncRequestHelper;
  constructor(helper: AsyncRequestHelper) {
    this.helper = helper;
  }

  private async sendRequest<
    T,
    Method extends
      keyof CappuccinoHotShotQueryServiceAvailabilityAPI = keyof CappuccinoHotShotQueryServiceAvailabilityAPI,
    Param = unknown,
  >(codec: Codec<T, unknown>, method: Method, ...args: Param[]): Promise<T> {
    return this.helper.submitRequest(codec, 'availability', method, args);
  }

  async getLeafFromHeight(height: number): Promise<CappuccinoAPILeafResponse> {
    return await this.sendRequest(
      cappuccinoAPILeafResponseCodec,
      'getLeafFromHeight',
      height,
    );
  }

  async getTransactionFromHeightAndOffset(
    height: number,
    index: number,
  ): Promise<CappuccinoAPITransactionResponse> {
    return await this.sendRequest(
      cappuccinoAPITransactionResponseCodec,
      'getTransactionFromHeightAndOffset',
      height,
      index,
    );
  }

  async getBlockSummaries(
    from: number,
    until: number,
  ): Promise<CappuccinoDerivedBlockSummary[]> {
    return await this.sendRequest(
      listCappuccinoDerivedBlockSummaryCodec,
      'getBlockSummaries',
      from,
      until,
    );
  }

  async getBlockFromHeight(height: number): Promise<CappuccinoAPIBlock> {
    return await this.sendRequest(
      cappuccinoAPIBlockCodec,
      'getBlockFromHeight',
      height,
    );
  }

  async getTransactionSummaryRange(
    height: number,
    offset: number,
    limit: number,
  ): Promise<CappuccinoDerivedTransactionSummary[]> {
    return await this.sendRequest(
      listCappuccinoDerivedTransactionSummaryCodec,
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
  ): Promise<CappuccinoDerivedTransactionSummary[]> {
    return await this.sendRequest(
      listCappuccinoDerivedTransactionSummaryCodec,
      'getTransactionSummaryRangeForRollup',
      namespace,
      height,
      offset,
      limit,
    );
  }
}
