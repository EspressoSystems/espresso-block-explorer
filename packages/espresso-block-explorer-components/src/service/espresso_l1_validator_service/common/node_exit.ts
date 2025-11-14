import { hexArrayBufferCodec } from '@/convert/codec/array_buffer';
import {
  assertRecordWithKeys,
  Converter,
  TypeCheckingCodec,
} from '@/convert/codec/convert';

/**
 * ValidatorExitEntry represents a single entry for a validator exit event.
 *
 * This type definition is informed by the type specification as defined
 * in the Espresso L1 Validator Service API documentation.
 * https://www.notion.so/espressosys/Delegation-UI-Service-Specification-2942431b68e980968c28cc5099a4e8f2?source=copy_link#2942431b68e98015ab44d3893d141b8f
 * This is defined in rust here:
 * https://github.com/EspressoSystems/staking-ui-service/blob/8eb960a9a02d7806fddedfd44090608015d3b6b3/src/types/common.rs#L68-L76
 *
 * NOTE: After a discussion with @jbearer, the epoch and block information have
 *       been removed, as it complicates things.
 */
export class NodeExit {
  constructor(
    public readonly address: ArrayBuffer,
    public readonly exitTime: Date,
  ) {
    Object.freeze(this);
  }

  toJSON() {
    return validatorExitEntryJSONCodec.encode(this);
  }
}

/**
 * ValidatorExitEntryJSONDecoder decodes ValidatorExitEntry objects from a JSON
 * object.
 */
class ValidatorExitEntryJSONDecoder implements Converter<unknown, NodeExit> {
  convert(input: unknown): NodeExit {
    assertRecordWithKeys(input, 'address', 'exit_time');

    return new NodeExit(
      hexArrayBufferCodec.decode(input.address),
      new Date(input.exit_time as string),
    );
  }
}

/**
 * ValidatorExitEntryJSONEncoder encodes ValidatorExitEntry objects to a JSON
 * object.
 */
class ValidatorExitEntryJSONEncoder implements Converter<NodeExit, unknown> {
  convert(input: NodeExit): unknown {
    return {
      address: hexArrayBufferCodec.encode(input.address),
      exit_time: input.exitTime.toISOString(),
    };
  }
}

/**
 * ValidatorExitEntryJSONCodec is a codec that encodes and decodes
 * ValidatorExitEntry objects to and from JSON.
 */
class ValidatorExitEntryJSONCodec extends TypeCheckingCodec<NodeExit, unknown> {
  readonly encoder = new ValidatorExitEntryJSONEncoder();
  readonly decoder = new ValidatorExitEntryJSONDecoder();
}

/**
 * validatorExitEntryJSONCodec is a codec that encodes and decodes
 * ValidatorExitEntry objects to and from JSON.
 */
export const validatorExitEntryJSONCodec = new ValidatorExitEntryJSONCodec();
