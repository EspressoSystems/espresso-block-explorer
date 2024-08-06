import {
  Converter,
  TypeCheckingCodec,
  assertErrorCode,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import { stringCodec } from '@/convert/codec/string';
import BaseError from './BaseError';
import { registerCodec } from './registry';
import UnimplementedError from './UnimplementedError';

const kQueryErrorCode = 'QUERY_ERROR';

/**
 * QueryError represents an error due to the querying code of the HotShot
 * Query Service.  Specifically it indicates an issue with retrieving, or
 * generally interacting with the database.
 */
export default class QueryError extends BaseError {
  public readonly error: QuerySubError;

  constructor(error: QuerySubError, message: string = 'missing element') {
    super(message);
    this.error = error;
    Object.freeze(this);
  }

  get code(): string {
    return kQueryErrorCode;
  }
}

class QueryErrorDecoder implements Converter<unknown, QueryError> {
  convert(input: unknown): QueryError {
    assertRecordWithKeys(input, 'code', 'error', 'message');
    assertErrorCode(input, kQueryErrorCode);
    return new QueryError(
      querySubErrorCodec.decode(input.error),
      stringCodec.decode(input.message),
    );
  }
}

class QueryErrorEncoder implements Converter<QueryError, unknown> {
  convert(input: QueryError): unknown {
    return {
      code: input.code,
      error: querySubErrorCodec.encode(input.error),
      message: stringCodec.encode(input.message),
    };
  }
}

class QueryErrorCodec extends TypeCheckingCodec<QueryError> {
  readonly encoder: Converter<QueryError, unknown> = new QueryErrorEncoder();
  readonly decoder: Converter<unknown, QueryError> = new QueryErrorDecoder();
}

export const missingElementErrorCodec = new QueryErrorCodec();

/**
 * QuerySubError represents the specific underlying reason for a failure due
 * to a QueryError.
 */
abstract class QuerySubError {}

const kQuerySubErrorNotFoundValue = 'NotFound';
class QuerySubErrorNotFound extends QuerySubError {
  constructor() {
    super();
    Object.freeze(this);
  }

  valueOf() {
    return kQuerySubErrorNotFoundValue;
  }
  toJSON() {
    return this.valueOf();
  }
}

export const querySubErrorNotFound = new QuerySubErrorNotFound();

const kQuerySubErrorMissingValue = 'Missing';
class QuerySubErrorMissing extends QuerySubError {
  constructor() {
    super();
    Object.freeze(this);
  }

  valueOf() {
    return kQuerySubErrorMissingValue;
  }

  toJSON() {
    return this.valueOf();
  }
}

export const querySubErrorMissing = new QuerySubErrorMissing();

/**
 * QuerySubErrorError represents a generic error that occurred during the query
 * process.
 */
export class QuerySubErrorError extends QuerySubError {
  public readonly error: QuerySubErrorWrapper;
  constructor(error: QuerySubErrorWrapper) {
    super();
    this.error = error;
    Object.freeze(this);
  }

  toJSON() {
    return querySubErrorErrorCodec.encode(this);
  }
}

export class QuerySubErrorWrapper {
  public readonly message: string;
  constructor(message: string) {
    this.message = message;
    Object.freeze(this);
  }

  toJSON() {
    return querySubErrorWrapperCodec.encode(this);
  }
}

class QuerySubErrorWrapperDecoder
  implements Converter<unknown, QuerySubErrorWrapper>
{
  convert(input: unknown): QuerySubErrorWrapper {
    assertRecordWithKeys(input, 'message');
    return new QuerySubErrorWrapper(stringCodec.decode(input.message));
  }
}

class QuerySubErrorWrapperEncoder
  implements Converter<QuerySubErrorWrapper, unknown>
{
  convert(input: QuerySubErrorWrapper): unknown {
    return { message: stringCodec.encode(input.message) };
  }
}

class QuerySubErrorWrapperCodec extends TypeCheckingCodec<QuerySubErrorWrapper> {
  readonly encoder: Converter<QuerySubErrorWrapper, unknown> =
    new QuerySubErrorWrapperEncoder();
  readonly decoder: Converter<unknown, QuerySubErrorWrapper> =
    new QuerySubErrorWrapperDecoder();
}

const querySubErrorWrapperCodec = new QuerySubErrorWrapperCodec();

class QuerySubErrorErrorDecoder
  implements Converter<unknown, QuerySubErrorError>
{
  convert(input: unknown): QuerySubErrorError {
    assertRecordWithKeys(input, 'Error');
    return new QuerySubErrorError(
      querySubErrorWrapperCodec.decode(input.Error),
    );
  }
}

class QuerySubErrorErrorEncoder
  implements Converter<QuerySubErrorError, unknown>
{
  convert(input: QuerySubErrorError): unknown {
    return { Error: querySubErrorWrapperCodec.encode(input.error) };
  }
}

class QuerySubErrorErrorCodec extends TypeCheckingCodec<QuerySubErrorError> {
  readonly encoder: Converter<QuerySubErrorError, unknown> =
    new QuerySubErrorErrorEncoder();
  readonly decoder: Converter<unknown, QuerySubErrorError> =
    new QuerySubErrorErrorDecoder();
}

const querySubErrorErrorCodec = new QuerySubErrorErrorCodec();

class QuerySubErrorDecoder implements Converter<unknown, QuerySubError> {
  convert(input: unknown): QuerySubError {
    if (input === kQuerySubErrorNotFoundValue) {
      return querySubErrorNotFound;
    }

    if (input === kQuerySubErrorMissingValue) {
      return querySubErrorMissing;
    }

    return querySubErrorErrorCodec.decode(input);
  }
}

class QuerySubErrorEncoder implements Converter<QuerySubError, unknown> {
  convert(input: QuerySubError): unknown {
    if (input instanceof QuerySubErrorNotFound) {
      return kQuerySubErrorNotFoundValue;
    }

    if (input instanceof QuerySubErrorMissing) {
      return kQuerySubErrorMissingValue;
    }

    if (input instanceof QuerySubErrorError) {
      return querySubErrorErrorCodec.encode(input as QuerySubErrorError);
    }

    throw new UnimplementedError();
  }
}

class QuerySubErrorCodec extends TypeCheckingCodec<QuerySubError> {
  readonly encoder: Converter<QuerySubError, unknown> =
    new QuerySubErrorEncoder();
  readonly decoder: Converter<unknown, QuerySubError> =
    new QuerySubErrorDecoder();
}

export const querySubErrorCodec = new QuerySubErrorCodec();

registerCodec(kQueryErrorCode, missingElementErrorCodec);
