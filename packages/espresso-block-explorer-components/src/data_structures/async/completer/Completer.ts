import { assert } from '@/assert/assert';
import { CompleterAlreadyCompletedError } from '@/errors/CompleterAlreadyCompletedError';

/**
 * A completer is a simple object that allows you to complete a Promise
 * external to the the Promise itself.
 */
export interface Completer<T> {
  readonly promise: Promise<T>;
  readonly isCompleted: boolean;

  /**
   * complete completes the promise with the given value.
   *
   * The value must either be a value of type `T` or a promise of type
   * `Promise<T>`.
   *
   * If the value is itself a Promise, the completer will wait for the promise
   * to complete, and completed with teh same result, whether it was a success
   * or an error.
   *
   * Calling `complete` or `completeError` must be done at most once.
   */
  complete(value: T | Promise<T>): void;

  /**
   * completesError completes teh promise with the given error.
   *
   * Calling `complete` or `completeError` must be done at most once.
   *
   * Completing a promise with an error indicates that an Error was thrown
   * while trying to produce a value.
   *
   * if `error` is a `Promise`, the promise itself is used as the error value.
   * If you want to complete a with the result of the promise, you can use
   * `complete` instead.
   */
  completeError(error: unknown): void;
}

/**
 * notReady is a function that should never be able to be called based on the
 * behavior of how Promises init functions work in Javascript.
 */
function notReady(): never {
  return assert(false, 'completer is not ready, this should never be reached');
}

function throwAlreadyCompleted(): never {
  throw new CompleterAlreadyCompletedError();
}

/**
 * CompleterBase implements a Completer with the standards available to us.
 * There is a proposed new API for extracting the `resolve`, and `reject`
 * functions from a Promise, but it is not yet available in all environments.
 */
class CompleterBase<T> implements Completer<T> {
  private resolve: (value: T) => void = notReady;
  private reject: (reason: unknown) => void = notReady;
  private completed: boolean = false;

  readonly promise: Promise<T>;
  get isCompleted(): boolean {
    return this.completed;
  }

  constructor() {
    this.promise = new Promise<T>((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
    assert(this.resolve !== notReady, 'resolve should be set');
    assert(this.reject !== notReady, 'resolve should be set');
  }

  complete(value: T | Promise<T>): void {
    const resolve = this.resolve;
    const reject = this.reject;
    this.completed = true;
    this.resolve = throwAlreadyCompleted;
    this.reject = throwAlreadyCompleted;
    if (value instanceof Promise) {
      value.then(resolve, reject);
      return;
    }

    resolve(value);
  }

  completeError(error: unknown): void {
    this.reject(error);
    this.completed = true;
    this.resolve = throwAlreadyCompleted;
    this.reject = throwAlreadyCompleted;
  }
}

/**
 * createCompleter will create a new Completer which will contain a Promise
 * that is able to be resolved / rejected externally.
 */
export function createCompleter<T>(): Completer<T> {
  return new CompleterBase<T>();
}
