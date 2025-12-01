import { Converter, TypeCheckingCodec } from '@/convert/codec';
import {
  StakeTableField,
  stakeTableFieldArrayCodec,
} from './stake_table_field';

export class StakeTable {
  constructor(public readonly entries: StakeTableField[]) {
    Object.freeze(this);
  }
}

class StakeTableDecoder implements Converter<unknown, StakeTable> {
  convert(input: unknown): StakeTable {
    return new StakeTable(stakeTableFieldArrayCodec.decode(input));
  }
}

class StakeTableEncoder implements Converter<StakeTable> {
  convert(input: StakeTable) {
    return stakeTableFieldArrayCodec.encode(input.entries);
  }
}

export class StakeTableCodec extends TypeCheckingCodec<
  StakeTable,
  ReturnType<InstanceType<new () => StakeTableEncoder>['convert']>
> {
  readonly encoder = new StakeTableEncoder();
  readonly decoder = new StakeTableDecoder();
}

export const stakeTableCodec = new StakeTableCodec();
