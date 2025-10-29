import {
  assertRecordWithKeys,
  Converter,
  TypeCheckingCodec,
} from '@/convert/codec/convert';
import {
  ValidatorExitEntry,
  validatorExitEntryJSONCodec,
} from '../validator_exit_entry';
import { FullValidatorSetDiff } from './full_validator_set_diff';

/**
 * FullValidatorSetDiffValidatorExit represents a validator exit in the
 * validator set.
 *
 * This class is a specific case of FullValidatorSetDiff, representing the exit
 * of a validator from the validator set.
 *
 * This type definition is informed by the type specification as defined
 * in the Espresso L1 Validator Service API documentation.
 * https://www.notion.so/espressosys/Delegation-UI-Service-Specification-2942431b68e980968c28cc5099a4e8f2?source=copy_link#2962431b68e980fcbea9f7de226507a2
 */
export class FullValidatorSetDiffValidatorExit extends FullValidatorSetDiff {
  readonly validatorExit: ValidatorExitEntry;

  constructor(validatorExit: ValidatorExitEntry) {
    super();
    this.validatorExit = validatorExit;
  }

  toJSON() {
    return validatorExitJSONCodec.encode(this);
  }
}

/**
 * ValidatorExitJSONDecoder decodes FullValidatorSetDiffValidatorExit
 * objects from a JSON object.
 */
class ValidatorExitJSONDecoder
  implements Converter<unknown, FullValidatorSetDiffValidatorExit>
{
  convert(input: unknown): FullValidatorSetDiffValidatorExit {
    assertRecordWithKeys(input, 'validator_exit');

    return new FullValidatorSetDiffValidatorExit(
      validatorExitEntryJSONCodec.decode(input.validator_exit),
    );
  }
}

/**
 * ValidatorExitJSONEncoder encodes FullValidatorSetDiffValidatorExit
 * objects to a JSON object.
 */
class ValidatorExitJSONEncoder
  implements Converter<FullValidatorSetDiffValidatorExit, unknown>
{
  convert(input: FullValidatorSetDiffValidatorExit): unknown {
    return {
      validator_exit: validatorExitEntryJSONCodec.encode(input.validatorExit),
    };
  }
}

/**
 * ValidatorExitJSONCodec is a codec that encodes and decodes
 * FullValidatorSetDiffValidatorExit objects to and from JSON.
 */
class ValidatorExitJSONCodec extends TypeCheckingCodec<
  FullValidatorSetDiffValidatorExit,
  unknown
> {
  readonly encoder = new ValidatorExitJSONEncoder();
  readonly decoder = new ValidatorExitJSONDecoder();
}

/**
 * ValidatorExitKey is the key used to identify
 * FullValidatorSetDiffValidatorExit objects in the FullValidatorSetDiff
 * enumeration.
 */
export const ValidatorExitKey = 'ValidatorExit';

/**
 * validatorExitJSONCodec is a codec that encodes and decodes
 * FullValidatorSetDiffValidatorExit objects to and from JSON.
 */
export const validatorExitJSONCodec = new ValidatorExitJSONCodec();
