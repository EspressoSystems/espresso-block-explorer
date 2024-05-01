import {
  Converter,
  TypeCheckingCodec,
  assertErrorCode,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import { stringCodec } from '@/convert/codec/string';
import BaseError, { BaseErrorEncoder } from './BaseError';
import { registerCodec } from './registry';

export default class NoURLProvidedError extends BaseError {
  constructor(message: string = 'no url provided') {
    super(message);
    Object.freeze(this);
  }
}

class NoURLProvidedErrorDecoder
  implements Converter<unknown, NoURLProvidedError>
{
  convert(input: unknown): NoURLProvidedError {
    assertRecordWithKeys(input, 'code', 'message');
    assertErrorCode(input, NoURLProvidedError.name);
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

registerCodec(NoURLProvidedError.name, noURLProvidedErrorCodec);
