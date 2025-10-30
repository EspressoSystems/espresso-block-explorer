import { PseudoRandomNumberGenerator } from '@/data_source/fake_data_source';
import { describe, expect, it } from 'vitest';
import { LeaderParticipationChange } from '../active_validator_set_diff/leader_participation_change';
import { NewEpoch } from '../active_validator_set_diff/new_epoch';
import { VoterParticipationChange } from '../active_validator_set_diff/voter_participation_change';
import {
  ActiveValidatorSetUpdate,
  activeValidatorSetUpdateJSONCodec,
} from '../active_validator_set_update';
import { CurrentEpochValidatorSetEntry } from '../current_epoch_validator_set_entry';
import { EpochAndBlock } from '../epoch_and_block';
import { ParticipationChange } from '../participation_change';

describe('ActiveValidatorSetUpdate', () => {
  describe('Codec', () => {
    it('should serialize and deserialize correctly', () => {
      const prng = new PseudoRandomNumberGenerator(Date.now());
      const block = prng.nextRangeBigInt(0n, 1_000_000n);
      const epoch = block / 3000n;
      const example = new ActiveValidatorSetUpdate(
        new EpochAndBlock(epoch, block, new Date()),
        [
          new LeaderParticipationChange(
            new ParticipationChange(prng.fillBytes(32), 1.5),
          ),
          new NewEpoch([new CurrentEpochValidatorSetEntry(prng.fillBytes(32))]),
          new VoterParticipationChange(
            new ParticipationChange(prng.fillBytes(32), 0.75),
          ),
        ],
      );

      expect(() => example.toJSON()).not.toThrow();
      expect(() =>
        activeValidatorSetUpdateJSONCodec.encode(example),
      ).not.toThrow();

      const serialized = activeValidatorSetUpdateJSONCodec.encode(example);
      expect(() =>
        activeValidatorSetUpdateJSONCodec.decode(serialized),
      ).not.toThrow();

      const deserialized = activeValidatorSetUpdateJSONCodec.decode(serialized);
      expect(deserialized).to.deep.equal(example);
    });
  });
});
