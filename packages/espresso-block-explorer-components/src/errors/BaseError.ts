/**
 * BaseError is a base class for all custom errors that helps to automatically
 * add a toJSON method to ensure that these errors can be serialized to JSON
 * when necessary.
 */
export default class BaseError extends Error {
  constructor(message: string) {
    super(message);
  }

  toJSON() {
    return {
      name: this.constructor.name,
      message: this.message,
    } as const;
  }
}
