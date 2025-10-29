import UnimplementedError from '@/errors/UnimplementedError';
import { L1BlockAPI } from '../l1_block_api';
import { L1BlockInfo } from '../l1_block_info';

/**
 * UnimplementedL1BlockAPI is a stub implementation of the L1BlockAPI interface
 * that throws UnimplementedError for all methods.
 *
 * It is provided for convenience to serve as a default, and to allow partial
 * implementations to extend it without having to implement all methods.
 */
export class UnimplementedL1BlockAPI implements L1BlockAPI {
  async getBlockForHeight(): Promise<L1BlockInfo> {
    throw new UnimplementedError();
  }
}
