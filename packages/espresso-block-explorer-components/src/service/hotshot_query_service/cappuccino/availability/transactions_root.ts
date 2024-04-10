import {
  Converter,
  InvalidInputError,
  TypeCheckingCodec,
  isRecord,
  isUnknown,
} from '../../../../convert/codec/convert';
import { numberArrayCodec } from '../../../../convert/codec/number';

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
    if (!isRecord(input, 'root', isUnknown)) {
      throw new InvalidInputError();
    }

    return new CappuccinoTransactionsRoot(numberArrayCodec.decode(input.root));
  }
}

export class CappuccinoTransactionsRootEncoder
  implements Converter<CappuccinoTransactionsRoot>
{
  convert(input: CappuccinoTransactionsRoot) {
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
