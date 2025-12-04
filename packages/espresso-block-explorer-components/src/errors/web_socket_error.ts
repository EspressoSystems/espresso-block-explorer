import {
  Converter,
  TypeCheckingCodec,
  assertErrorCode,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import { stringCodec } from '@/convert/codec/string';
import BaseError, { BaseErrorEncoder } from './base_error';
import { registerCodec } from './registry';

const kWebSocketErrorCode = 'WebSocketError';

/**
 * WebSocketError is an error class that represents and wraps a general
 * WebSocketError that doesn't have a more specific error representation.
 */
export default class WebSocketError extends BaseError {
  cause: unknown;

  constructor(
    cause: unknown,
    message: string = `websocket error: ${String(cause)}`,
  ) {
    super(message);
    this.cause = cause;
    Object.freeze(this);
  }

  get code(): string {
    return kWebSocketErrorCode;
  }
}

class WebSocketErrorDecoder implements Converter<unknown, WebSocketError> {
  convert(input: unknown): WebSocketError {
    assertRecordWithKeys(input, 'code', 'message');
    assertErrorCode(input, kWebSocketErrorCode);
    // We can't actually decode this error, as it's likely to not be a
    // BaseError.
    return new WebSocketError({}, stringCodec.decode(input.message));
  }
}

class WebSocketErrorEncoder extends BaseErrorEncoder {}

class WebSocketErrorCodec extends TypeCheckingCodec<WebSocketError> {
  readonly encoder: Converter<WebSocketError, unknown> =
    new WebSocketErrorEncoder();
  readonly decoder: Converter<unknown, WebSocketError> =
    new WebSocketErrorDecoder();
}

export const bufferFullErrorCodec = new WebSocketErrorCodec();

registerCodec(kWebSocketErrorCode, bufferFullErrorCodec);
