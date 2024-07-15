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
 * ChannelClosedError is an error that indicates that the buffered channel
 * has been closed and can no longer be read from or written to.
 */
export default class ChannelClosedError extends BaseError {
  constructor(message: string = 'channel closed') {
    super(message);
    Object.freeze(this);
  }
}

class ChannelClosedErrorDecoder
  implements Converter<unknown, ChannelClosedError>
{
  convert(input: unknown): ChannelClosedError {
    assertRecordWithKeys(input, 'code', 'message');
    assertErrorCode(input, ChannelClosedError.name);
    return new ChannelClosedError(stringCodec.decode(input.message));
  }
}

class ChannelClosedErrorEncoder extends BaseErrorEncoder {}

class ChannelClosedErrorCodec extends TypeCheckingCodec<ChannelClosedError> {
  readonly encoder: Converter<ChannelClosedError, unknown> =
    new ChannelClosedErrorEncoder();
  readonly decoder: Converter<unknown, ChannelClosedError> =
    new ChannelClosedErrorDecoder();
}

export const invalidHexStringErrorCodec = new ChannelClosedErrorCodec();

registerCodec(ChannelClosedError.name, invalidHexStringErrorCodec);
