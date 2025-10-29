import {
  assertRecordWithKeys,
  Converter,
  TypeCheckingCodec,
} from '@/convert/codec';
import { ActiveValidatorSetDiff } from './active_validator_set_diff/active_validator_set_diff';
import { activeValidatorsSetDiffArrayJSONCodec } from './active_validator_set_diff/active_validator_set_diff_codec';
import { EpochAndBlock, epochAndBlockNumberJSONCodec } from './epoch_and_block';

/**
 * ActiveValidatorSetUpdate represents an update to the active validator set
 * at a specific Espresso block.
 *
 * This type definition is informed by the type specification as defined
 * in the Espresso L1 Validator Service API documentation.
 * https://www.notion.so/espressosys/Delegation-UI-Service-Specification-2942431b68e980968c28cc5099a4e8f2?source=copy_link#2962431b68e980ceb4c2ef5766119ddc
 */
export class ActiveValidatorSetUpdate {
  readonly espressoBlock: EpochAndBlock;
  readonly diff: ActiveValidatorSetDiff[];

  constructor(espressoBlock: EpochAndBlock, diff: ActiveValidatorSetDiff[]) {
    this.espressoBlock = espressoBlock;
    this.diff = diff;
  }

  toJSON() {
    return activeValidatorSetUpdateJSONCodec.encode(this);
  }
}

/**
 * ActiveValidatorSetUpdateJSONDecoder decodes ActiveValidatorSetUpdate
 * objects from a JSON object.
 */
class ActiveValidatorSetUpdateJSONDecoder
  implements Converter<unknown, ActiveValidatorSetUpdate>
{
  convert(input: unknown): ActiveValidatorSetUpdate {
    assertRecordWithKeys(input, 'espresso_block', 'diff');

    return new ActiveValidatorSetUpdate(
      epochAndBlockNumberJSONCodec.decode(input.espresso_block),
      activeValidatorsSetDiffArrayJSONCodec.decode(input.diff),
    );
  }
}

/**
 * ActiveValidatorSetUpdateJSONEncoder encodes ActiveValidatorSetUpdate
 * objects to a JSON object.
 */
class ActiveValidatorSetUpdateJSONEncoder
  implements Converter<ActiveValidatorSetUpdate, unknown>
{
  convert(input: ActiveValidatorSetUpdate): unknown {
    return {
      espresso_block: epochAndBlockNumberJSONCodec.encode(input.espressoBlock),
      diff: activeValidatorsSetDiffArrayJSONCodec.encode(input.diff),
    };
  }
}

/**
 * ActiveValidatorSetUpdateJSONCodec is a codec that encodes and decodes
 * ActiveValidatorSetUpdate objects to and from JSON.
 */
class ActiveValidatorSetUpdateJSONCodec extends TypeCheckingCodec<
  ActiveValidatorSetUpdate,
  unknown
> {
  readonly encoder = new ActiveValidatorSetUpdateJSONEncoder();
  readonly decoder = new ActiveValidatorSetUpdateJSONDecoder();
}

/**
 * activeValidatorSetUpdateJSONCodec is a codec that encodes and decodes
 * ActiveValidatorSetUpdate objects to and from JSON.
 */
export const activeValidatorSetUpdateJSONCodec =
  new ActiveValidatorSetUpdateJSONCodec();
