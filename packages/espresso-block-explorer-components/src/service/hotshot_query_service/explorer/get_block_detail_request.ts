import { assertInstanceOf } from '@/assert/assert';
import { Codec, Converter } from '@/convert/codec/convert';
import { numberCodec } from '@/convert/codec/number';
import { StringCodec, stringCodec } from '@/convert/codec/string';
import { latestConstant } from './constants';

/**
 * ExplorerGetBlockDetailRequest represents the request to get the block detail
 * in the various forms it can take.
 *
 * This acts an enumeration of the variations of the request and how
 * they can be constructed with static methods.
 */
export abstract class ExplorerGetBlockDetailRequest {
  constructor(public readonly target: number | typeof latestConstant) {}

  public static latest(): ExplorerGetBlockDetailRequest {
    return new ExplorerGetBlockDetailRequestLatest();
  }

  public static height(target: number): ExplorerGetBlockDetailRequest {
    return new ExplorerGetBlockDetailRequestFrom(target);
  }

  toJSON() {
    return explorerGetBlockDetailRequestCodec.encode(this);
  }
}

class ExplorerGetBlockDetailRequestEncoder implements Converter<
  ExplorerGetBlockDetailRequest,
  unknown
> {
  convert(input: ExplorerGetBlockDetailRequest) {
    assertInstanceOf(input, ExplorerGetBlockDetailRequest);

    if (typeof input.target === 'number') {
      return numberCodec.encode(input.target);
    }

    return (stringCodec as StringCodec<typeof latestConstant>).encode(
      input.target,
    );
  }
}

class ExplorerGetBlockDetailRequestDecoder implements Converter<
  unknown,
  ExplorerGetBlockDetailRequest
> {
  convert(input: unknown): ExplorerGetBlockDetailRequest {
    if (input === latestConstant) {
      return new ExplorerGetBlockDetailRequestLatest();
    }

    return new ExplorerGetBlockDetailRequestFrom(numberCodec.decode(input));
  }
}

class ExplorerGetBlockDetailRequestCodec extends Codec<
  ExplorerGetBlockDetailRequest,
  unknown
> {
  readonly encoder = new ExplorerGetBlockDetailRequestEncoder();
  readonly decoder = new ExplorerGetBlockDetailRequestDecoder();
}

export const explorerGetBlockDetailRequestCodec =
  new ExplorerGetBlockDetailRequestCodec();

class ExplorerGetBlockDetailRequestLatest extends ExplorerGetBlockDetailRequest {
  public constructor() {
    super(latestConstant);
  }
}

class ExplorerGetBlockDetailRequestFrom extends ExplorerGetBlockDetailRequest {
  public constructor(target: number) {
    super(target);
  }
}
