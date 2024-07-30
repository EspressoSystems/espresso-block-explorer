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
 * CompleterAlreadyCompletedError is an error that is thrown when a completer
 * has already been completed, and is attempted to be completed again.
 */
export class CompleterAlreadyCompletedError extends BaseError {
  constructor(message: string = 'completer has already been completed') {
    super(message);
    Object.freeze(this);
  }

  get code(): string {
    return kCompleterAlreadyCompletedErrorCode;
  }
}

const kCompleterAlreadyCompletedErrorCode = 'CompleterAlreadyCompletedError';
class CompleterAlreadyCompletedErrorDecoder
  implements Converter<unknown, CompleterAlreadyCompletedError>
{
  convert(input: unknown): CompleterAlreadyCompletedError {
    assertRecordWithKeys(input, 'code', 'message');
    assertErrorCode(input, kCompleterAlreadyCompletedErrorCode);
    return new CompleterAlreadyCompletedError(
      stringCodec.decode(input.message),
    );
  }
}

class CompleterAlreadyCompletedErrorEncoder extends BaseErrorEncoder {}

class CompleterAlreadyCompletedErrorCodec extends TypeCheckingCodec<CompleterAlreadyCompletedError> {
  readonly encoder: Converter<CompleterAlreadyCompletedError, unknown> =
    new CompleterAlreadyCompletedErrorEncoder();
  readonly decoder: Converter<unknown, CompleterAlreadyCompletedError> =
    new CompleterAlreadyCompletedErrorDecoder();
}

export const completerAlreadyCompletedErrorCodec =
  new CompleterAlreadyCompletedErrorCodec();

registerCodec(
  CompleterAlreadyCompletedError.name,
  completerAlreadyCompletedErrorCodec,
);
