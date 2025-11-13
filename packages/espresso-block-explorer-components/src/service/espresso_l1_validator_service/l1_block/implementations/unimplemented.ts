import UnimplementedError from '@/errors/UnimplementedError';
import { L1BlockID } from '../../common/l1_block_id';
import { L1BlockAPI } from '../l1_block_api';

/**
 * UnimplementedL1BlockAPI is a stub implementation of the L1BlockAPI interface
 * that throws UnimplementedError for all methods.
 *
 * It is provided for convenience to serve as a default, and to allow partial
 * implementations to extend it without having to implement all methods.
 */
export class UnimplementedL1BlockAPI implements L1BlockAPI {
  async getBlockForHeight(): Promise<L1BlockID> {
    throw new UnimplementedError();
  }

  async getLatestBlock(): Promise<L1BlockID> {
    throw new UnimplementedError();
  }
}
