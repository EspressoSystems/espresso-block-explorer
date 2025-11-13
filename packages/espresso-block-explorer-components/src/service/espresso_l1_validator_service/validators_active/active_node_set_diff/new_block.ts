import {
  assertRecordWithKeys,
  Converter,
  TypeCheckingCodec,
} from '@/convert/codec/convert';
import {
  CappuccinoAPIBitVec,
  cappuccinoAPIBitVecCodec,
} from '@/service/hotshot_query_service/cappuccino/availability/bit_vec';
import {
  ParticipationChange,
  participationChangeArrayJSONCodec,
} from '../../common/participation_change';
import { ActiveNodeSetDiff } from './active_node_set_diff';

/**
 * Defined in rust here:
 * https://github.com/EspressoSystems/staking-ui-service/blob/8eb960a9a02d7806fddedfd44090608015d3b6b3/src/types/global.rs#L65
 */
export class ActiveNodeSetDiffNewBlock extends ActiveNodeSetDiff {
  constructor(
    public readonly leaders: ParticipationChange[],
    public readonly voters: CappuccinoAPIBitVec,
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
class ActiveNodeSetDiffNewBlockJSONDecoder
  implements Converter<unknown, ActiveNodeSetDiffNewBlock>
{
  convert(input: unknown): ActiveNodeSetDiffNewBlock {
    assertRecordWithKeys(input, 'leaders', 'voters');
    return new ActiveNodeSetDiffNewBlock(
      participationChangeArrayJSONCodec.decode(input.leaders),
      cappuccinoAPIBitVecCodec.decode(input.voters),
    );
  }
}

/**
 * ActiveNodeSetDiffNewBlockJSONEncoder encodes ActiveNodeSetDiffNewBlock
 * objects to a JSON object.
 */
class ActiveNodeSetDiffNewBlockJSONEncoder
  implements Converter<ActiveNodeSetDiffNewBlock, unknown>
{
  convert(input: ActiveNodeSetDiffNewBlock): unknown {
    return {
      leaders: participationChangeArrayJSONCodec.encode(input.leaders),
      voters: cappuccinoAPIBitVecCodec.encode(input.voters),
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
