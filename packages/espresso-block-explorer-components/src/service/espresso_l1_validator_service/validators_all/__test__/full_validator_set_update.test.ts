import { PseudoRandomNumberGenerator } from '@/data_source/fake_data_source';
import { CommissionPercent, TaggedBase64 } from '@/models/espresso';
import { describe, expect, it } from 'vitest';
import { L1BlockInfo } from '../../l1_block/l1_block_info';
import { FullValidatorSetDiffValidatorExit } from '../full_validator_set_diff/validator_exit';
import { FullValidatorSetUpdateValidatorUpdate } from '../full_validator_set_diff/validator_update';
import {
  FullValidatorSetUpdate,
  fullValidatorSetUpdateJSONCodec,
} from '../full_validator_set_update';
import { ValidatorExitEntry } from '../validator_exit_entry';
import { ValidatorSetEntry } from '../validator_set_entry';

describe('FullValidatorSetUpdate', () => {
  describe('Codec', () => {
    it('should serialize and deserialize correctly', () => {
      const prng = new PseudoRandomNumberGenerator(Date.now());
      const block = prng.nextRangeBigInt(0n, 1_000_000n);
      const example = new FullValidatorSetUpdate(
        new L1BlockInfo(block, prng.fillBytes(32), new Date()),
        [
          new FullValidatorSetDiffValidatorExit(
            new ValidatorExitEntry(prng.fillBytes(32), new Date()),
          ),
          new FullValidatorSetUpdateValidatorUpdate(
            new ValidatorSetEntry(
              prng.fillBytes(32),
              new TaggedBase64('BLS_PUB_KEY', prng.fillBytes(48)),
              prng.nextRangeBigInt(1n, 1_000_000n),
              new CommissionPercent(prng.nextRange(0, 10000)),
              null,
              null,
            ),
          ),
        ],
      );

      expect(() => example.toJSON()).not.toThrow();
      expect(() =>
        fullValidatorSetUpdateJSONCodec.encode(example),
      ).not.toThrow();

      const serialized = fullValidatorSetUpdateJSONCodec.encode(example);
      expect(() =>
        fullValidatorSetUpdateJSONCodec.decode(serialized),
      ).not.toThrow();

      const deserialized = fullValidatorSetUpdateJSONCodec.decode(serialized);
      expect(deserialized).to.deep.equal(example);
    });
  });
});
