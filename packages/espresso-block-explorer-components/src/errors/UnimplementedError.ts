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
 * Unimplemented is an error that indicates the logic for this code has not
 * yet been implemented.  It is meant to be a placeholder error.
 */
export default class UnimplementedError extends BaseError {
  constructor(message: string = 'unimplemented') {
    super(message);
    Object.freeze(this);
    // eslint-disable-next-line no-debugger
    debugger;
  }
}

class UnimplementedErrorDecoder
  implements Converter<unknown, UnimplementedError>
{
  convert(input: unknown): UnimplementedError {
    assertRecordWithKeys(input, 'code', 'message');
    assertErrorCode(input, UnimplementedError.name);
    return new UnimplementedError(stringCodec.decode(input.message));
  }
}

class UnimplementedErrorEncoder extends BaseErrorEncoder {}

class UnimplementedErrorCodec extends TypeCheckingCodec<UnimplementedError> {
  readonly encoder: Converter<UnimplementedError, unknown> =
    new UnimplementedErrorEncoder();
  readonly decoder: Converter<unknown, UnimplementedError> =
    new UnimplementedErrorDecoder();
}

export const unimplementedCodec = new UnimplementedErrorCodec();

registerCodec(UnimplementedError.name, unimplementedCodec);
