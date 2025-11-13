import { Converter, TypeCheckingCodec } from '@/convert/codec/convert';
import {
  NodeSetEntry,
  nodeSetEntryJSONCodec,
} from '../../common/node_set_entry';
import { FullNodeSetDiff } from './full_node_set_diff';

/**
 * FullValidatorSetUpdateNodeUpdate represents an update for a specific
 * validator in the validator set.
 *
 * This class is a specific case of FullValidatorSetDiff, representing an update
 * to a validator's information.
 *
 * This type definition is informed by the type specification as defined
 * in the Espresso L1 Validator Service API documentation.
 * https://www.notion.so/espressosys/Delegation-UI-Service-Specification-2942431b68e980968c28cc5099a4e8f2?source=copy_link#2962431b68e980fcbea9f7de226507a2
 * Defined in rust here:
 * https://github.com/EspressoSystems/staking-ui-service/blob/8eb960a9a02d7806fddedfd44090608015d3b6b3/src/types/global.rs#L35
 */
export class FullNodeSetUpdateNodeUpdate extends FullNodeSetDiff {
  constructor(public readonly validatorInformation: NodeSetEntry) {
    super();
    Object.freeze(this);
  }

  toJSON() {
    return fullNodeSetNodeUpdateJSONCodec.encode(this);
  }
}

/**
 * ValidatorUpdateJSONDecoder decodes FullValidatorSetUpdateValidatorUpdate
 * objects from a JSON object.
 */
class FullNodeSetNodeUpdateJSONDecoder
  implements Converter<unknown, FullNodeSetUpdateNodeUpdate>
{
  convert(input: unknown): FullNodeSetUpdateNodeUpdate {
    return new FullNodeSetUpdateNodeUpdate(nodeSetEntryJSONCodec.decode(input));
  }
}

/**
 * ValidatorUpdateJSONEncoder encodes FullValidatorSetUpdateValidatorUpdate
 * objects to a JSON object.
 */
class FullNodeSetNodeUpdateJSONEncoder
  implements Converter<FullNodeSetUpdateNodeUpdate, unknown>
{
  convert(input: FullNodeSetUpdateNodeUpdate): unknown {
    return nodeSetEntryJSONCodec.encode(input.validatorInformation);
  }
}

/**
 * ValidatorUpdateJSONCodec is a codec that encodes and decodes
 * FullValidatorSetUpdateValidatorUpdate objects to and from JSON.
 */
class FullNodeSetNodeUpdateJSONCodec extends TypeCheckingCodec<
  FullNodeSetUpdateNodeUpdate,
  unknown
> {
  readonly encoder = new FullNodeSetNodeUpdateJSONEncoder();
  readonly decoder = new FullNodeSetNodeUpdateJSONDecoder();
}

/**
 * ValidatorUpdateKey is the key used to identify
 * FullValidatorSetUpdateValidatorUpdate  objects in the FullValidatorSetDiff
 * enumeration.
 */
export const NodeUpdateKey = 'NodeUpdate';

/**
 * validatorUpdateJSONCodec is a codec that encodes and decodes
 * FullValidatorSetUpdateValidatorUpdate objects to and from JSON.
 */
export const fullNodeSetNodeUpdateJSONCodec =
  new FullNodeSetNodeUpdateJSONCodec();
