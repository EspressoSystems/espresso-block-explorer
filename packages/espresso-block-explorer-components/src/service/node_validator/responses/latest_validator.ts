import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import {
  Validator,
  validatorCodec,
} from '@/models/espresso/stake_table/validator';
import { default as NodeValidatorResponse } from './node_validator_response';

/**
 * Messages from the Node Validator take the form of:
 * { "MessageType": MessageType }
 */

/**
 * kLatestValidatorType is the type string for the
 * LatestValidator class.
 */
export const kLatestValidatorType = 'LatestValidator' as const;

/**
 * LatestValidator is a response from the node
 * validator that contains a real-time update for a Validator
 * in the network.
 */
export class LatestValidator extends NodeValidatorResponse {
  readonly validator: Validator;

  constructor(validator: Validator) {
    super();
    this.validator = validator;
  }

  toJSON() {
    return latestValidatorCodec.encode(this);
  }
}

class LatestValidatorDecoder implements Converter<unknown, LatestValidator> {
  convert(input: unknown): LatestValidator {
    assertRecordWithKeys(input, kLatestValidatorType);

    return new LatestValidator(
      validatorCodec.decode(input[kLatestValidatorType]),
    );
  }
}

class LatestValidatorEncoder implements Converter<LatestValidator> {
  convert(input: LatestValidator) {
    return {
      [kLatestValidatorType]: validatorCodec.encode(input.validator),
    };
  }
}

class LatestValidatorCodec extends TypeCheckingCodec<
  LatestValidator,
  ReturnType<InstanceType<new () => LatestValidatorEncoder>['convert']>
> {
  readonly encoder = new LatestValidatorEncoder();
  readonly decoder = new LatestValidatorDecoder();
}

export const latestValidatorCodec = new LatestValidatorCodec();
