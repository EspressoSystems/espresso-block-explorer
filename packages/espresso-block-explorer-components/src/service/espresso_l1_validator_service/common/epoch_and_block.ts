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
 * computeBlocksPerEpoch computes the number of blocks per epoch given a block
 * number and an epoch number.
 *
 * NOTE: this function does not handle the case where epoch is 0, or 1.
 * In those cases, the number of blocks per epoch cannot be determined
 * uniquely.
 */
function computeBlocksPerEpoch(block: bigint, epoch: bigint): bigint {
  if (block % epoch === 0n) {
    // epoch = blockNum / blocksPerEpoch
    return block / epoch;
  }

  // epoch = blockNum / blocksPerEpoch + 1

  return block / (epoch - 1n);
}

/**
 * computeEpochByBlockAndBlocksPerEpoch computes the epoch number given a
 * block number and the number of blocks per epoch.
 */
function computeEpochByBlockAndBlocksPerEpoch(
  blockNum: bigint,
  blocksPerEpoch: bigint,
): bigint {
  if (blocksPerEpoch === 0n) {
    // this case is unreachable in our context since we reject zero-valued blocksPerEpoch
    // at init time
    return 0n;
  }

  if (blockNum === 0n) {
    return 1n;
  }

  if (blockNum % blocksPerEpoch === 0n) {
    return blockNum / blocksPerEpoch;
  }

  return blockNum / blocksPerEpoch + 1n;
}

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
    return computeEpochByBlockAndBlocksPerEpoch(block, blocksPerEpoch);
  }

  /**
   * blocksPerEpoch computes the number of blocks per epoch based on the
   * epoch and block numbers
   */
  get blocksPerEpoch(): bigint {
    const epoch = this.epoch;
    const block = this.block;

    if (epoch === 0n) {
      // This shouldn't happen, and indicates 0 blocks per epoch
      breakpoint();
      return 0n;
    }

    if (epoch === 1n) {
      // We cannot tell how many blocks per epoch there are if we  do not
      // have an epoch larger than 1.
      return block;
    }

    // For any other block, unless the block number is directly divisible by
    // the blocks per epoch, the epoch is increased by 1.

    const blocksPerEpoch = computeBlocksPerEpoch(block, epoch);

    assert(
      computeEpochByBlockAndBlocksPerEpoch(this.block, blocksPerEpoch) ===
        epoch,
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
