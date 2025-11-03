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
    getBlockForHeight(number: number): Promise<L1BlockID>;
}
