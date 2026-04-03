import { PseudoRandomNumberGenerator } from '@/data_source/fake_data_source';
import {
  BitVec,
  BitVecHead,
  BitVecOrder,
} from '@/service/hotshot_query_service';
import { describe, expect, it } from 'vitest';
import { EpochAndBlock } from '../../common/epoch_and_block';
import { Ratio } from '../../common/ratio';
import { ActiveNodeSetDiffNewBlock } from '../active_node_set_diff/new_block';
import { NewEpoch } from '../active_node_set_diff/new_epoch';
import {
  ActiveNodeSetUpdate,
  activeNodeSetUpdateJSONCodec,
} from '../active_node_set_update';

describe('ActiveNodeSetUpdate', () => {
  describe('Codec', () => {
    it('should serialize and deserialize correctly', () => {
      const prng = new PseudoRandomNumberGenerator(Date.now());
      const block = prng.nextRangeBigInt(0n, 1_000_000n);
      const epoch = EpochAndBlock.determineEpoch(block, 3000n);
      const example = new ActiveNodeSetUpdate(
        new EpochAndBlock(epoch, block, new Date()),
        [
          new ActiveNodeSetDiffNewBlock(
            prng.nextInt(),
            [prng.nextInt()],
            new BitVec(
              BitVecOrder.lsb0,
              new BitVecHead(8, 0),
              16,
              Array.from(new BigUint64Array(prng.fillBytes(8))),
            ),
          ),
          new NewEpoch(
            [prng.fillBytes(32)],
            Ratio.floatingPoint(prng.nextFloat()),
          ),
        ],
      );

      expect(() => example.toJSON()).not.toThrow();
      expect(() => activeNodeSetUpdateJSONCodec.encode(example)).not.toThrow();

      const serialized = activeNodeSetUpdateJSONCodec.encode(example);
      expect(() =>
        activeNodeSetUpdateJSONCodec.decode(serialized),
      ).not.toThrow();

      const deserialized = activeNodeSetUpdateJSONCodec.decode(serialized);
      expect(deserialized).to.deep.equal(example);
    });
  });
});
