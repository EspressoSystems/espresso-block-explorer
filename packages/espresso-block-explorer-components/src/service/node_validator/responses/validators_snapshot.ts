import {
  assertRecordWithKeys,
  Converter,
  TypeCheckingCodec,
} from '@/convert/codec/convert';
import {
  arrayValidatorCodec,
  Validator,
} from '@/models/espresso/stake_table/validator';
import { default as NodeValidatorResponse } from './node_validator_response';

/**
 * Messages from the Node Validator take the form of:
 * { "MessageType": MessageType }
 */

/**
 * kValidatorsSnapshotType is the type string for the
 * ValidatorsSnapshot class.
 */
export const kValidatorsSnapshotType = 'ValidatorsSnapshot' as const;

/**
 * ValidatorsSnapshot is a response from the node
 * validator that contains a snapshot of the validators in the network.
 */
export class ValidatorsSnapshot extends NodeValidatorResponse {
  constructor(public readonly validators: Validator[]) {
    super();
  }

  toJSON() {
    return validatorsSnapshotCodec.encode(this);
  }
}

class ValidatorsSnapshotDecoder implements Converter<
  unknown,
  ValidatorsSnapshot
> {
  convert(input: unknown): ValidatorsSnapshot {
    assertRecordWithKeys(input, kValidatorsSnapshotType);

    const list = input[kValidatorsSnapshotType];
    return new ValidatorsSnapshot(arrayValidatorCodec.decode(list));
  }
}

class ValidatorsSnapshotEncoder implements Converter<ValidatorsSnapshot> {
  convert(input: ValidatorsSnapshot) {
    return {
      [kValidatorsSnapshotType]: arrayValidatorCodec.encode(input.validators),
    };
  }
}

class ValidatorsSnapshotCodec extends TypeCheckingCodec<
  ValidatorsSnapshot,
  ReturnType<InstanceType<new () => ValidatorsSnapshotEncoder>['convert']>
> {
  readonly encoder = new ValidatorsSnapshotEncoder();
  readonly decoder = new ValidatorsSnapshotDecoder();
}

export const validatorsSnapshotCodec = new ValidatorsSnapshotCodec();
