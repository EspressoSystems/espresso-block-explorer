import { L1BlockID } from '../common/l1_block_id';

/**
 * L1BlockAPI is the interface for accessing L1 block data and related
 * operations.
 */
export interface L1BlockAPI {
  /**
   * getBlockForHeight retrieves the L1 block information for the given
   * block height.
   */
  getBlockForHeight(number: bigint): Promise<L1BlockID>;

  /**
   * getLatestBlock retrieves the latest L1 block information.
   */
  getLatestBlock(): Promise<L1BlockID>;
}
