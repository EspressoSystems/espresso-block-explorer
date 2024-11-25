import {
  assertRecordWithKeys,
  Converter,
  TypeCheckingCodec,
} from '@/convert/codec/convert';
import { numberCodec } from '@/convert/codec/number';

/**
 * InscriptionStats represents the stats that are tracking the overall stats of
 * the Espresso Block Chain.
 *
 * It stores and represents the number of blocks, transactions, and inscriptions
 * that have been processed by the Espresso Block Chain.
 */
export class InscriptionStats {
  readonly numBlocks: number;
  readonly numTransactions: number;
  readonly numInscriptions: number;

  constructor(
    numBlocks: number,
    numTransactions: number,
    numInscriptions: number,
  ) {
    this.numBlocks = numBlocks;
    this.numTransactions = numTransactions;
    this.numInscriptions = numInscriptions;
  }
}

class InscriptionStatsEncoder implements Converter<InscriptionStats> {
  convert(input: InscriptionStats) {
    return {
      num_blocks: numberCodec.encode(input.numBlocks),
      num_transactions: numberCodec.encode(input.numTransactions),
      num_inscriptions: numberCodec.encode(input.numInscriptions),
    };
  }
}

class InscriptionStatsDecoder implements Converter<unknown, InscriptionStats> {
  convert(input: unknown) {
    assertRecordWithKeys(
      input,
      'num_blocks',
      'num_transactions',
      'num_inscriptions',
    );
    return new InscriptionStats(
      numberCodec.decode(input.num_blocks),
      numberCodec.decode(input.num_transactions),
      numberCodec.decode(input.num_inscriptions),
    );
  }
}

class InscriptionStatsCodec extends TypeCheckingCodec<InscriptionStats> {
  readonly encoder = new InscriptionStatsEncoder();
  readonly decoder = new InscriptionStatsDecoder();
}

export const statsCodec = new InscriptionStatsCodec();
