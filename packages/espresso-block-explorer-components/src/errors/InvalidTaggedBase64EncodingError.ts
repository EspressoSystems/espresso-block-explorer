import BaseError from './BaseError';

/**
 * InvalidTaggedBase64EncodingError is an error that indicates that the
 * encountered string encoding of a supposed TaggedBase64 is invalid.
 */
export default class InvalidTaggedBase64EncodingError extends BaseError {
  constructor(message: string = 'invalid tagged base64 encoding') {
    super(message);
    Object.freeze(this);
  }

  toJSON() {
    return {
      name: InvalidTaggedBase64EncodingError.name,
      message: this.message,
    };
  }
}
