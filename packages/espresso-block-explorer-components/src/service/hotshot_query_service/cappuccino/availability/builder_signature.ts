import { hexArrayBufferCodec } from '../../../../convert/codec/array_buffer';
import {
  Converter,
  InvalidInputError,
  TypeCheckingCodec,
  isRecord,
  isUnknown,
} from '../../../../convert/codec/convert';
import { numberCodec } from '../../../../convert/codec/number';

export class CappuccinoBuilderSignature {
  readonly r: ArrayBuffer;
  readonly s: ArrayBuffer;
  readonly v: number;

  constructor(r: ArrayBuffer, s: ArrayBuffer, v: number) {
    this.r = r;
    this.s = s;
    this.v = v;
  }

  toJSON() {
    return cappuccinoBuilderSignatureCodec.encode(this);
  }
}

class CappuccinoBuilderSignatureDecoder
  implements Converter<unknown, CappuccinoBuilderSignature>
{
  convert(input: unknown): CappuccinoBuilderSignature {
    if (
      !isRecord(input, 'r', isUnknown) ||
      !isRecord(input, 's', isUnknown) ||
      !isRecord(input, 'v', isUnknown)
    ) {
      throw new InvalidInputError();
    }

    return new CappuccinoBuilderSignature(
      hexArrayBufferCodec.decode(input.r),
      hexArrayBufferCodec.decode(input.s),
      numberCodec.decode(input.v),
    );
  }
}

class CappuccinoBuilderSignatureEncoder
  implements Converter<CappuccinoBuilderSignature>
{
  convert(input: CappuccinoBuilderSignature) {
    return {
      r: hexArrayBufferCodec.encode(input.r),
      s: hexArrayBufferCodec.encode(input.s),
      v: numberCodec.encode(input.v),
    };
  }
}

class CappuccinoBuilderSignatureCodec extends TypeCheckingCodec<
  CappuccinoBuilderSignature,
  ReturnType<
    InstanceType<new () => CappuccinoBuilderSignatureEncoder>['convert']
  >
> {
  readonly encoder = new CappuccinoBuilderSignatureEncoder();
  readonly decoder = new CappuccinoBuilderSignatureDecoder();
}

export const cappuccinoBuilderSignatureCodec =
  new CappuccinoBuilderSignatureCodec();
