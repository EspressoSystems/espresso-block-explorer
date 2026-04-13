import { assertInstanceOf } from '@/assert/assert';
import { Converter, TypeCheckingCodec } from '@/convert/codec/convert';
import { NullCodec, NullDecoder, NullEncoder } from '@/convert/codec/null';
import { isUnknownArray } from '@/convert/codec/unknown';
import { InvalidTypeError } from '@/errors/invalid_type_error';
import {
  TaggedBase64,
  taggedBase64Codec,
} from '@/models/espresso/tagged_base64/tagged_base64';
import { BitVec, bitVecCodec } from './bit_vec';

/**
 * SimpleCertificateSignatures represents the signatures of a SimpleCertifcate.
 * These signatures are all of the same form.
 */
export class SimpleCertificateSignatures {
  readonly signature: TaggedBase64;
  readonly bitvec: BitVec;

  constructor(signature: TaggedBase64, bitvec: BitVec) {
    this.signature = signature;
    this.bitvec = bitvec;
  }

  toJSON() {
    return simpleCertificateSignaturesCodec.encode(this);
  }
}

export class SimpleCertificateSignaturesDecoder implements Converter<
  unknown,
  SimpleCertificateSignatures
> {
  convert(input: unknown): SimpleCertificateSignatures {
    if (!isUnknownArray(input) || input.length !== 2) {
      throw new InvalidTypeError(typeof input, 'Array');
    }

    return new SimpleCertificateSignatures(
      taggedBase64Codec.decode(input[0]),
      bitVecCodec.decode(input[1]),
    );
  }
}

export class SimpleCertificateSignaturesEncoder implements Converter<SimpleCertificateSignatures> {
  convert(input: SimpleCertificateSignatures) {
    assertInstanceOf(input, SimpleCertificateSignatures);

    return [
      taggedBase64Codec.encode(input.signature),
      bitVecCodec.encode(input.bitvec),
    ];
  }
}

export class SimpleCertificateSignaturesCodec extends TypeCheckingCodec<
  SimpleCertificateSignatures,
  ReturnType<
    InstanceType<new () => SimpleCertificateSignaturesEncoder>['convert']
  >
> {
  readonly encoder = new SimpleCertificateSignaturesEncoder();
  readonly decoder = new SimpleCertificateSignaturesDecoder();
}

export const simpleCertificateSignaturesCodec =
  new SimpleCertificateSignaturesCodec();
export const nullableSimpleCertificateSignaturesCodec = new NullCodec(
  new NullDecoder(simpleCertificateSignaturesCodec),
  new NullEncoder(simpleCertificateSignaturesCodec),
);
