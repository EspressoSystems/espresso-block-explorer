import UnimplementedError from '@/errors/UnimplementedError';
import { L1BlockAPI } from '../l1_block_api';
import { L1BlockInfo } from '../l1_block_info';

/**
 * FakeDataL1BlockAPI is an implementation of L1BlockAPI
 * that uses fake data to simulate the `l1/block` endpoints
 * for the Validator Service API.
 */
export class FakeDataL1BlockAPI implements L1BlockAPI {
  async getBlockForHeight(): Promise<L1BlockInfo> {
    throw new UnimplementedError();
  }
}
