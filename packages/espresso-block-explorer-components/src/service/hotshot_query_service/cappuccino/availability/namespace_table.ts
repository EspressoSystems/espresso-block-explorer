import { assertInstanceOf } from '@/assert/assert';
import { urlBase64ArrayBufferCodec } from '@/convert/codec/array_buffer';
import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
} from '@/convert/codec/convert';

/**
 * CappuccinoNamespaceTable represents the namespace table in the Cappuccino API.
 */
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
    assertRecordWithKeys(input, 'bytes');

    return new CappuccinoNamespaceTable(
      urlBase64ArrayBufferCodec.decode(input.bytes),
    );
  }
}

class CappuccinoNamespaceTableEncoder
  implements Converter<CappuccinoNamespaceTable>
{
  convert(input: CappuccinoNamespaceTable) {
    assertInstanceOf(input, CappuccinoNamespaceTable);

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
