import { Codec, Converter } from '../../../../convert/codec/convert';
import { numberCodec } from '../../../../convert/codec/number';
import { StringCodec, stringCodec } from '../../../../convert/codec/string';

export abstract class CappuccinoExplorerGetBlockDetailRequest {
  readonly target: number | 'latest';

  protected constructor(target: number | 'latest') {
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

    return (stringCodec as StringCodec<'latest'>).encode(input.target);
  }
}

class CappuccinoExplorerGetBlockDetailRequestDecoder
  implements Converter<unknown, CappuccinoExplorerGetBlockDetailRequest>
{
  convert(input: unknown): CappuccinoExplorerGetBlockDetailRequest {
    if (input === 'latest') {
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
    super('latest');
  }
}

class CappuccinoExplorerGetBlockDetailRequestFrom extends CappuccinoExplorerGetBlockDetailRequest {
  public constructor(target: number) {
    super(target);
  }
}
