import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import { InscriptionStats, statsCodec } from '../inscription_stats';
import CappuccinoInscriptionResponse from './inscription_response';

/**
 * kCappuccinoStatsType is the type string for the
 * Stats class.
 */
export const kCappuccinoStatsType = 'Stats' as const;

/**
 * CappuccinoInscriptionStats is a response from the Cappuccino node
 * validator that contains a snapshot of the voters in the network.
 */
export class CappuccinoInscriptionStats extends CappuccinoInscriptionResponse {
  readonly stats: InscriptionStats;

  constructor(stats: InscriptionStats) {
    super();
    this.stats = stats;
  }

  toJSON() {
    return cappuccinoInscriptionStatsCodec.encode(this);
  }
}

class CappuccinoInscriptionStatsDecoder
  implements Converter<unknown, CappuccinoInscriptionStats>
{
  convert(input: unknown): CappuccinoInscriptionStats {
    assertRecordWithKeys(input, kCappuccinoStatsType);

    const list = input[kCappuccinoStatsType];
    return new CappuccinoInscriptionStats(statsCodec.decode(list));
  }
}

class CappuccinoInscriptionStatsEncoder
  implements Converter<CappuccinoInscriptionStats>
{
  convert(input: CappuccinoInscriptionStats) {
    return {
      [kCappuccinoStatsType]: statsCodec.encode(input.stats),
    };
  }
}

class CappuccinoInscriptionStatsCodec extends TypeCheckingCodec<
  CappuccinoInscriptionStats,
  ReturnType<
    InstanceType<new () => CappuccinoInscriptionStatsEncoder>['convert']
  >
> {
  readonly encoder = new CappuccinoInscriptionStatsEncoder();
  readonly decoder = new CappuccinoInscriptionStatsDecoder();
}

export const cappuccinoInscriptionStatsCodec =
  new CappuccinoInscriptionStatsCodec();
