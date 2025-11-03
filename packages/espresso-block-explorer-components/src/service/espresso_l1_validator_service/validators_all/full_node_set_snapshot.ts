import {
  assertRecordWithKeys,
  Converter,
  TypeCheckingCodec,
} from '@/convert/codec/convert';
import { L1BlockInfo, l1BlockInfoJSONCodec } from '../common/l1_block_info';
import {
  NodeSetEntry,
  nodeSetEntryArrayJSONCodec,
} from '../common/node_set_entry';

/**
 * FullValidatorSetSnapshot represents a full snapshot of the validator set at a
 * specific L1 block.
 *
 * This type definition is informed by the type specification as defined
 * in the Espresso L1 Validator Service API documentation.
 * https://www.notion.so/espressosys/Delegation-UI-Service-Specification-2942431b68e980968c28cc5099a4e8f2?source=copy_link#2962431b68e980e28c9de93a4a08437f
 * Define in rust here:
 * https://github.com/EspressoSystems/staking-ui-service/blob/8eb960a9a02d7806fddedfd44090608015d3b6b3/src/types/global.rs#L10-L16
 */
export class FullNodeSetSnapshot {
  readonly l1Block: L1BlockInfo;
  readonly nodes: NodeSetEntry[];

  constructor(l1Block: L1BlockInfo, nodes: NodeSetEntry[] = []) {
    this.l1Block = l1Block;
    this.nodes = nodes;
  }

  toJSON() {
    return fullNodeSetSnapshotJSONCodec.encode(this);
  }
}

/**
 * FullNodeSetSnapshotJSONDecoder decodes FullNodeSetSnapshot objects
 * from a JSON object.
 */
class FullNodeSetSnapshotJSONDecoder
  implements Converter<unknown, FullNodeSetSnapshot>
{
  convert(input: unknown): FullNodeSetSnapshot {
    assertRecordWithKeys(input, 'l1_block', 'nodes');
    return new FullNodeSetSnapshot(
      l1BlockInfoJSONCodec.decode(input.l1_block),
      nodeSetEntryArrayJSONCodec.decode(input.nodes),
    );
  }
}

/**
 * FullNodeSetSnapshotJSONEncoder encodes FullNodeSetSnapshot objects
 * to a JSON object.
 */
class FullNodeSetSnapshotJSONEncoder
  implements Converter<FullNodeSetSnapshot, unknown>
{
  convert(input: FullNodeSetSnapshot): unknown {
    return {
      l1_block: l1BlockInfoJSONCodec.encode(input.l1Block),
      nodes: nodeSetEntryArrayJSONCodec.encode(input.nodes),
    };
  }
}

/**
 * FullNodeSetSnapshotJSONCodec is a codec that encodes and decodes
 * FullNodeSetSnapshot objects to and from JSON.
 */
class FullNodeSetSnapshotJSONCodec extends TypeCheckingCodec<
  FullNodeSetSnapshot,
  unknown
> {
  readonly encoder = new FullNodeSetSnapshotJSONEncoder();
  readonly decoder = new FullNodeSetSnapshotJSONDecoder();
}

/**
 * fullNodeSetSnapshotJSONCodec is a codec that encodes and decodes
 * FullNodeSetSnapshot objects to and from JSON.
 */
export const fullNodeSetSnapshotJSONCodec = new FullNodeSetSnapshotJSONCodec();
