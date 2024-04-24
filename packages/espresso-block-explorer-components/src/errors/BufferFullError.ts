import BaseError from './BaseError';

/**
 * BufferFullError is an error that indicates that a buffer is at capacity while
 * something was attempted to be added to the buffer.
 */
export default class BufferFullError extends BaseError {
  constructor(message: string = 'buffer full') {
    super(message);
    Object.freeze(this);
  }
}
