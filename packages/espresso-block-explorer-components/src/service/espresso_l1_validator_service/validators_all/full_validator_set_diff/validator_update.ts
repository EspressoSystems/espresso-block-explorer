import {
  assertRecordWithKeys,
  Converter,
  TypeCheckingCodec,
} from '@/convert/codec/convert';
import {
  validatorInformationJSONCodec,
  ValidatorSetEntry,
} from '../validator_set_entry';
import { FullValidatorSetDiff } from './full_validator_set_diff';

/**
 * FullValidatorSetUpdate represents an update for a specific validator in the
 * validator set.
 *
 * This class is a specific case of FullValidatorSetDiff, representing an update
 * to a validator's information.
 *
 * This type definition is informed by the type specification as defined
 * in the Espresso L1 Validator Service API documentation.
 * https://www.notion.so/espressosys/Delegation-UI-Service-Specification-2942431b68e980968c28cc5099a4e8f2?source=copy_link#2962431b68e980fcbea9f7de226507a2
 */
export class FullValidatorSetUpdateValidatorUpdate extends FullValidatorSetDiff {
  readonly validatorInformation: ValidatorSetEntry;

  constructor(validatorInformation: ValidatorSetEntry) {
    super();
    this.validatorInformation = validatorInformation;
  }

  toJSON() {
    return validatorUpdateJSONCodec.encode(this);
  }
}

/**
 * ValidatorUpdateJSONDecoder decodes FullValidatorSetUpdateValidatorUpdate
 * objects from a JSON object.
 */
class ValidatorUpdateJSONDecoder
  implements Converter<unknown, FullValidatorSetUpdateValidatorUpdate>
{
  convert(input: unknown): FullValidatorSetUpdateValidatorUpdate {
    assertRecordWithKeys(input, 'validator_information');

    return new FullValidatorSetUpdateValidatorUpdate(
      validatorInformationJSONCodec.decode(input.validator_information),
    );
  }
}

/**
 * ValidatorUpdateJSONEncoder encodes FullValidatorSetUpdateValidatorUpdate
 * objects to a JSON object.
 */
class ValidatorUpdateJSONEncoder
  implements Converter<FullValidatorSetUpdateValidatorUpdate, unknown>
{
  convert(input: FullValidatorSetUpdateValidatorUpdate): unknown {
    return {
      validator_information: validatorInformationJSONCodec.encode(
        input.validatorInformation,
      ),
    };
  }
}

/**
 * ValidatorUpdateJSONCodec is a codec that encodes and decodes
 * FullValidatorSetUpdateValidatorUpdate objects to and from JSON.
 */
class ValidatorUpdateJSONCodec extends TypeCheckingCodec<
  FullValidatorSetUpdateValidatorUpdate,
  unknown
> {
  readonly encoder = new ValidatorUpdateJSONEncoder();
  readonly decoder = new ValidatorUpdateJSONDecoder();
}

/**
 * ValidatorUpdateKey is the key used to identify
 * FullValidatorSetUpdateValidatorUpdate  objects in the FullValidatorSetDiff
 * enumeration.
 */
export const ValidatorUpdateKey = 'ValidatorUpdate';

/**
 * validatorUpdateJSONCodec is a codec that encodes and decodes
 * FullValidatorSetUpdateValidatorUpdate objects to and from JSON.
 */
export const validatorUpdateJSONCodec = new ValidatorUpdateJSONCodec();
