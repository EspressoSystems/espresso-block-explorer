import {
  Codec,
  Converter,
  InvalidInputError,
  isRecord,
} from '../../../../convert/codec/convert';
import { isNumberArray } from '../../../../convert/codec/number';

export class GibraltarTransactionsRoot {
  readonly root: number[];

  constructor(root: number[]) {
    this.root = root;
  }

  toJSON() {
    return gibraltarTransactionsRootCodec.encode(this);
  }
}

export class GibraltarTransactionsRootDecoder
  implements Converter<unknown, GibraltarTransactionsRoot>
{
  convert(input: unknown): GibraltarTransactionsRoot {
    if (!isRecord(input, 'root', isNumberArray)) {
      throw new InvalidInputError();
    }

    return new GibraltarTransactionsRoot(input.root);
  }
}

export class GibraltarTransactionsRootEncoder
  implements Converter<GibraltarTransactionsRoot, Record<'root', number[]>>
{
  convert(input: GibraltarTransactionsRoot): Record<'root', number[]> {
    return {
      root: input.root,
    };
  }
}

export class GibraltarTransactionsRootCodec extends Codec<
  GibraltarTransactionsRoot,
  unknown
> {
  readonly encoder = new GibraltarTransactionsRootEncoder();
  readonly decoder = new GibraltarTransactionsRootDecoder();
}

export const gibraltarTransactionsRootCodec =
  new GibraltarTransactionsRootCodec();
