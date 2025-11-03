import { PseudoRandomNumberGenerator } from '@/data_source/fake_data_source';
import { describe, expect, it } from 'vitest';
import { ActiveNodeSetEntry } from '../../common/active_node_set_entry';
import { EpochAndBlock } from '../../common/epoch_and_block';
import { Ratio } from '../../common/ratio';
import {
  ActiveNodeSetSnapshot,
  activeNodeSetSnapshotJSONCodec,
} from '../active_node_set_snapshot';

describe('ActiveNodeSetSnapshot', () => {
  describe('Codec', () => {
    it('should serialize and deserialize correctly', () => {
      const prng = new PseudoRandomNumberGenerator(Date.now());
      const block = prng.nextRangeBigInt(0n, 1_000_000n);
      const epoch = block / 3000n;
      const example = new ActiveNodeSetSnapshot(
        new EpochAndBlock(epoch, block, new Date()),
        [
          new ActiveNodeSetEntry(
            prng.fillBytes(32),
            new Ratio(prng.nextFloat()),
            new Ratio(prng.nextFloat()),
          ),
        ],
      );

      expect(() => example.toJSON()).not.toThrow();
      expect(() =>
        activeNodeSetSnapshotJSONCodec.encode(example),
      ).not.toThrow();

      const serialized = activeNodeSetSnapshotJSONCodec.encode(example);
      expect(() =>
        activeNodeSetSnapshotJSONCodec.decode(serialized),
      ).not.toThrow();

      const deserialized = activeNodeSetSnapshotJSONCodec.decode(serialized);
      expect(deserialized).to.deep.equal(example);
    });
  });
});
