/**
 * ExpectedObjectWithKeyError is thrown when the inspection of an object fails
 * to make the expected shape.  This is usually encountered when attempting to
 * deserialize and inflate an object from a serialized, or primitive form.
 */
export default class ExpectedObjectWithKeyError extends Error {
  public readonly key: string;
  public readonly haveType: string;

  constructor(
    haveType: string,
    key: string,
    message = `expected object with key: "${key}", instead found ${haveType}`,
  ) {
    super(message);
    this.haveType = haveType;
    this.key = key;
    Object.freeze(this);
  }

  toJSON() {
    // This cannot reuse existing codecs as it would cause a circular
    // dependency.
    return {
      code: ExpectedObjectWithKeyError.name,
      message: this.message,
      have: this.haveType,
      key: this.key,
    } as const;
  }
}

// No Converts or Codecs are implemented for this file, as doing so would
// yield a circular dependency.
