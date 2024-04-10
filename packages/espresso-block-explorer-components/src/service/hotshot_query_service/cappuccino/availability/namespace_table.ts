import { urlBase64ArrayBufferCodec } from '../../../../convert/codec/array_buffer';
import {
  Converter,
  InvalidInputError,
  TypeCheckingCodec,
  isRecord,
  isString,
} from '../../../../convert/codec/convert';

export class CappuccinoNamespaceTable {
  readonly bytes: ArrayBuffer;
  constructor(bytes: ArrayBuffer) {
    this.bytes = bytes;
  }

  toJSON() {
    return cappuccinoNamespaceTableCodec.encode(this);
  }
}

class CappuccinoNamespaceTableDecoder
  implements Converter<unknown, CappuccinoNamespaceTable>
{
  convert(input: unknown): CappuccinoNamespaceTable {
    if (!isRecord(input, 'bytes', isString)) {
      throw new InvalidInputError();
    }

    return new CappuccinoNamespaceTable(
      urlBase64ArrayBufferCodec.decode(input.bytes),
    );
  }
}

class CappuccinoNamespaceTableEncoder
  implements Converter<CappuccinoNamespaceTable>
{
  convert(input: CappuccinoNamespaceTable) {
    return {
      bytes: urlBase64ArrayBufferCodec.encode(input.bytes),
    };
  }
}

class CappuccinoNamespaceTableCodec extends TypeCheckingCodec<
  CappuccinoNamespaceTable,
  ReturnType<InstanceType<new () => CappuccinoNamespaceTableEncoder>['convert']>
> {
  readonly encoder = new CappuccinoNamespaceTableEncoder();
  readonly decoder = new CappuccinoNamespaceTableDecoder();
}

export const cappuccinoNamespaceTableCodec =
  new CappuccinoNamespaceTableCodec();
