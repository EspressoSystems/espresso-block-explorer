import { assertInstanceOf } from '@/assert/assert';
import { ArrayCodec, ArrayDecoder, ArrayEncoder } from '@/convert/codec/array';
import { stdBase64ArrayBufferCodec } from '@/convert/codec/array_buffer_base64';
import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import { numberCodec } from '@/convert/codec/number';

type NamespaceID = number;
const namespaceIDCodec = numberCodec;

/**
 * ExplorerTransactionDetailData represents the data associated with a
 * transaction in the Explorer.
 */
export class ExplorerTransactionDetailData {
  constructor(
    public readonly namespace: NamespaceID,
    public readonly payload: ArrayBuffer,
  ) {}

  toJSON() {
    return explorerTransactionDetailDataCodec.encode(this);
  }
}

class ExplorerTransactionDetailDataDecoder implements Converter<
  unknown,
  ExplorerTransactionDetailData
> {
  convert(input: unknown): ExplorerTransactionDetailData {
    assertRecordWithKeys(input, 'namespace', 'payload');

    return new ExplorerTransactionDetailData(
      namespaceIDCodec.decode(input.namespace),
      stdBase64ArrayBufferCodec.decode(input.payload),
    );
  }
}

class ExplorerTransactionDetailDataEncoder implements Converter<ExplorerTransactionDetailData> {
  convert(input: ExplorerTransactionDetailData) {
    assertInstanceOf(input, ExplorerTransactionDetailData);

    return {
      namespace: namespaceIDCodec.encode(input.namespace),
      payload: stdBase64ArrayBufferCodec.encode(input.payload),
    };
  }
}

class ExplorerTransactionDetailDataCodec extends TypeCheckingCodec<
  ExplorerTransactionDetailData,
  ReturnType<
    InstanceType<new () => ExplorerTransactionDetailDataEncoder>['convert']
  >
> {
  readonly encoder = new ExplorerTransactionDetailDataEncoder();
  readonly decoder = new ExplorerTransactionDetailDataDecoder();
}

export const explorerTransactionDetailDataCodec =
  new ExplorerTransactionDetailDataCodec();
export const explorerTransactionDetailDataArrayCodec = new ArrayCodec(
  new ArrayDecoder(explorerTransactionDetailDataCodec),
  new ArrayEncoder(explorerTransactionDetailDataCodec),
);
