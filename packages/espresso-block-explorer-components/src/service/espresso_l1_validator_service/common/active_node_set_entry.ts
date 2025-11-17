import { ArrayCodec, ArrayDecoder, ArrayEncoder } from '@/convert/codec/array';
import { hexArrayBufferCodec } from '@/convert/codec/array_buffer';
import {
  assertRecordWithKeys,
  Converter,
  TypeCheckingCodec,
} from '@/convert/codec/convert';
import { Ratio, ratioCodec } from './ratio';

/**
 * ActiveNodeSetEntry represents a single entry in the active node set.
 *
 * The ActiveNodeSetEntrytype is defined by the Espresso L1 Validator Service
 * API.
 * https://www.notion.so/espressosys/Delegation-UI-Service-Specification-2942431b68e980968c28cc5099a4e8f2?source=copy_link#2942431b68e980b699c5ed84c82199bf
 * Defined in rust here:
 * https://github.com/EspressoSystems/staking-ui-service/blob/8eb960a9a02d7806fddedfd44090608015d3b6b3/src/types/common.rs#L94-L103
 */
export class ActiveNodeSetEntry {
  public readonly addressText: `0x${string}`;
  constructor(
    public readonly address: ArrayBuffer,
    public readonly voterParticipation: Ratio,
    public readonly leaderParticipation: Ratio,
  ) {
    this.addressText = hexArrayBufferCodec.encode(address);
    Object.freeze(this);
  }

  toJSON() {
    return activeNodeSetEntryJSONCodec.encode(this);
  }
}

/**
 * ActiveNodeSetEntryJSONDecoder decodes ActiveNodeSetEntry objects from a JSON
 * object.
 */
class ActiveNodeSetEntryJSONDecoder
  implements Converter<unknown, ActiveNodeSetEntry>
{
  convert(input: unknown): ActiveNodeSetEntry {
    assertRecordWithKeys(
      input,
      'address',
      'voter_participation',
      'leader_participation',
    );

    return new ActiveNodeSetEntry(
      hexArrayBufferCodec.decode(input.address),
      ratioCodec.decode(input.voter_participation),
      ratioCodec.decode(input.leader_participation),
    );
  }
}

/**
 * ActiveNodeSetEntryJSONEncoder encodes ActiveNodeSetEntry objects to a JSON
 * object.
 */
class ActiveNodeSetEntryJSONEncoder
  implements Converter<ActiveNodeSetEntry, unknown>
{
  convert(input: ActiveNodeSetEntry): unknown {
    return {
      address: hexArrayBufferCodec.encode(input.address),
      voter_participation: ratioCodec.encode(input.voterParticipation),
      leader_participation: ratioCodec.encode(input.leaderParticipation),
    };
  }
}

/**
 * NodeSetEntryJSONCodec is a codec that encodes and decodes
 * NodeSetEntry objects to and from JSON.
 */
class ActiveNodeSetEntryJSONCodec extends TypeCheckingCodec<
  ActiveNodeSetEntry,
  unknown
> {
  readonly encoder = new ActiveNodeSetEntryJSONEncoder();
  readonly decoder = new ActiveNodeSetEntryJSONDecoder();
}

/**
 * activeNodeSetEntryJSONCodec is a codec that encodes and decodes
 * NodeSetEntry objects to and from JSON.
 */
export const activeNodeSetEntryJSONCodec = new ActiveNodeSetEntryJSONCodec();

/**
 * activeNodeSetEntryArrayJSONCodec is a codec that encodes and decodes
 * arrays of NodeSetEntry objects to and from JSON.
 */
export const activeNodeSetEntryArrayJSONCodec = new ArrayCodec(
  new ArrayDecoder(activeNodeSetEntryJSONCodec),
  new ArrayEncoder(activeNodeSetEntryJSONCodec),
);
