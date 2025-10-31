import { PseudoRandomNumberGenerator } from '@/data_source/fake_data_source';
import { describe, expect, it } from 'vitest';
import {
  ActiveValidatorSetSnapshot,
  activeValidatorSetSnapshotJSONCodec,
} from '../active_validator_set_snapshot';
import { CurrentEpochValidatorSetEntry } from '../current_epoch_validator_set_entry';
import { EpochAndBlock } from '../epoch_and_block';

describe('ActiveValidatorSetSnapshot', () => {
  describe('Codec', () => {
    it('should serialize and deserialize correctly', () => {
      const prng = new PseudoRandomNumberGenerator(Date.now());
      const block = prng.nextRangeBigInt(0n, 1_000_000n);
      const epoch = block / 3000n;
      const example = new ActiveValidatorSetSnapshot(
        new EpochAndBlock(epoch, block, new Date()),
        [new CurrentEpochValidatorSetEntry(prng.fillBytes(32))],
      );

      expect(() => example.toJSON()).not.toThrow();
      expect(() =>
        activeValidatorSetSnapshotJSONCodec.encode(example),
      ).not.toThrow();

      const serialized = activeValidatorSetSnapshotJSONCodec.encode(example);
      expect(() =>
        activeValidatorSetSnapshotJSONCodec.decode(serialized),
      ).not.toThrow();

      const deserialized =
        activeValidatorSetSnapshotJSONCodec.decode(serialized);
      expect(deserialized).to.deep.equal(example);
    });
  });
});
