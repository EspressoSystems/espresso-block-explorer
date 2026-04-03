import { assertInstanceOf } from '@/assert/assert';
import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import { numberCodec } from '@/convert/codec/number';
import { CappuccinoVersion, cappuccinoVersionCodec } from './version';
import { uint8ArrayCodec } from '@/convert/codec/uint8_array';

/**
 * UpgradeProposalDataV1 is the data that is utilized when attempting to
 * propose a protocol upgrade as defined by the HotShot Query Service's
 * Availability API.
 */
export class UpgradeProposalDataV1 {
  constructor(
    public readonly old_version: CappuccinoVersion,
    public readonly new_version: CappuccinoVersion,
    public readonly decide_by: number,
    public readonly new_version_hash: Uint8Array,
    public readonly old_version_last_view: number,
    public readonly new_version_first_view: number,
  ) {}

  toJSON() {
    return upgradeProposalDataV1Codec.encode(this);
  }
}

export class UpgradePropsoalDataV1Decoder implements Converter<
  unknown,
  UpgradeProposalDataV1
> {
  convert(input: unknown): UpgradeProposalDataV1 {
    assertRecordWithKeys(
      input,
      'old_version',
      'new_version',
      'decide_by',
      'new_version_hash',
      'old_version_last_view',
      'new_version_first_view',
    );

    return new UpgradeProposalDataV1(
      cappuccinoVersionCodec.decode(input.old_version),
      cappuccinoVersionCodec.decode(input.new_version),
      numberCodec.decode(input.decide_by),
      uint8ArrayCodec.decode(input.new_version_hash),
      numberCodec.decode(input.old_version_last_view),
      numberCodec.decode(input.new_version_first_view),
    );
  }
}

export class UpgradeProposalDataV1Encoder implements Converter<UpgradeProposalDataV1> {
  convert(input: UpgradeProposalDataV1) {
    assertInstanceOf(input, UpgradeProposalDataV1);

    return {
      old_version: cappuccinoVersionCodec.encode(input.old_version),
      new_version: cappuccinoVersionCodec.encode(input.new_version),
      decide_by: numberCodec.encode(input.decide_by),
      new_version_hash: uint8ArrayCodec.encode(input.new_version_hash),
      old_version_last_view: numberCodec.encode(input.old_version_last_view),
      new_version_first_view: numberCodec.encode(input.new_version_first_view),
    };
  }
}

export class UpgradeProposalDataDataV1Codec extends TypeCheckingCodec<
  UpgradeProposalDataV1,
  ReturnType<InstanceType<new () => UpgradeProposalDataV1Encoder>['convert']>
> {
  readonly encoder = new UpgradeProposalDataV1Encoder();
  readonly decoder = new UpgradePropsoalDataV1Decoder();
}

export const upgradeProposalDataV1Codec = new UpgradeProposalDataDataV1Codec();
