import { assertInstanceOf } from '@/assert/assert';
import {
  Codec,
  Converter,
  assertRecordWithKeys,
  isRecord,
  isUnknown,
} from '@/convert/codec/convert';
import { numberCodec } from '@/convert/codec/number';
import { InvalidInputError } from '@/errors/invalid_input_error';
import {
  TaggedBase64,
  taggedBase64Codec,
} from '@/models/espresso/tagged_base64/tagged_base64';

/**
 * ExplorerGetTransactionSummariesTarget represents the target of a request to
 * get transaction summaries from the explorer.
 */
export abstract class ExplorerGetTransactionSummariesTarget {
  constructor(public readonly limit: number) {}

  static latest(limit: number) {
    return new ExplorerGetTransactionSummariesTargetLatest(limit);
  }

  static heightAndOffset(height: number, offset: number, limit: number) {
    return new ExplorerGetTransactionSummariesTargetHeightAndOffset(
      height,
      offset,
      limit,
    );
  }

  static hash(hash: TaggedBase64, limit: number) {
    return new ExplorerGetTransactionSummariesTargetHash(hash, limit);
  }

  abstract convertURL(baseURL: URL): URL;

  toJSON() {
    return explorerGetTransactionSummariesTargetCodec.encode(this);
  }
}

class ExplorerGetTransactionSummariesTargetDecoder implements Converter<
  unknown,
  ExplorerGetTransactionSummariesTarget
> {
  convert(input: unknown): ExplorerGetTransactionSummariesTarget {
    assertRecordWithKeys(input, 'limit');

    if (
      isRecord(input, 'height', isUnknown) &&
      isRecord(input, 'offset', isUnknown)
    ) {
      return new ExplorerGetTransactionSummariesTargetHeightAndOffset(
        numberCodec.decode(input.height),
        numberCodec.decode(input.offset),
        numberCodec.decode(input.limit),
      );
    }

    if (isRecord(input, 'hash', isUnknown)) {
      return new ExplorerGetTransactionSummariesTargetHash(
        taggedBase64Codec.decode(input.hash),
        numberCodec.decode(input.limit),
      );
    }

    return new ExplorerGetTransactionSummariesTargetLatest(
      numberCodec.decode(input.limit),
    );
  }
}

class ExplorerGetTransactionSummariesTargetEncoder implements Converter<
  ExplorerGetTransactionSummariesTarget,
  unknown
> {
  convert(input: ExplorerGetTransactionSummariesTarget) {
    assertInstanceOf(input, ExplorerGetTransactionSummariesTarget);

    if (input instanceof ExplorerGetTransactionSummariesTargetLatest) {
      return {
        limit: numberCodec.encode(input.limit),
      };
    }

    if (input instanceof ExplorerGetTransactionSummariesTargetHeightAndOffset) {
      return {
        height: numberCodec.encode(input.height),
        offset: numberCodec.encode(input.offset),
        limit: numberCodec.encode(input.limit),
      };
    }

    if (input instanceof ExplorerGetTransactionSummariesTargetHash) {
      return {
        hash: taggedBase64Codec.encode(input.hash),
        limit: numberCodec.encode(input.limit),
      };
    }

    throw new InvalidInputError();
  }
}

class ExplorerGetTransactionSummariesTargetCodec extends Codec<
  ExplorerGetTransactionSummariesTarget,
  unknown
> {
  readonly encoder = new ExplorerGetTransactionSummariesTargetEncoder();
  readonly decoder = new ExplorerGetTransactionSummariesTargetDecoder();
}

export const explorerGetTransactionSummariesTargetCodec =
  new ExplorerGetTransactionSummariesTargetCodec();

export class ExplorerGetTransactionSummariesTargetLatest extends ExplorerGetTransactionSummariesTarget {
  constructor(limit: number) {
    super(limit);
  }

  convertURL(baseURL: URL): URL {
    return new URL(`transactions/latest/${this.limit}`, baseURL);
  }
}

export class ExplorerGetTransactionSummariesTargetHeightAndOffset extends ExplorerGetTransactionSummariesTarget {
  public constructor(
    public readonly height: number,
    public readonly offset: number,
    limit: number,
  ) {
    super(limit);
  }

  convertURL(baseURL: URL): URL {
    return new URL(
      `transactions/from/${this.height}/${this.offset}/${this.limit}`,
      baseURL,
    );
  }
}

export class ExplorerGetTransactionSummariesTargetHash extends ExplorerGetTransactionSummariesTarget {
  public constructor(
    public readonly hash: TaggedBase64,
    limit: number,
  ) {
    super(limit);
  }

  convertURL(baseURL: URL): URL {
    return new URL(`transactions/hash/${this.hash}/${this.limit}`, baseURL);
  }
}
