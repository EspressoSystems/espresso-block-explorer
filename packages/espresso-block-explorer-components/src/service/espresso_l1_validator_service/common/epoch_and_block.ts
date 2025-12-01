import { assert } from '@/assert/assert';
import { breakpoint } from '@/assert/debugger';
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
 * This is defined in rust here:
 * https://github.com/EspressoSystems/staking-ui-service/blob/8eb960a9a02d7806fddedfd44090608015d3b6b3/src/types/common.rs#L81-L90
 */
export class EpochAndBlock {
  constructor(
    public readonly epoch: bigint,
    public readonly block: bigint,
    public readonly timestamp: Date,
  ) {
    Object.freeze(this);
  }

  static determineEpoch(block: bigint, blocksPerEpoch: bigint): bigint {
    if (blocksPerEpoch === 0n) {
      // This shouldn't happen
      breakpoint();
      return 0n;
    }

    return block / blocksPerEpoch + 1n;
  }

  get blocksPerEpoch(): bigint {
    if (this.epoch === 0n) {
      // This shouldn't happen
      breakpoint();
      return 0n;
    }

    const blocksPerEpoch = this.block / (this.epoch - 1n);
    assert(
      this.epoch === this.block / blocksPerEpoch + 1n,
      'Inconsistent epoch and block numbers',
    );
    return blocksPerEpoch;
  }

  toJSON() {
    return epochAndBlockNumberJSONCodec.encode(this);
  }
}

/**
 * EpochAndBlockNumberJSONDecoder decodes EpochAndBlock objects from a JSON
 * object.
 */
class EpochAndBlockNumberJSONDecoder implements Converter<
  unknown,
  EpochAndBlock
> {
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
class EpochAndBlockNumberJSONEncoder implements Converter<
  EpochAndBlock,
  unknown
> {
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
