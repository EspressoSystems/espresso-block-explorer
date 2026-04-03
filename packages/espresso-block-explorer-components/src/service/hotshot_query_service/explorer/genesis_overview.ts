import { assertInstanceOf } from '@/assert/assert';
import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import { numberCodec } from '@/convert/codec/number';

/**
 * GenesisOverview represents the overview of the Espresso Chain, since its
 * genesis.
 *
 * It is meant to hold statistics about the Espresso Chain.
 */
export class GenesisOverview {
  constructor(
    public readonly rollups: number,
    public readonly transactions: number,
    public readonly blocks: number,
  ) {}

  toJSON() {
    return genesisOverviewCodec.encode(this);
  }
}

class GenesisOverviewDecoder implements Converter<unknown, GenesisOverview> {
  convert(input: unknown): GenesisOverview {
    assertRecordWithKeys(input, 'rollups', 'transactions', 'blocks');

    return new GenesisOverview(
      numberCodec.decode(input.rollups),
      numberCodec.decode(input.transactions),
      numberCodec.decode(input.blocks),
    );
  }
}

class GenesisOverviewEncoder implements Converter<GenesisOverview> {
  convert(input: GenesisOverview) {
    assertInstanceOf(input, GenesisOverview);

    return {
      rollups: numberCodec.encode(input.rollups),
      transactions: numberCodec.encode(input.transactions),
      blocks: numberCodec.encode(input.blocks),
    };
  }
}

class GenesisOverviewCodec extends TypeCheckingCodec<
  GenesisOverview,
  ReturnType<InstanceType<new () => GenesisOverviewEncoder>['convert']>
> {
  readonly encoder = new GenesisOverviewEncoder();
  readonly decoder = new GenesisOverviewDecoder();
}

export const genesisOverviewCodec = new GenesisOverviewCodec();
