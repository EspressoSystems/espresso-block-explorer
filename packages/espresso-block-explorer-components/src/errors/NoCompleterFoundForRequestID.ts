import { assertInstanceOf } from '@/assert/assert';
import {
  Converter,
  TypeCheckingCodec,
  assertErrorCode,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import { stringCodec } from '@/convert/codec/string';
import { unknownCodec } from '@/convert/codec/unknown';
import BaseError, { baseErrorEncoder } from './BaseError';
import { registerCodec } from './registry';

export default class NoCompleterFoundForRequestID<
  RequestID = unknown,
> extends BaseError {
  readonly requestID: RequestID;
  constructor(
    requestID: RequestID,
    message: string = `no completer found for request id "${requestID}"`,
  ) {
    super(message);
    this.requestID = requestID;
    Object.freeze(this);
  }

  toJSON() {
    return noCompleterFoundForRequestIDCodec.encode(this);
  }
}

class NoCompleterFoundForRequestIDDecoder
  implements Converter<unknown, NoCompleterFoundForRequestID>
{
  convert(input: unknown): NoCompleterFoundForRequestID {
    assertRecordWithKeys(input, 'code', 'requestID', 'message');
    assertErrorCode(input, NoCompleterFoundForRequestID.name);
    return new NoCompleterFoundForRequestID(
      unknownCodec.decode(input.requestID),
      stringCodec.decode(input.message),
    );
  }
}

class NoCompleterFoundForRequestIDEncoder
  implements Converter<NoCompleterFoundForRequestID>
{
  convert(input: NoCompleterFoundForRequestID) {
    assertInstanceOf(input, NoCompleterFoundForRequestID);
    return {
      ...baseErrorEncoder.convert(input),
      requestID: unknownCodec.encode(input.requestID),
    };
  }
}

class NoCompleterFoundForRequestIDCodec extends TypeCheckingCodec<NoCompleterFoundForRequestID> {
  readonly encoder: Converter<NoCompleterFoundForRequestID, unknown> =
    new NoCompleterFoundForRequestIDEncoder();
  readonly decoder: Converter<unknown, NoCompleterFoundForRequestID> =
    new NoCompleterFoundForRequestIDDecoder();
}

export const noCompleterFoundForRequestIDCodec =
  new NoCompleterFoundForRequestIDCodec();

registerCodec(
  NoCompleterFoundForRequestID.name,
  noCompleterFoundForRequestIDCodec,
);
