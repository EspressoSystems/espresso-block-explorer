import {
  assertRecordWithKeys,
  Converter,
  TypeCheckingCodec,
} from '@/convert/codec';
import {
  ActiveNodeSetEntry,
  activeNodeSetEntryArrayJSONCodec,
} from '../common/active_node_set_entry';
import {
  EpochAndBlock,
  epochAndBlockNumberJSONCodec,
} from '../common/epoch_and_block';

/**
 * ActiveNodeSetSnapshot represents a snapshot of the active Node
 * set at a specific Espresso block.
 *
 * This type definition is informed by the type specification as defined
 * in the Espresso L1 Validator Service API documentation.
 * https://www.notion.so/espressosys/Delegation-UI-Service-Specification-2942431b68e980968c28cc5099a4e8f2?source=copy_link#2962431b68e980418520dfbb5433ee3a
 * Defined in rust here:
 * https://github.com/EspressoSystems/staking-ui-service/blob/8eb960a9a02d7806fddedfd44090608015d3b6b3/src/types/global.rs#L43-L49
 */
export class ActiveNodeSetSnapshot {
  constructor(
    public readonly espressoBlock: EpochAndBlock,
    public readonly nodes: ActiveNodeSetEntry[],
  ) {
    Object.freeze(this);
  }

  toJSON() {
    return activeNodeSetSnapshotJSONCodec.encode(this);
  }
}

/**
 * ActiveNodeSetSnapshotJSONDecoder decodes ActiveNodeSetSnapshot
 * objects from a JSON object.
 */
class ActiveNodeSetSnapshotJSONDecoder
  implements Converter<unknown, ActiveNodeSetSnapshot>
{
  convert(input: unknown): ActiveNodeSetSnapshot {
    assertRecordWithKeys(input, 'espresso_block', 'nodes');

    return new ActiveNodeSetSnapshot(
      epochAndBlockNumberJSONCodec.decode(input.espresso_block),
      activeNodeSetEntryArrayJSONCodec.decode(input.nodes),
    );
  }
}

/**
 * ActiveNodeSetSnapshotJSONEncoder encodes ActiveNodeSetSnapshot
 * objects to a JSON object.
 */
class ActiveNodeSetSnapshotJSONEncoder
  implements Converter<ActiveNodeSetSnapshot, unknown>
{
  convert(input: ActiveNodeSetSnapshot): unknown {
    return {
      espresso_block: epochAndBlockNumberJSONCodec.encode(input.espressoBlock),
      nodes: activeNodeSetEntryArrayJSONCodec.encode(input.nodes),
    };
  }
}

/**
 * ActiveNodeSetSnapshotJSONCodec is a codec that encodes and decodes
 * ActiveNodeSetSnapshot objects to and from JSON.
 */
class ActiveNodeSetSnapshotJSONCodec extends TypeCheckingCodec<
  ActiveNodeSetSnapshot,
  unknown
> {
  readonly encoder = new ActiveNodeSetSnapshotJSONEncoder();
  readonly decoder = new ActiveNodeSetSnapshotJSONDecoder();
}

/**
 * activeNodeSetSnapshotJSONCodec is a codec that encodes and decodes
 * ActiveNodeSetSnapshot objects to and from JSON.
 */
export const activeNodeSetSnapshotJSONCodec =
  new ActiveNodeSetSnapshotJSONCodec();
