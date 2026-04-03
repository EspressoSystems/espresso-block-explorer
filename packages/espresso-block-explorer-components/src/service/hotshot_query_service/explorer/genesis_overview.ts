import { assertInstanceOf } from '@/assert/assert';
import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import { numberCodec } from '@/convert/codec/number';

export class CappuccinoGenesisOverview {
  readonly rollups: number;
  readonly transactions: number;
  readonly blocks: number;

  constructor(rollups: number, transactions: number, blocks: number) {
    this.rollups = rollups;
    this.transactions = transactions;
    this.blocks = blocks;
  }

  toJSON() {
    return cappuccinoGenesisOverviewCodec.encode(this);
  }
}

class CappuccinoGenesisOverviewDecoder implements Converter<
  unknown,
  CappuccinoGenesisOverview
> {
  convert(input: unknown): CappuccinoGenesisOverview {
    assertRecordWithKeys(input, 'rollups', 'transactions', 'blocks');

    return new CappuccinoGenesisOverview(
      numberCodec.decode(input.rollups),
      numberCodec.decode(input.transactions),
      numberCodec.decode(input.blocks),
    );
  }
}

class CappuccinoGenesisOverviewEncoder implements Converter<CappuccinoGenesisOverview> {
  convert(input: CappuccinoGenesisOverview) {
    assertInstanceOf(input, CappuccinoGenesisOverview);

    return {
      rollups: numberCodec.encode(input.rollups),
      transactions: numberCodec.encode(input.transactions),
      blocks: numberCodec.encode(input.blocks),
    };
  }
}

class CappuccinoGenesisOverviewCodec extends TypeCheckingCodec<
  CappuccinoGenesisOverview,
  ReturnType<
    InstanceType<new () => CappuccinoGenesisOverviewEncoder>['convert']
  >
> {
  readonly encoder = new CappuccinoGenesisOverviewEncoder();
  readonly decoder = new CappuccinoGenesisOverviewDecoder();
}

export const cappuccinoGenesisOverviewCodec =
  new CappuccinoGenesisOverviewCodec();
