import { getStartingMilliseconds } from '@/data_source/fake_data_source';
import { L1BlockID } from '../../common/l1_block_id';
import { L1BlockAPI } from '../l1_block_api';

const START_BLOCK_HEIGHT = 1_000_000_000n;
const SECONDS_PER_BLOCK = 12n;

/**
 * FakeDataL1BlockAPI is an implementation of L1BlockAPI
 * that uses fake data to simulate the `l1/block` endpoints
 * for the Validator Service API.
 */
export class FakeDataL1BlockAPI implements L1BlockAPI {
  async getBlockForHeight(height: bigint): Promise<L1BlockID> {
    const hash = new ArrayBuffer(32);
    const dv = new DataView(hash);
    dv.setBigUint64(24, BigInt(height), false); // big-endian

    const parent = new ArrayBuffer(32);
    const parentDV = new DataView(parent);
    parentDV.setBigUint64(24, height - 1n, false); // big-endian

    return new L1BlockID(BigInt(height), hash, parent);
  }

  async getLatestBlock(): Promise<L1BlockID> {
    const start = BigInt(Math.floor(getStartingMilliseconds() / 1000));
    const now = BigInt(Math.floor(Date.now() / 1000));

    const heightOffset = (now - start) / SECONDS_PER_BLOCK;
    const height = START_BLOCK_HEIGHT + heightOffset;
    return this.getBlockForHeight(height);
  }
}
