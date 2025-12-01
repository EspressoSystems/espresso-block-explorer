import { assertInstanceOf } from '@/assert/assert';
import {
  Converter,
  TypeCheckingCodec,
  assertErrorCode,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import { numberCodec } from '@/convert/codec/number';
import { stringCodec } from '@/convert/codec/string';
import BaseError, { baseErrorEncoder } from './BaseError';
import { registerCodec } from './registry';

const kCorruptBase64InputErrorCode = 'CorruptBase64InputError';
/**
 * CorruptBase64InputError is an error that indicates that the input provided
 * at the given offset is invalid.
 */
export class CorruptBase64InputError extends BaseError {
  readonly offset: number;

  constructor(
    offset: number,
    message: string = `corrupt input error at ${offset}`,
  ) {
    super(message);
    this.offset = offset;
    Object.freeze(this);
  }

  get code(): string {
    return kCorruptBase64InputErrorCode;
  }

  toJSON() {
    return corruptBase64InputErrorCodec.encode(this);
  }
}

class CorruptBase64InputErrorDecoder implements Converter<
  unknown,
  CorruptBase64InputError
> {
  convert(input: unknown): CorruptBase64InputError {
    assertRecordWithKeys(input, 'code', 'offset', 'message');
    assertErrorCode(input, kCorruptBase64InputErrorCode);
    return new CorruptBase64InputError(
      numberCodec.decode(input.offset),
      stringCodec.decode(input.message),
    );
  }
}

class CorruptBase64InputErrorEncoder implements Converter<CorruptBase64InputError> {
  convert(input: CorruptBase64InputError) {
    assertInstanceOf(input, CorruptBase64InputError);
    return {
      ...baseErrorEncoder.convert(input),
      offset: numberCodec.encode(input.offset),
      message: stringCodec.encode(input.message),
    };
  }
}

class CorruptBase64InputErrorCodec extends TypeCheckingCodec<CorruptBase64InputError> {
  readonly encoder: Converter<CorruptBase64InputError, unknown> =
    new CorruptBase64InputErrorEncoder();
  readonly decoder: Converter<unknown, CorruptBase64InputError> =
    new CorruptBase64InputErrorDecoder();
}

export const corruptBase64InputErrorCodec = new CorruptBase64InputErrorCodec();

registerCodec(kCorruptBase64InputErrorCode, corruptBase64InputErrorCodec);
