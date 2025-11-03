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
import { ActiveNodeSetDiff } from './active_node_set_diff';
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
 * ActiveNodeSetDiffJSONDecoder decodes ActiveNodeSetDiff objects
 * from a JSON object.
 */
class ActiveNodeSetDiffJSONDecoder
  implements Converter<unknown, ActiveNodeSetDiff>
{
  convert(input: unknown): ActiveNodeSetDiff {
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
 * ActiveNodeSetDiffJSONEncoder encodes ActiveNodeSetDiff objects
 * to a JSON object.
 */
class ActiveNodeSetDiffJSONEncoder
  implements Converter<ActiveNodeSetDiff, unknown>
{
  convert(input: ActiveNodeSetDiff): unknown {
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
 * ActiveNodeSetDiffJSONCodec is a codec that encodes and decodes
 * ActiveNodeSetDiff objects to and from JSON.
 */
export class ActiveNodeSetDiffJSONCodec extends TypeCheckingCodec<
  ActiveNodeSetDiff,
  unknown
> {
  readonly encoder = new ActiveNodeSetDiffJSONEncoder();
  readonly decoder = new ActiveNodeSetDiffJSONDecoder();
}

/**
 * activeNodeSetDiffJSONCodec is a codec that encodes and decodes
 * ActiveNodeSetDiff objects to and from JSON.
 */
export const activeNodeSetDiffJSONCodec = new ActiveNodeSetDiffJSONCodec();

/**
 * activeNodeSetDiffJSONCodec is a codec that encodes and decodes
 * arrays of ActiveNodeSetDiff objects to and from JSON.
 */
export const activeNodeSetDiffArrayJSONCodec = new ArrayCodec(
  new ArrayDecoder(activeNodeSetDiffJSONCodec),
  new ArrayEncoder(activeNodeSetDiffJSONCodec),
);
