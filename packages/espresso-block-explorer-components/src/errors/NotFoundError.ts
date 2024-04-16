import BaseError from './BaseError';

/**
 * NotFoundError is an error that indicates that the resource for the specified
 * key was unable to be found.
 */
export default class NotFoundError<Key> extends BaseError {
  readonly key: Key;

  constructor(key: Key, message: string = `Not Found: ${key}`) {
    super(message);
    this.key = key;
    Object.freeze(this);
  }

  toJSON() {
    return {
      ...super.toJSON(),
      key: this.key,
    };
  }
}
