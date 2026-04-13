import { assertInstanceOf } from '@/assert/assert';
import {
  Codec,
  Converter,
  assertRecordWithKeys,
  isNumber,
} from '@/convert/codec/convert';
import { numberCodec } from '@/convert/codec/number';
import { StringCodec, stringCodec } from '@/convert/codec/string';
import { latestConstant } from './constants';

/**
 * ExplorerGetBlockSummariesRequest represents a request for the Block
 * summaries submitted to the Explorer API.
 */
export abstract class ExplorerGetBlockSummariesRequest {
  abstract get from(): number | typeof latestConstant;
  constructor(public readonly limit: number) {}

  public static latest(limit: number) {
    return new ExplorerGetBlockSummariesRequestLatest(limit);
  }

  public static from(from: number, limit: number) {
    return new ExplorerGetBlockSummariesRequestFrom(from, limit);
  }

  toJSON() {
    return explorerGetBlockSummariesRequestCodec.encode(this);
  }
}

class ExplorerGetBlockSummariesRequestEncoder implements Converter<
  ExplorerGetBlockSummariesRequest,
  unknown
> {
  convert(input: ExplorerGetBlockSummariesRequest) {
    assertInstanceOf(input, ExplorerGetBlockSummariesRequest);

    if (isNumber(input.from)) {
      return {
        from: numberCodec.encode(input.from),
        limit: numberCodec.encode(input.limit),
      } as const;
    }

    return {
      from: (stringCodec as StringCodec<typeof latestConstant>).encode(
        input.from,
      ),
      limit: numberCodec.encode(input.limit),
    } as const;
  }
}

class ExplorerGetBlockSummariesRequestDecoder implements Converter<
  unknown,
  ExplorerGetBlockSummariesRequest
> {
  convert(input: unknown): ExplorerGetBlockSummariesRequest {
    assertRecordWithKeys(input, 'from', 'limit');

    if (input.from === latestConstant) {
      return new ExplorerGetBlockSummariesRequestLatest(
        numberCodec.decode(input.limit),
      );
    }

    return new ExplorerGetBlockSummariesRequestFrom(
      numberCodec.decode(input.from),
      numberCodec.decode(input.limit),
    );
  }
}

class ExplorerGetBlockSummariesRequestCodec extends Codec<
  ExplorerGetBlockSummariesRequest,
  unknown
> {
  readonly encoder = new ExplorerGetBlockSummariesRequestEncoder();
  readonly decoder = new ExplorerGetBlockSummariesRequestDecoder();
}

export const explorerGetBlockSummariesRequestCodec =
  new ExplorerGetBlockSummariesRequestCodec();

class ExplorerGetBlockSummariesRequestLatest extends ExplorerGetBlockSummariesRequest {
  public constructor(limit: number) {
    super(limit);
  }

  public get from(): typeof latestConstant {
    return latestConstant;
  }
}

export class ExplorerGetBlockSummariesRequestFrom extends ExplorerGetBlockSummariesRequest {
  public constructor(
    public readonly from: number,
    limit: number,
  ) {
    super(limit);
  }
}
