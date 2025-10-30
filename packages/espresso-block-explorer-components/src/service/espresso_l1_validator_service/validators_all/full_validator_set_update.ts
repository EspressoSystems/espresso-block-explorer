import {
  assertRecordWithKeys,
  Converter,
  TypeCheckingCodec,
} from '@/convert/codec/convert';
import { L1BlockInfo, l1BlockInfoJSONCodec } from '../l1_block/l1_block_info';
import { FullValidatorSetDiff } from './full_validator_set_diff/full_validator_set_diff';
import { fullValidatorSetDiffArrayJSONCodec } from './full_validator_set_diff/l1_message_codec';

/**
 * FullValidatorSetUpdate represents a full update to the validator set at a
 * specific L1 block.
 *
 * This type definition is informed by the type specification as defined
 * in the Espresso L1 Validator Service API documentation.
 * https://www.notion.so/espressosys/Delegation-UI-Service-Specification-2942431b68e980968c28cc5099a4e8f2?source=copy_link#2962431b68e98015981fc249d3b292bd
 */
export class FullValidatorSetUpdate {
  readonly l1Block: L1BlockInfo;
  readonly diff: FullValidatorSetDiff[];

  constructor(l1Block: L1BlockInfo, diff: FullValidatorSetDiff[] = []) {
    this.l1Block = l1Block;
    this.diff = diff;
  }

  toJSON() {
    return fullValidatorSetUpdateJSONCodec.encode(this);
  }
}

/**
 * FullValidatorSetUpdateJSONDecoder decodes FullValidatorSetUpdate objects
 * from a JSON object.
 */
class FullValidatorSetUpdateJSONDecoder
  implements Converter<unknown, FullValidatorSetUpdate>
{
  convert(input: unknown): FullValidatorSetUpdate {
    assertRecordWithKeys(input, 'l1_block', 'diff');
    return new FullValidatorSetUpdate(
      l1BlockInfoJSONCodec.decode(input.l1_block),
      fullValidatorSetDiffArrayJSONCodec.decode(input.diff),
    );
  }
}

/**
 * FullValidatorSetUpdateJSONEncoder encodes FullValidatorSetUpdate objects
 * to a JSON object.
 */
class FullValidatorSetUpdateJSONEncoder
  implements Converter<FullValidatorSetUpdate, unknown>
{
  convert(input: FullValidatorSetUpdate): unknown {
    return {
      l1_block: l1BlockInfoJSONCodec.encode(input.l1Block),
      diff: fullValidatorSetDiffArrayJSONCodec.encode(input.diff),
    };
  }
}

/**
 * FullValidatorSetUpdateJSONCodec is a codec that encodes and decodes
 * FullValidatorSetUpdate objects to and from JSON.
 */
class FullValidatorSetUpdateJSONCodec extends TypeCheckingCodec<
  FullValidatorSetUpdate,
  unknown
> {
  readonly encoder = new FullValidatorSetUpdateJSONEncoder();
  readonly decoder = new FullValidatorSetUpdateJSONDecoder();
}

/**
 * fullValidatorSetUpdateJSONCodec is a codec that encodes and decodes
 * FullValidatorSetUpdate objects to and from JSON.
 */
export const fullValidatorSetUpdateJSONCodec =
  new FullValidatorSetUpdateJSONCodec();
