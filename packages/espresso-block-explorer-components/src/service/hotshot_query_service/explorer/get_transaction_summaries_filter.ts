import { assertInstanceOf } from '@/assert/assert';
import { Codec, Converter, isRecord, isUnknown } from '@/convert/codec/convert';
import { numberCodec } from '@/convert/codec/number';
import InvalidInputError from '@/errors/invalid_input_error';

/**
 * ExplorerGetTransactionSummariesFilter is a filter for getting transaction
 * summaries  from the explorer. It can be filtered by block, namespace, or no
 * filter.
 */
export abstract class ExplorerGetTransactionSummariesFilter {
  constructor() {}

  static block(block: number) {
    return new ExplorerGetTransactionSummariesFilterBlock(block);
  }

  static namespace(namespace: number) {
    return new ExplorerGetTransactionSummariesFilterNamespace(namespace);
  }

  static none() {
    return new ExplorerGetTransactionSummariesFilterNone();
  }

  abstract convertURL(baseURL: URL): URL;

  toJSON() {
    return explorerGetTransactionSummariesFilterCodec.encode(this);
  }
}

class ExplorerGetTransactionSummariesFilterDecoder implements Converter<
  unknown,
  ExplorerGetTransactionSummariesFilter
> {
  convert(input: unknown): ExplorerGetTransactionSummariesFilter {
    if (isRecord(input, 'block', isUnknown)) {
      return new ExplorerGetTransactionSummariesFilterBlock(
        numberCodec.decode(input.block),
      );
    }

    if (isRecord(input, 'namespace', isUnknown)) {
      return new ExplorerGetTransactionSummariesFilterNamespace(
        numberCodec.decode(input.namespace),
      );
    }

    return new ExplorerGetTransactionSummariesFilterNone();
  }
}

class ExplorerGetTransactionSummariesFilterEncoder implements Converter<
  ExplorerGetTransactionSummariesFilter,
  unknown
> {
  convert(input: ExplorerGetTransactionSummariesFilter) {
    assertInstanceOf(input, ExplorerGetTransactionSummariesFilter);

    if (input instanceof ExplorerGetTransactionSummariesFilterNone) {
      return {};
    }

    if (input instanceof ExplorerGetTransactionSummariesFilterBlock) {
      return {
        block: numberCodec.encode(input.block),
      };
    }

    if (input instanceof ExplorerGetTransactionSummariesFilterNamespace) {
      return {
        namespace: numberCodec.encode(input.namespace),
      };
    }

    throw new InvalidInputError();
  }
}

class ExplorerGetTransactionSummariesFilterCodec extends Codec<
  ExplorerGetTransactionSummariesFilter,
  unknown
> {
  readonly encoder = new ExplorerGetTransactionSummariesFilterEncoder();
  readonly decoder = new ExplorerGetTransactionSummariesFilterDecoder();
}

export const explorerGetTransactionSummariesFilterCodec =
  new ExplorerGetTransactionSummariesFilterCodec();

export class ExplorerGetTransactionSummariesFilterNone extends ExplorerGetTransactionSummariesFilter {
  constructor() {
    super();
  }

  convertURL(baseURL: URL): URL {
    return baseURL;
  }
}

export class ExplorerGetTransactionSummariesFilterBlock extends ExplorerGetTransactionSummariesFilter {
  public constructor(public readonly block: number) {
    super();
  }

  convertURL(baseURL: URL): URL {
    return new URL(`${baseURL.pathname}/block/${this.block}`, baseURL);
  }
}

export class ExplorerGetTransactionSummariesFilterNamespace extends ExplorerGetTransactionSummariesFilter {
  public constructor(public readonly namespace: number) {
    super();
  }

  convertURL(baseURL: URL): URL {
    return new URL(`${baseURL.pathname}/namespace/${this.namespace}`, baseURL);
  }
}
