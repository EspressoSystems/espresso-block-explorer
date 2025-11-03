import { ArrayCodec, ArrayDecoder, ArrayEncoder } from '@/convert/codec';
import {
  assertRecordWithKeys,
  Converter,
  isRecordWithKeys,
  TypeCheckingCodec,
} from '@/convert/codec/convert';
import InvalidTypeError from '@/errors/InvalidTypeError';
import { FullNodeSetDiff } from './full_node_set_diff';
import {
  FullNodeSetDiffNodeExit,
  fullNodeSetDiffNodeExitJSONCodec,
  NodeExitKey,
} from './node_exit';
import {
  fullNodeSetNodeUpdateJSONCodec,
  FullNodeSetUpdateNodeUpdate,
  NodeUpdateKey,
} from './node_update';

/**
 * FullNodeSetDiffJSONDecoder decodes FullNodeSetDiff objects
 * from a JSON object.
 */
class FullNodeSetDiffJSONDecoder
  implements Converter<FullNodeSetDiff, unknown>
{
  convert(input: unknown): FullNodeSetDiff {
    assertRecordWithKeys(input);

    if (isRecordWithKeys(input, NodeUpdateKey)) {
      return fullNodeSetNodeUpdateJSONCodec.decode(input[NodeUpdateKey]);
    }

    if (isRecordWithKeys(input, NodeExitKey)) {
      return fullNodeSetDiffNodeExitJSONCodec.decode(input[NodeExitKey]);
    }

    const keys = Object.keys(input);
    if (keys.length <= 0) {
      throw new InvalidTypeError('Empty L1Message object', 'object');
    }

    throw new InvalidTypeError('Unrecognized L1Message type', 'Valid L1 Type');
  }
}

/**
 * FullNodeSetDiffJSONEncoder encodes FullNodeSetDiff objects
 * to a JSON object.
 */
class FullNodeSetDiffJSONEncoder
  implements Converter<FullNodeSetDiff, unknown>
{
  convert(input: FullNodeSetDiff): unknown {
    if (input instanceof FullNodeSetUpdateNodeUpdate) {
      return { [NodeUpdateKey]: fullNodeSetNodeUpdateJSONCodec.encode(input) };
    }

    if (input instanceof FullNodeSetDiffNodeExit) {
      return { [NodeExitKey]: fullNodeSetDiffNodeExitJSONCodec.encode(input) };
    }

    throw new InvalidTypeError('Unrecognized L1Message type', 'Valid L1 Type');
  }
}

/**
 * FullNodeSetDiffJSONCodec is a codec that encodes and decodes
 * FullNodeSetDiff objects to and from JSON.
 */
export class FullNodeSetDiffJSONCodec extends TypeCheckingCodec<
  FullNodeSetDiff,
  unknown
> {
  readonly encoder = new FullNodeSetDiffJSONEncoder();
  readonly decoder = new FullNodeSetDiffJSONDecoder();
}

/**
 * fullNodeSetDiffJSONCodec is a codec that encodes and decodes
 * FullNodeSetDiff objects to and from JSON.
 */
export const fullNodeSetDiffJSONCodec = new FullNodeSetDiffJSONCodec();

/**
 * fullNodeSetDiffArrayJSONCodec is a codec that encodes and decodes
 * arrays of FullNodeSetDiff objects to and from JSON.
 */
export const fullNodeSetDiffArrayJSONCodec = new ArrayCodec(
  new ArrayDecoder(fullNodeSetDiffJSONCodec),
  new ArrayEncoder(fullNodeSetDiffJSONCodec),
);
