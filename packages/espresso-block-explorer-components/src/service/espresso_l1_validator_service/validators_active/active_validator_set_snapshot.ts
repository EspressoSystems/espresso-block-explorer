import {
  assertRecordWithKeys,
  Converter,
  TypeCheckingCodec,
} from '@/convert/codec';
import {
  CurrentEpochValidatorSetEntry,
  currentEpochValidatorSetEntryArrayJSONCodec,
} from './current_epoch_validator_set_entry';
import { EpochAndBlock, epochAndBlockNumberJSONCodec } from './epoch_and_block';

/**
 * ActiveValidatorSetSnapshot represents a snapshot of the active validator
 * set at a specific Espresso block.
 *
 * This type definition is informed by the type specification as defined
 * in the Espresso L1 Validator Service API documentation.
 * https://www.notion.so/espressosys/Delegation-UI-Service-Specification-2942431b68e980968c28cc5099a4e8f2?source=copy_link#2962431b68e980418520dfbb5433ee3a
 */
export class ActiveValidatorSetSnapshot {
  readonly espressoBlock: EpochAndBlock;
  readonly nodes: CurrentEpochValidatorSetEntry[];

  constructor(
    espressoBlock: EpochAndBlock,
    validators: CurrentEpochValidatorSetEntry[],
  ) {
    this.espressoBlock = espressoBlock;
    this.nodes = validators;
  }

  toJSON() {
    return activeValidatorSetSnapshotJSONCodec.encode(this);
  }
}

/**
 * ActiveValidatorSetSnapshotJSONDecoder decodes ActiveValidatorSetSnapshot
 * objects from a JSON object.
 */
class ActiveValidatorSetSnapshotJSONDecoder
  implements Converter<unknown, ActiveValidatorSetSnapshot>
{
  convert(input: unknown): ActiveValidatorSetSnapshot {
    assertRecordWithKeys(input, 'espresso_block', 'nodes');

    return new ActiveValidatorSetSnapshot(
      epochAndBlockNumberJSONCodec.decode(input.espresso_block),
      currentEpochValidatorSetEntryArrayJSONCodec.decode(input.nodes),
    );
  }
}

/**
 * ActiveValidatorSetSnapshotJSONEncoder encodes ActiveValidatorSetSnapshot
 * objects to a JSON object.
 */
class ActiveValidatorSetSnapshotJSONEncoder
  implements Converter<ActiveValidatorSetSnapshot, unknown>
{
  convert(input: ActiveValidatorSetSnapshot): unknown {
    return {
      espresso_block: epochAndBlockNumberJSONCodec.encode(input.espressoBlock),
      nodes: currentEpochValidatorSetEntryArrayJSONCodec.encode(input.nodes),
    };
  }
}

/**
 * ActiveValidatorSetSnapshotJSONCodec is a codec that encodes and decodes
 * ActiveValidatorSetSnapshot objects to and from JSON.
 */
class ActiveValidatorSetSnapshotJSONCodec extends TypeCheckingCodec<
  ActiveValidatorSetSnapshot,
  unknown
> {
  readonly encoder = new ActiveValidatorSetSnapshotJSONEncoder();
  readonly decoder = new ActiveValidatorSetSnapshotJSONDecoder();
}

/**
 * activeValidatorSetSnapshotJSONCodec is a codec that encodes and decodes
 * ActiveValidatorSetSnapshot objects to and from JSON.
 */
export const activeValidatorSetSnapshotJSONCodec =
  new ActiveValidatorSetSnapshotJSONCodec();
