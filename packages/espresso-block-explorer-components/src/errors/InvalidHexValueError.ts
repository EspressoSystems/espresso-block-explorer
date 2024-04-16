import BaseError from './BaseError';

/**
 * InvalidHexValueError is an error that indicates that the encountered value
 * isn't valid for a hex representation.
 */
export class InvalidHexValueError extends BaseError {
  readonly value: number;

  constructor(value: number, message: string = `invalid hex value "${value}"`) {
    super(message);
    this.value = value;
    Object.freeze(this);
  }

  toJSON() {
    return {
      ...super.toJSON(),
      value: this.value,
    };
  }
}
