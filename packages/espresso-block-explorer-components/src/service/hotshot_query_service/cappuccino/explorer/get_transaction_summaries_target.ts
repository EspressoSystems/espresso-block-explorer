import {
  Codec,
  Converter,
  assertRecordWithKeys,
  isRecord,
  isUnknown,
} from '../../../../convert/codec/convert';
import { numberCodec } from '../../../../convert/codec/number';
import InvalidInputError from '../../../../errors/InvalidInputError';
import {
  TaggedBase64,
  taggedBase64Codec,
} from '../../../../models/espresso/tagged_base64/TaggedBase64';

export abstract class CappuccinoExplorerGetTransactionSummariesTarget {
  readonly limit: number;

  protected constructor(limit: number) {
    this.limit = limit;
  }

  static latest(limit: number) {
    return new CappuccinoExplorerGetTransactionSummariesTargetLatest(limit);
  }

  static heightAndOffset(height: number, offset: number, limit: number) {
    return new CappuccinoExplorerGetTransactionSummariesTargetHeightAndOffset(
      height,
      offset,
      limit,
    );
  }

  static hash(hash: TaggedBase64, limit: number) {
    return new CappuccinoExplorerGetTransactionSummariesTargetHash(hash, limit);
  }

  abstract convertURL(baseURL: URL): URL;

  toJSON() {
    return cappuccinoExplorerGetTransactionSummariesTargetCodec.encode(this);
  }
}

class CappuccinoExplorerGetTransactionSummariesTargetDecoder
  implements
    Converter<unknown, CappuccinoExplorerGetTransactionSummariesTarget>
{
  convert(input: unknown): CappuccinoExplorerGetTransactionSummariesTarget {
    assertRecordWithKeys(input, 'limit');

    if (
      isRecord(input, 'height', isUnknown) &&
      isRecord(input, 'offset', isUnknown)
    ) {
      return new CappuccinoExplorerGetTransactionSummariesTargetHeightAndOffset(
        numberCodec.decode(input.height),
        numberCodec.decode(input.offset),
        numberCodec.decode(input.limit),
      );
    }

    if (isRecord(input, 'hash', isUnknown)) {
      return new CappuccinoExplorerGetTransactionSummariesTargetHash(
        taggedBase64Codec.decode(input.hash),
        numberCodec.decode(input.limit),
      );
    }

    return new CappuccinoExplorerGetTransactionSummariesTargetLatest(
      numberCodec.decode(input.limit),
    );
  }
}

class CappuccinoExplorerGetTransactionSummariesTargetEncoder
  implements
    Converter<CappuccinoExplorerGetTransactionSummariesTarget, unknown>
{
  convert(input: CappuccinoExplorerGetTransactionSummariesTarget) {
    if (
      input instanceof CappuccinoExplorerGetTransactionSummariesTargetLatest
    ) {
      return {
        limit: numberCodec.encode(input.limit),
      };
    }

    if (
      input instanceof
      CappuccinoExplorerGetTransactionSummariesTargetHeightAndOffset
    ) {
      return {
        height: numberCodec.encode(input.height),
        offset: numberCodec.encode(input.offset),
        limit: numberCodec.encode(input.limit),
      };
    }

    if (input instanceof CappuccinoExplorerGetTransactionSummariesTargetHash) {
      return {
        hash: taggedBase64Codec.encode(input.hash),
        limit: numberCodec.encode(input.limit),
      };
    }

    throw new InvalidInputError();
  }
}

class CappuccinoExplorerGetTransactionSummariesTargetCodec extends Codec<
  CappuccinoExplorerGetTransactionSummariesTarget,
  unknown
> {
  readonly encoder =
    new CappuccinoExplorerGetTransactionSummariesTargetEncoder();
  readonly decoder =
    new CappuccinoExplorerGetTransactionSummariesTargetDecoder();
}

export const cappuccinoExplorerGetTransactionSummariesTargetCodec =
  new CappuccinoExplorerGetTransactionSummariesTargetCodec();

export class CappuccinoExplorerGetTransactionSummariesTargetLatest extends CappuccinoExplorerGetTransactionSummariesTarget {
  constructor(limit: number) {
    super(limit);
  }

  convertURL(baseURL: URL): URL {
    return new URL(`transactions/latest/${this.limit}`, baseURL);
  }
}

export class CappuccinoExplorerGetTransactionSummariesTargetHeightAndOffset extends CappuccinoExplorerGetTransactionSummariesTarget {
  readonly height: number;
  readonly offset: number;

  public constructor(height: number, offset: number, limit: number) {
    super(limit);
    this.height = height;
    this.offset = offset;
  }

  convertURL(baseURL: URL): URL {
    return new URL(
      `transactions/from/${this.height}/${this.offset}/${this.limit}`,
      baseURL,
    );
  }
}

export class CappuccinoExplorerGetTransactionSummariesTargetHash extends CappuccinoExplorerGetTransactionSummariesTarget {
  readonly hash: TaggedBase64;

  public constructor(hash: TaggedBase64, limit: number) {
    super(limit);
    this.hash = hash;
  }

  convertURL(baseURL: URL): URL {
    return new URL(`transactions/hash/${this.hash}/${this.limit}`, baseURL);
  }
}
