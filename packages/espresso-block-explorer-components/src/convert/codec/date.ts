import { Converter, InvalidInputError, TypeCheckingCodec } from './convert';

/**
 * RFC3999DateDecoder is a Converter that converts a string to a Date, provided
 * that that string is an RFC3999 representation of a Date.  If the resulting
 * date is invalid, or the input is not a *string*, then this will throw an
 * InvalidInputError
 */
export class RFC3999DateDecoder implements Converter<unknown, Date> {
  convert(input: unknown): Date {
    if (typeof input !== 'string') {
      throw new InvalidInputError();
    }

    const result = new Date(input);
    if (Number.isNaN(result.valueOf())) {
      throw new InvalidInputError();
    }

    return result;
  }
}

/**
 * RFC3999DateEncoder is a Converter that converts a number to a number.
 * This is an identity function, so no conversion actually takes
 * place.
 */
export class RFC3999DateEncoder implements Converter<Date, string> {
  convert(input: Date): string {
    return input.toISOString();
  }
}

/**
 * RFC399DateCodec is a Codec that encapsulates conversion between a
 * Date and a string that is an RFC3999 representation of that Date.
 */
export class RFC399DateCodec extends TypeCheckingCodec<Date, string> {
  readonly encoder = new RFC3999DateEncoder();
  readonly decoder = new RFC3999DateDecoder();
}

export const rfc3999DateCodec = new RFC399DateCodec();
