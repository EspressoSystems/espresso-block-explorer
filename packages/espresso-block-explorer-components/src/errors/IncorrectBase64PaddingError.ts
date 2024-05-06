import {
  Converter,
  TypeCheckingCodec,
  assertErrorCode,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import { stringCodec } from '@/convert/codec/string';
import BaseError, { BaseErrorEncoder } from './BaseError';
import { registerCodec } from './registry';

/**
 * IncorrectBase64PaddingError is an error that indicates that the padding
 * provided is not correct.
 */
export class IncorrectBase64PaddingError extends BaseError {
  constructor(message: string = 'incorrect padding') {
    super(message);
    Object.freeze(this);
  }
}

class IncorrectBase64PaddingErrorDecoder
  implements Converter<unknown, IncorrectBase64PaddingError>
{
  convert(input: unknown): IncorrectBase64PaddingError {
    assertRecordWithKeys(input, 'code', 'message');
    assertErrorCode(input, IncorrectBase64PaddingError.name);
    return new IncorrectBase64PaddingError(stringCodec.decode(input.message));
  }
}

class IncorrectBase64PaddingErrorEncoder extends BaseErrorEncoder {}

class IncorrectBase64PaddingErrorCodec extends TypeCheckingCodec<IncorrectBase64PaddingError> {
  readonly encoder: Converter<IncorrectBase64PaddingError, unknown> =
    new IncorrectBase64PaddingErrorEncoder();
  readonly decoder: Converter<unknown, IncorrectBase64PaddingError> =
    new IncorrectBase64PaddingErrorDecoder();
}

export const incorrectBase64PaddingErrorCodec =
  new IncorrectBase64PaddingErrorCodec();

registerCodec(
  IncorrectBase64PaddingError.name,
  incorrectBase64PaddingErrorCodec,
);
