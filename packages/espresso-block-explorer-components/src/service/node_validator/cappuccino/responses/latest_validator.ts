import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import {
  Validator,
  validatorCodec,
} from '@/models/espresso/stake_table/validator';
import CappuccinoNodeValidatorResponse from './node_validator_response';

/**
 * Messages from the Cappuccino Node Validator take the form of:
 * { "MessageType": MessageType }
 */

/**
 * kCappuccinoLatestValidatorType is the type string for the
 * CappuccinoLatestValidator class.
 */
export const kCappuccinoLatestValidatorType = 'LatestValidator' as const;

/**
 * CappuccinoLatestValidator is a response from the Cappuccino node
 * validator that contains a real-time update for a Validator
 * in the network.
 */
export class CappuccinoLatestValidator extends CappuccinoNodeValidatorResponse {
  readonly validator: Validator;

  constructor(validator: Validator) {
    super();
    this.validator = validator;
  }

  toJSON() {
    return cappuccinoLatestValidatorCodec.encode(this);
  }
}

class CappuccinoLatestValidatorDecoder
  implements Converter<unknown, CappuccinoLatestValidator>
{
  convert(input: unknown): CappuccinoLatestValidator {
    assertRecordWithKeys(input, kCappuccinoLatestValidatorType);

    return new CappuccinoLatestValidator(
      validatorCodec.decode(input[kCappuccinoLatestValidatorType]),
    );
  }
}

class CappuccinoLatestValidatorEncoder
  implements Converter<CappuccinoLatestValidator>
{
  convert(input: CappuccinoLatestValidator) {
    return {
      [kCappuccinoLatestValidatorType]: validatorCodec.encode(input.validator),
    };
  }
}

class CappuccinoLatestValidatorCodec extends TypeCheckingCodec<
  CappuccinoLatestValidator,
  ReturnType<
    InstanceType<new () => CappuccinoLatestValidatorEncoder>['convert']
  >
> {
  readonly encoder = new CappuccinoLatestValidatorEncoder();
  readonly decoder = new CappuccinoLatestValidatorDecoder();
}

export const cappuccinoLatestValidatorCodec =
  new CappuccinoLatestValidatorCodec();
