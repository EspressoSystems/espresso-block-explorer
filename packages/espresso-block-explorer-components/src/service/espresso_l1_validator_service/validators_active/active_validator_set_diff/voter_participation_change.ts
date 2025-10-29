import {
  assertRecordWithKeys,
  TypeCheckingCodec,
} from '@/convert/codec/convert';
import {
  ParticipationChange,
  participationChangeJSONCodec,
} from '../participation_change';
import { ActiveValidatorSetDiff } from './active_validator_set_diff';

/**
 * VoterParticipationChange represents a change in voter participation
 * percentage for a validator.
 *
 * This type definition is informed by the type specification as defined
 * in the Espresso L1 Validator Service API documentation.
 * https://www.notion.so/espressosys/Delegation-UI-Service-Specification-2942431b68e980968c28cc5099a4e8f2?source=copy_link#2962431b68e9804d9c99ea7b6a2c87ca
 */
export class VoterParticipationChange extends ActiveValidatorSetDiff {
  readonly participationChange: ParticipationChange;

  constructor(participationChange: ParticipationChange) {
    super();
    this.participationChange = participationChange;
  }

  toJSON() {
    return voterParticipationChangeJSONCodec.encode(this);
  }
}

/**
 * VoterParticipationChangeJSONDecoder decodes VoterParticipationChange
 * objects from a JSON object.
 */
class VoterParticipationChangeJSONDecoder {
  // implements Converter<unknown, VoterParticipationChange>
  convert(input: unknown): VoterParticipationChange {
    assertRecordWithKeys(input, 'participation_change');

    return new VoterParticipationChange(
      participationChangeJSONCodec.decode(input.participation_change),
    );
  }
}

/**
 * VoterParticipationChangeJSONEncoder encodes VoterParticipationChange
 * objects to a JSON object.
 */
class VoterParticipationChangeJSONEncoder {
  // implements Converter<VoterParticipationChange, unknown>
  convert(input: VoterParticipationChange): unknown {
    return {
      participation_change: participationChangeJSONCodec.encode(
        input.participationChange,
      ),
    };
  }
}

/**
 * VoterParticipationChangeJSONCodec is a codec that encodes and decodes
 * VoterParticipationChange objects to and from JSON.
 */
class VoterParticipationChangeJSONCodec extends TypeCheckingCodec<
  VoterParticipationChange,
  unknown
> {
  // extends TypeCheckingCodec<VoterParticipationChange, unknown>
  readonly encoder = new VoterParticipationChangeJSONEncoder();
  readonly decoder = new VoterParticipationChangeJSONDecoder();
}

/**
 * VoterParticipationChangeKey is the key used to identify the
 * VoterParticipationChange object in the validator set diff JSON
 * representation.
 */
export const VoterParticipationChangeKey = 'VoterParticipationChange';

/**
 * voterParticipationChangeJSONCodec is a codec that encodes and decodes
 * VoterParticipationChange objects to and from JSON.
 */
export const voterParticipationChangeJSONCodec =
  new VoterParticipationChangeJSONCodec();
