import { hexArrayBufferArrayCodec } from '@/convert/codec';
import { Converter, TypeCheckingCodec } from '@/convert/codec/convert';
import { ActiveNodeSetDiff } from './active_node_set_diff';

/**
 * NewEpoch represents the beginning of a new epoch in the active validator set.
 * It contains the list of validators that are active in the new epoch.
 *
 * This type definition is informed by the type specification as defined
 * in the Espresso L1 Validator Service API documentation.
 * https://www.notion.so/espressosys/Delegation-UI-Service-Specification-2942431b68e980968c28cc5099a4e8f2?source=copy_link#2962431b68e9804d9c99ea7b6a2c87ca
 * Defined in rust here:
 * https://github.com/EspressoSystems/staking-ui-service/blob/c0df4fb15586b521272087967ae4e1faf7a4994b/src/types/global.rs#L94
 */
export class NewEpoch extends ActiveNodeSetDiff {
  constructor(public readonly entries: ArrayBuffer[]) {
    super();
    Object.freeze(this);
  }

  toJSON() {
    return currentEpochJSONCodec.encode(this);
  }
}

/**
 * CurrentEpochJSONDecoder decodes NewEpoch objects from a JSON object.
 */
class CurrentEpochJSONDecoder implements Converter<unknown, NewEpoch> {
  convert(input: unknown): NewEpoch {
    return new NewEpoch(hexArrayBufferArrayCodec.decode(input));
  }
}

/**
 * CurrentEpochJSONEncoder encodes NewEpoch objects to a JSON object.
 */
class CurrentEpochJSONEncoder implements Converter<NewEpoch, unknown> {
  convert(input: NewEpoch): unknown {
    return hexArrayBufferArrayCodec.encode(input.entries);
  }
}

/**
 * CurrentEpochJSONCodec is a codec that encodes and decodes
 * NewEpoch objects to and from JSON.
 */
class CurrentEpochJSONCodec extends TypeCheckingCodec<NewEpoch, unknown> {
  readonly encoder = new CurrentEpochJSONEncoder();
  readonly decoder = new CurrentEpochJSONDecoder();
}

/**
 * CurrentEpochKey is the key used to identify the NewEpoch object in the
 * validator set diff JSON representation.
 */
export const CurrentEpochKey = 'NewEpoch';

/**
 * currentEpochJSONCodec is a codec that encodes and decodes
 * NewEpoch objects to and from JSON.
 */
export const currentEpochJSONCodec = new CurrentEpochJSONCodec();
