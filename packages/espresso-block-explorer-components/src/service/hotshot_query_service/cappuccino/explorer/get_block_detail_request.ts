import { Codec, Converter } from '@/convert/codec/convert';
import { numberCodec } from '@/convert/codec/number';
import { StringCodec, stringCodec } from '@/convert/codec/string';
import { latestConstant } from './constants';

export abstract class CappuccinoExplorerGetBlockDetailRequest {
  readonly target: number | typeof latestConstant;

  protected constructor(target: number | typeof latestConstant) {
    this.target = target;
  }

  public static latest(): CappuccinoExplorerGetBlockDetailRequest {
    return new CappuccinoExplorerGetBlockDetailRequestLatest();
  }

  public static height(
    target: number,
  ): CappuccinoExplorerGetBlockDetailRequest {
    return new CappuccinoExplorerGetBlockDetailRequestFrom(target);
  }

  toJSON() {
    return cappuccinoExplorerGetBlockDetailRequestCodec.encode(this);
  }
}

class CappuccinoExplorerGetBlockDetailRequestEncoder
  implements Converter<CappuccinoExplorerGetBlockDetailRequest, unknown>
{
  convert(input: CappuccinoExplorerGetBlockDetailRequest) {
    if (typeof input.target === 'number') {
      return numberCodec.encode(input.target);
    }

    return (stringCodec as StringCodec<typeof latestConstant>).encode(
      input.target,
    );
  }
}

class CappuccinoExplorerGetBlockDetailRequestDecoder
  implements Converter<unknown, CappuccinoExplorerGetBlockDetailRequest>
{
  convert(input: unknown): CappuccinoExplorerGetBlockDetailRequest {
    if (input === latestConstant) {
      return new CappuccinoExplorerGetBlockDetailRequestLatest();
    }

    return new CappuccinoExplorerGetBlockDetailRequestFrom(
      numberCodec.decode(input),
    );
  }
}

class CappuccinoExplorerGetBlockDetailRequestCodec extends Codec<
  CappuccinoExplorerGetBlockDetailRequest,
  unknown
> {
  readonly encoder = new CappuccinoExplorerGetBlockDetailRequestEncoder();
  readonly decoder = new CappuccinoExplorerGetBlockDetailRequestDecoder();
}

export const cappuccinoExplorerGetBlockDetailRequestCodec =
  new CappuccinoExplorerGetBlockDetailRequestCodec();

class CappuccinoExplorerGetBlockDetailRequestLatest extends CappuccinoExplorerGetBlockDetailRequest {
  public constructor() {
    super(latestConstant);
  }
}

class CappuccinoExplorerGetBlockDetailRequestFrom extends CappuccinoExplorerGetBlockDetailRequest {
  public constructor(target: number) {
    super(target);
  }
}
