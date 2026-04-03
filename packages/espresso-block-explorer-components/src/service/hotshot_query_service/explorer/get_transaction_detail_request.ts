import { assertInstanceOf } from '@/assert/assert';
import {
  Converter,
  TypeCheckingCodec,
  isRecord,
  isUnknown,
} from '@/convert/codec/convert';
import { numberCodec } from '@/convert/codec/number';
import InvalidInputError from '@/errors/invalid_input_error';
import {
  TaggedBase64,
  taggedBase64Codec,
} from '@/models/espresso/tagged_base64/tagged_base64';

/**
 * ExplorerGetTransactionDetailRequest represents a request to get
 * transaction details from the explorer.
 */
export abstract class ExplorerGetTransactionDetailRequest {
  static heightAndOffset(height: number, offset: number) {
    return new ExplorerGetTransactionDetailRequestHeightAndOffset(
      height,
      offset,
    );
  }

  static hash(hash: TaggedBase64) {
    return new ExplorerGetTransactionDetailRequestHash(hash);
  }

  toJSON() {
    return explorerGetTransactionDetailRequestCodec.encode(this);
  }
}

class ExplorerGetTransactionDetailRequestEncoder implements Converter<ExplorerGetTransactionDetailRequest> {
  convert(input: ExplorerGetTransactionDetailRequest) {
    assertInstanceOf(input, ExplorerGetTransactionDetailRequest);

    if (input instanceof ExplorerGetTransactionDetailRequestHeightAndOffset) {
      return {
        height: numberCodec.encode(input.height),
        offset: numberCodec.encode(input.offset),
      } as const;
    }

    if (input instanceof ExplorerGetTransactionDetailRequestHash) {
      return {
        hash: taggedBase64Codec.encode(input.hash),
      } as const;
    }

    throw new InvalidInputError();
  }
}

class ExplorerGetTransactionDetailRequestDecoder implements Converter<
  unknown,
  ExplorerGetTransactionDetailRequest
> {
  convert(input: unknown): ExplorerGetTransactionDetailRequest {
    if (
      isRecord(input, 'height', isUnknown) &&
      isRecord(input, 'offset', isUnknown)
    ) {
      return new ExplorerGetTransactionDetailRequestHeightAndOffset(
        numberCodec.decode(input.height),
        numberCodec.decode(input.offset),
      );
    }

    if (isRecord(input, 'hash', isUnknown)) {
      return new ExplorerGetTransactionDetailRequestHash(
        taggedBase64Codec.decode(input.hash),
      );
    }

    throw new InvalidInputError();
  }
}

class ExplorerGetTransactionDetailRequestCodec extends TypeCheckingCodec<
  ExplorerGetTransactionDetailRequest,
  ReturnType<
    InstanceType<
      new () => ExplorerGetTransactionDetailRequestEncoder
    >['convert']
  >
> {
  readonly encoder = new ExplorerGetTransactionDetailRequestEncoder();
  readonly decoder = new ExplorerGetTransactionDetailRequestDecoder();
}

export const explorerGetTransactionDetailRequestCodec =
  new ExplorerGetTransactionDetailRequestCodec();

export class ExplorerGetTransactionDetailRequestHeightAndOffset extends ExplorerGetTransactionDetailRequest {
  public constructor(
    public readonly height: number,
    public readonly offset: number,
  ) {
    super();
  }
}

export class ExplorerGetTransactionDetailRequestHash extends ExplorerGetTransactionDetailRequest {
  public constructor(public readonly hash: TaggedBase64) {
    super();
  }
}
