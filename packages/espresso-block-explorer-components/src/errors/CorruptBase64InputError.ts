import BaseError from './BaseError';

/**
 * CorruptBase64InputError is an error that indicates that the input provided
 * at the given offset is invalid.
 */
export class CorruptBase64InputError extends BaseError {
  readonly offset: number;

  constructor(
    offset: number,
    message: string = `corrupt input error at ${offset}`,
  ) {
    super(message);
    this.offset = offset;
    Object.freeze(this);
  }

  toJSON() {
    return {
      ...super.toJSON(),
      offset: this.offset,
    };
  }
}
