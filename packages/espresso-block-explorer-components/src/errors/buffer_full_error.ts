import {
  Converter,
  TypeCheckingCodec,
  assertErrorCode,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import { stringCodec } from '@/convert/codec/string';
import BaseError, { BaseErrorEncoder } from './BaseError';
import { registerCodec } from './registry';

const kBufferFullErrorCode = 'BufferFullError';

/**
 * BufferFullError is an error that indicates that a buffer is at capacity while
 * something was attempted to be added to the buffer.
 */
export default class BufferFullError extends BaseError {
  constructor(message: string = 'buffer full') {
    super(message);
    Object.freeze(this);
  }

  get code(): string {
    return kBufferFullErrorCode;
  }
}

class BufferFullErrorDecoder implements Converter<unknown, BufferFullError> {
  convert(input: unknown): BufferFullError {
    assertRecordWithKeys(input, 'code', 'message');
    assertErrorCode(input, kBufferFullErrorCode);
    return new BufferFullError(stringCodec.decode(input.message));
  }
}

class BufferFullErrorEncoder extends BaseErrorEncoder {}

class BufferFullErrorCodec extends TypeCheckingCodec<BufferFullError> {
  readonly encoder: Converter<BufferFullError, unknown> =
    new BufferFullErrorEncoder();
  readonly decoder: Converter<unknown, BufferFullError> =
    new BufferFullErrorDecoder();
}

export const bufferFullErrorCodec = new BufferFullErrorCodec();

registerCodec(kBufferFullErrorCode, bufferFullErrorCodec);
