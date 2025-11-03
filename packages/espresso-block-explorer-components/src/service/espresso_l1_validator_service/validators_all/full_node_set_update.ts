import {
  assertRecordWithKeys,
  Converter,
  TypeCheckingCodec,
} from '@/convert/codec/convert';
import { L1BlockInfo, l1BlockInfoJSONCodec } from '../common/l1_block_info';
import { FullNodeSetDiff } from './full_node_set_diff/full_node_set_diff';
import { fullNodeSetDiffArrayJSONCodec } from './full_node_set_diff/full_node_set_diff_codec';

/**
 * FullNodeSetUpdate represents a full update to the validator set at a
 * specific L1 block.
 *
 * This type definition is informed by the type specification as defined
 * in the Espresso L1 Validator Service API documentation.
 * https://www.notion.so/espressosys/Delegation-UI-Service-Specification-2942431b68e980968c28cc5099a4e8f2?source=copy_link#2962431b68e98015981fc249d3b292bd
 * Defined in rust here:
 * https://github.com/EspressoSystems/staking-ui-service/blob/8eb960a9a02d7806fddedfd44090608015d3b6b3/src/types/global.rs#L20-L26
 */
export class FullNodeSetUpdate {
  readonly l1Block: L1BlockInfo;
  readonly diff: FullNodeSetDiff[];

  constructor(l1Block: L1BlockInfo, diff: FullNodeSetDiff[] = []) {
    this.l1Block = l1Block;
    this.diff = diff;
  }

  toJSON() {
    return fullNodeSetUpdateJSONCodec.encode(this);
  }
}

/**
 * FullValidatorSetUpdateJSONDecoder decodes FullNodeSetUpdate objects
 * from a JSON object.
 */
class FullNodeSetUpdateJSONDecoder
  implements Converter<unknown, FullNodeSetUpdate>
{
  convert(input: unknown): FullNodeSetUpdate {
    assertRecordWithKeys(input, 'l1_block', 'diff');
    return new FullNodeSetUpdate(
      l1BlockInfoJSONCodec.decode(input.l1_block),
      fullNodeSetDiffArrayJSONCodec.decode(input.diff),
    );
  }
}

/**
 * FullNodeSetUpdateJSONEncoder encodes FullNodeSetUpdate objects
 * to a JSON object.
 */
class FullNodeSetUpdateJSONEncoder
  implements Converter<FullNodeSetUpdate, unknown>
{
  convert(input: FullNodeSetUpdate): unknown {
    return {
      l1_block: l1BlockInfoJSONCodec.encode(input.l1Block),
      diff: fullNodeSetDiffArrayJSONCodec.encode(input.diff),
    };
  }
}

/**
 * FullNodeSetUpdateJSONCodec is a codec that encodes and decodes
 * FullNodeSetUpdate objects to and from JSON.
 */
class FullNodeSetUpdateJSONCodec extends TypeCheckingCodec<
  FullNodeSetUpdate,
  unknown
> {
  readonly encoder = new FullNodeSetUpdateJSONEncoder();
  readonly decoder = new FullNodeSetUpdateJSONDecoder();
}

/**
 * fullNodeSetUpdateJSONCodec is a codec that encodes and decodes
 * FullNodeSetUpdate objects to and from JSON.
 */
export const fullNodeSetUpdateJSONCodec = new FullNodeSetUpdateJSONCodec();
