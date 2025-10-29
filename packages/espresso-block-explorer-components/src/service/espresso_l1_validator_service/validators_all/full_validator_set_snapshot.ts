import {
  assertRecordWithKeys,
  Converter,
  TypeCheckingCodec,
} from '@/convert/codec/convert';
import { L1BlockInfo, l1BlockInfoJSONCodec } from '../l1_block/l1_block_info';
import {
  validatorInformationArrayJSONCodec,
  ValidatorSetEntry,
} from './validator_set_entry';

/**
 * FullValidatorSetSnapshot represents a full snapshot of the validator set at a
 * specific L1 block.
 *
 * This type definition is informed by the type specification as defined
 * in the Espresso L1 Validator Service API documentation.
 * https://www.notion.so/espressosys/Delegation-UI-Service-Specification-2942431b68e980968c28cc5099a4e8f2?source=copy_link#2962431b68e980e28c9de93a4a08437f
 */
export class FullValidatorSetSnapshot {
  readonly l1Block: L1BlockInfo;
  readonly nodes: ValidatorSetEntry[];

  constructor(l1Block: L1BlockInfo, nodes: ValidatorSetEntry[] = []) {
    this.l1Block = l1Block;
    this.nodes = nodes;
  }

  toJSON() {
    return fullValidatorSetSnapshotJSONCodec.encode(this);
  }
}

/**
 * FullValidatorSetSnapshotJSONDecoder decodes FullValidatorSetSnapshot objects
 * from a JSON object.
 */
class FullValidatorSetSnapshotJSONDecoder
  implements Converter<unknown, FullValidatorSetSnapshot>
{
  convert(input: unknown): FullValidatorSetSnapshot {
    assertRecordWithKeys(input, 'l1_block', 'nodes');
    return new FullValidatorSetSnapshot(
      l1BlockInfoJSONCodec.decode(input.l1_block),
      validatorInformationArrayJSONCodec.decode(input.nodes),
    );
  }
}

/**
 * FullValidatorSetSnapshotJSONEncoder encodes FullValidatorSetSnapshot objects
 * to a JSON object.
 */
class FullValidatorSetSnapshotJSONEncoder
  implements Converter<FullValidatorSetSnapshot, unknown>
{
  convert(input: FullValidatorSetSnapshot): unknown {
    return {
      l1_block: l1BlockInfoJSONCodec.encode(input.l1Block),
      nodes: validatorInformationArrayJSONCodec.encode(input.nodes),
    };
  }
}

/**
 * FullValidatorSetSnapshotJSONCodec is a codec that encodes and decodes
 * FullValidatorSetSnapshot objects to and from JSON.
 */
class FullValidatorSetSnapshotJSONCodec extends TypeCheckingCodec<
  FullValidatorSetSnapshot,
  unknown
> {
  readonly encoder = new FullValidatorSetSnapshotJSONEncoder();
  readonly decoder = new FullValidatorSetSnapshotJSONDecoder();
}

/**
 * fullValidatorSetSnapshotJSONCodec is a codec that encodes and decodes
 * FullValidatorSetSnapshot objects to and from JSON.
 */
export const fullValidatorSetSnapshotJSONCodec =
  new FullValidatorSetSnapshotJSONCodec();
