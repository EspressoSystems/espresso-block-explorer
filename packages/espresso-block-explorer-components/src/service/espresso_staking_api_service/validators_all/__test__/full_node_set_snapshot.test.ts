import { PseudoRandomNumberGenerator } from '@/data_source/fake_data_source';
import { TaggedBase64 } from '@/models/espresso';
import { describe, expect, it } from 'vitest';
import { ImageSet } from '../../common/image_set';
import { L1BlockInfo } from '../../common/l1_block_info';
import { NodeMetadata } from '../../common/node_metadata';
import { NodeMetadataContent } from '../../common/node_metadata_content';
import { NodeSetEntry } from '../../common/node_set_entry';
import { Ratio } from '../../common/ratio';
import { RatioSet } from '../../common/ratio_set';
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
            new NodeMetadata(
              new URL('https://example.com'),
              new NodeMetadataContent(
                'Example Node',
                null,
                'Example Company',
                null,
                'v1.0.0',
                new ImageSet(
                  new RatioSet(
                    new URL('https://picsum.photos/14/14'),
                    new URL('https://picsum.photos/28/28'),
                    new URL('https://picsum.photos/42/42'),
                  ),
                  new RatioSet(null, null, null),
                ),
              ),
            ),
          ),
          new NodeSetEntry(
            prng.fillBytes(32),
            new TaggedBase64('BLS_PUB_KEY', prng.fillBytes(48)),
            prng.nextRangeBigInt(1n, 1_000_000n),
            Ratio.floatingPoint(prng.nextFloat()),
            null,
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
