import { assertInstanceOf } from '../assert';
import { Converter } from '../convert';
import { EspressoError } from './espresso_error';

/**
 * BaseError is a base class for all custom errors that helps to automatically
 * add a toJSON method to ensure that these errors can be serialized to JSON
 * when necessary.
 */
export default class BaseError extends Error implements EspressoError {
  constructor(message: string) {
    super(message);
  }

  get code(): string {
    return this.constructor.name;
  }

  toJSON(): unknown {
    return baseErrorEncoder.convert(this);
  }
}

export class BaseErrorEncoder implements Converter<BaseError> {
  convert(input: BaseError) {
    assertInstanceOf(input, BaseError);

    return {
      code: input.code,
      message: input.message,
    } as const;
  }
}

export const baseErrorEncoder = new BaseErrorEncoder();
