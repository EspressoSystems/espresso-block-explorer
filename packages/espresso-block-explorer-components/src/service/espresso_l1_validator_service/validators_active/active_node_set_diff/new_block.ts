import {
  assertRecordWithKeys,
  Converter,
  TypeCheckingCodec,
} from '@/convert/codec/convert';
import { numberArrayCodec, numberCodec } from '@/convert/codec/number';
import {
  CappuccinoAPIBitVec,
  cappuccinoAPIBitVecCodec,
} from '@/service/hotshot_query_service/cappuccino/availability/bit_vec';
import { ActiveNodeSetDiff } from './active_node_set_diff';

/**
 * Defined in rust here:
 * https://github.com/EspressoSystems/staking-ui-service/blob/c0df4fb15586b521272087967ae4e1faf7a4994b/src/types/global.rs#L65-L91
 */
export class ActiveNodeSetDiffNewBlock extends ActiveNodeSetDiff {
  constructor(
    public readonly leaderIndex: number,
    public readonly failedLeaders: number[],
    public readonly votersBitVec: CappuccinoAPIBitVec,
  ) {
    super();
    Object.freeze(this);
  }

  toJSON() {
    return activeNodeSetDiffNewBlockJSONCodec.encode(this);
  }
}

/**
 * ActiveNodeSetDiffNewBlockJSONDecoder decodes ActiveNodeSetDiffNewBlock
 * objects from a JSON object.
 */
class ActiveNodeSetDiffNewBlockJSONDecoder implements Converter<
  unknown,
  ActiveNodeSetDiffNewBlock
> {
  convert(input: unknown): ActiveNodeSetDiffNewBlock {
    assertRecordWithKeys(input, 'leader', 'failed_leaders', 'voters');
    return new ActiveNodeSetDiffNewBlock(
      numberCodec.decode(input.leader),
      numberArrayCodec.decode(input.failed_leaders),
      cappuccinoAPIBitVecCodec.decode(input.voters),
    );
  }
}

/**
 * ActiveNodeSetDiffNewBlockJSONEncoder encodes ActiveNodeSetDiffNewBlock
 * objects to a JSON object.
 */
class ActiveNodeSetDiffNewBlockJSONEncoder implements Converter<
  ActiveNodeSetDiffNewBlock,
  unknown
> {
  convert(input: ActiveNodeSetDiffNewBlock): unknown {
    return {
      leader: numberCodec.encode(input.leaderIndex),
      failed_leaders: numberArrayCodec.encode(input.failedLeaders),
      voters: cappuccinoAPIBitVecCodec.encode(input.votersBitVec),
    };
  }
}

/**
 * ActiveNodeSetDiffNewBlockJSONCodec is a codec that encodes and decodes
 * ActiveNodeSetDiffNewBlock objects to and from JSON.
 */
class ActiveNodeSetDiffNewBlockJSONCodec extends TypeCheckingCodec<
  ActiveNodeSetDiffNewBlock,
  unknown
> {
  readonly encoder = new ActiveNodeSetDiffNewBlockJSONEncoder();
  readonly decoder = new ActiveNodeSetDiffNewBlockJSONDecoder();
}

/**
 * ActiveNodeSetDiffNewBlockKey is the key used to identify the
 * ActiveNodeSetDiffNewBlock object in the validator set diff JSON
 * representation.
 */
export const NewBlockKey = 'NewBlock';

/**
 * ActiveNodeSetDiffNewBlockJSONCodec is a codec that encodes and decodes
 * ActiveNodeSetDiffNewBlock objects to and from JSON.
 */
export const activeNodeSetDiffNewBlockJSONCodec =
  new ActiveNodeSetDiffNewBlockJSONCodec();
