import { PseudoRandomNumberGenerator } from '@/data_source/fake_data_source';
import { CommissionPercent, TaggedBase64 } from '@/models/espresso';
import { describe, expect, it } from 'vitest';
import { L1BlockInfo } from '../../l1_block/l1_block_info';
import {
  FullValidatorSetSnapshot,
  fullValidatorSetSnapshotJSONCodec,
} from '../full_validator_set_snapshot';
import { ValidatorSetEntry } from '../validator_set_entry';

describe('FullValidatorSetSnapshot', () => {
  describe('Codec', () => {
    it('should serialize and deserialize correctly', () => {
      const prng = new PseudoRandomNumberGenerator(Date.now());
      const block = prng.nextRangeBigInt(0n, 1_000_000n);
      const example = new FullValidatorSetSnapshot(
        new L1BlockInfo(block, prng.fillBytes(32), new Date()),
        [
          new ValidatorSetEntry(
            prng.fillBytes(32),
            new TaggedBase64('BLS_PUB_KEY', prng.fillBytes(48)),
            prng.nextRangeBigInt(1n, 1_000_000n),
            new CommissionPercent(prng.nextRange(0, 10000)),
            null,
            null,
          ),
          new ValidatorSetEntry(
            prng.fillBytes(32),
            new TaggedBase64('BLS_PUB_KEY', prng.fillBytes(48)),
            prng.nextRangeBigInt(1n, 1_000_000n),
            new CommissionPercent(prng.nextRange(0, 10000)),
            prng.nextFloat(),
            prng.nextFloat(),
          ),
        ],
      );

      expect(() => example.toJSON()).not.toThrow();
      expect(() =>
        fullValidatorSetSnapshotJSONCodec.encode(example),
      ).not.toThrow();

      const serialized = fullValidatorSetSnapshotJSONCodec.encode(example);
      expect(() =>
        fullValidatorSetSnapshotJSONCodec.decode(serialized),
      ).not.toThrow();

      const deserialized = fullValidatorSetSnapshotJSONCodec.decode(serialized);
      expect(deserialized).to.deep.equal(example);
    });
  });
});
