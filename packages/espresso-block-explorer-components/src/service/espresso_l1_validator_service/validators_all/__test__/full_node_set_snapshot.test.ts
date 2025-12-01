import { PseudoRandomNumberGenerator } from '@/data_source/fake_data_source';
import { TaggedBase64 } from '@/models/espresso';
import { describe, expect, it } from 'vitest';
import { L1BlockInfo } from '../../common/l1_block_info';
import { NodeSetEntry } from '../../common/node_set_entry';
import { Ratio } from '../../common/ratio';
import {
  FullNodeSetSnapshot,
  fullNodeSetSnapshotJSONCodec,
} from '../full_node_set_snapshot';

describe('FullNodeSetSnapshot', () => {
  describe('Codec', () => {
    it('should serialize and deserialize correctly', () => {
      const prng = new PseudoRandomNumberGenerator(Date.now());
      const block = prng.nextRangeBigInt(0n, 1_000_000n);
      const example = new FullNodeSetSnapshot(
        new L1BlockInfo(block, prng.fillBytes(32), new Date()),
        [
          new NodeSetEntry(
            prng.fillBytes(32),
            new TaggedBase64('BLS_PUB_KEY', prng.fillBytes(48)),
            prng.nextRangeBigInt(1n, 1_000_000n),
            Ratio.floatingPoint(prng.nextFloat()),
          ),
          new NodeSetEntry(
            prng.fillBytes(32),
            new TaggedBase64('BLS_PUB_KEY', prng.fillBytes(48)),
            prng.nextRangeBigInt(1n, 1_000_000n),
            Ratio.floatingPoint(prng.nextFloat()),
          ),
        ],
      );

      expect(() => example.toJSON()).not.toThrow();
      expect(() => fullNodeSetSnapshotJSONCodec.encode(example)).not.toThrow();

      const serialized = fullNodeSetSnapshotJSONCodec.encode(example);
      expect(() =>
        fullNodeSetSnapshotJSONCodec.decode(serialized),
      ).not.toThrow();

      const deserialized = fullNodeSetSnapshotJSONCodec.decode(serialized);
      expect(deserialized).to.deep.equal(example);
    });
  });
});
