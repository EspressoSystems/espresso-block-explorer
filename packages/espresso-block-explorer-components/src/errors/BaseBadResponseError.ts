import { assertInstanceOf } from '@/assert/assert';
import { Converter } from '@/convert/codec/convert';
import BaseError, { baseErrorEncoder } from './BaseError';

/**
 * BaseBadResponseError is this base error of all failures due to handling the
 * Response from a `fetch` request.
 *  */
export default abstract class BaseBadResponseError extends BaseError {
  readonly response: null | Response;

  readonly status: number;

  constructor(status: number, response: null | Response, message: string) {
    super(message);
    this.status = status;
    this.response = response;
  }

  toJSON(): unknown {
    return baseBadResponseErrorEncoder.convert(this);
  }
}

export class BaseBadResponseErrorEncoder
  implements Converter<BaseBadResponseError>
{
  convert(input: BaseBadResponseError) {
    assertInstanceOf(input, BaseBadResponseError);
    return {
      ...baseErrorEncoder.convert(input),
      status: input.status,
    } as const;
  }
}

export const baseBadResponseErrorEncoder = new BaseBadResponseErrorEncoder();
