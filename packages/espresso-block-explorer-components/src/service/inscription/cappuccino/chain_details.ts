import { numberCodec } from '@/convert/codec';
import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
} from '@/convert/codec/convert';

/**
 * ChainDetails represents the block and offset of a specific transaction
 * within the chain.
 */
export default class ChainDetails {
  readonly block: number;
  readonly offset: number;

  constructor(block: number, offset: number) {
    this.block = block;
    this.offset = offset;
    Object.freeze(this);
  }

  toJSON() {
    return chainDetailsCodec.encode(this);
  }
}

/**
 * ChainDetailsEncoder is a Converter that converts an ChainDetails into a
 * JSON object that can be used to represent the ChainDetails.
 */
class ChainDetailsEncoder implements Converter<ChainDetails> {
  convert(input: ChainDetails) {
    return {
      block: numberCodec.encode(input.block),
      offset: numberCodec.encode(input.offset),
    };
  }
}

/**
 * ChainDetailsDecoder is a Converter that converts a JSON object into an
 * ChainDetails.
 */
class ChainDetailsDecoder implements Converter<unknown, ChainDetails> {
  convert(input: unknown) {
    assertRecordWithKeys(input, 'block', 'offset');
    return new ChainDetails(
      numberCodec.decode(input.block),
      numberCodec.decode(input.offset),
    );
  }
}

/**
 * ChainDetailsCodec is a TypeCheckingCodec for ChainDetails.
 */
class ChainDetailsCodec extends TypeCheckingCodec<ChainDetails> {
  readonly encoder = new ChainDetailsEncoder();
  readonly decoder = new ChainDetailsDecoder();
}

/**
 * chainDetailsCodec is an instance of ChainDetailsCodec.
 */
export const chainDetailsCodec = new ChainDetailsCodec();
