import {
  Codec,
  Converter,
  isRecord,
  isUnknown,
} from '../../../../convert/codec/convert';
import { numberCodec } from '../../../../convert/codec/number';
import { StringCodec, stringCodec } from '../../../../convert/codec/string';
import InvalidInputError from '../../../../errors/InvalidInputError';

export abstract class CappuccinoExplorerGetBlockSummariesRequest {
  readonly limit: number;
  abstract get from(): number | 'latest';

  protected constructor(limit: number) {
    this.limit = limit;
  }

  public static latest(limit: number) {
    return new CappuccinoExplorerGetBlockSummariesRequestLatest(limit);
  }

  public static from(from: number, limit: number) {
    return new CappuccinoExplorerGetBlockSummariesRequestFrom(from, limit);
  }

  toJSON() {
    return cappuccinoExplorerGetBlockSummariesRequestCodec.encode(this);
  }
}

class CappuccinoExplorerGetBlockSummariesRequestEncoder
  implements Converter<CappuccinoExplorerGetBlockSummariesRequest, unknown>
{
  convert(input: CappuccinoExplorerGetBlockSummariesRequest) {
    if (typeof input.from === 'number') {
      return {
        from: numberCodec.encode(input.from),
        limit: numberCodec.encode(input.limit),
      } as const;
    }

    return {
      from: (stringCodec as StringCodec<'latest'>).encode(input.from),
      limit: numberCodec.encode(input.limit),
    } as const;
  }
}

class CappuccinoExplorerGetBlockSummariesRequestDecoder
  implements Converter<unknown, CappuccinoExplorerGetBlockSummariesRequest>
{
  convert(input: unknown): CappuccinoExplorerGetBlockSummariesRequest {
    if (
      !isRecord(input, 'from', isUnknown) ||
      !isRecord(input, 'limit', isUnknown)
    ) {
      throw new InvalidInputError();
    }

    if (input.from === 'latest') {
      return new CappuccinoExplorerGetBlockSummariesRequestLatest(
        numberCodec.decode(input.limit),
      );
    }

    return new CappuccinoExplorerGetBlockSummariesRequestFrom(
      numberCodec.decode(input.from),
      numberCodec.decode(input.limit),
    );
  }
}

class CappuccinoExplorerGetBlockSummariesRequestCodec extends Codec<
  CappuccinoExplorerGetBlockSummariesRequest,
  unknown
> {
  readonly encoder = new CappuccinoExplorerGetBlockSummariesRequestEncoder();
  readonly decoder = new CappuccinoExplorerGetBlockSummariesRequestDecoder();
}

export const cappuccinoExplorerGetBlockSummariesRequestCodec =
  new CappuccinoExplorerGetBlockSummariesRequestCodec();

class CappuccinoExplorerGetBlockSummariesRequestLatest extends CappuccinoExplorerGetBlockSummariesRequest {
  public constructor(limit: number) {
    super(limit);
  }

  public get from(): 'latest' {
    return 'latest';
  }
}

export class CappuccinoExplorerGetBlockSummariesRequestFrom extends CappuccinoExplorerGetBlockSummariesRequest {
  readonly from: number;

  public constructor(from: number, limit: number) {
    super(limit);
    this.from = from;
  }
}
