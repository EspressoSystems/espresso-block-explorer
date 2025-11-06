import { L1BlockID } from '../../common/l1_block_id';
import { L1BlockAPI } from '../l1_block_api';
/**
 * FakeDataL1BlockAPI is an implementation of L1BlockAPI
 * that uses fake data to simulate the `l1/block` endpoints
 * for the Validator Service API.
 */
export declare class FakeDataL1BlockAPI implements L1BlockAPI {
    getBlockForHeight(height: bigint): Promise<L1BlockID>;
    getLatestBlock(): Promise<L1BlockID>;
}
