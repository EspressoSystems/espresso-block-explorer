import BaseError from './BaseError';

/**
 * InvalidAlphabetLengthError is an error that indicates the the Base64 alphabet
 * provided does not meet the required criteria.
 */
export class InvalidBase64AlphabetLengthError extends BaseError {
  readonly length: number;

  constructor(
    length: number,
    message: string = `alphabet needs to be 64 characters, received ${length}`,
  ) {
    super(message);
    this.length = length;
    Object.freeze(this);
  }

  toJSON() {
    return {
      ...super.toJSON(),
      length: this.length,
    };
  }
}
