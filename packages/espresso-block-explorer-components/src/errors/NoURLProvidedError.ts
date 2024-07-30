import {
  Converter,
  TypeCheckingCodec,
  assertErrorCode,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import { stringCodec } from '@/convert/codec/string';
import BaseError, { BaseErrorEncoder } from './BaseError';
import { registerCodec } from './registry';

const kNoURLProvidedErrorCode = 'NoURLProvidedError';

export default class NoURLProvidedError extends BaseError {
  constructor(message: string = 'no url provided') {
    super(message);
    Object.freeze(this);
  }

  get code(): string {
    return kNoURLProvidedErrorCode;
  }
}

class NoURLProvidedErrorDecoder
  implements Converter<unknown, NoURLProvidedError>
{
  convert(input: unknown): NoURLProvidedError {
    assertRecordWithKeys(input, 'code', 'message');
    assertErrorCode(input, kNoURLProvidedErrorCode);
    return new NoURLProvidedError(stringCodec.decode(input.message));
  }
}

class NoURLProvidedErrorEncoder extends BaseErrorEncoder {}

class NoURLProvidedErrorCodec extends TypeCheckingCodec<NoURLProvidedError> {
  readonly encoder: Converter<NoURLProvidedError, unknown> =
    new NoURLProvidedErrorEncoder();
  readonly decoder: Converter<unknown, NoURLProvidedError> =
    new NoURLProvidedErrorDecoder();
}

export const noURLProvidedErrorCodec = new NoURLProvidedErrorCodec();

registerCodec(kNoURLProvidedErrorCode, noURLProvidedErrorCodec);
