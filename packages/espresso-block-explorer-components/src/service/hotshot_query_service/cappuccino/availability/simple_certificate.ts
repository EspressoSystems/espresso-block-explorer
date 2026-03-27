import { assertInstanceOf } from '@/assert/assert';
import { booleanCodec } from '@/convert/codec/boolean';
import {
  assertRecordWithKeys,
  Codec,
  Converter,
} from '@/convert/codec/convert';
import { numberCodec } from '@/convert/codec/number';
import {
  TaggedBase64,
  taggedBase64Codec,
} from '@/models/espresso/tagged_base64/tagged_base64';
import {
  nullableSimpleCertificateSignaturesCodec,
  SimpleCertificateSignatures,
} from './simple_certificate_signatures';

/**
 * SimpleCertificate represents a generic certificate that has been formed
 * as part of a voting process.
 *
 * It is generic in the data that it holds, but the remaining fields are
 * always the same.
 */
export class SimpleCertificate<T> {
  constructor(
    public readonly data: T,
    public readonly vote_commitment: TaggedBase64,
    public readonly view_number: number,
    public readonly signatures: null | SimpleCertificateSignatures,
    public readonly is_genesis: boolean,
    public readonly _pd: null,
  ) {}
}

export class SimpleCertificateDecoder<T> implements Converter<
  unknown,
  SimpleCertificate<T>
> {
  constructor(private readonly codec: Codec<T, unknown>) {}

  convert(input: unknown): SimpleCertificate<T> {
    assertRecordWithKeys(
      input,
      'data',
      'vote_commitment',
      'view_number',
      'signatures',
      'is_genesis',
      '_pd',
    );

    return new SimpleCertificate(
      this.codec.decode(input.data),
      taggedBase64Codec.decode(input.vote_commitment),
      numberCodec.decode(input.view_number),
      nullableSimpleCertificateSignaturesCodec.decode(input.signatures),
      booleanCodec.decode(input.is_genesis),
      null,
    );
  }
}

export class SimpleCertificateEncoder<T> implements Converter<
  SimpleCertificate<T>
> {
  constructor(private readonly codec: Codec<T, unknown>) {}

  convert(input: SimpleCertificate<T>) {
    assertInstanceOf(input, SimpleCertificate);

    return {
      data: this.codec.encode(input.data),
      vote_commitment: taggedBase64Codec.encode(input.vote_commitment),
      view_number: numberCodec.encode(input.view_number),
      signatures: nullableSimpleCertificateSignaturesCodec.encode(
        input.signatures,
      ),
      is_genesis: booleanCodec.encode(input.is_genesis),
      _pd: null,
    };
  }
}
