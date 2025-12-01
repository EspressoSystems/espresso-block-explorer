import { PseudoRandomNumberGenerator } from '@/data_source/fake_data_source';
import { TaggedBase64 } from '@/models/espresso';
import { describe, expect, it } from 'vitest';
import { L1BlockInfo } from '../../common/l1_block_info';
import { NodeExit } from '../../common/node_exit';
import { NodeSetEntry } from '../../common/node_set_entry';
import { Ratio } from '../../common/ratio';
import { FullNodeSetDiffNodeExit } from '../full_node_set_diff/node_exit';
import { FullNodeSetUpdateNodeUpdate } from '../full_node_set_diff/node_update';
import {
  FullNodeSetUpdate,
  fullNodeSetUpdateJSONCodec,
} from '../full_node_set_update';

describe('FullNodeSetUpdate', () => {
  describe('Codec', () => {
    it('should serialize and deserialize correctly', () => {
      const prng = new PseudoRandomNumberGenerator(Date.now());
      const block = prng.nextRangeBigInt(0n, 1_000_000n);
      const example = new FullNodeSetUpdate(
        new L1BlockInfo(block, prng.fillBytes(32), new Date()),
        [
          new FullNodeSetDiffNodeExit(
            new NodeExit(prng.fillBytes(32), new Date()),
          ),
          new FullNodeSetUpdateNodeUpdate(
            new NodeSetEntry(
              prng.fillBytes(32),
              new TaggedBase64('BLS_PUB_KEY', prng.fillBytes(48)),
              prng.nextRangeBigInt(1n, 1_000_000n),
              Ratio.floatingPoint(prng.nextFloat()),
            ),
          ),
        ],
      );

      expect(() => example.toJSON()).not.toThrow();
      expect(() => fullNodeSetUpdateJSONCodec.encode(example)).not.toThrow();

      const serialized = fullNodeSetUpdateJSONCodec.encode(example);
      expect(() => fullNodeSetUpdateJSONCodec.decode(serialized)).not.toThrow();

      const deserialized = fullNodeSetUpdateJSONCodec.decode(serialized);
      expect(deserialized).to.deep.equal(example);
    });
  });
});
