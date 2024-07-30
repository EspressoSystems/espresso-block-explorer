import {
  Converter,
  TypeCheckingCodec,
  assertErrorCode,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import { numberCodec } from '@/convert/codec/number';
import { stringCodec } from '@/convert/codec/string';
import BaseBadResponseError, {
  baseBadResponseErrorEncoder,
} from './BaseBadResponseError';
import { registerCodec } from './registry';

const kResponseContentTypeIsNotApplicationJSONErrorCode =
  'ResponseContentTypeIsNotApplicationJSONError';

/**
 * BadResponseClientError is a more specific BadResponse error that indicates
 * the nature of the failure was due to a client submission error.
 */
export default class ResponseContentTypeIsNotApplicationJSONError extends BaseBadResponseError {
  public readonly haveHeaderType: string;

  constructor(
    haveHeaderType: string,
    status: number,
    response: null | Response,
    message: string = 'response content type is not application/json',
  ) {
    super(status, response, message);
    this.haveHeaderType = haveHeaderType;
    Object.freeze(this);
  }

  static fromResponse(
    response: Response,
    message?: string,
  ): ResponseContentTypeIsNotApplicationJSONError {
    return new ResponseContentTypeIsNotApplicationJSONError(
      response.headers.get('content-type') ?? 'undefined',
      response.status,
      response,
      message,
    );
  }

  toJSON() {
    return responseContentTypeIsNotApplicationJSONErrorCodec.encode(this);
  }

  get code(): string {
    return kResponseContentTypeIsNotApplicationJSONErrorCode;
  }
}

class ResponseContentTypeIsNotApplicationJSONErrorDecoder
  implements Converter<unknown, ResponseContentTypeIsNotApplicationJSONError>
{
  convert(input: unknown): ResponseContentTypeIsNotApplicationJSONError {
    assertRecordWithKeys(input, 'code', 'status', 'have', 'want', 'message');
    assertErrorCode(input, kResponseContentTypeIsNotApplicationJSONErrorCode);

    return new ResponseContentTypeIsNotApplicationJSONError(
      stringCodec.decode(input.code),
      numberCodec.decode(input.status),
      null,
      stringCodec.decode(input.message),
    );
  }
}

class ResponseContentTypeIsNotApplicationJSONErrorEncoder
  implements Converter<ResponseContentTypeIsNotApplicationJSONError>
{
  convert(input: ResponseContentTypeIsNotApplicationJSONError) {
    return {
      ...baseBadResponseErrorEncoder.convert(input),
      have: stringCodec.encode(input.haveHeaderType),
      want: stringCodec.encode('application/json'),
    };
  }
}

class ResponseContentTypeIsNotApplicationJSONErrorCodec extends TypeCheckingCodec<ResponseContentTypeIsNotApplicationJSONError> {
  readonly encoder: Converter<
    ResponseContentTypeIsNotApplicationJSONError,
    unknown
  > = new ResponseContentTypeIsNotApplicationJSONErrorEncoder();
  readonly decoder: Converter<
    unknown,
    ResponseContentTypeIsNotApplicationJSONError
  > = new ResponseContentTypeIsNotApplicationJSONErrorDecoder();
}

export const responseContentTypeIsNotApplicationJSONErrorCodec =
  new ResponseContentTypeIsNotApplicationJSONErrorCodec();

registerCodec(
  ResponseContentTypeIsNotApplicationJSONError.name,
  responseContentTypeIsNotApplicationJSONErrorCodec,
);
