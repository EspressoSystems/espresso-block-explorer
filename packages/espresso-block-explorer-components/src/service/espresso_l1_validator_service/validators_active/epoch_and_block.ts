import {
  assertRecordWithKeys,
  bigintCodec,
  Converter,
  numberCodec,
  TypeCheckingCodec,
} from '@/convert/codec';

/**
 * EpochAndBlock represents an epoch and block number pair with a timestamp.
 *
 * The EpochAndBlock type is defined by the Espresso L1 Validator Service API.
 * https://www.notion.so/espressosys/Delegation-UI-Service-Specification-2942431b68e980968c28cc5099a4e8f2?source=copy_link#2942431b68e98026a30aca437cc81769
 */
export class EpochAndBlock {
  readonly epoch: bigint;
  readonly block: bigint;
  readonly timestamp: Date;

  constructor(epoch: bigint, block: bigint, timestamp: Date) {
    this.epoch = epoch;
    this.block = block;
    this.timestamp = timestamp;
  }

  toJSON() {
    return epochAndBlockNumberJSONCodec.encode(this);
  }
}

/**
 * EpochAndBlockNumberJSONDecoder decodes EpochAndBlock objects from a JSON
 * object.
 */
class EpochAndBlockNumberJSONDecoder
  implements Converter<unknown, EpochAndBlock>
{
  convert(input: unknown): EpochAndBlock {
    assertRecordWithKeys(input, 'epoch', 'block', 'timestamp');

    return new EpochAndBlock(
      bigintCodec.decode(input.epoch),
      bigintCodec.decode(input.block),
      new Date(numberCodec.decode(input.timestamp)),
    );
  }
}

/**
 * EpochAndBlockNumberJSONEncoder encodes EpochAndBlock objects to a JSON
 * object.
 */
class EpochAndBlockNumberJSONEncoder
  implements Converter<EpochAndBlock, unknown>
{
  convert(input: EpochAndBlock): unknown {
    return {
      epoch: bigintCodec.encode(input.epoch),
      block: bigintCodec.encode(input.block),
      timestamp: numberCodec.encode(input.timestamp.getTime()),
    };
  }
}

/**
 * EpochAndBlockNumberJSONCodec is a codec that encodes and decodes
 * EpochAndBlock objects to and from JSON.
 */
class EpochAndBlockNumberJSONCodec extends TypeCheckingCodec<
  EpochAndBlock,
  unknown
> {
  readonly encoder = new EpochAndBlockNumberJSONEncoder();
  readonly decoder = new EpochAndBlockNumberJSONDecoder();
}

/**
 * epochAndBlockNumberJSONCodec is a codec that encodes and decodes
 * EpochAndBlock objects to and from JSON.
 */
export const epochAndBlockNumberJSONCodec = new EpochAndBlockNumberJSONCodec();
