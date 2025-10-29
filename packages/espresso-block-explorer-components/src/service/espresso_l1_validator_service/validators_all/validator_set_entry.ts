import { ArrayCodec, ArrayDecoder, ArrayEncoder } from '@/convert/codec';
import { stdBase64ArrayBufferCodec } from '@/convert/codec/array_buffer';
import { bigintCodec } from '@/convert/codec/bigint';
import {
  assertRecordWithKeys,
  Converter,
  TypeCheckingCodec,
} from '@/convert/codec/convert';
import { nullableNumberCodec } from '@/convert/codec/number';
import {
  CommissionPercent,
  commissionPercentCodec,
  TaggedBase64,
  taggedBase64Codec,
} from '@/models/espresso';

/**
 * ValidatorSetEntry represents a single entry in the validator set.
 *
 * This type definition is informed by the type specification as defined
 * in the Espresso L1 Validator Service API documentation.
 * https://www.notion.so/espressosys/Delegation-UI-Service-Specification-2942431b68e980968c28cc5099a4e8f2?source=copy_link#2942431b68e980e3b356cf32d1531d95
 */
export class ValidatorSetEntry {
  readonly address: ArrayBuffer;
  readonly stakeTableKey: TaggedBase64;
  readonly stake: bigint;
  readonly commission: CommissionPercent;
  readonly voterParticipation: null | number;
  readonly leadershipParticipation: null | number;

  constructor(
    address: ArrayBuffer,
    stakeTableKey: TaggedBase64,
    stake: bigint,
    commission: CommissionPercent,
    voterParticipation: null | number,
    leadershipParticipation: null | number,
  ) {
    this.address = address;
    this.stakeTableKey = stakeTableKey;
    this.stake = stake;
    this.commission = commission;
    this.voterParticipation = voterParticipation;
    this.leadershipParticipation = leadershipParticipation;
  }

  toJSON() {
    return validatorInformationJSONCodec.encode(this);
  }
}

/**
 * ValidatorInformationJSONDecoder decodes ValidatorSetEntry objects from a JSON
 * object.
 */
class ValidatorInformationJSONDecoder
  implements Converter<unknown, ValidatorSetEntry>
{
  convert(input: unknown): ValidatorSetEntry {
    assertRecordWithKeys(
      input,
      'address',
      'stake_table_key',
      'stake',
      'commission',
      'voter_participation',
      'leadership_participation',
    );

    return new ValidatorSetEntry(
      stdBase64ArrayBufferCodec.decode(input.address),
      taggedBase64Codec.decode(input.stake_table_key),
      bigintCodec.decode(input.stake),
      commissionPercentCodec.decode(input.commission),
      nullableNumberCodec.decode(input.voter_participation),
      nullableNumberCodec.decode(input.leadership_participation),
    );
  }
}

/**
 * ValidatorInformationJSONEncoder encodes ValidatorSetEntry objects to a JSON
 * object.
 */
class ValidatorInformationJSONEncoder
  implements Converter<ValidatorSetEntry, unknown>
{
  convert(input: ValidatorSetEntry): unknown {
    return {
      address: stdBase64ArrayBufferCodec.encode(input.address),
      stake_table_key: taggedBase64Codec.encode(input.stakeTableKey),
      stake: bigintCodec.encode(input.stake),
      commission: commissionPercentCodec.encode(input.commission),
      voter_participation: nullableNumberCodec.encode(input.voterParticipation),
      leadership_participation: nullableNumberCodec.encode(
        input.leadershipParticipation,
      ),
    };
  }
}

/**
 * ValidatorInformationJSONCodec is a codec that encodes and decodes
 * ValidatorSetEntry objects to and from JSON.
 */
class ValidatorInformationJSONCodec extends TypeCheckingCodec<
  ValidatorSetEntry,
  unknown
> {
  readonly encoder = new ValidatorInformationJSONEncoder();
  readonly decoder = new ValidatorInformationJSONDecoder();
}

/**
 * validatorInformationJSONCodec is a codec that encodes and decodes
 * ValidatorSetEntry objects to and from JSON.
 */
export const validatorInformationJSONCodec =
  new ValidatorInformationJSONCodec();

/**
 * validatorInformationArrayJSONCodec is a codec that encodes and decodes
 * arrays of ValidatorSetEntry objects to and from JSON.
 */
export const validatorInformationArrayJSONCodec = new ArrayCodec(
  new ArrayDecoder(validatorInformationJSONCodec),
  new ArrayEncoder(validatorInformationJSONCodec),
);
