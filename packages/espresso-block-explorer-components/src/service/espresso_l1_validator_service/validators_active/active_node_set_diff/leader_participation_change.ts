import { Converter, TypeCheckingCodec } from '@/convert/codec/convert';
import {
  ParticipationChange,
  participationChangeArrayJSONCodec,
} from '../../common/participation_change';
import { ActiveNodeSetDiff } from './active_node_set_diff';

/**
 * LeaderParticipationChange represents a change in leader participation
 * percentage for a validator.
 *
 * This type definition is informed by the type specification as defined
 * in the Espresso L1 Validator Service API documentation.
 * https://www.notion.so/espressosys/Delegation-UI-Service-Specification-2942431b68e980968c28cc5099a4e8f2?source=copy_link#2962431b68e9804d9c99ea7b6a2c87ca
 * Defined in rust here:
 * https://github.com/EspressoSystems/staking-ui-service/blob/8eb960a9a02d7806fddedfd44090608015d3b6b3/src/types/global.rs#L65
 */
export class LeaderParticipationChange extends ActiveNodeSetDiff {
  readonly participationChanges: ParticipationChange[];

  constructor(participationChanges: ParticipationChange[]) {
    super();
    this.participationChanges = participationChanges;
  }

  toJSON() {
    return leaderParticipationChangeJSONCodec.encode(this);
  }
}

/**
 * LeaderParticipationChangeJSONDecoder decodes LeaderParticipationChange
 * objects from a JSON object.
 */
class LeaderParticipationChangeJSONDecoder
  implements Converter<unknown, LeaderParticipationChange>
{
  convert(input: unknown): LeaderParticipationChange {
    return new LeaderParticipationChange(
      participationChangeArrayJSONCodec.decode(input),
    );
  }
}

/**
 * LeaderParticipationChangeJSONEncoder encodes LeaderParticipationChange
 * objects to a JSON object.
 */
class LeaderParticipationChangeJSONEncoder
  implements Converter<LeaderParticipationChange, unknown>
{
  convert(input: LeaderParticipationChange): unknown {
    return participationChangeArrayJSONCodec.encode(input.participationChanges);
  }
}

/**
 * LeaderParticipationChangeJSONCodec is a codec that encodes and decodes
 * LeaderParticipationChange objects to and from JSON.
 */
class LeaderParticipationChangeJSONCodec extends TypeCheckingCodec<
  LeaderParticipationChange,
  unknown
> {
  readonly encoder = new LeaderParticipationChangeJSONEncoder();
  readonly decoder = new LeaderParticipationChangeJSONDecoder();
}

/**
 * LeaderParticipationChangeKey is the key used to identify the
 * LeaderParticipationChange object in the validator set diff JSON
 * representation.
 */
export const LeaderParticipationChangeKey = 'LeaderParticipationChange';

/**
 * leaderParticipationChangeJSONCodec is a codec that encodes and decodes
 * LeaderParticipationChange objects to and from JSON.
 */
export const leaderParticipationChangeJSONCodec =
  new LeaderParticipationChangeJSONCodec();
