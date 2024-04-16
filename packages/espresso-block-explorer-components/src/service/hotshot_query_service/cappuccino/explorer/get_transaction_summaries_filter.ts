import {
  Codec,
  Converter,
  isRecord,
  isUnknown,
} from '../../../../convert/codec/convert';
import { numberCodec } from '../../../../convert/codec/number';
import InvalidInputError from '../../../../errors/InvalidInputError';

export abstract class CappuccinoExplorerGetTransactionSummariesFilter {
  protected constructor() {}

  static block(block: number) {
    return new CappuccinoExplorerGetTransactionSummariesFilterBlock(block);
  }

  static namespace(namespace: number) {
    return new CappuccinoExplorerGetTransactionSummariesFilterNamespace(
      namespace,
    );
  }

  static none() {
    return new CappuccinoExplorerGetTransactionSummariesFilterNone();
  }

  abstract convertURL(baseURL: URL): URL;

  toJSON() {
    return cappuccinoExplorerGetTransactionSummariesFilterCodec.encode(this);
  }
}

class CappuccinoExplorerGetTransactionSummariesFilterDecoder
  implements
    Converter<unknown, CappuccinoExplorerGetTransactionSummariesFilter>
{
  convert(input: unknown): CappuccinoExplorerGetTransactionSummariesFilter {
    if (isRecord(input, 'block', isUnknown)) {
      return new CappuccinoExplorerGetTransactionSummariesFilterBlock(
        numberCodec.decode(input.block),
      );
    }

    if (isRecord(input, 'namespace', isUnknown)) {
      return new CappuccinoExplorerGetTransactionSummariesFilterNamespace(
        numberCodec.decode(input.namespace),
      );
    }

    return new CappuccinoExplorerGetTransactionSummariesFilterNone();
  }
}

class CappuccinoExplorerGetTransactionSummariesFilterEncoder
  implements
    Converter<CappuccinoExplorerGetTransactionSummariesFilter, unknown>
{
  convert(input: CappuccinoExplorerGetTransactionSummariesFilter) {
    if (input instanceof CappuccinoExplorerGetTransactionSummariesFilterNone) {
      return {};
    }

    if (input instanceof CappuccinoExplorerGetTransactionSummariesFilterBlock) {
      return {
        block: numberCodec.encode(input.block),
      };
    }

    if (
      input instanceof CappuccinoExplorerGetTransactionSummariesFilterNamespace
    ) {
      return {
        namespace: numberCodec.encode(input.namespace),
      };
    }

    throw new InvalidInputError();
  }
}

class CappuccinoExplorerGetTransactionSummariesFilterCodec extends Codec<
  CappuccinoExplorerGetTransactionSummariesFilter,
  unknown
> {
  readonly encoder =
    new CappuccinoExplorerGetTransactionSummariesFilterEncoder();
  readonly decoder =
    new CappuccinoExplorerGetTransactionSummariesFilterDecoder();
}

export const cappuccinoExplorerGetTransactionSummariesFilterCodec =
  new CappuccinoExplorerGetTransactionSummariesFilterCodec();

export class CappuccinoExplorerGetTransactionSummariesFilterNone extends CappuccinoExplorerGetTransactionSummariesFilter {
  constructor() {
    super();
  }

  convertURL(baseURL: URL): URL {
    return baseURL;
  }
}

export class CappuccinoExplorerGetTransactionSummariesFilterBlock extends CappuccinoExplorerGetTransactionSummariesFilter {
  readonly block: number;

  public constructor(block: number) {
    super();
    this.block = block;
  }

  convertURL(baseURL: URL): URL {
    return new URL(`${baseURL.pathname}/block/${this.block}`, baseURL);
  }
}

export class CappuccinoExplorerGetTransactionSummariesFilterNamespace extends CappuccinoExplorerGetTransactionSummariesFilter {
  readonly namespace: number;

  public constructor(namespace: number) {
    super();
    this.namespace = namespace;
  }

  convertURL(baseURL: URL): URL {
    return new URL(`${baseURL.pathname}/namespace/${this.namespace}`, baseURL);
  }
}
