import BaseError from './BaseError';

/**
 * ExpectedObjectWithKeyError is thrown when the inspection of an object fails
 * to make the expected shape.  This is usually encountered when attempting to
 * deserialize and inflate an object from a serialized, or primitive form.
 */
export default class ExpectedObjectWithKeyError extends BaseError {
  key: string;
  haveType: string;

  constructor(
    haveType: string,
    key: string,
    message = `expected object with key: "${key}", instead found ${haveType}`,
  ) {
    super(message);
    this.haveType = haveType;
    this.key = key;
  }

  toJSON() {
    return {
      ...super.toJSON(),
      have: this.haveType,
      key: this.key,
    } as const;
  }
}
