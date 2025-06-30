import {
  assertRecordWithKeys,
  Converter,
  TypeCheckingCodec,
} from '@/convert/codec/convert';
import {
  arrayValidatorCodec,
  Validator,
} from '@/models/espresso/stake_table/validator';
import CappuccinoNodeValidatorResponse from './node_validator_response';

/**
 * Messages from the Cappuccino Node Validator take the form of:
 * { "MessageType": MessageType }
 */

/**
 * kCappuccinoValidatorsSnapshotType is the type string for the
 * CappuccinoValidatorsSnapshot class.
 */
export const kCappuccinoValidatorsSnapshotType = 'ValidatorsSnapshot' as const;

/**
 * CappuccinoValidatorsSnapshot is a response from the Cappuccino node
 * validator that contains a snapshot of the validators in the network.
 */
export class CappuccinoValidatorsSnapshot extends CappuccinoNodeValidatorResponse {
  readonly validators: Validator[];

  constructor(validators: Validator[]) {
    super();
    this.validators = validators;
  }

  toJSON() {
    return cappuccinoValidatorsSnapshotCodec.encode(this);
  }
}

class CappuccinoValidatorsSnapshotDecoder
  implements Converter<unknown, CappuccinoValidatorsSnapshot>
{
  convert(input: unknown): CappuccinoValidatorsSnapshot {
    assertRecordWithKeys(input, kCappuccinoValidatorsSnapshotType);

    const list = input[kCappuccinoValidatorsSnapshotType];
    return new CappuccinoValidatorsSnapshot(arrayValidatorCodec.decode(list));
  }
}

class CappuccinoValidatorsSnapshotEncoder
  implements Converter<CappuccinoValidatorsSnapshot>
{
  convert(input: CappuccinoValidatorsSnapshot) {
    return {
      [kCappuccinoValidatorsSnapshotType]: arrayValidatorCodec.encode(
        input.validators,
      ),
    };
  }
}

class CappuccinoValidatorsSnapshotCodec extends TypeCheckingCodec<
  CappuccinoValidatorsSnapshot,
  ReturnType<
    InstanceType<new () => CappuccinoValidatorsSnapshotEncoder>['convert']
  >
> {
  readonly encoder = new CappuccinoValidatorsSnapshotEncoder();
  readonly decoder = new CappuccinoValidatorsSnapshotDecoder();
}

export const cappuccinoValidatorsSnapshotCodec =
  new CappuccinoValidatorsSnapshotCodec();
