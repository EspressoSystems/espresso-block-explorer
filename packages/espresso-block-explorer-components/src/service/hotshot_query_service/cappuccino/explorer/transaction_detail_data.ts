import {
  ArrayCodec,
  ArrayDecoder,
  ArrayEncoder,
} from '../../../../convert/codec/array';
import { stdBase64ArrayBufferCodec } from '../../../../convert/codec/array_buffer';
import {
  Converter,
  InvalidInputError,
  TypeCheckingCodec,
  isRecord,
  isUnknown,
} from '../../../../convert/codec/convert';
import { numberCodec } from '../../../../convert/codec/number';

type NamespaceID = number;
const namespaceIDCodec = numberCodec;

export class CappuccinoExplorerTransactionDetailData {
  readonly namespace: NamespaceID;
  readonly payload: ArrayBuffer;

  constructor(namespace: NamespaceID, payload: ArrayBuffer) {
    this.namespace = namespace;
    this.payload = payload;
  }

  toJSON() {
    return cappuccinoExplorerTransactionDetailDataCodec.encode(this);
  }
}

class CappuccinoExplorerTransactionDetailDataDecoder
  implements Converter<unknown, CappuccinoExplorerTransactionDetailData>
{
  convert(input: unknown): CappuccinoExplorerTransactionDetailData {
    if (
      !isRecord(input, 'namespace', isUnknown) ||
      !isRecord(input, 'payload', isUnknown)
    ) {
      throw new InvalidInputError();
    }

    return new CappuccinoExplorerTransactionDetailData(
      namespaceIDCodec.decode(input.namespace),
      stdBase64ArrayBufferCodec.decode(input.payload),
    );
  }
}

class CappuccinoExplorerTransactionDetailDataEncoder
  implements Converter<CappuccinoExplorerTransactionDetailData>
{
  convert(input: CappuccinoExplorerTransactionDetailData) {
    return {
      namespace: namespaceIDCodec.encode(input.namespace),
      payload: stdBase64ArrayBufferCodec.encode(input.payload),
    };
  }
}

class CappuccinoExplorerTransactionDetailDataCodec extends TypeCheckingCodec<
  CappuccinoExplorerTransactionDetailData,
  ReturnType<
    InstanceType<
      new () => CappuccinoExplorerTransactionDetailDataEncoder
    >['convert']
  >
> {
  readonly encoder = new CappuccinoExplorerTransactionDetailDataEncoder();
  readonly decoder = new CappuccinoExplorerTransactionDetailDataDecoder();
}

export const cappuccinoExplorerTransactionDetailDataCodec =
  new CappuccinoExplorerTransactionDetailDataCodec();
export const cappuccinoExplorerTransactionDetailDataArrayCodec = new ArrayCodec(
  new ArrayDecoder(cappuccinoExplorerTransactionDetailDataCodec),
  new ArrayEncoder(cappuccinoExplorerTransactionDetailDataCodec),
);
