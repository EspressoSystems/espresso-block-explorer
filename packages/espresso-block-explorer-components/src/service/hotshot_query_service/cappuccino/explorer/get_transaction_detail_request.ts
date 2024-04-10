import {
  Converter,
  InvalidInputError,
  TypeCheckingCodec,
  isRecord,
  isUnknown,
} from '../../../../convert/codec/convert';
import { numberCodec } from '../../../../convert/codec/number';
import {
  TaggedBase64,
  taggedBase64Codec,
} from '../../../../models/espresso/tagged_base64/TaggedBase64';

export abstract class CappuccinoExplorerGetTransactionDetailRequest {
  static heightAndOffset(height: number, offset: number) {
    return new CappuccinoExplorerGetTransactionDetailRequestHeightAndOffset(
      height,
      offset,
    );
  }

  static hash(hash: TaggedBase64) {
    return new CappuccinoExplorerGetTransactionDetailRequestHash(hash);
  }

  toJSON() {
    return cappuccinoExplorerGetTransactionDetailRequestCodec.encode(this);
  }
}

class CappuccinoExplorerGetTransactionDetailRequestEncoder
  implements Converter<CappuccinoExplorerGetTransactionDetailRequest>
{
  convert(input: CappuccinoExplorerGetTransactionDetailRequest) {
    if (
      input instanceof
      CappuccinoExplorerGetTransactionDetailRequestHeightAndOffset
    ) {
      return {
        height: numberCodec.encode(input.height),
        offset: numberCodec.encode(input.offset),
      } as const;
    }

    if (input instanceof CappuccinoExplorerGetTransactionDetailRequestHash) {
      return {
        hash: taggedBase64Codec.encode(input.hash),
      } as const;
    }

    throw new InvalidInputError();
  }
}

class CappuccinoExplorerGetTransactionDetailRequestDecoder
  implements Converter<unknown, CappuccinoExplorerGetTransactionDetailRequest>
{
  convert(input: unknown): CappuccinoExplorerGetTransactionDetailRequest {
    if (
      isRecord(input, 'height', isUnknown) &&
      isRecord(input, 'offset', isUnknown)
    ) {
      return new CappuccinoExplorerGetTransactionDetailRequestHeightAndOffset(
        numberCodec.decode(input.height),
        numberCodec.decode(input.offset),
      );
    }

    if (isRecord(input, 'hash', isUnknown)) {
      return new CappuccinoExplorerGetTransactionDetailRequestHash(
        taggedBase64Codec.decode(input.hash),
      );
    }

    throw new InvalidInputError();
  }
}

class CappuccinoExplorerGetTransactionDetailRequestCodec extends TypeCheckingCodec<
  CappuccinoExplorerGetTransactionDetailRequest,
  ReturnType<
    InstanceType<
      new () => CappuccinoExplorerGetTransactionDetailRequestEncoder
    >['convert']
  >
> {
  readonly encoder = new CappuccinoExplorerGetTransactionDetailRequestEncoder();
  readonly decoder = new CappuccinoExplorerGetTransactionDetailRequestDecoder();
}

export const cappuccinoExplorerGetTransactionDetailRequestCodec =
  new CappuccinoExplorerGetTransactionDetailRequestCodec();

export class CappuccinoExplorerGetTransactionDetailRequestHeightAndOffset extends CappuccinoExplorerGetTransactionDetailRequest {
  readonly height: number;
  readonly offset: number;

  public constructor(height: number, offset: number) {
    super();

    this.height = height;
    this.offset = offset;
  }
}

export class CappuccinoExplorerGetTransactionDetailRequestHash extends CappuccinoExplorerGetTransactionDetailRequest {
  readonly hash: TaggedBase64;

  public constructor(hash: TaggedBase64) {
    super();
    this.hash = hash;
  }
}
