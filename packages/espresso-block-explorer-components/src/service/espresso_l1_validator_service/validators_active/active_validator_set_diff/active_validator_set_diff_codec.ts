import {
  ArrayCodec,
  ArrayDecoder,
  ArrayEncoder,
  assertRecordWithKeys,
  Converter,
  isRecordWithKeys,
  TypeCheckingCodec,
} from '@/convert/codec';
import InvalidTypeError from '@/errors/InvalidTypeError';
import { ActiveValidatorSetDiff } from './active_validator_set_diff';
import {
  LeaderParticipationChange,
  leaderParticipationChangeJSONCodec,
  LeaderParticipationChangeKey,
} from './leader_participation_change';
import { currentEpochJSONCodec, CurrentEpochKey, NewEpoch } from './new_epoch';
import {
  VoterParticipationChange,
  voterParticipationChangeJSONCodec,
  VoterParticipationChangeKey,
} from './voter_participation_change';

/**
 * ActiveValidatorSetDiffJSONDecoder decodes ActiveValidatorSetDiff objects
 * from a JSON object.
 */
class ActiveValidatorSetDiffJSONDecoder
  implements Converter<unknown, ActiveValidatorSetDiff>
{
  convert(input: unknown): ActiveValidatorSetDiff {
    assertRecordWithKeys(input);

    if (isRecordWithKeys(input, CurrentEpochKey)) {
      return currentEpochJSONCodec.decode(input[CurrentEpochKey]);
    }

    if (isRecordWithKeys(input, LeaderParticipationChangeKey)) {
      return leaderParticipationChangeJSONCodec.decode(
        input[LeaderParticipationChangeKey],
      );
    }

    if (isRecordWithKeys(input, VoterParticipationChangeKey)) {
      return voterParticipationChangeJSONCodec.decode(
        input[VoterParticipationChangeKey],
      );
    }

    const keys = Object.keys(input);

    if (keys.length <= 0) {
      throw new InvalidTypeError('Empty EspressoMessage object', 'object');
    }

    const [key] = keys;

    throw new InvalidTypeError(
      key,
      `${CurrentEpochKey} | ${LeaderParticipationChangeKey} | ${VoterParticipationChangeKey}`,
    );
  }
}

/**
 * ActiveValidatorSetDiffJSONEncoder encodes ActiveValidatorSetDiff objects
 * to a JSON object.
 */
class ActiveValidatorSetDiffJSONEncoder
  implements Converter<ActiveValidatorSetDiff, unknown>
{
  convert(input: ActiveValidatorSetDiff): unknown {
    if (input instanceof NewEpoch) {
      return { [CurrentEpochKey]: currentEpochJSONCodec.encode(input) };
    }

    if (input instanceof LeaderParticipationChange) {
      return {
        [LeaderParticipationChangeKey]:
          leaderParticipationChangeJSONCodec.encode(input),
      };
    }

    if (input instanceof VoterParticipationChange) {
      return {
        [VoterParticipationChangeKey]:
          voterParticipationChangeJSONCodec.encode(input),
      };
    }

    throw new InvalidTypeError(
      'Unrecognized EspressoMessage type',
      'Valid EspressoMessage Type',
    );
  }
}

/**
 * ActiveValidatorSetDiffJSONCodec is a codec that encodes and decodes
 * ActiveValidatorSetDiff objects to and from JSON.
 */
export class ActiveValidatorSetDiffJSONCodec extends TypeCheckingCodec<
  ActiveValidatorSetDiff,
  unknown
> {
  readonly encoder = new ActiveValidatorSetDiffJSONEncoder();
  readonly decoder = new ActiveValidatorSetDiffJSONDecoder();
}

/**
 * activeValidatorsSetDiffJSONCodec is a codec that encodes and decodes
 * ActiveValidatorSetDiff objects to and from JSON.
 */
export const activeValidatorsSetDiffJSONCodec =
  new ActiveValidatorSetDiffJSONCodec();

/**
 * activeValidatorsSetDiffArrayJSONCodec is a codec that encodes and decodes
 * arrays of ActiveValidatorSetDiff objects to and from JSON.
 */
export const activeValidatorsSetDiffArrayJSONCodec = new ArrayCodec(
  new ArrayDecoder(activeValidatorsSetDiffJSONCodec),
  new ArrayEncoder(activeValidatorsSetDiffJSONCodec),
);
