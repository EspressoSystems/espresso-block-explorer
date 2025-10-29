import { ArrayCodec, ArrayDecoder, ArrayEncoder } from '@/convert/codec';
import {
  assertRecordWithKeys,
  Converter,
  isRecordWithKeys,
  TypeCheckingCodec,
} from '@/convert/codec/convert';
import InvalidTypeError from '@/errors/InvalidTypeError';
import { FullValidatorSetDiff } from './full_validator_set_diff';
import {
  FullValidatorSetDiffValidatorExit,
  validatorExitJSONCodec,
  ValidatorExitKey,
} from './validator_exit';
import {
  FullValidatorSetUpdateValidatorUpdate,
  validatorUpdateJSONCodec,
  ValidatorUpdateKey,
} from './validator_update';

/**
 * FullValidatorSetDiffJSONDecoder decodes FullValidatorSetDiff objects
 * from a JSON object.
 */
class FullValidatorSetDiffJSONDecoder
  implements Converter<FullValidatorSetDiff, unknown>
{
  convert(input: unknown): FullValidatorSetDiff {
    assertRecordWithKeys(input);

    if (isRecordWithKeys(input, ValidatorUpdateKey)) {
      return validatorUpdateJSONCodec.decode(input[ValidatorUpdateKey]);
    }

    if (isRecordWithKeys(input, ValidatorExitKey)) {
      return validatorExitJSONCodec.decode(input[ValidatorExitKey]);
    }

    const keys = Object.keys(input);
    if (keys.length <= 0) {
      throw new InvalidTypeError('Empty L1Message object', 'object');
    }

    throw new InvalidTypeError('Unrecognized L1Message type', 'Valid L1 Type');
  }
}

/**
 * FullValidatorSetDiffJSONEncoder encodes FullValidatorSetDiff objects
 * to a JSON object.
 */
class FullValidatorSetDiffJSONEncoder
  implements Converter<FullValidatorSetDiff, unknown>
{
  convert(input: FullValidatorSetDiff): unknown {
    if (input instanceof FullValidatorSetUpdateValidatorUpdate) {
      return { [ValidatorUpdateKey]: validatorUpdateJSONCodec.encode(input) };
    }

    if (input instanceof FullValidatorSetDiffValidatorExit) {
      return { [ValidatorExitKey]: validatorExitJSONCodec.encode(input) };
    }

    throw new InvalidTypeError('Unrecognized L1Message type', 'Valid L1 Type');
  }
}

/**
 * FullValidatorSetDiffJSONCodec is a codec that encodes and decodes
 * FullValidatorSetDiff objects to and from JSON.
 */
export class FullValidatorSetDiffJSONCodec extends TypeCheckingCodec<
  FullValidatorSetDiff,
  unknown
> {
  readonly encoder = new FullValidatorSetDiffJSONEncoder();
  readonly decoder = new FullValidatorSetDiffJSONDecoder();
}

/**
 * fullValidatorSetDiffJSONCodec is a codec that encodes and decodes
 * FullValidatorSetDiff objects to and from JSON.
 */
export const fullValidatorSetDiffJSONCodec =
  new FullValidatorSetDiffJSONCodec();

/**
 * fullValidatorSetDiffArrayJSONCodec is a codec that encodes and decodes
 * arrays of FullValidatorSetDiff objects to and from JSON.
 */
export const fullValidatorSetDiffArrayJSONCodec = new ArrayCodec(
  new ArrayDecoder(fullValidatorSetDiffJSONCodec),
  new ArrayEncoder(fullValidatorSetDiffJSONCodec),
);
