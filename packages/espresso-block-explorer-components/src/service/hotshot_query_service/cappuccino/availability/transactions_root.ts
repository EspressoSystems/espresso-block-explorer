import { assertInstanceOf } from '@/assert/assert';
import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import { numberArrayCodec } from '@/convert/codec/number';

/**
 * CappuccinoTransactionsRoot represents the transactions root in the Cappuccino
 * API.
 */
export class CappuccinoTransactionsRoot {
  readonly root: number[];

  constructor(root: number[]) {
    this.root = root;
  }

  toJSON() {
    return cappuccinoTransactionsRootCodec.encode(this);
  }
}

export class CappuccinoTransactionsRootDecoder
  implements Converter<unknown, CappuccinoTransactionsRoot>
{
  convert(input: unknown): CappuccinoTransactionsRoot {
    assertRecordWithKeys(input, 'root');

    return new CappuccinoTransactionsRoot(numberArrayCodec.decode(input.root));
  }
}

export class CappuccinoTransactionsRootEncoder
  implements Converter<CappuccinoTransactionsRoot>
{
  convert(input: CappuccinoTransactionsRoot) {
    assertInstanceOf(input, CappuccinoTransactionsRoot);

    return {
      root: numberArrayCodec.encode(input.root),
    };
  }
}

export class CappuccinoTransactionsRootCodec extends TypeCheckingCodec<
  CappuccinoTransactionsRoot,
  ReturnType<
    InstanceType<new () => CappuccinoTransactionsRootEncoder>['convert']
  >
> {
  readonly encoder = new CappuccinoTransactionsRootEncoder();
  readonly decoder = new CappuccinoTransactionsRootDecoder();
}

export const cappuccinoTransactionsRootCodec =
  new CappuccinoTransactionsRootCodec();
